import * as React from "react"
import { Tag } from "@/registry/default/ui/tag"

export default function TagSizes() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div className="space-y-2" key={size}>
          <p className="body-compact-01">{size}</p>
          <Tag size={size}>Tag content</Tag>
        </div>
      ))}
    </div>
  )
}
