import * as React from "react"
import { Input } from "@/registry/default/ui/input"

export default function InputSizes() {
  return (
    <div className="space-y-10">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div className="min-w-80 space-y-2" key={size}>
          <span className="body-compact-01">{size}</span>
          <Input inputSize={size} placeholder={`Email`} />
        </div>
      ))}
    </div>
  )
}
