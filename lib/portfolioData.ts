// Content for the homepage. Edit here, not in the components.

export const profile = {
    name: "Nand Kishore",
    email: "nkk01414@gmail.com",
    github: "https://github.com/Nandkishore-04",
    githubLabel: "github.com/Nandkishore-04",
    linkedin: "https://www.linkedin.com/in/nand-kishore18/",
    resume: "/Nand_Kishore_Resume.pdf",
    location: "Chennai, India",
    availability: "Open to AI/ML roles · Chennai, Dubai (UAE) or remote",
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
            "Local inference gateway (FastAPI): OpenAI-compatible API over gRPC and REST",
            "Per-workload placement: CLIP on NPU, Qwen2.5-VL OCR on GPU, embeddings on CPU",
            "RAG with hybrid retrieval, cited answers and log-probability confidence scoring",
        ],
        tags: ["OpenVINO", "n8n", "Python", "FastAPI", "gRPC", "Qdrant"],
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
        eyebrow: "Personal product · Restaurant ordering SaaS",
        title: "QR Menu",
        tagline: "Multi-tenant QR table ordering: guests share a live-synced table cart from their own phones.",
        bullets: [
            "Kitchen board and admin portal update in real time via Supabase Realtime",
            "FastAPI backend is the only writer; PostgreSQL row-level security per restaurant",
            "Server-side pricing in integer paise, UPI and cash checkout confirmed by staff",
        ],
        tags: ["FastAPI", "Next.js", "PostgreSQL", "Supabase", "Alembic"],
        live: "https://restaurant-menu-web-bay.vercel.app",
        code: "https://github.com/Nandkishore-04/Restaurant-menu",
        diagram: {
            title: "Order flow",
            note: "one writer, many live views",
            lanes: [
                {
                    label: "Guests",
                    tone: "rose",
                    nodes: [
                        { name: "Table QR", sub: "Scan, no install" },
                        { name: "Shared cart", sub: "Synced across phones" },
                    ],
                },
                { label: "API", tone: "indigo", nodes: [{ name: "FastAPI", sub: "Only writer, server pricing", solid: true }] },
                {
                    label: "Data",
                    tone: "emerald",
                    nodes: [
                        { name: "PostgreSQL", sub: "RLS per restaurant", solid: true },
                        { name: "Realtime", sub: "Kitchen board + admin" },
                    ],
                },
            ],
            footer: { step: "Checkout", text: "UPI or cash, confirmed by staff" },
        },
    },
    {
        id: "admin-dashboard",
        tab: "Admin dashboard",
        tabSub: "Freelance · live",
        eyebrow: "Freelance · shipped",
        title: "Automated Admin Dashboard",
        tagline: "Client lifecycle platform that replaced a client's email, Excel and WhatsApp operations. In daily use.",
        stats: [
            { value: "4", label: "lifecycle stages" },
            { value: "Auto", label: "status emails" },
            { value: "RLS", label: "on every table" },
        ],
        bullets: [
            "Tracks each client from Requested to Completed",
            "Automated follow-up emails with n8n",
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
        id: "insurance",
        tab: "Insurance manager",
        tabSub: "Freelance · offline",
        eyebrow: "Freelance · shipped",
        title: "Insurance Policy Manager",
        tagline: "Offline-first Electron app for an insurance firm: customers, policies and renewals in one place.",
        stats: [
            { value: "3", label: "policy types" },
            { value: "0", label: "internet needed" },
            { value: "1-click", label: "renewal" },
        ],
        bullets: [
            "Offline-first: all data in local SQLite storage",
            "Instant KYC search and one-click policy renewals",
            "PDF export for policies and renewals",
        ],
        tags: ["Electron", "React", "SQLite", "Vite", "jsPDF"],
        live: "https://insurance-dashboard-nine.vercel.app",
        code: "https://github.com/Nandkishore-04/Insurance-Dashboard",
        diagram: {
            title: "Windows desktop app",
            note: "fully offline",
            lanes: [
                { label: "UI", tone: "rose", nodes: [{ name: "React", sub: "Search + dashboard" }] },
                { label: "Main", tone: "indigo", nodes: [{ name: "Electron", sub: "IPC + PDF export", solid: true }] },
                { label: "Storage", tone: "emerald", nodes: [{ name: "SQLite", sub: "Local policy DB", solid: true }] },
            ],
            footer: { step: "Renew", text: "Due policies surface first, renewed in one click" },
        },
    },
    {
        id: "ai-inventory",
        tab: "AI inventory",
        tabSub: "Final-year project",
        eyebrow: "Final-year project",
        title: "AI-Powered Inventory Management",
        tagline: "Inventory system where users ask about stock in plain English and invoices load themselves.",
        bullets: [
            "Conversational stock lookup with OpenAI GPT-4",
            "Invoice ingestion with Google Document AI OCR",
            "Redis-cached real-time stock, demand forecasting, low-stock alerts, RBAC",
        ],
        tags: ["React", "Node.js", "PostgreSQL", "Redis", "GPT-4", "Google Document AI"],
        code: "https://github.com/Nandkishore-04/AI-powered-Inventory-Management",
        diagram: {
            title: "Web app",
            note: "React + Node",
            lanes: [
                { label: "Input", tone: "rose", nodes: [{ name: "Document AI", sub: "Invoice → line items" }] },
                { label: "AI", tone: "indigo", nodes: [{ name: "GPT-4", sub: "Ask about stock", solid: true }] },
                {
                    label: "Data",
                    tone: "emerald",
                    nodes: [
                        { name: "PostgreSQL", sub: "Stock + RBAC", solid: true },
                        { name: "Redis", sub: "Real-time cache" },
                    ],
                },
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
        type: "Remote",
        role: "AI Engineer, Open Source Contributor",
        org: "Google Summer of Code, OpenVINO (Intel)",
        summary:
            "Built an agentic, on-device document AI platform on Intel AI PCs. Every model runs on local NPU, GPU and CPU via OpenVINO: no cloud, no API keys, no data egress.",
        bullets: [
            "Local inference gateway (Python, FastAPI) with an OpenAI-compatible API over gRPC and REST, so a JavaScript/n8n frontend can drive Intel accelerators",
            "Per-workload device placement: CLIP document check on the NPU in about 20 ms, Qwen2.5-VL OCR on the GPU, embeddings on the CPU",
            "RAG pipeline with hybrid retrieval and cited answers",
            "Evaluation layer: log-probability confidence scoring and relevance thresholds to reduce hallucinated citations, plus dedup, audit trail and recoverable failures",
        ],
        tags: ["OpenVINO", "n8n", "Python", "FastAPI", "gRPC", "Qdrant"],
    },
];

export const skills = [
    { area: "Languages", items: "Python · TypeScript · JavaScript · C · C++ · SQL" },
    {
        area: "AI / ML",
        items: "LLMs · RAG · AI Agents · OpenVINO · PyTorch · Scikit-learn · Computer Vision · NLP · Model Evaluation · Prompt Engineering",
    },
    { area: "Backend & Automation", items: "FastAPI · Node.js · REST · gRPC · Microservices · API Design · n8n" },
    { area: "Frontend", items: "React · Next.js · Tailwind CSS · Electron" },
    { area: "Databases", items: "PostgreSQL · MySQL · SQLite · Qdrant (Vector DB) · Supabase · Redis" },
    { area: "Cloud & DevOps", items: "Docker · Podman · CI/CD (GitHub Actions) · Git · Linux" },
];

export const education = [
    {
        title: "B.Tech, CSE (Artificial Intelligence and Data Science)",
        place: "Hindustan Institute of Technology and Science, Chennai · Sep 2022 – Sep 2026",
    },
    {
        title: "Semester exchange, B.Tech Artificial Intelligence",
        place: "Shibaura Institute of Technology, Tokyo · Mar 2025 – Aug 2025",
    },
];
