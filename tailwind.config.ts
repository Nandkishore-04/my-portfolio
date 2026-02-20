import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
