"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  isFlush: boolean;
  size: "sm" | "md" | "lg";
};

const AccordionContext = React.createContext<AccordionContextValue>(
  {} as AccordionContextValue,
);

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within a Accordion");
  }
  return context;
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    align?: "start" | "end";
    isFlush?: boolean;
    size?: "sm" | "md" | "lg";
  }
>(
  (
    { align = "end", className, isFlush = false, size = "md", ...props },
    ref,
  ) => {
    const accordionContextValue = React.useMemo(
      () => ({ isFlush, size }),
      [isFlush, size],
    );

    return (
      <AccordionContext.Provider value={accordionContextValue}>
        <AccordionPrimitive.Root
          ref={ref}
          className={cn(className, `group/accordion-root`)}
          data-accordion-align={align}
          {...props}
        />
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

const accordionItemVariants = cva("relative", {
  variants: {
    isFlush: {
      false: [
        "border-t-[0.5px] [&:last-child]:border-b-[0.5px] border-edge-subtle-00",
        "[&[data-state=closed]]:hover:border-layer-hover-01 [&[data-state=closed]+div]:hover:border-t-layer-hover-01",
      ],
      true: [
        "border-transparent",
        "before:absolute before:inset-x-4 before:top-[-0.5px] before:h-[0.5px] before:bg-edge-subtle-00",
        "[&:last-child]:after:absolute [&:last-child]:after:inset-x-4 [&:last-child]:after:bottom-[-0.5px] [&:last-child]:after:h-[0.5px] [&:last-child]:after:bg-edge-subtle-00",
        "hover:before:bg-layer-hover-01 hover:before:inset-x-0 [&[data-state=closed]+div]:hover:before:bg-layer-hover-01",
        "[&:last-child]:hover:before:bg-layer-hover-01 [&[data-state=closed]:last-child]:hover:after:inset-x-0 [&[data-state=closed]:last-child]:hover:after:bg-layer-hover-01",
      ],
    },
  },
  defaultVariants: {
    isFlush: false,
  },
});

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { isFlush } = useAccordionContext();

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ isFlush }), className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { size } = useAccordionContext();

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group/accordion-trigger flex flex-1 items-center justify-between px-4 body-01",
          "hover:bg-layer-hover-01",
          "focus:accordion-focus-outline focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:text-foreground-disabled",
          "group-data-[accordion-align=start]/accordion-root:flex-row-reverse group-data-[accordion-align=start]/accordion-root:justify-end",
          size === "sm" && "h-8",
          size === "md" && "h-10",
          size === "lg" && "h-12",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "accordion-align-start:mr-2 accordion-align-end:ml-2 h-4 w-4 shrink-0 text-icon-primary transition-transform duration-100 group-disabled/accordion-trigger:text-icon-disabled",
            "group-data-[accordion-align=start]/accordion-root:mr-4",
            "group-data-[state=open]/accordion-trigger:rotate-180",
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden body-01"
    {...props}
  >
    <div
      className={cn(
        "pb-6 pl-4 pr-12 pt-2 group-data-[accordion-align=start]/accordion-root:pl-12 group-data-[accordion-align=start]/accordion-root:pr-4",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
