import Link from "next/link"

import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export const SiteHeader = () => {
  return (
    <nav className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-edge-subtle-00 bg-background pr-4 md:px-4">
      <div className="flex items-center gap-0.5">
        <MobileNav />
        <Logo />
      </div>

      <ThemeToggle />
    </nav>
  )
}

const Logo = () => {
  return (
    <div className="flex h-full items-center justify-between">
      <Link
        href={"/"}
        className={
          "px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        }
      >
        <div className="flex h-full items-center gap-1.5">
          <svg
            className="size-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#0066ff", stopOpacity: 1 }}
                />
                <stop
                  offset="10%"
                  style={{ stopColor: "#0066ff", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "white", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="32" fill="url(#grad)" />
          </svg>
          <span className="font-[var(--font-rethink),sans-serif] text-base font-medium tracking-tight">
            isotrope/ui
          </span>
        </div>
      </Link>
    </div>
  )
}
