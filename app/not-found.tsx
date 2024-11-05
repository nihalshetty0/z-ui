import Link from "next/link"
import { buttonVariants } from "@/registry/default/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col items-center justify-center gap-2">
      <h2 className="heading-05">404 Not Found</h2>
      <p className="body-compact-01">Could not find the requested page</p>
      <Link
        href="/"
        className={buttonVariants({ variant: "ghost", className: "mt-4" })}
      >
        <ArrowLeftIcon className="mr-2" />
        Return Home
      </Link>
    </div>
  )
}
