import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Series Templates · Zerodha Clone Journey",
  description:
    "High-impact, algorithm-friendly LinkedIn templates to document your Zerodha clone build in a viral-ready series."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
