import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-2xl label-01 whitespace-nowrap ",
  {
    variants: {
      variant: {
        blue: "text-tag-foreground-blue bg-tag-background-blue",
        red: "text-tag-foreground-red bg-tag-background-red",
        magenta: "text-tag-foreground-magenta bg-tag-background-magenta",
        purple: "text-tag-foreground-purple bg-tag-background-purple",
        cyan: "text-tag-foreground-cyan bg-tag-background-cyan",
        teal: "text-tag-foreground-teal bg-tag-background-teal",
        green: "text-tag-foreground-green bg-tag-background-green",
        gray: "text-tag-foreground-gray bg-tag-background-gray",
        "cool-gray":
          "text-tag-foreground-cool-gray bg-tag-background-cool-gray",
        "warm-gray":
          "text-tag-foreground-warm-gray bg-tag-background-warm-gray",
        "high-contrast": "text-foreground-inverse bg-background-inverse",
        outline:
          "text-foreground-primary bg-background outline outline-1 outline-background-inverse",
      },
      size: {
        sm: "px-2 h-[18px]",
        md: "px-2 h-6",
        lg: "px-3 h-8",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "md",
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(tagVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Tag.displayName = "Tag";

export { Tag, tagVariants };
