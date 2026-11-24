import { create } from "zustand";
import type { CardId } from "./hubConfig";

interface HubState {
    /** Card the pointer/focus is currently on (drives avatar glance) */
    hoveredCard: CardId | null;
    /** Viewport-pixel center of the hovered card, for unprojecting into the scene */
    hoveredCardCenter: { x: number; y: number } | null;
    /** Card currently expanded into the fullscreen panel */
    expandedCard: CardId | null;
    /** True once the VRM avatar has loaded — dismisses the loading overlay */
    sceneReady: boolean;
    /** Asset download progress 0-100, shown on the loading overlay */
    loadProgress: number;
    setHovered: (id: CardId | null, center?: { x: number; y: number }) => void;
    setExpanded: (id: CardId | null) => void;
    setSceneReady: () => void;
    setLoadProgress: (p: number) => void;
}

export const useHubStore = create<HubState>((set) => ({
    hoveredCard: null,
    hoveredCardCenter: null,
    expandedCard: null,
    sceneReady: false,
    loadProgress: 0,
    setHovered: (id, center) =>
        set({ hoveredCard: id, hoveredCardCenter: id && center ? center : null }),
    setExpanded: (id) => set({ expandedCard: id }),
    setSceneReady: () => set({ sceneReady: true }),
    setLoadProgress: (p) => set({ loadProgress: p }),
}));
