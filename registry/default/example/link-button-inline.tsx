import * as React from "react"
import { LinkButton } from "@/registry/default/ui/link-button"

export default function LinkButtonInline() {
  return (
    <p className="body-compact-01">
      This is a paragraph of text that includes an{" "}
      <LinkButton href="#" inline>
        {" "}
        inline link button{" "}
      </LinkButton>{" "}
      within it. The link button flows naturally with the text without breaking
      the line or disrupting the paragraph's layout.
    </p>
  )
}
