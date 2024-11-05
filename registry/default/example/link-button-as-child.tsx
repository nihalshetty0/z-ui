import * as React from "react"
import Link from "next/link"
import { LinkButton } from "@/registry/default/ui/link-button"

export default function LinkButtonAsChild() {
  return (
    <LinkButton asChild>
      <Link href="#">Next.js Link</Link>
    </LinkButton>
  )
}
