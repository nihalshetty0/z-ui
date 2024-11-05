import * as React from "react"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function CheckboxDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled />
      <Label
        labelType={"checkbox"}
        htmlFor="terms2"
        className="cursor-not-allowed text-foreground-disabled"
      >
        Disabled checkbox
      </Label>
    </div>
  )
}
