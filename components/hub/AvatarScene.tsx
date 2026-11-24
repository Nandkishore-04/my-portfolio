'use client';

import { Suspense } from "react";
import * as THREE from "three";
import { Sparkles, ContactShadows, MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import VRMAvatar from "./VRMAvatar";

interface AvatarSceneProps {
    isMobile: boolean;
    reducedMotion: boolean;
}

/* HDR colors (>1) so only the ring/sparkles cross the bloom threshold, not the avatar */
const NEON_HDR = new THREE.Color(2.2, 1.85, 0.1);
const NEON_HDR_DIM = new THREE.Color(1.6, 1.35, 0.08);

export default function AvatarScene({ isMobile, reducedMotion }: AvatarSceneProps) {
    return (
        <>
            <fog attach="fog" args={["#0a0a0a", 4.5, 11]} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 3, 2]} intensity={0.95} color="#ffffff" />
            {/* Neon rim light from behind for the Genshin glow silhouette */}
            <pointLight position={[0, 1.6, -1.4]} intensity={8} color="#FFD60A" distance={5} />
            <pointLight position={[-1.5, 0.6, 1.5]} intensity={1.4} color="#7da8ff" distance={6} />

            {/* Reflective floor — mirrors the avatar and the glowing ring */}
            {!isMobile && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                    <circleGeometry args={[7, 64]} />
                    <MeshReflectorMaterial
                        blur={[280, 80]}
                        resolution={1024}
                        mixBlur={1}
                        mixStrength={4}
                        roughness={0.9}
                        depthScale={1.1}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#070707"
                        metalness={0.55}
                        mirror={0.4}
                    />
                </mesh>
            )}

            {/* Glow platform under the avatar */}
            <group position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh>
                    <ringGeometry args={[0.62, 0.66, 64]} />
                    <meshBasicMaterial color={NEON_HDR} transparent opacity={0.7} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
                </mesh>
                <mesh>
                    <ringGeometry args={[0.78, 0.79, 64]} />
                    <meshBasicMaterial color={NEON_HDR_DIM} transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
                </mesh>
                <mesh>
                    <circleGeometry args={[0.62, 64]} />
                    <meshBasicMaterial color="#FFD60A" transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
                </mesh>
            </group>

            {!reducedMotion && (
                <>
                    <Sparkles
                        count={isMobile ? 30 : 70}
                        scale={[3.5, 2.5, 2]}
                        position={[0, 1.2, -0.3]}
                        size={2.2}
                        speed={0.35}
                        opacity={0.6}
                        color={[2, 1.7, 0.1] as unknown as THREE.Color}
                    />
                    {/* Distant dust layer for depth */}
                    <Sparkles
                        count={isMobile ? 20 : 50}
                        scale={[8, 4, 4]}
                        position={[0, 1.6, -2.5]}
                        size={1.2}
                        speed={0.15}
                        opacity={0.3}
                        color="#FFD60A"
                    />
                </>
            )}

            {!isMobile && (
                <ContactShadows position={[0, 0, 0]} opacity={0.45} scale={4} blur={2.4} far={2} resolution={256} color="#000000" />
            )}

            <Suspense fallback={null}>
                <VRMAvatar isMobile={isMobile} reducedMotion={reducedMotion} />
            </Suspense>

            {!isMobile && (
                <EffectComposer multisampling={4}>
                    <Bloom intensity={0.75} luminanceThreshold={1.1} luminanceSmoothing={0.15} mipmapBlur radius={0.7} />
                </EffectComposer>
            )}
        </>
    );
}
