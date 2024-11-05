import * as React from "react"
import { Tag } from "@/registry/default/ui/tag"

export default function TagColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag>Tag content</Tag>
      <Tag variant={"purple"}>Tag content</Tag>
      <Tag variant={"cyan"}>Tag content</Tag>
      <Tag variant={"red"}>Tag content</Tag>
      <Tag variant={"green"}>Tag content</Tag>
      <Tag variant={"teal"}>Tag content</Tag>
      <Tag variant={"magenta"}>Tag content</Tag>
      <Tag variant={"cool-gray"}>Tag content</Tag>
      <Tag variant={"warm-gray"}>Tag content</Tag>
      <Tag variant={"high-contrast"}>Tag content</Tag>
      <Tag variant={"gray"}>Tag content</Tag>
      <Tag variant={"outline"}>Tag content</Tag>
      <Tag>Tag content. Extra long long text here.</Tag>
    </div>
  )
}
