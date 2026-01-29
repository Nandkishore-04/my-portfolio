// Project data structure
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  status: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  color: string;
  accentColor: string;
  overview: string;
  challenge: string;
  solution: string[];
  results: string[];
  features: { title: string; description: string }[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "client-dashboard",
    title: "Client Dashboard & Automation System",
    category: "Enterprise Platform",
    description: "Full-stack admin platform with real-time monitoring, automated workflows, and comprehensive client management. Built for scale.",
    year: "2025",
    status: "Production",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket", "Docker", "AWS"],
    metrics: [
      { label: "Active Users", value: "500+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Daily Actions", value: "10k+" },
      { label: "Response Time", value: "<100ms" },
    ],
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "violet",
    overview: "A comprehensive enterprise platform designed to streamline client management, automate repetitive workflows, and provide real-time insights. Built to handle scale while maintaining performance and reliability.",
    challenge: "Organizations were spending hours on manual client management, data entry, and status tracking. No unified system existed to handle client communication, project tracking, and automated workflows in one place.",
    solution: [
      "Built a real-time dashboard with WebSocket connections for instant updates",
      "Implemented automated workflow engine using Redis queues and background workers",
      "Designed scalable PostgreSQL database schema optimized for complex queries",
      "Created role-based access control system for enterprise security",
      "Integrated third-party APIs for automated data synchronization",
    ],
    results: [
      "Reduced manual data entry time by 70%",
      "Processing 10,000+ automated actions daily",
      "Maintained 99.9% uptime over 6 months",
      "Serving 500+ active users across multiple organizations",
      "Average response time under 100ms for all operations",
    ],
    features: [
      {
        title: "Real-Time Monitoring",
        description: "Live dashboard with WebSocket updates showing client activity, system status, and performance metrics.",
      },
      {
        title: "Automated Workflows",
        description: "Custom workflow engine that automates repetitive tasks, notifications, and data processing.",
      },
      {
        title: "Client Management",
        description: "Comprehensive client profiles with history tracking, communication logs, and project associations.",
      },
      {
        title: "Analytics & Reporting",
        description: "Advanced analytics with customizable reports, data exports, and visualization tools.",
      },
    ],
    link: "#",
  },
  {
    id: "ai-inventory",
    title: "AI Inventory Management System",
    category: "AI Product",
    description: "Intelligent inventory tracking with predictive analytics, automated reordering, and ML-driven insights. Eliminates manual stock management.",
    year: "2024",
    status: "Production",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "React", "Docker", "Celery"],
    metrics: [
      { label: "Prediction Accuracy", value: "94%" },
      { label: "Time Saved", value: "70%" },
      { label: "Items Tracked", value: "5k+" },
      { label: "Daily Predictions", value: "1k+" },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "blue",
    overview: "An AI-powered inventory management system that predicts stock needs, automates reordering, and provides intelligent insights to eliminate manual tracking and reduce waste.",
    challenge: "Businesses were losing money on overstocking, stockouts, and manual inventory tracking. Traditional systems couldn't predict demand patterns or automate reordering decisions.",
    solution: [
      "Trained TensorFlow models on historical sales and inventory data",
      "Built real-time prediction pipeline for demand forecasting",
      "Implemented automated reordering system with configurable thresholds",
      "Created FastAPI backend for high-performance ML inference",
      "Designed React dashboard for inventory visualization and insights",
    ],
    results: [
      "94% accuracy in demand prediction",
      "Reduced manual inventory management time by 70%",
      "Eliminated stockouts through predictive alerts",
      "Tracking 5,000+ items with automated insights",
      "Processing 1,000+ predictions daily",
    ],
    features: [
      {
        title: "Demand Forecasting",
        description: "ML models predict future inventory needs based on historical patterns and seasonal trends.",
      },
      {
        title: "Automated Reordering",
        description: "Intelligent system automatically triggers purchase orders when stock levels reach predicted thresholds.",
      },
      {
        title: "Inventory Analytics",
        description: "Comprehensive analytics showing stock trends, turnover rates, and optimization opportunities.",
      },
      {
        title: "Real-Time Tracking",
        description: "Live inventory updates with barcode scanning integration and multi-location support.",
      },
    ],
    link: "#",
  },
  {
    id: "simply-search",
    title: "Simply Search",
    category: "Shipped Product",
    description: "Fast, intuitive search engine with advanced filtering and real-time results. Shipped to production with thousands of queries daily.",
    year: "2024",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Elasticsearch", "Tailwind CSS", "Redis", "Node.js"],
    metrics: [
      { label: "Daily Queries", value: "10k+" },
      { label: "Response Time", value: "<50ms" },
      { label: "Search Accuracy", value: "96%" },
      { label: "Uptime", value: "99.8%" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "emerald",
    overview: "A lightning-fast search engine built with modern web technologies, delivering instant results with advanced filtering capabilities and intuitive UI.",
    challenge: "Users needed a fast, reliable search system that could handle thousands of queries with instant results and sophisticated filtering options.",
    solution: [
      "Implemented Elasticsearch for full-text search with custom analyzers",
      "Built Next.js frontend with optimized server-side rendering",
      "Created Redis caching layer for frequently searched queries",
      "Designed responsive UI with real-time search suggestions",
      "Optimized database indexing for sub-50ms query performance",
    ],
    results: [
      "Processing 10,000+ searches daily",
      "Average response time under 50ms",
      "96% search accuracy and relevance",
      "99.8% uptime since launch",
      "Zero performance degradation at peak load",
    ],
    features: [
      {
        title: "Instant Search",
        description: "Real-time search results with sub-50ms response times and live suggestions as you type.",
      },
      {
        title: "Advanced Filters",
        description: "Powerful filtering system with categories, date ranges, and custom parameters.",
      },
      {
        title: "Smart Ranking",
        description: "Intelligent result ranking based on relevance, popularity, and user behavior.",
      },
      {
        title: "Mobile Optimized",
        description: "Fully responsive design with touch-optimized interface for mobile users.",
      },
    ],
    link: "#",
  },
  {
    id: "gemstone-elegance",
    title: "Gemstone Elegance",
    category: "Product Demo",
    description: "E-commerce platform showcasing premium product design, smooth animations, and seamless checkout experience. Built for conversion.",
    year: "2024",
    status: "Demo",
    tech: ["Next.js", "Stripe", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    metrics: [
      { label: "Performance Score", value: "98/100" },
      { label: "Animation FPS", value: "60" },
      { label: "Load Time", value: "<1s" },
      { label: "Mobile Score", value: "100/100" },
    ],
    color: "from-rose-500/20 to-pink-500/20",
    accentColor: "rose",
    overview: "A premium e-commerce platform demo showcasing best practices in UI/UX design, performance optimization, and smooth animations to maximize conversion rates.",
    challenge: "Create a visually stunning e-commerce experience that maintains 60fps animations while achieving perfect performance scores and seamless payment integration.",
    solution: [
      "Built with Next.js 14 for optimal performance and SEO",
      "Implemented Framer Motion for butter-smooth 60fps animations",
      "Integrated Stripe for secure, seamless checkout flow",
      "Optimized images and assets for <1s load times",
      "Designed responsive layouts with mobile-first approach",
    ],
    results: [
      "98/100 Lighthouse performance score",
      "Consistent 60fps animations throughout",
      "Page load time under 1 second",
      "100/100 mobile performance score",
      "Zero layout shift or animation jank",
    ],
    features: [
      {
        title: "Premium Design",
        description: "Luxurious interface with carefully crafted typography, spacing, and visual hierarchy.",
      },
      {
        title: "Smooth Animations",
        description: "Butter-smooth 60fps animations using Framer Motion for delightful user experience.",
      },
      {
        title: "Stripe Integration",
        description: "Secure, seamless checkout flow with Stripe payment processing and cart management.",
      },
      {
        title: "Performance Optimized",
        description: "Achieving 98/100 Lighthouse score with optimized images, code splitting, and caching.",
      },
    ],
    link: "#",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getOtherProjects(currentId: string): Project[] {
  return projectsData.filter((project) => project.id !== currentId);
}
