"use client"

import * as React from "react"
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownValue,
} from "@/registry/default/ui/dropdown"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  // TODO: fix hydration warning
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Dropdown value={theme} onValueChange={setTheme} size="sm">
      <DropdownTrigger className="w-[120px]" aria-label="Toggle theme">
        <DropdownValue placeholder="Select theme" />
      </DropdownTrigger>
      <DropdownContent className="z-50">
        <DropdownItem value="light">Light</DropdownItem>
        <DropdownItem value="dim">Dim</DropdownItem>
        <DropdownItem value="dark">Dark</DropdownItem>
        <DropdownItem value="system">System</DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
