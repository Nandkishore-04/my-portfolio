'use client';

import { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useHubStore } from "@/lib/hubStore";
import type { CardId } from "@/lib/hubConfig";

const BASE_POS = new THREE.Vector3(0, 1.15, 3.0);
const BASE_LOOK = new THREE.Vector3(0, 0.95, 0);

/* Which side of the screen each card lives on — drives the expand dolly direction */
const cardSide: Record<CardId, number> = {
    about: -1,
    projects: -1,
    education: 1,
    stack: 1,
};

interface CameraRigProps {
    isMobile: boolean;
    reducedMotion: boolean;
}

export default function CameraRig({ isMobile, reducedMotion }: CameraRigProps) {
    const tmp = useMemo(() => ({ pos: new THREE.Vector3(), look: new THREE.Vector3() }), []);

    useFrame((state, delta) => {
        const { expandedCard } = useHubStore.getState();

        tmp.pos.copy(BASE_POS);
        tmp.look.copy(BASE_LOOK);

        if (!isMobile && !reducedMotion) {
            // Subtle parallax against pointer
            tmp.pos.x += state.pointer.x * 0.18;
            tmp.pos.y += state.pointer.y * 0.08;
        }

        if (expandedCard) {
            // Gentle dolly toward the opened card's side; the DOM panel does the real zoom
            tmp.pos.x += cardSide[expandedCard] * 0.4;
            tmp.pos.z -= 0.35;
            tmp.look.x += cardSide[expandedCard] * 0.2;
        }

        const lambda = reducedMotion ? 30 : 3.5;
        state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, tmp.pos.x, lambda, delta);
        state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, tmp.pos.y, lambda, delta);
        state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, tmp.pos.z, lambda, delta);
        state.camera.lookAt(tmp.look);
    });

    return null;
}
