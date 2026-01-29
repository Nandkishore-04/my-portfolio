import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nand Kishore — Backend & Automation Engineer",
  description: "Backend engineer, open source contributor, and builder of AI systems and automation platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
