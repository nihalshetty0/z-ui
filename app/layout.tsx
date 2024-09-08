import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Carbon Design System",
  description:
    "A design system for building scalable and accessible web applications.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
