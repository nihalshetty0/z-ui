"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { CheckIcon, DashIcon } from "@radix-ui/react-icons";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      [
        "group h-4 w-4 shrink-0 rounded-sm border border-icon-primary bg-icon-primary text-icon-inverse data-[state=unchecked]:bg-inherit",
        "focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-1 focus:ring-offset-focus-inset",
        "disabled:cursor-not-allowed disabled:border-icon-disabled",
        "disabled:data-[state=checked]:border-transparent disabled:data-[state=checked]:bg-icon-disabled",
        "disabled:data-[state=indeterminate]:border-transparent disabled:data-[state=indeterminate]:bg-icon-disabled",
        "aria-[invalid=true]:border-support-error",
      ],
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={"flex text-current"}>
      {props.checked === "indeterminate" ? (
        <DashIcon className="h-4 w-4" />
      ) : (
        <CheckIcon className="h-4 w-4" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
