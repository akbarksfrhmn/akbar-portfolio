import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Akbar Kasyfurrahman — Backend & AI Developer",
  description:
    "Portofolio Muhammad Akbar Kasyfurrahman. Pengembangan backend, full-stack, AI & machine learning, serta infrastruktur IT.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#eef2ec" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
