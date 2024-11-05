import * as React from "react"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function CheckboxWithText() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label labelType={"checkbox"} htmlFor="terms">
        Accept terms and conditions
      </Label>
    </div>
  )
}
