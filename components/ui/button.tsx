import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const baseButtonVariants = cva(
  [
    "inline-flex items-start justify-between body-compact-01 whitespace-normal button-press-transition relative ",
    "focus-visible:outline-none",
    "focus:ring-1 focus:ring-offset-1 focus:ring-offset-focus focus:ring-inset focus:ring-focus-inset ",
    "disabled:pointer-events-none",
    "[&>svg]:h-4 [&>svg]:w-4",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-button-primary text-foreground-on-color border border-transparent",
          "hover:bg-button-primary-hover",
          "focus:border-focus active:bg-button-primary-active",
          "disabled:bg-button-disabled disabled:text-foreground-on-color-disabled",
        ],
        secondary: [
          "bg-button-secondary text-foreground-on-color border border-transparent",
          "hover:bg-button-secondary-hover",
          "focus:border-focus",
          "active:bg-button-secondary-active",
          "disabled:bg-button-disabled disabled:text-foreground-on-color-disabled",
        ],
        tertiary: [
          "bg-transparent text-button-tertiary border border-button-tertiary",
          "hover:bg-button-tertiary-hover hover:text-foreground-inverse hover:border-button-tertiary-hover",
          "focus:bg-button-tertiary focus:text-foreground-inverse focus:border-focus",
          "active:bg-button-tertiary-active",
          "disabled:border-button-disabled disabled:text-foreground-on-color-disabled ",
        ],
        ghost: [
          "bg-transparent text-link-primary border border-transparent ",
          "hover:bg-background-hover",
          "focus:border-focus",
          "active:bg-background-active",
          "disabled:text-button-disabled",
        ],
        danger: [
          "bg-button-danger-primary text-foreground-on-color border border-transparent",
          "hover:bg-button-danger-hover",
          "focus:border-focus",
          "active:bg-button-danger-active",
          "disabled:bg-button-disabled disabled:text-foreground-on-color-disabled",
        ],
        "danger-tertiary": [
          "bg-transparent text-button-danger-secondary border border-button-danger-secondary",
          "hover:bg-button-danger-hover hover:text-foreground-on-color hover:border-button-danger-hover",
          "focus:bg-button-danger-secondary focus:text-foreground-on-color focus:border-focus",
          "active:bg-button-danger-active",
          "disabled:border-button-disabled disabled:text-foreground-on-color-disabled",
        ],
        "danger-ghost": [
          "bg-transparent text-button-danger-secondary border border-transparent",
          "hover:bg-button-danger-hover hover:text-foreground-on-color",
          "focus:border-focus",
          "active:bg-button-danger-active",
          "disabled:text-button-disabled",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const buttonVariants = cva("", {
  variants: {
    size: {
      sm: "py-[7px] pl-4 pr-16 h-8",
      md: "py-[11px] pl-4 pr-16 h-10",
      lg: "py-[14px] pl-4 pr-16 h-12",
      xl: "py-[16px] pl-4 pr-16 h-16",
      "2xl": "py-[16px] pl-4 pr-16 h-20",
    },
    variant: {
      default: "",
      secondary: "",
      tertiary: "",
      ghost: "",
      danger: "",
      "danger-tertiary": "",
      "danger-ghost": "",
    },
  },
  compoundVariants: [
    {
      variant: [
        "default",
        "secondary",
        "tertiary",
        "danger",
        "danger-tertiary",
      ],
      className: "[&>svg]:absolute [&>svg]:right-4",
    },
    {
      variant: ["ghost", "danger-ghost"],
      className: "gap-2 pr-4",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          baseButtonVariants({ variant }),
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
