"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("", {
  variants: {
    labelType: {
      default: "mb-2 block text-gray-70 label-01",
      checkbox: "body-compact-01",
      radio: "body-compact-01",
    },
    disabled: {
      true: "text-foreground-disabled",
      false: "",
    },
  },
  defaultVariants: {
    labelType: "default",
    disabled: false,
  },
});

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, labelType, disabled, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ labelType, disabled, className }))}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
