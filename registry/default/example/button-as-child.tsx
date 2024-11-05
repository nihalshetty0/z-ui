import * as React from "react"
import Link from "next/link"
import { Button } from "@/registry/default/ui/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="#">Link as Button</Link>
    </Button>
  )
}
