// Content for the homepage. Edit here, not in the components.

export const profile = {
    name: "Nand Kishore",
    email: "nkk01414@gmail.com",
    github: "https://github.com/Nandkishore-04",
    githubLabel: "github.com/Nandkishore-04",
    linkedin: "https://www.linkedin.com/in/nand-kishore-8b9093262/",
    resume: "/Nand-Kishore-AI%20Engineer.pdf",
    location: "Chennai, India",
    availability: "Open to AI/ML roles · Chennai or remote",
};

export type Tone = "rose" | "indigo" | "emerald" | "amber" | "slate";

export interface DiagramNode {
    name: string;
    sub?: string;
    /** Filled node, used for the main model/service in a lane. */
    solid?: boolean;
}

export interface DiagramLane {
    label: string;
    tone: Tone;
    nodes: DiagramNode[];
}

export interface Project {
    id: string;
    tab: string;
    tabSub: string;
    eyebrow: string;
    title: string;
    tagline: string;
    stats?: { value: string; label: string }[];
    bullets: string[];
    tags: string[];
    demo?: string;
    /** Deployed site (Vercel). */
    live?: string;
    code?: string;
    diagram: {
        title: string;
        note: string;
        lanes: DiagramLane[];
        footer: { step: string; text: string };
    };
}

export const projects: Project[] = [
    {
        id: "gsoc",
        tab: "GSoC · OpenVINO",
        tabSub: "Intel · 2026",
        eyebrow: "Google Summer of Code 2026 · Intel OpenVINO",
        title: "n8n × OpenVINO",
        tagline: "Drag-and-drop AI workflows that run fully on an AI PC. No cloud.",
        stats: [
            { value: "6", label: "on-device models" },
            { value: "~20 ms", label: "NPU triage" },
            { value: "<10 s", label: "cited answer" },
        ],
        bullets: [
            "Native gateway: one process owns NPU, GPU and CPU",
            "Hybrid search (meaning + keyword) with cited answers",
            "Dedup, confidence scores, audit trail, human review",
        ],
        tags: ["OpenVINO", "n8n", "TypeScript", "Python", "Qdrant", "PostgreSQL"],
        demo: "https://drive.google.com/drive/folders/1WgsaEkTnMBHCK2JUDPwpSIlLVmPYLnd-",
        code: "https://github.com/Nandkishore-04/n8n-nodes-openvino",
        diagram: {
            title: "Intel Core Ultra AI PC",
            note: "every model on-device",
            lanes: [
                { label: "NPU", tone: "rose", nodes: [{ name: "CLIP", sub: "Is it a document?" }] },
                {
                    label: "GPU",
                    tone: "indigo",
                    nodes: [
                        { name: "Qwen2.5-VL 7B", sub: "OCR → md" },
                        { name: "Qwen3 8B", sub: "Extract, answer, cite", solid: true },
                    ],
                },
                { label: "CPU", tone: "emerald", nodes: [{ name: "BGE", sub: "Embeddings + rerank", solid: true }] },
            ],
            footer: { step: "5. Answer", text: "Hybrid search, then Qwen3 answers with the source file" },
        },
    },
    {
        id: "qr-menu",
        tab: "QR Menu",
        tabSub: "Restaurant SaaS",
        eyebrow: "Restaurant SaaS",
        title: "QR Menu",
        tagline: "Guests scan a table QR code and order from a live menu. Owners edit it in one place.",
        bullets: [
            "Menu changes go live instantly, no reprinting",
            "Owner dashboard for items, prices and availability",
            "Works in the phone browser, nothing to install",
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        live: "https://restaurant-menu-web-bay.vercel.app",
        code: "https://github.com/Nandkishore-04/Restaurant-menu",
        diagram: {
            title: "Request flow",
            note: "browser only",
            lanes: [
                { label: "Guest", tone: "rose", nodes: [{ name: "Table QR", sub: "Scan with camera" }] },
                { label: "Web app", tone: "indigo", nodes: [{ name: "Live menu", sub: "Next.js", solid: true }] },
                { label: "Owner", tone: "emerald", nodes: [{ name: "Dashboard", sub: "Edit items + prices" }] },
            ],
            footer: { step: "Result", text: "One menu, edited once, current on every table" },
        },
    },
    {
        id: "admin-dashboard",
        tab: "Admin dashboard",
        tabSub: "Freelance · live",
        eyebrow: "Freelance · in production",
        title: "Automated admin dashboard",
        tagline: "Replaced a consultancy's Excel and WhatsApp workflow with one ops platform.",
        stats: [
            { value: "4", label: "lifecycle stages" },
            { value: "Auto", label: "status emails" },
            { value: "RLS", label: "on every table" },
        ],
        bullets: [
            "Tracks each client from Requested to Completed",
            "n8n sends status emails as cases move stage",
            "Meeting scheduler and Supabase row-level security",
        ],
        tags: ["Next.js", "Supabase", "TypeScript", "n8n"],
        live: "https://automated-admin-dashboard.vercel.app",
        code: "https://github.com/Nandkishore-04/Automated-Admin-Dashboard",
        diagram: {
            title: "Client lifecycle",
            note: "status drives automation",
            lanes: [
                {
                    label: "Intake",
                    tone: "rose",
                    nodes: [
                        { name: "Requested", sub: "New client" },
                        { name: "Docs pending", sub: "Checklist" },
                    ],
                },
                { label: "Work", tone: "indigo", nodes: [{ name: "In-process", sub: "Assigned staff", solid: true }] },
                { label: "Done", tone: "emerald", nodes: [{ name: "Completed", sub: "Closed + archived" }] },
            ],
            footer: { step: "n8n", text: "Every stage change triggers an email to the client" },
        },
    },
    {
        id: "simply-search",
        tab: "Simply Search",
        tabSub: "Freelance · desktop",
        eyebrow: "Freelance · shipped",
        title: "Simply Search",
        tagline: "Desktop app that replaced Excel lookups with millisecond product search.",
        bullets: [
            "Instant search across the full product catalogue",
            "Python backend bundled inside the desktop app",
            "Local SQLite store, no server to maintain",
        ],
        tags: ["Electron", "React", "FastAPI", "SQLite", "Python"],
        live: "https://insurance-dashboard-nine.vercel.app",
        code: "https://github.com/Nandkishore-04/simply-search",
        diagram: {
            title: "Desktop app",
            note: "runs on one machine",
            lanes: [
                { label: "UI", tone: "rose", nodes: [{ name: "React", sub: "Search as you type" }] },
                { label: "API", tone: "indigo", nodes: [{ name: "FastAPI", sub: "Query + rank", solid: true }] },
                { label: "Data", tone: "emerald", nodes: [{ name: "SQLite", sub: "Product index" }] },
            ],
            footer: { step: "Result", text: "Matches in milliseconds instead of scrolling a sheet" },
        },
    },
    {
        id: "ai-inventory",
        tab: "AI inventory",
        tabSub: "Final-year project",
        eyebrow: "Final-year project",
        title: "AI inventory management",
        tagline: "Inventory system with an AI assistant and OCR for supplier invoices.",
        bullets: [
            "Chat assistant answers stock questions in plain language",
            "OCR reads invoices and updates stock automatically",
            "Real-time stock monitoring and low-stock alerts",
        ],
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
        code: "https://github.com/Nandkishore-04/AI-powered-Inventory-Management",
        diagram: {
            title: "Web app",
            note: "React + Node",
            lanes: [
                { label: "Input", tone: "rose", nodes: [{ name: "Invoice OCR", sub: "Scan → line items" }] },
                { label: "AI", tone: "indigo", nodes: [{ name: "LLM assistant", sub: "Ask about stock", solid: true }] },
                { label: "Data", tone: "emerald", nodes: [{ name: "PostgreSQL", sub: "Stock + history" }] },
            ],
            footer: { step: "Alert", text: "Low stock flagged in real time on the dashboard" },
        },
    },
];

export interface Experience {
    period: string;
    type: string;
    role: string;
    org: string;
    summary: string;
    bullets: string[];
    tags: string[];
}

export const experience: Experience[] = [
    {
        period: "Mar – Aug 2026",
        type: "Google Summer of Code",
        role: "GSoC Contributor",
        org: "Intel OpenVINO",
        summary: "Built n8n × OpenVINO: drag-and-drop AI workflows that run fully on an AI PC.",
        bullets: [
            "Native gateway that runs models across NPU, GPU and CPU in one process",
            "Hybrid search with cited answers, dedup, confidence scores and human review",
        ],
        tags: ["OpenVINO", "n8n", "TypeScript", "Python", "Qdrant"],
    },
];

export const skills = [
    { area: "AI / ML", items: "OpenVINO · RAG · Qdrant · PyTorch · scikit-learn · n8n" },
    { area: "Backend", items: "Python · FastAPI · Node.js · C/C++ · PostgreSQL · Supabase" },
    { area: "Frontend", items: "TypeScript · React · Next.js · Tailwind · Electron" },
    { area: "Ops", items: "Docker · AWS · GitHub Actions · Vercel" },
];

export const education = [
    {
        title: "B.Tech CS (AI & Data Science)",
        place: "Hindustan Institute of Technology and Science · 2022–26",
    },
    { title: "Semester exchange", place: "Shibaura Institute of Technology, Tokyo · 2025" },
];
