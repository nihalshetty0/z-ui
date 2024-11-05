"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/registry/default/ui/button"
import { IconButton } from "@/registry/default/ui/icon-button"
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"

export const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton className="text-icon-secondary md:hidden" variant="ghost">
          <HamburgerMenuIcon />
          <span className="sr-only">Open menu</span>
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay" />
        <Dialog.Content className="fixed inset-0 z-50 max-w-md bg-background focus:outline-none">
          <Dialog.Title className="sr-only">Components</Dialog.Title>

          <div className="flex items-center gap-2">
            <Dialog.Close asChild>
              <IconButton
                className="ml-auto text-icon-secondary"
                size={"md"}
                variant="ghost"
                aria-label="Close"
              >
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </div>

          <ul className="py-4">
            {docsConfig.sidebarItems.map((item, index) => {
              const itemPath = `/docs/components/${item.toLowerCase().replace(" ", "-")}`
              const isActive = pathname === itemPath
              return (
                <li key={index} className="relative">
                  <Dialog.Close asChild>
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
                  </Dialog.Close>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-background-brand" />
                  )}
                </li>
              )
            })}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
