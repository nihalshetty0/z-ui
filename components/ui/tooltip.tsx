"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const tooltipVariants = cva(
  "overflow-hidden rounded-sm bg-background-inverse p-4 text-icon-inverse body-compact-01",
  {
    variants: {
      size: {
        lg: "p-4",
        md: "px-4 py-2",
        sm: "px-4 py-0.5",
      },
    },

    defaultVariants: {
      size: "lg",
    },
  },
);

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipVariants> {}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    { className, sideOffset = 4, alignOffset = -8, size, children, ...props },
    ref,
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={cn(tooltipVariants({ size, className }))}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-background-inverse" />
    </TooltipPrimitive.Content>
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
