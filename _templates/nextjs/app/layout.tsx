import type { Metadata } from "next";
import "./globals.css";
import "./core-control.css";

export const metadata: Metadata = {
  title: "SuperCSS Next.js Expo",
  description: "Next.js component expo aligned with master template contracts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
