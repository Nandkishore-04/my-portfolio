'use client';

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useHubStore } from "@/lib/hubStore";
import AvatarScene from "./AvatarScene";
import CameraRig from "./CameraRig";

interface AvatarCanvasProps {
    isMobile: boolean;
    reducedMotion: boolean;
}

export default function AvatarCanvas({ isMobile, reducedMotion }: AvatarCanvasProps) {
    const expandedCard = useHubStore((s) => s.expandedCard);
    const setLoadProgress = useHubStore((s) => s.setLoadProgress);
    const { progress } = useProgress();

    useEffect(() => {
        setLoadProgress(progress);
    }, [progress, setLoadProgress]);

    return (
        <motion.div
            className="absolute inset-0"
            animate={{
                opacity: expandedCard ? 0.25 : 1,
                filter: expandedCard ? "blur(3px)" : "blur(0px)",
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <Canvas
                dpr={isMobile ? [1, 1.5] : [1, 2]}
                camera={{ position: [0, 1.15, 3.0], fov: 38 }}
                gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
                flat
                style={{ background: "transparent" }}
            >
                <CameraRig isMobile={isMobile} reducedMotion={reducedMotion} />
                <AvatarScene isMobile={isMobile} reducedMotion={reducedMotion} />
            </Canvas>
        </motion.div>
    );
}
