'use client';

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useHubStore } from "@/lib/hubStore";
import HubHeader from "./HubHeader";
import HubCards from "./HubCards";
import ExpandedPanel from "./ExpandedPanel";
import BackgroundText from "./BackgroundText";
import Nameplate from "./Nameplate";

const AvatarCanvas = dynamic(() => import("./AvatarCanvas"), { ssr: false });

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return isMobile;
}

export default function HomeHub() {
    const expandedCard = useHubStore((s) => s.expandedCard);
    const setExpanded = useHubStore((s) => s.setExpanded);
    const sceneReady = useHubStore((s) => s.sceneReady);
    const loadProgress = useHubStore((s) => s.loadProgress);
    const isMobile = useIsMobile();
    const reducedMotion = useReducedMotion() ?? false;

    // Esc closes the expanded panel
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setExpanded(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [setExpanded]);

    // Lock page scroll while a panel is open (mobile layout scrolls otherwise)
    useEffect(() => {
        document.body.style.overflow = expandedCard ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [expandedCard]);

    return (
        <div className="relative w-full min-h-screen md:h-screen md:min-h-0 md:overflow-hidden bg-surface flex flex-col md:block">
            {/* Start fetching the 10MB avatar before the three.js chunk loads */}
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <link rel="preload" href="/avatar.vrm" as="fetch" crossOrigin="anonymous" />

            {/* Void gradient backdrop */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,#161616_0%,#0A0A0A_65%)]" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_85%,rgba(255,214,10,0.06)_0%,transparent_45%)]" />

            {/* Giant ghost typography (desktop only — too busy at mobile sizes) */}
            <div className="hidden md:block">
                <BackgroundText />
            </div>

            {/* 3D scene — fullscreen on desktop, top region on mobile */}
            <div className="relative z-10 h-[48vh] shrink-0 md:absolute md:inset-0 md:h-auto">
                <AvatarCanvas isMobile={isMobile} reducedMotion={reducedMotion} />
                {/* Mobile nameplate sits inside the canvas region */}
                <div className="md:hidden">
                    <Nameplate />
                </div>
            </div>

            <HubCards />
            <HubHeader />

            <div className="hidden md:block">
                <Nameplate />
            </div>

            {/* Loading overlay until the avatar is in */}
            <AnimatePresence>
                {!sceneReady && (
                    <motion.div
                        exit={{ opacity: 0, transition: { duration: 0.6 } }}
                        className="fixed inset-0 z-50 bg-surface flex flex-col items-center justify-center gap-4"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 rounded-full border-2 border-white/10 border-t-neon"
                        />
                        <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
                            Summoning avatar
                        </p>
                        <p className="font-display text-2xl font-bold text-neon tabular-nums">
                            {Math.round(loadProgress)}%
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <ExpandedPanel />
        </div>
    );
}
