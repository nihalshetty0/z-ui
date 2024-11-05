import * as React from "react"
import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export default function TooltipSizes() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div className="flex flex-col gap-2" key={size}>
          <p className="body-compact-01">{size}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Hover me</Button>
              </TooltipTrigger>
              <TooltipContent size={size}>
                <p>This is tooltip content</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  )
}
