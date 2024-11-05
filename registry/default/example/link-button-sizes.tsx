import * as React from "react"
import { LinkButton } from "@/registry/default/ui/link-button"

export default function LinkButtonSizes() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div className="space-y-2" key={size}>
          <p className="body-compact-01">{size}</p>
          <LinkButton href="#" size={size}>
            Link
          </LinkButton>
        </div>
      ))}
    </div>
  )
}
