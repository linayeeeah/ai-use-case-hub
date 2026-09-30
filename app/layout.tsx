import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Use Case Hub 2.0",
  description: "Discover, submit, validate, and govern AI use cases across the organization.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
