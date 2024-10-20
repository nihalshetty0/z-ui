const checkboxGroupVariants = cva("group flex items-center gap-2", {
  variants: {
    orientation: {
      horizontal: "peer [&:not(:last-of-type.peer)]:mb-2",
      vertical: "",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof checkboxGroupVariants>
>(({ className, orientation, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(checkboxGroupVariants({ orientation }), className)}
    {...props}
  />
));
CheckboxGroup.displayName = "CheckboxGroup";
