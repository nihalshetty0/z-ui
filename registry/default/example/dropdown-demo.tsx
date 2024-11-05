import * as React from "react"
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownValue,
} from "@/registry/default/ui/dropdown"

export default function DropdownDemo() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <DropdownValue placeholder="Select an option" />
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem value="option1">Option 1</DropdownItem>
        <DropdownItem value="option2">Option 2</DropdownItem>
        <DropdownItem value="option3">Option 3</DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
