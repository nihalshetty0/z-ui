import * as React from "react"
import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="comfortable" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="rd1" />
        <Label labelType="radio" htmlFor="rd1" disabled>
          Default
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="rd2" />
        <Label labelType="radio" htmlFor="rd2" disabled>
          Comfortable
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="rd3" />
        <Label labelType="radio" htmlFor="rd3" disabled>
          Compact
        </Label>
      </div>
    </RadioGroup>
  )
}
