import Link from "next/link"
import { Button, buttonVariants } from "@/registry/default/ui/button"
import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-3rem)]">
      <div className="absolute inset-0 -z-10 background-dot-patterns"></div>

      <div className="p-4 md:p-8">
        <h1 className="fluid-heading-06 relative pb-3 pt-12">
          {siteConfig.name}
        </h1>

        <p className="body-compact-02">{siteConfig.description}</p>

        <div className="mt-12 flex flex-col gap-4 lg:flex-row [&>*]:[inline-size:100%] [&>*]:[max-inline-size:14rem]">
          <Link
            href={"/docs/components/accordion"}
            className={buttonVariants({})}
          >
            Browse components
            <ArrowRightIcon />
          </Link>
          <Button asChild variant={"tertiary"}>
            <a href={siteConfig.links.github} target="_blank">
              Github
              <ArrowTopRightIcon />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-layer-01 px-4 py-3">
        <InfoCircledIcon className="size-5 shrink-0" />
        <p className="body-compact-01">
          This project replicates Carbon Design System, building components with
          patterns used in shadcn/ui.
        </p>
      </div>
    </div>
  )
}
