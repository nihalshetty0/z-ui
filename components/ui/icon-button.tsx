import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { baseButtonVariants } from "./button";

const iconButtonVariants = cva("", {
  variants: {
    size: {
      sm: "p-2 h-8",
      md: "p-3 h-10",
      lg: "p-4 h-12",
      xl: "p-6 h-16",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof baseButtonVariants>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          baseButtonVariants({ variant }),
          iconButtonVariants({ size, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = "Button";

export { IconButton, iconButtonVariants };
