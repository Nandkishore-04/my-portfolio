'use client';

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRMLoaderPlugin, VRMUtils, type VRM } from "@pixiv/three-vrm";
import { useHubStore } from "@/lib/hubStore";

interface VRMAvatarProps {
    isMobile: boolean;
    reducedMotion: boolean;
}

/* Plane in front of the avatar that pointer/card positions get projected onto */
const GAZE_PLANE = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.2);

const ARM_DROP = 1.45; // radians — brings T-pose arms down to a relaxed A-pose
const ELBOW_BEND = 0.22; // slight inward forearm bend so arms don't hang stick-straight

export default function VRMAvatar({ isMobile, reducedMotion }: VRMAvatarProps) {
    const setSceneReady = useHubStore((s) => s.setSceneReady);
    const { camera } = useThree();

    const gltf = useLoader(GLTFLoader, "/avatar.vrm", (loader) => {
        loader.register((parser) => new VRMLoaderPlugin(parser));
    });
    const vrm = gltf.userData.vrm as VRM;

    const lookTarget = useMemo(() => new THREE.Object3D(), []);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const tmp = useMemo(
        () => ({
            ndc: new THREE.Vector2(),
            point: new THREE.Vector3(),
            headPos: new THREE.Vector3(),
            dir: new THREE.Vector3(),
        }),
        []
    );
    const blink = useRef({ next: 2.5, phase: -1 });
    const frameCount = useRef(0);

    useEffect(() => {
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.combineSkeletons(gltf.scene);
        VRMUtils.rotateVRM0(vrm); // no-op for VRM 1.0 — keeps future swaps working

        // Skinned meshes can get culled when bones leave the original bounds
        vrm.scene.traverse((obj) => {
            obj.frustumCulled = false;
        });

        if (vrm.lookAt) vrm.lookAt.target = lookTarget;

        if (process.env.NODE_ENV === "development") {
            console.info("[VRMAvatar] loaded model meta (check license before deploy):", vrm.meta);
        }

        return () => {
            VRMUtils.deepDispose(vrm.scene);
        };
    }, [gltf, vrm, lookTarget, setSceneReady]);

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime;
        const { hoveredCardCenter } = useHubStore.getState();

        // Drop the loading overlay only once the scene has actually painted
        // (shader compile for bloom/reflections happens on the first frames)
        if (frameCount.current <= 2) {
            frameCount.current += 1;
            if (frameCount.current > 2) setSceneReady();
        }

        // --- 1. Gaze target ---
        if (isMobile || reducedMotion) {
            tmp.point.copy(camera.position);
        } else if (hoveredCardCenter) {
            tmp.ndc.set(
                (hoveredCardCenter.x / window.innerWidth) * 2 - 1,
                -(hoveredCardCenter.y / window.innerHeight) * 2 + 1
            );
            raycaster.setFromCamera(tmp.ndc, camera);
            if (!raycaster.ray.intersectPlane(GAZE_PLANE, tmp.point)) tmp.point.copy(camera.position);
        } else {
            raycaster.setFromCamera(state.pointer, camera);
            if (!raycaster.ray.intersectPlane(GAZE_PLANE, tmp.point)) tmp.point.copy(camera.position);
        }
        const lambda = 6;
        lookTarget.position.x = THREE.MathUtils.damp(lookTarget.position.x, tmp.point.x, lambda, delta);
        lookTarget.position.y = THREE.MathUtils.damp(lookTarget.position.y, tmp.point.y, lambda, delta);
        lookTarget.position.z = THREE.MathUtils.damp(lookTarget.position.z, tmp.point.z, lambda, delta);

        // --- 2. Pose: relaxed arms, breathing, head tracking (normalized bones, before vrm.update) ---
        const humanoid = vrm.humanoid;
        if (humanoid) {
            const breathe = reducedMotion ? 0 : 1;
            const leftArm = humanoid.getNormalizedBoneNode("leftUpperArm");
            const rightArm = humanoid.getNormalizedBoneNode("rightUpperArm");
            if (leftArm) leftArm.rotation.z = -ARM_DROP + Math.sin(t * 1.4) * 0.015 * breathe;
            if (rightArm) rightArm.rotation.z = ARM_DROP - Math.sin(t * 1.4) * 0.015 * breathe;

            const leftForearm = humanoid.getNormalizedBoneNode("leftLowerArm");
            const rightForearm = humanoid.getNormalizedBoneNode("rightLowerArm");
            if (leftForearm) leftForearm.rotation.z = -ELBOW_BEND;
            if (rightForearm) rightForearm.rotation.z = ELBOW_BEND;

            const spine = humanoid.getNormalizedBoneNode("spine");
            const chest = humanoid.getNormalizedBoneNode("chest");
            if (spine) spine.rotation.x = Math.sin(t * 1.4) * 0.012 * breathe;
            if (chest) chest.rotation.x = Math.sin(t * 1.4 + 0.4) * 0.015 * breathe;

            const head = humanoid.getNormalizedBoneNode("head");
            if (head) {
                // Aim the head partway toward the gaze target (eyes do the rest via vrm.lookAt)
                head.getWorldPosition(tmp.headPos);
                tmp.dir.copy(lookTarget.position).sub(tmp.headPos).normalize();
                const yaw = THREE.MathUtils.clamp(Math.atan2(tmp.dir.x, tmp.dir.z), -0.7, 0.7);
                const pitch = THREE.MathUtils.clamp(Math.asin(tmp.dir.y), -0.5, 0.5);
                head.rotation.y = yaw * 0.45;
                head.rotation.x = -pitch * 0.45 + Math.sin(t * 1.4 + 0.8) * 0.008 * breathe;
            }
        }

        // --- 3. Blink ---
        const em = vrm.expressionManager;
        if (em && !reducedMotion) {
            const b = blink.current;
            if (b.phase < 0 && t > b.next) b.phase = 0;
            if (b.phase >= 0) {
                b.phase += delta / 0.18;
                const v = Math.sin(Math.min(b.phase, 1) * Math.PI);
                em.setValue("blink", v);
                if (b.phase >= 1) {
                    b.phase = -1;
                    b.next = t + 2 + Math.random() * 4;
                    em.setValue("blink", 0);
                }
            }
        }

        // --- 4. Commit: lookAt, expressions, spring bones ---
        vrm.update(delta);
    });

    return <primitive object={vrm.scene} position={[0, 0, 0]} />;
}
