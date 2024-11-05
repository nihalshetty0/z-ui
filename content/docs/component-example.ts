import * as React from "react"

export const componentExample: Record<string, any> = {
  default: {
    // Accordion examples
    "accordion-demo": {
      name: "accordion-demo",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-demo")
      ),
    },
    "accordion-align": {
      name: "accordion-align",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-align")
      ),
    },
    "accordion-flush": {
      name: "accordion-flush",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-flush")
      ),
    },
    "accordion-sizes": {
      name: "accordion-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-sizes")
      ),
    },
    "accordion-disabled": {
      name: "accordion-disabled",
      component: React.lazy(
        () => import("@/registry/default/example/accordion-disabled")
      ),
    },

    // Button examples
    "button-demo": {
      name: "button-demo",
      component: React.lazy(
        () => import("@/registry/default/example/button-demo")
      ),
    },
    "button-secondary": {
      name: "button-secondary",
      component: React.lazy(
        () => import("@/registry/default/example/button-secondary")
      ),
    },
    "button-tertiary": {
      name: "button-tertiary",
      component: React.lazy(
        () => import("@/registry/default/example/button-tertiary")
      ),
    },
    "button-ghost": {
      name: "button-ghost",
      component: React.lazy(
        () => import("@/registry/default/example/button-ghost")
      ),
    },
    "button-danger": {
      name: "button-danger",
      component: React.lazy(
        () => import("@/registry/default/example/button-danger")
      ),
    },
    "button-danger-tertiary": {
      name: "button-danger-tertiary",
      component: React.lazy(
        () => import("@/registry/default/example/button-danger-tertiary")
      ),
    },
    "button-danger-ghost": {
      name: "button-danger-ghost",
      component: React.lazy(
        () => import("@/registry/default/example/button-danger-ghost")
      ),
    },
    "button-sizes": {
      name: "button-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/button-sizes")
      ),
    },
    "button-with-icon": {
      name: "button-with-icon",
      component: React.lazy(
        () => import("@/registry/default/example/button-with-icon")
      ),
    },
    "button-as-child": {
      name: "button-as-child",
      component: React.lazy(
        () => import("@/registry/default/example/button-as-child")
      ),
    },

    // Button Icon examples
    "button-icon-default": {
      name: "button-icon-default",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-default")
      ),
    },
    "button-icon-secondary": {
      name: "button-icon-secondary",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-secondary")
      ),
    },
    "button-icon-ghost": {
      name: "button-icon-ghost",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-ghost")
      ),
    },
    "button-icon-tertiary": {
      name: "button-icon-tertiary",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-tertiary")
      ),
    },
    "button-icon-danger": {
      name: "button-icon-danger",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-danger")
      ),
    },
    "button-icon-danger-tertiary": {
      name: "button-icon-danger-tertiary",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-danger-tertiary")
      ),
    },
    "button-icon-danger-ghost": {
      name: "button-icon-danger-ghost",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-danger-ghost")
      ),
    },
    "button-icon-sizes": {
      name: "button-icon-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/button-icon-sizes")
      ),
    },

    // Checkbox examples
    "checkbox-with-text": {
      name: "checkbox-with-text",
      component: React.lazy(
        () => import("@/registry/default/example/checkbox-with-text")
      ),
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      component: React.lazy(
        () => import("@/registry/default/example/checkbox-disabled")
      ),
    },

    // Dropdown examples
    "dropdown-demo": {
      name: "dropdown-demo",
      component: React.lazy(
        () => import("@/registry/default/example/dropdown-demo")
      ),
    },
    "dropdown-disabled": {
      name: "dropdown-disabled",
      component: React.lazy(
        () => import("@/registry/default/example/dropdown-disabled")
      ),
    },
    "dropdown-readonly": {
      name: "dropdown-readonly",
      component: React.lazy(
        () => import("@/registry/default/example/dropdown-readonly")
      ),
    },
    "dropdown-sizes": {
      name: "dropdown-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/dropdown-sizes")
      ),
    },

    // Input examples
    "input-demo": {
      name: "input-demo",
      component: React.lazy(
        () => import("@/registry/default/example/input-demo")
      ),
    },
    "input-disabled": {
      name: "input-disabled",
      component: React.lazy(
        () => import("@/registry/default/example/input-disabled")
      ),
    },
    "input-sizes": {
      name: "input-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/input-sizes")
      ),
    },
    "input-readonly": {
      name: "input-readonly",
      component: React.lazy(
        () => import("@/registry/default/example/input-readonly")
      ),
    },

    // Link Button examples
    "link-button-demo": {
      name: "link-button-demo",
      component: React.lazy(
        () => import("@/registry/default/example/link-button-demo")
      ),
    },
    "link-button-sizes": {
      name: "link-button-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/link-button-sizes")
      ),
    },
    "link-button-disabled": {
      name: "link-button-disabled",
      component: React.lazy(
        () => import("@/registry/default/example/link-button-disabled")
      ),
    },
    "link-button-inline": {
      name: "link-button-inline",
      component: React.lazy(
        () => import("@/registry/default/example/link-button-inline")
      ),
    },
    "link-button-as-child": {
      name: "link-button-as-child",
      component: React.lazy(
        () => import("@/registry/default/example/link-button-as-child")
      ),
    },

    // Popover examples
    "popover-demo": {
      name: "popover-demo",
      component: React.lazy(
        () => import("@/registry/default/example/popover-demo")
      ),
    },
    "popover-with-form": {
      name: "popover-with-form",
      component: React.lazy(
        () => import("@/registry/default/example/popover-with-form")
      ),
    },

    // Radio Group examples
    "radio-group-demo": {
      name: "radio-group-demo",
      component: React.lazy(
        () => import("@/registry/default/example/radio-group-demo")
      ),
    },
    "radio-group-disabled": {
      name: "radio-group-disabled",
      component: React.lazy(
        () => import("@/registry/default/example/radio-group-disabled")
      ),
    },

    // Tag examples
    "tag-demo": {
      name: "tag-demo",
      component: React.lazy(
        () => import("@/registry/default/example/tag-demo")
      ),
    },
    "tag-colors": {
      name: "tag-colors",
      component: React.lazy(
        () => import("@/registry/default/example/tag-colors")
      ),
    },
    "tag-sizes": {
      name: "tag-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/tag-sizes")
      ),
    },

    // Tooltip examples
    "tooltip-demo": {
      name: "tooltip-demo",
      component: React.lazy(
        () => import("@/registry/default/example/tooltip-demo")
      ),
    },
    "tooltip-sizes": {
      name: "tooltip-sizes",
      component: React.lazy(
        () => import("@/registry/default/example/tooltip-sizes")
      ),
    },

    // Tabs examples
    "tabs-demo": {
      name: "tabs-demo",
      component: React.lazy(
        () => import("@/registry/default/example/tabs-demo")
      ),
    },
    "tabs-contained": {
      name: "tabs-contained",
      component: React.lazy(
        () => import("@/registry/default/example/tabs-contained")
      ),
    },
    "tabs-vertical": {
      name: "tabs-vertical",
      component: React.lazy(
        () => import("@/registry/default/example/tabs-vertical")
      ),
    },
  },
}
