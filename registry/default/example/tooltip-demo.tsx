import * as React from "react"
import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
