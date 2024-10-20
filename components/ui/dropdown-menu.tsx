"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

type TDropdownMenuContextValue = {
  size: "xs" | "sm" | "md" | "lg";
};

const DropdownMenuContext = React.createContext<TDropdownMenuContextValue>(
  {} as TDropdownMenuContextValue,
);

const useDropdownMenuContext = () => {
  const context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenuItem must be used within a DropdownMenu");
  }
  return context;
};

const DropdownMenu = ({
  size = "md",
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> & {
  size?: "xs" | "sm" | "md" | "lg";
}) => {
  const dropdownMenuContextValue = React.useMemo(() => ({ size }), [size]);

  return (
    <DropdownMenuContext.Provider value={dropdownMenuContextValue}>
      <DropdownMenuPrimitive.Root {...props} />
    </DropdownMenuContext.Provider>
  );
};
DropdownMenu.displayName = DropdownMenuPrimitive.Root.displayName;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => {
  const { size } = useDropdownMenuContext();

  const {
    state: { hasRadioOrCheckboxItem },
  } = useDropdownContentContext();

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        dropdownMenuItemVariant({
          size,
          hasRadioOrCheckboxItem,
          className,
        }),
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

// Internal state management
type TDropdownContentState = {
  hasRadioOrCheckboxItem: boolean;
};

type TDropdownContentAction = {
  type: "HAS_RADIO_OR_CHECKBOX_ITEM";
};

type TDropdownContentContext = {
  state: TDropdownContentState;
  dispatch: React.Dispatch<TDropdownContentAction>;
};

const DropdownMenuContentContext = React.createContext<TDropdownContentContext>(
  {} as TDropdownContentContext,
);

function reducer(
  state: TDropdownContentState,
  action: TDropdownContentAction,
): TDropdownContentState {
  switch (action.type) {
    case "HAS_RADIO_OR_CHECKBOX_ITEM":
      return { ...state, hasRadioOrCheckboxItem: true };
    default:
      return state;
  }
}

const useDropdownContentContext = () => {
  const context = React.useContext(DropdownMenuContentContext);
  if (!context) {
    throw new Error(
      "useDropdownContentContext must be used within a DropdownMenuContent/DropdownMenuSubContent",
    );
  }
  return context;
};
// Internal state management end

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const [state, dispatch] = React.useReducer(reducer, {
    hasRadioOrCheckboxItem: false,
  });

  const dropdownContentContextValue = React.useMemo(
    () => ({ state, dispatch }),
    [state, dispatch],
  );

  return (
    <DropdownMenuContentContext.Provider value={dropdownContentContextValue}>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
          "w-[var(--radix-dropdown-menu-trigger-width)] bg-layer-01 py-1 shadow-menu body-compact-01",
          className,
        )}
        sideOffset={2}
        {...props}
      />
    </DropdownMenuContentContext.Provider>
  );
});
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const [state, dispatch] = React.useReducer(reducer, {
    hasRadioOrCheckboxItem: false,
  });

  const dropdownContentContextValue = React.useMemo(
    () => ({ state, dispatch }),
    [state, dispatch],
  );

  return (
    <DropdownMenuContentContext.Provider value={dropdownContentContextValue}>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "w-[var(--radix-dropdown-menu-trigger-width)]2 max-w-40 bg-layer-01 py-1 shadow-menu body-compact-01",
            className,
          )}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuContentContext.Provider>
  );
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const dropdownMenuItemVariant = cva(
  [
    "text-foreground-secondary",
    "relative flex cursor-pointer select-none items-center px-4 outline-none",
    // focus state
    "focus:ring-2 focus:ring-inset focus:ring-focus",
    // disabled state
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "hover:bg-layer-hover-01 hover:text-foreground-primary",
        danger: [
          "hover:bg-button-danger-primary hover:text-foreground-on-color",
          "focus-visible:bg-button-danger-primary focus-visible:text-foreground-on-color",
        ],
      },
      size: {
        xs: "h-6",
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
      hasRadioOrCheckboxItem: {
        true: "pl-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariant> {}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, variant, ...props }, ref) => {
  const { size } = useDropdownMenuContext();

  const {
    state: { hasRadioOrCheckboxItem },
  } = useDropdownContentContext();

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        dropdownMenuItemVariant({
          variant,
          size,
          hasRadioOrCheckboxItem,
          className,
        }),
      )}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.CheckboxItem
    >,
    VariantProps<typeof dropdownMenuItemVariant> {}

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, variant, ...props }, ref) => {
  const { size } = useDropdownMenuContext();

  const {
    state: { hasRadioOrCheckboxItem },
    dispatch,
  } = useDropdownContentContext();

  React.useEffect(() => {
    if (!hasRadioOrCheckboxItem) {
      dispatch({ type: "HAS_RADIO_OR_CHECKBOX_ITEM" });
    }
  }, [dispatch, hasRadioOrCheckboxItem]);

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        dropdownMenuItemVariant({
          variant,
          size,
          hasRadioOrCheckboxItem,
          className,
        }),
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-4 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.RadioItem
    >,
    VariantProps<typeof dropdownMenuItemVariant> {}

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, variant, ...props }, ref) => {
  const { size } = useDropdownMenuContext();

  const {
    state: { hasRadioOrCheckboxItem },
    dispatch,
  } = useDropdownContentContext();

  React.useEffect(() => {
    if (!hasRadioOrCheckboxItem) {
      dispatch({ type: "HAS_RADIO_OR_CHECKBOX_ITEM" });
    }
  }, [dispatch, hasRadioOrCheckboxItem]);

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        dropdownMenuItemVariant({
          variant,
          size,
          hasRadioOrCheckboxItem,
          className,
        }),
      )}
      {...props}
    >
      <span className="absolute left-4 flex h-4 w-4 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("my-1 h-px bg-edge-subtle-00", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto pl-2", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

// TODO: what decides the height of the dropdown menu? https://www.radix-ui.com/primitives/docs/components/dropdown-menu#abstract-the-arrow-and-item-indicators
// animations?
