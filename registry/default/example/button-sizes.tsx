import * as React from "react"
import { Button } from "@/registry/default/ui/button"

export default function ButtonSizes() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <div className="space-y-2" key={size}>
          <p className="body-compact-01">{size}</p>
          <Button size={size}>Button</Button>
        </div>
      ))}
    </div>
  )
}
