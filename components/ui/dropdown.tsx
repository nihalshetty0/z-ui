"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type SelectContextValue = {
  readOnly: boolean;
  size: "sm" | "md" | "lg";
};

const SelectContext = React.createContext<SelectContextValue>(
  {} as SelectContextValue,
);

const useSelectContext = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within a Select");
  }
  return context;
};

const Select = function ({
  children,
  readOnly = false,
  size = "md",
  disabled = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  readOnly?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const selectContextValue = React.useMemo(
    () => ({ readOnly, size }),
    [readOnly, size],
  );

  return (
    <SelectContext.Provider value={selectContextValue}>
      <SelectPrimitive.Root {...props} disabled={disabled || readOnly}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  );
};

Select.displayName = SelectPrimitive.Root.displayName;

const SelectValue = SelectPrimitive.Value;

const selectTriggerVariants = cva(
  [
    "flex w-full items-center justify-between border-b border-edge-strong-01 bg-field-01 px-4 text-foreground-primary body-compact-01",
    "hover:bg-layer-hover-01",
    "focus-visible:border-focus focus-visible:shadow-input focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-layer-01 disabled:text-foreground-disabled",
    "group/trigger data-[state=open]:border-edge-subtle-00 [&>span]:truncate",
  ],
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
      readOnly: {
        true: "disabled:cursor-default disabled:border-edge-subtle-01 disabled:bg-transparent disabled:text-foreground-primary disabled:hover:bg-inherit",
      },
    },
  },
);

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { readOnly, size } = useSelectContext();

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      data-read-only={readOnly}
      className={cn(selectTriggerVariants({ size, readOnly, className }))}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 text-icon-primary transition-transform duration-100 group-disabled/trigger:text-icon-disabled group-data-[state=open]/trigger:rotate-180",
            { "text-icon-disabled": readOnly },
          )}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const selectContentVariants = cva(
  "min-w-[var(--radix-select-trigger-width)] shadow-menu",
  {
    variants: {
      size: {
        sm: "max-h-[11rem]",
        md: "max-h-[13.75rem]",
        lg: "max-h-[16.5rem]",
      },
    },
  },
);

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => {
  const { size } = useSelectContext();

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(selectContentVariants({ size, className }))}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const selectItemVariants = cva(
  [
    "relative flex max-w-full cursor-default select-none items-center justify-between bg-layer-01 text-foreground-secondary outline-none body-compact-01 [&>span]:truncate",
    "before:absolute before:inset-x-4 before:top-0 before:border-t before:border-t-edge-subtle-01 [&:first-child]:before:hidden",
    "hover:bg-layer-hover-01 hover:text-foreground-primary hover:before:hidden focus:before:hidden [&:hover+div]:before:hidden",
    "focus:ring-2 focus:ring-inset focus:ring-focus [&:focus+div]:before:hidden",
    "data-[state=checked]:bg-layer-selected-01 [&[data-state=checked]+div]:before:hidden",
    "data-[state=checked]:hover:bg-layer-selected-hover-01",
  ],
  {
    variants: {
      size: {
        sm: "px-4 py-[7px]",
        md: "px-4 py-[11px]",
        lg: "px-4 py-[15px]",
      },
    },
  },
);

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { size } = useSelectContext();

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={selectItemVariants({ size, className })}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

// Aligning with design system nomenclature

Select.displayName = "Dropdown";
SelectValue.displayName = "DropdownValue";
SelectTrigger.displayName = "DropdownTrigger";
SelectContent.displayName = "DropdownContent";
SelectItem.displayName = "DropdownItem";

export {
  Select as Dropdown,
  SelectValue as DropdownValue,
  SelectTrigger as DropdownTrigger,
  SelectContent as DropdownContent,
  SelectItem as DropdownItem,
};
