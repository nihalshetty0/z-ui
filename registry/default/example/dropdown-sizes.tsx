import * as React from "react"
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownValue,
} from "@/registry/default/ui/dropdown"

export default function DropdownSizes() {
  return (
    <div className="space-y-10">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div className="min-w-80 space-y-2" key={size}>
          <span className="body-compact-01">{size}</span>
          <Dropdown size={size}>
            <DropdownTrigger>
              <DropdownValue placeholder="Select an option" />
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem value="option1">Option 1</DropdownItem>
              <DropdownItem value="option2">Option 2</DropdownItem>
              <DropdownItem value="option3">Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      ))}
    </div>
  )
}
