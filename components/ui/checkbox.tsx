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
      "group h-4 w-4 shrink-0 rounded-sm border border-icon-primary focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-1 disabled:cursor-not-allowed disabled:border-icon-disabled aria-[invalid=true]:border-support-error data-[state=checked]:bg-icon-primary data-[state=indeterminate]:bg-icon-primary data-[state=checked]:text-white data-[state=indeterminate]:text-white",
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
