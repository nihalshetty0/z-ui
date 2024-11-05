import * as React from "react"
import { IconButton } from "@/registry/default/ui/icon-button"
import { PlusIcon } from "@radix-ui/react-icons"

export default function ButtonIconSizes() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <div className="space-y-2" key={size}>
          <p className="body-compact-01">{size}</p>
          <IconButton size={size}>
            <PlusIcon className="h-4 w-4" />
          </IconButton>
        </div>
      ))}
    </div>
  )
}
