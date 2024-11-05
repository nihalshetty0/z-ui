"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/registry/default/ui/button"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-12 z-30 hidden h-[calc(100vh-3.1rem)] w-full shrink-0 overflow-auto border-r border-edge-subtle-00 md:block">
      <ul className="py-3">
        {docsConfig.sidebarItems.map((item, index) => {
          const itemPath = `/docs/components/${item.toLowerCase().replace(" ", "-")}`
          const isActive = pathname === itemPath
          return (
            <li key={index} className="relative">
              <Link
                href={itemPath}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "md" }),
                  "w-full text-left text-inherit",
                  {
                    "bg-background-selected": isActive,
                  }
                )}
              >
                {item}
              </Link>
              {isActive && (
                <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-background-brand" />
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
