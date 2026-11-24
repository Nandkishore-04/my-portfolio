import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    DEFAULT: '#FFD60A',
                    light: '#FFE347',
                    dim: '#CCB008',
                },
                surface: {
                    DEFAULT: '#0A0A0A',
                    raised: '#111111',
                    border: '#1A1A1A',
                },
                /* Cinematic homepage theme (Velorah template) */
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                glassborder: 'hsl(var(--border))',
                /* Light editorial homepage */
                ink: '#121826',
                paper: '#f7f6f2',
                mist: '#e9ecf1',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'sans-serif'],
                serif: ['var(--font-instrument)', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;
