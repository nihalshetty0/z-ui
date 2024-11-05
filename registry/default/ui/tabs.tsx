"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

type TabsContextValue = {
  contained: boolean
}

const TabsContext = React.createContext<TabsContextValue>(
  {} as TabsContextValue
)

const useTabsContext = () => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs' components must be used within Tabs")
  }
  return context
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    contained?: boolean
  }
>(({ className, contained = false, ...props }, ref) => {
  const tabsContextValue = React.useMemo(() => ({ contained }), [contained])

  return (
    <TabsContext.Provider value={tabsContextValue}>
      <TabsPrimitive.Root
        ref={ref}
        className={cn(
          "data-[orientation=vertical]:grid data-[orientation=vertical]:grid-cols-8 data-[orientation=vertical]:bg-layer-01",
          className
        )}
        {...props}
      />
    </TabsContext.Provider>
  )
})
Tabs.displayName = TabsPrimitive.Root.displayName

const TabList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "data-[orientation=horizontal]:inline-flex",
      "data-[orientation=vertical]:col-span-2 data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
))
TabList.displayName = TabsPrimitive.List.displayName

const tabTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-4 text-foreground-secondary body-compact-01",
  {
    variants: {
      contained: {
        false: [
          "h-10",
          // bottom line
          "relative before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-edge-subtle-00",
          // hover
          "hover:text-foreground-primary hover:before:bg-edge-strong-01",
          // focus
          "focus:ring-2 focus:ring-inset focus:ring-interactive focus-visible:outline-none",
          // disabled
          "disabled:cursor-not-allowed disabled:text-foreground-disabled disabled:before:bg-edge-subtle-00",
          // active
          "data-[state=active]:text-foreground-primary data-[state=active]:heading-compact-01 data-[state=active]:before:bg-edge-interactive",
        ],
        true: [
          "h-12 bg-layer-accent-01 relative",
          // right line
          "after:absolute after:inset-y-0 after:right-0 after:w-[0.5px] after:bg-edge-strong-01 [&:last-child]:after:hidden [&:has(+[data-state=active])]:after:hidden",
          // hover
          "hover:bg-layer-accent-hover-01 hover:text-foreground-primary",
          // focus
          "focus-visible:outline-none focus:ring-2 focus:ring-inset focus:ring-interactive focus:bg-layer-accent-01",
          //disabled
          "disabled:bg-button-disabled disabled:cursor-not-allowed disabled:text-foreground-on-color-disabled",
          // active
          "data-[state=active]:bg-layer-01 data-[state=active]:text-foreground-primary data-[state=active]:heading-compact-01 data-[state=active]:before:absolute data-[state=active]:before:inset-0 data-[state=active]:before:top-0 data-[state=active]:before:h-[1.5px] data-[state=active]:before:bg-edge-interactive data-[state=active]:after:hidden",
        ],
      },
    },
    defaultVariants: {
      contained: false,
    },
  }
)

const TabTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { contained } = useTabsContext()

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabTriggerVariants({ contained }), className)}
      {...props}
    />
  )
})
TabTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabVerticalTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { contained } = useTabsContext()

  if (!contained)
    throw Error(
      "Vertical tabs require the contained variant to be enabled. Please pass contained={true} to the <Tabs/> component"
    )

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center px-4 text-foreground-secondary body-compact-01",
        "relative h-16 border-b border-r border-edge-subtle-00 bg-layer-01",
        // left line
        "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-edge-subtle-00",
        // hover
        "hover:bg-layer-hover-01 hover:before:bg-edge-strong-01",
        // focus
        "focus:ring-2 focus:ring-inset focus:ring-interactive focus-visible:outline-none",
        // disabled
        "disabled:cursor-not-allowed disabled:text-foreground-disabled disabled:before:bg-edge-subtle-00 disabled:hover:bg-layer-01",
        // active
        "data-[state=active]:border-r-0 data-[state=active]:text-foreground-primary data-[state=active]:heading-compact-01 data-[state=active]:before:bg-edge-interactive",
        className
      )}
      {...props}
    />
  )
})
TabTrigger.displayName = TabsPrimitive.Trigger.displayName

const tabContentVariants = cva("data-[orientation=vertical]:col-span-6", {
  variants: {
    contained: {
      false: [
        "p-4",
        // focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-interactive",
      ],
      true: [
        "p-4 bg-layer-01",
        // focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-interactive",
      ],
    },
  },
  defaultVariants: {
    contained: false,
  },
})

const TabContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { contained } = useTabsContext()

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(tabContentVariants({ contained }), className)}
      {...props}
    />
  )
})
TabContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabList, TabTrigger, TabVerticalTrigger, TabContent }
