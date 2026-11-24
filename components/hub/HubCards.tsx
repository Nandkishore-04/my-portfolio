'use client';

import { hubCards } from "@/lib/hubConfig";
import { useHubStore } from "@/lib/hubStore";
import HubCard from "./HubCard";

export default function HubCards() {
    const expandedCard = useHubStore((s) => s.expandedCard);

    return (
        <div
            className="relative z-20 grid grid-cols-2 gap-3 px-4 pb-8 md:p-0 md:block md:absolute md:inset-0 pointer-events-none"
            aria-hidden={expandedCard !== null}
        >
            {hubCards.map((card, i) => (
                <HubCard key={card.id} card={card} index={i} />
            ))}
        </div>
    );
}
