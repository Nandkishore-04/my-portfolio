export type CardId = "about" | "education" | "projects" | "stack";

export interface HubCardDef {
    id: CardId;
    title: string;
    subtitle: string;
    icon: string;
    /** Desktop corner placement classes (absolute within the hub) */
    position: string;
}

export const hubCards: HubCardDef[] = [
    {
        id: "about",
        title: "About Me",
        subtitle: "Engineer who ships",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        position: "top-[16%] left-[5%] lg:left-[8%]",
    },
    {
        id: "education",
        title: "Education",
        subtitle: "India → Japan",
        icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0121 12.06c0 2.21-.895 4.21-2.343 5.657L12 21l-6.657-3.283A7.962 7.962 0 013 12.06a12.083 12.083 0 012.84-3.482L12 14z",
        position: "top-[16%] right-[5%] lg:right-[8%]",
    },
    {
        id: "projects",
        title: "Projects",
        subtitle: "4 shipped products",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        position: "bottom-[14%] left-[5%] lg:left-[8%]",
    },
    {
        id: "stack",
        title: "Tech Stack",
        subtitle: "Full-stack arsenal",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        position: "bottom-[14%] right-[5%] lg:right-[8%]",
    },
];
