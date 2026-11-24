import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space-grotesk",
    weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-instrument",
    weight: "400",
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Nand Kishore · AI Engineer",
    description: "AI engineer. GSoC 2026 with Intel OpenVINO, plus products running for real clients.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
