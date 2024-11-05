import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkButtonVariants = cva(
  [
    "relative cursor-pointer text-link-primary",
    // hover state
    "hover:text-link-primary-hover hover:underline",
    // focus state
    "focus-visible:outline-none focus:ring-1 focus:ring-focus focus:underline",
    // active state
    "active:text-foreground-primary",
    // visited state
    "visited:text-link-visited",
  ],
  {
    variants: {
      size: {
        sm: "helper-text-01",
        md: "body-compact-01",
        lg: "body-compact-02",
      },
      disabled: {
        true: "pointer-events-none text-foreground-disabled",
      },
      inline: {
        true: "inline underline",
        false: "inline-flex items-center gap-2 ",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      inline: false,
    },
  }
)

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  asChild?: boolean
  disabled?: boolean
  inline?: boolean
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { className, size, disabled, inline, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "a"

    return (
      <Comp
        className={cn(
          linkButtonVariants({ size, disabled, inline, className })
        )}
        ref={ref}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
LinkButton.displayName = "LinkButton"

export { LinkButton, linkButtonVariants }
