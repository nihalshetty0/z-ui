import * as React from "react"
import { Button } from "@/registry/default/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"

export default function ButtonWithIcon() {
  return (
    <Button>
      Button
      <PlusIcon />
    </Button>
  )
}
