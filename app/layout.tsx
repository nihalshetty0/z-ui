import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";

import { ThemeProvider } from "@/registry/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dim", "dark", "system"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
