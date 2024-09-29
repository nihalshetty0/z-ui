import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const { fontFamily } = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "320px",
      md: "672px",
      lg: "800px",
      xl: "1312px",
      "2xl": "1584px", // max
      "3xl": "1784px", // maxPlus
    },
    colors: {
      ...colors,
      gray: {
        10: "hsl(var(--gray-10) / <alpha-value>)",
        20: "hsl(var(--gray-20) / <alpha-value>)",
        30: "hsl(var(--gray-30) / <alpha-value>)",
        40: "hsl(var(--gray-40) / <alpha-value>)",
        50: "hsl(var(--gray-50) / <alpha-value>)",
        60: "hsl(var(--gray-60) / <alpha-value>)",
        70: "hsl(var(--gray-70) / <alpha-value>)",
        80: "hsl(var(--gray-80) / <alpha-value>)",
        90: "hsl(var(--gray-90) / <alpha-value>)",
        100: "hsl(var(--gray-100) / <alpha-value>)",
      },
      "cool-gray": {
        10: "hsl(var(--cool-gray-10) / <alpha-value>)",
        20: "hsl(var(--cool-gray-20) / <alpha-value>)",
        30: "hsl(var(--cool-gray-30) / <alpha-value>)",
        40: "hsl(var(--cool-gray-40) / <alpha-value>)",
        50: "hsl(var(--cool-gray-50) / <alpha-value>)",
        60: "hsl(var(--cool-gray-60) / <alpha-value>)",
        70: "hsl(var(--cool-gray-70) / <alpha-value>)",
        80: "hsl(var(--cool-gray-80) / <alpha-value>)",
        90: "hsl(var(--cool-gray-90) / <alpha-value>)",
        100: "hsl(var(--cool-gray-100) / <alpha-value>)",
      },
      "warm-gray": {
        10: "hsl(var(--warm-gray-10) / <alpha-value>)",
        20: "hsl(var(--warm-gray-20) / <alpha-value>)",
        30: "hsl(var(--warm-gray-30) / <alpha-value>)",
        40: "hsl(var(--warm-gray-40) / <alpha-value>)",
        50: "hsl(var(--warm-gray-50) / <alpha-value>)",
        60: "hsl(var(--warm-gray-60) / <alpha-value>)",
        70: "hsl(var(--warm-gray-70) / <alpha-value>)",
        80: "hsl(var(--warm-gray-80) / <alpha-value>)",
        90: "hsl(var(--warm-gray-90) / <alpha-value>)",
        100: "hsl(var(--warm-gray-100) / <alpha-value>)",
      },
      blue: {
        10: "hsl(var(--blue-10) / <alpha-value>)",
        20: "hsl(var(--blue-20) / <alpha-value>)",
        30: "hsl(var(--blue-30) / <alpha-value>)",
        40: "hsl(var(--blue-40) / <alpha-value>)",
        50: "hsl(var(--blue-50) / <alpha-value>)",
        60: "hsl(var(--blue-60) / <alpha-value>)",
        70: "hsl(var(--blue-70) / <alpha-value>)",
        80: "hsl(var(--blue-80) / <alpha-value>)",
        90: "hsl(var(--blue-90) / <alpha-value>)",
        100: "hsl(var(--blue-100) / <alpha-value>)",
      },
      cyan: {
        10: "hsl(var(--cyan-10) / <alpha-value>)",
        20: "hsl(var(--cyan-20) / <alpha-value>)",
        30: "hsl(var(--cyan-30) / <alpha-value>)",
        40: "hsl(var(--cyan-40) / <alpha-value>)",
        50: "hsl(var(--cyan-50) / <alpha-value>)",
        60: "hsl(var(--cyan-60) / <alpha-value>)",
        70: "hsl(var(--cyan-70) / <alpha-value>)",
        80: "hsl(var(--cyan-80) / <alpha-value>)",
        90: "hsl(var(--cyan-90) / <alpha-value>)",
        100: "hsl(var(--cyan-100) / <alpha-value>)",
      },
      green: {
        10: "hsl(var(--green-10) / <alpha-value>)",
        20: "hsl(var(--green-20) / <alpha-value>)",
        30: "hsl(var(--green-30) / <alpha-value>)",
        40: "hsl(var(--green-40) / <alpha-value>)",
        50: "hsl(var(--green-50) / <alpha-value>)",
        60: "hsl(var(--green-60) / <alpha-value>)",
        70: "hsl(var(--green-70) / <alpha-value>)",
        80: "hsl(var(--green-80) / <alpha-value>)",
        90: "hsl(var(--green-90) / <alpha-value>)",
        100: "hsl(var(--green-100) / <alpha-value>)",
      },
      magenta: {
        10: "hsl(var(--magenta-10) / <alpha-value>)",
        20: "hsl(var(--magenta-20) / <alpha-value>)",
        30: "hsl(var(--magenta-30) / <alpha-value>)",
        40: "hsl(var(--magenta-40) / <alpha-value>)",
        50: "hsl(var(--magenta-50) / <alpha-value>)",
        60: "hsl(var(--magenta-60) / <alpha-value>)",
        70: "hsl(var(--magenta-70) / <alpha-value>)",
        80: "hsl(var(--magenta-80) / <alpha-value>)",
        90: "hsl(var(--magenta-90) / <alpha-value>)",
        100: "hsl(var(--magenta-100) / <alpha-value>)",
      },
      purple: {
        10: "hsl(var(--purple-10) / <alpha-value>)",
        20: "hsl(var(--purple-20) / <alpha-value>)",
        30: "hsl(var(--purple-30) / <alpha-value>)",
        40: "hsl(var(--purple-40) / <alpha-value>)",
        50: "hsl(var(--purple-50) / <alpha-value>)",
        60: "hsl(var(--purple-60) / <alpha-value>)",
        70: "hsl(var(--purple-70) / <alpha-value>)",
        80: "hsl(var(--purple-80) / <alpha-value>)",
        90: "hsl(var(--purple-90) / <alpha-value>)",
        100: "hsl(var(--purple-100) / <alpha-value>)",
      },
      red: {
        10: "hsl(var(--red-10) / <alpha-value>)",
        20: "hsl(var(--red-20) / <alpha-value>)",
        30: "hsl(var(--red-30) / <alpha-value>)",
        40: "hsl(var(--red-40) / <alpha-value>)",
        50: "hsl(var(--red-50) / <alpha-value>)",
        60: "hsl(var(--red-60) / <alpha-value>)",
        70: "hsl(var(--red-70) / <alpha-value>)",
        80: "hsl(var(--red-80) / <alpha-value>)",
        90: "hsl(var(--red-90) / <alpha-value>)",
        100: "hsl(var(--red-100) / <alpha-value>)",
      },
      teal: {
        10: "hsl(var(--teal-10) / <alpha-value>)",
        20: "hsl(var(--teal-20) / <alpha-value>)",
        30: "hsl(var(--teal-30) / <alpha-value>)",
        40: "hsl(var(--teal-40) / <alpha-value>)",
        50: "hsl(var(--teal-50) / <alpha-value>)",
        60: "hsl(var(--teal-60) / <alpha-value>)",
        70: "hsl(var(--teal-70) / <alpha-value>)",
        80: "hsl(var(--teal-80) / <alpha-value>)",
        90: "hsl(var(--teal-90) / <alpha-value>)",
        100: "hsl(var(--teal-100) / <alpha-value>)",
      },
      yellow: {
        10: "hsl(var(--yellow-10) / <alpha-value>)",
        20: "hsl(var(--yellow-20) / <alpha-value>)",
        30: "hsl(var(--yellow-30) / <alpha-value>)",
        40: "hsl(var(--yellow-40) / <alpha-value>)",
        50: "hsl(var(--yellow-50) / <alpha-value>)",
        60: "hsl(var(--yellow-60) / <alpha-value>)",
        70: "hsl(var(--yellow-70) / <alpha-value>)",
        80: "hsl(var(--yellow-80) / <alpha-value>)",
        90: "hsl(var(--yellow-90) / <alpha-value>)",
        100: "hsl(var(--yellow-100) / <alpha-value>)",
      },
      orange: {
        10: "hsl(var(--orange-10) / <alpha-value>)",
        20: "hsl(var(--orange-20) / <alpha-value>)",
        30: "hsl(var(--orange-30) / <alpha-value>)",
        40: "hsl(var(--orange-40) / <alpha-value>)",
        50: "hsl(var(--orange-50) / <alpha-value>)",
        60: "hsl(var(--orange-60) / <alpha-value>)",
        70: "hsl(var(--orange-70) / <alpha-value>)",
        80: "hsl(var(--orange-80) / <alpha-value>)",
        90: "hsl(var(--orange-90) / <alpha-value>)",
        100: "hsl(var(--orange-100) / <alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        /* Background */
        background: {
          DEFAULT: "hsl(var(--background) / <alpha-value>)",
          hover: "hsl(var(--background-hover))",
          active: "hsl(var(--background-active))",
          selected: "hsl(var(--background-selected))",
          "selected-hover": "hsl(var(--background-selected-hover))",
          inverse: "hsl(var(--background-inverse) / <alpha-value>)",
          "inverse-hover":
            "hsl(var(--background-inverse-hover) / <alpha-value>)",
          brand: "hsl(var(--background-brand) / <alpha-value>)",
        },

        /* Layer */
        layer: {
          "01": "hsl(var(--layer-01) / <alpha-value>)",
          "02": "hsl(var(--layer-02) / <alpha-value>)",
          "03": "hsl(var(--layer-03) / <alpha-value>)",
          hover: {
            "01": "hsl(var(--layer-hover-01) / <alpha-value>)",
            "02": "hsl(var(--layer-hover-02) / <alpha-value>)",
            "03": "hsl(var(--layer-hover-03) / <alpha-value>)",
          },
          active: {
            "01": "hsl(var(--layer-active-01) / <alpha-value>)",
            "02": "hsl(var(--layer-active-02) / <alpha-value>)",
            "03": "hsl(var(--layer-active-03) / <alpha-value>)",
          },
          selected: {
            "01": "hsl(var(--layer-selected-01) / <alpha-value>)",
            "02": "hsl(var(--layer-selected-02) / <alpha-value>)",
            "03": "hsl(var(--layer-selected-03) / <alpha-value>)",
          },
          "selected-hover": {
            "01": "hsl(var(--layer-selected-hover-01) / <alpha-value>)",
            "02": "hsl(var(--layer-selected-hover-02) / <alpha-value>)",
            "03": "hsl(var(--layer-selected-hover-03) / <alpha-value>)",
          },
          "selected-inverse":
            "hsl(var(--layer-selected-inverse) / <alpha-value>)",
          "selected-disabled":
            "hsl(var(--layer-selected-disabled) / <alpha-value>)",

          /* Layer Accent */
          accent: {
            "01": "hsl(var(--layer-accent-01) / <alpha-value>)",
            "02": "hsl(var(--layer-accent-02) / <alpha-value>)",
            "03": "hsl(var(--layer-accent-03) / <alpha-value>)",
            hover: {
              "01": "hsl(var(--layer-accent-hover-01) / <alpha-value>)",
              "02": "hsl(var(--layer-accent-hover-02) / <alpha-value>)",
              "03": "hsl(var(--layer-accent-hover-03) / <alpha-value>)",
            },
            active: {
              "01": "hsl(var(--layer-accent-active-01) / <alpha-value>)",
              "02": "hsl(var(--layer-accent-active-02) / <alpha-value>)",
              "03": "hsl(var(--layer-accent-active-03) / <alpha-value>)",
            },
          },
        },

        /* Field */
        field: {
          "01": "hsl(var(--field-01) / <alpha-value>)",
          "02": "hsl(var(--field-02) / <alpha-value>)",
          "03": "hsl(var(--field-03) / <alpha-value>)",
          hover: {
            "01": "hsl(var(--field-hover-01) / <alpha-value>)",
            "02": "hsl(var(--field-hover-02) / <alpha-value>)",
            "03": "hsl(var(--field-hover-03) / <alpha-value>)",
          },
        },

        /* Border */
        edge: {
          interactive: "hsl(var(--border-interactive) / <alpha-value>)",
          "subtle-00": "hsl(var(--border-subtle-00) / <alpha-value>)",
          "subtle-01": "hsl(var(--border-subtle-01) / <alpha-value>)",
          "subtle-02": "hsl(var(--border-subtle-02) / <alpha-value>)",
          "subtle-03": "hsl(var(--border-subtle-03) / <alpha-value>)",
          "subtle-selected-01":
            "hsl(var(--border-subtle-selected-01) / <alpha-value>)",
          "subtle-selected-02":
            "hsl(var(--border-subtle-selected-02) / <alpha-value>)",
          "subtle-selected-03":
            "hsl(var(--border-subtle-selected-03) / <alpha-value>)",
          "strong-01": "hsl(var(--border-strong-01) / <alpha-value>)",
          "strong-02": "hsl(var(--border-strong-02) / <alpha-value>)",
          "strong-03": "hsl(var(--border-strong-03) / <alpha-value>)",
          "tile-01": "hsl(var(--border-tile-01) / <alpha-value>)",
          "tile-02": "hsl(var(--border-tile-02) / <alpha-value>)",
          "tile-03": "hsl(var(--border-tile-03) / <alpha-value>)",
          inverse: "hsl(var(--border-inverse) / <alpha-value>)",
          disabled: "hsl(var(--border-disabled) / var(--border-disabled-opacity))",
        },

        /* Text */
        foreground: {
          primary: "hsl(var(--text-primary) / <alpha-value>)",
          secondary: "hsl(var(--text-secondary) / <alpha-value>)",
          placeholder: "hsl(var(--text-placeholder) / <alpha-value>)",
          "on-color": "hsl(var(--text-on-color) / <alpha-value>)",
          "on-color-disabled":
            "hsl(var(--text-on-color-disabled) / var(--text-on-color-disabled-opacity))",
          helper: "hsl(var(--text-helper) / <alpha-value>)",
          error: "hsl(var(--text-error) / <alpha-value>)",
          inverse: "hsl(var(--text-inverse) / <alpha-value>)",
          disabled: "hsl(var(--text-disabled))",
        },

        /* Link */
        link: {
          primary: "hsl(var(--link-primary) / <alpha-value>)",
          "primary-hover": "hsl(var(--link-primary-hover) / <alpha-value>)",
          secondary: "hsl(var(--link-secondary) / <alpha-value>)",
          visited: "hsl(var(--link-visited) / <alpha-value>)",
          inverse: "hsl(var(--link-inverse) / <alpha-value>)",
        },

        /* Icon */
        icon: {
          primary: "hsl(var(--icon-primary) / <alpha-value>)",
          secondary: "hsl(var(--icon-secondary) / <alpha-value>)",
          "on-color": "hsl(var(--icon-on-color) / <alpha-value>)",
          "on-color-disabled":
            "hsl(var(--icon-on-color-disabled) / <alpha-value>)",
          interactive: "hsl(var(--icon-interactive) / <alpha-value>)",
          inverse: "hsl(var(--icon-inverse) / <alpha-value>)",
          disabled: "hsl(var(--icon-disabled))",
        },

        /* Support */
        support: {
          error: "hsl(var(--support-error) / <alpha-value>)",
          success: "hsl(var(--support-success) / <alpha-value>)",
          warning: "hsl(var(--support-warning) / <alpha-value>)",
          info: "hsl(var(--support-info) / <alpha-value>)",
          "error-inverse": "hsl(var(--support-error-inverse) / <alpha-value>)",
          "success-inverse":
            "hsl(var(--support-success-inverse) / <alpha-value>)",
          "warning-inverse":
            "hsl(var(--support-warning-inverse) / <alpha-value>)",
          "info-inverse": "hsl(var(--support-info-inverse) / <alpha-value>)",
          "caution-major": "hsl(var(--support-caution-major) / <alpha-value>)",
          "caution-minor": "hsl(var(--support-caution-minor) / <alpha-value>)",
          undefined: "hsl(var(--support-undefined) / <alpha-value>)",
        },

        /* Button */
        button: {
          primary: {
            DEFAULT: "hsl(var(--button-primary) / <alpha-value>)",
            hover: "hsl(var(--button-primary-hover) / <alpha-value>)",
            active: "hsl(var(--button-primary-active) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "hsl(var(--button-secondary) / <alpha-value>)",
            hover: "hsl(var(--button-secondary-hover) / <alpha-value>)",
            active: "hsl(var(--button-secondary-active) / <alpha-value>)",
          },
          tertiary: {
            DEFAULT: "hsl(var(--button-tertiary) / <alpha-value>)",
            hover: "hsl(var(--button-tertiary-hover) / <alpha-value>)",
            active: "hsl(var(--button-tertiary-active) / <alpha-value>)",
          },
          danger: {
            primary: "hsl(var(--button-danger-primary) / <alpha-value>)",
            secondary: "hsl(var(--button-danger-secondary) / <alpha-value>)",
            hover: "hsl(var(--button-danger-hover) / <alpha-value>)",
            active: "hsl(var(--button-danger-active) / <alpha-value>)",
          },
          separator: "hsl(var(--button-separator) / <alpha-value>)",
          disabled: "hsl(var(--button-disabled) / <alpha-value>)",
        },

        /* Focus */
        focus: {
          DEFAULT: "hsl(var(--blue-60) / <alpha-value>)",
          inset: "hsl(var(--white) / <alpha-value>)",
          inverse: "hsl(var(--white) / <alpha-value>)",
        },

        /* Tag */
        tag: {
          "background-gray": "hsl(var(--tag-background-gray) / <alpha-value>)",
          "color-gray": "hsl(var(--tag-color-gray) / <alpha-value>)",
          "hover-gray": "hsl(var(--tag-hover-gray) / <alpha-value>)",
          "border-gray": "hsl(var(--tag-border-gray) / <alpha-value>)",

          "background-cool-gray":
            "hsl(var(--tag-background-cool-gray) / <alpha-value>)",
          "color-cool-gray": "hsl(var(--tag-color-cool-gray) / <alpha-value>)",
          "hover-cool-gray": "hsl(var(--tag-hover-cool-gray) / <alpha-value>)",
          "border-cool-gray":
            "hsl(var(--tag-border-cool-gray) / <alpha-value>)",

          "background-warm-gray":
            "hsl(var(--tag-background-warm-gray) / <alpha-value>)",
          "color-warm-gray": "hsl(var(--warm-gray-100) / <alpha-value>)",
          "hover-warm-gray": "hsl(var(--warm-gray-20-hover) / <alpha-value>)",
          "border-warm-gray": "hsl(var(--warm-gray-40) / <alpha-value>)",

          "background-red": "hsl(var(--tag-background-red) / <alpha-value>)",
          "color-red": "hsl(var(--tag-color-red) / <alpha-value>)",
          "hover-red": "hsl(var(--tag-hover-red) / <alpha-value>)",
          "border-red": "hsl(var(--tag-border-red) / <alpha-value>)",

          "background-magenta":
            "hsl(var(--tag-background-magenta) / <alpha-value>)",
          "color-magenta": "hsl(var(--tag-color-magenta) / <alpha-value>)",
          "hover-magenta": "hsl(var(--tag-hover-magenta) / <alpha-value>)",
          "border-magenta": "hsl(var(--tag-border-magenta) / <alpha-value>)",

          "background-purple":
            "hsl(var(--tag-background-purple) / <alpha-value>)",
          "color-purple": "hsl(var(--tag-color-purple) / <alpha-value>)",
          "hover-purple": "hsl(var(--tag-hover-purple) / <alpha-value>)",
          "border-purple": "hsl(var(--tag-border-purple) / <alpha-value>)",

          "background-blue": "hsl(var(--tag-background-blue) / <alpha-value>)",
          "color-blue": "hsl(var(--tag-color-blue) / <alpha-value>)",
          "hover-blue": "hsl(var(--tag-hover-blue) / <alpha-value>)",
          "border-blue": "hsl(var(--tag-border-blue) / <alpha-value>)",

          "background-cyan": "hsl(var(--tag-background-cyan) / <alpha-value>)",
          "color-cyan": "hsl(var(--tag-color-cyan) / <alpha-value>)",
          "hover-cyan": "hsl(var(--tag-hover-cyan) / <alpha-value>)",
          "border-cyan": "hsl(var(--tag-border-cyan) / <alpha-value>)",

          "background-teal": "hsl(var(--tag-background-teal) / <alpha-value>)",
          "color-teal": "hsl(var(--tag-color-teal) / <alpha-value>)",
          "hover-teal": "hsl(var(--tag-hover-teal) / <alpha-value>)",
          "border-teal": "hsl(var(--tag-border-teal) / <alpha-value>)",

          "background-green":
            "hsl(var(--tag-background-green) / <alpha-value>)",
          "color-green": "hsl(var(--tag-color-green) / <alpha-value>)",
          "hover-green": "hsl(var(--tag-hover-green) / <alpha-value>)",
          "border-green": "hsl(var(--tag-border-green) / <alpha-value>)",
        },

        /* Misc Colors */
        interactive: "hsl(var(--interactive) / <alpha-value>)",
        highlight: "hsl(var(--highlight) / <alpha-value>)",
        overlay: "hsl(var(--overlay))",
        "skeleton-background":
          "hsl(var(--skeleton-background) / <alpha-value>)",
        "skeleton-element": "hsl(var(--skeleton-element) / <alpha-value>)",
        "toggle-off": "hsl(var(--toggle-off) / <alpha-value>)",
      },

      boxShadow: {
        popover: "0 2px 2px 0px rgba(0, 0, 0, 0.2)",
        input:
          "inset 0 2px 0 0 hsl(var(--focus)), inset -2px 0 0 0 hsl(var(--focus)), inset 2px 0 0 0 hsl(var(--focus)), inset 0 -1px 0 0 hsl(var(--focus))",
        "input-invalid":
          "inset 0 2px 0 0 hsl(var(--red-60)), inset -2px 0 0 0 hsl(var(--red-60)), inset 2px 0 0 0 hsl(var(--red-60)), inset 0 -1px 0 0 hsl(var(--red-60))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities, addComponents }) => {
      addUtilities({
        // body styles
        ".body-compact-01": {
          "font-size": "0.875rem",
          "line-height": "1.125rem",
          "font-weight": "400",
          "letter-spacing": "0.16px",
        },
        ".body-compact-02": {
          "font-size": "1rem",
          "line-height": "1.375rem",
          "font-weight": "400",
          "letter-spacing": "0px",
        },
        ".body-01": {
          "font-size": "0.875rem",
          "line-height": "1.25rem",
          "font-weight": "400",
          "letter-spacing": "0.16px",
        },
        ".body-02": {
          "font-size": "1rem",
          "line-height": "1.5rem",
          "font-weight": "400",
          "letter-spacing": "0px",
        },
        // utility styles
        ".code-01": {
          "font-family": "var(--font-mono)",
          "font-size": "0.75rem",
          "line-height": "1rem",
          "font-weight": "400",
          "letter-spacing": "0.32px",
        },
        ".code-02": {
          "font-family": "var(--font-mono)",
          "font-size": "0.875rem",
          "line-height": "1.25rem",
          "font-weight": "400",
          "letter-spacing": "0.32px",
        },
        ".label-01": {
          "font-size": "0.75rem",
          "line-height": "1rem",
          "font-weight": "400",
          "letter-spacing": "0.32px",
        },
        ".label-02": {
          "font-size": "0.875rem",
          "line-height": "1.125rem",
          "font-weight": "400",
          "letter-spacing": "0.16px",
        },
        ".helper-text-01": {
          "font-size": "0.75rem",
          "line-height": "1rem",
          "font-weight": "400",
          "letter-spacing": "0.32px",
        },
        ".helper-text-02": {
          "font-size": "0.875rem",
          "line-height": "1.125rem",
          "font-weight": "400",
          "letter-spacing": "0.16px",
        },
        ".legal-01": {
          "font-size": "0.75rem",
          "line-height": "1rem",
          "font-weight": "400",
          "letter-spacing": "0.32px",
        },
        ".legal-02": {
          "font-size": "0.875rem",
          "line-height": "1.125rem",
          "font-weight": "400",
          "letter-spacing": "0.16px",
        },
        // fixed heading styles
        ".heading-compact-01": {
          "font-size": "0.875rem", // 14px
          "line-height": "1.125rem", // 18px
          "font-weight": "600",
          "letter-spacing": "0.16px",
        },
        ".heading-compact-02": {
          "font-size": "1rem", // 16px
          "line-height": "1.375rem", // 22px
          "font-weight": "600",
          "letter-spacing": "0px",
        },
        ".heading-01": {
          "font-size": "0.875rem", // 14px
          "line-height": "1.25rem", // 20px
          "font-weight": "600",
          "letter-spacing": "0.16px",
        },
        ".heading-02": {
          "font-size": "1rem", // 16px
          "line-height": "1.5rem", // 24px
          "font-weight": "600",
          "letter-spacing": "0px",
        },
        ".heading-03": {
          "font-size": "1.25rem", // 20px
          "line-height": "1.75rem", // 28px
          "font-weight": "400",
          "letter-spacing": "0px",
        },
        ".heading-04": {
          "font-size": "1.75rem", // 28px
          "line-height": "2.25rem", // 36px
          "font-weight": "400",
          "letter-spacing": "0px",
        },
        ".heading-05": {
          "font-size": "2rem", // 32px
          "line-height": "2.5rem", // 40px
          "font-weight": "300",
          "letter-spacing": "0px",
        },
        ".heading-06": {
          "font-size": "2.625rem", // 42px
          "line-height": "3.125rem", // 50px
          "font-weight": "300",
          "letter-spacing": "0px",
        },
        ".heading-07": {
          "font-size": "3.375rem", // 54px
          "line-height": "4rem", // 64px
          "font-weight": "300",
          "letter-spacing": "0px",
        },

        ".accordion-focus-outline": {
          boxShadow: `0 -1px 0 0 hsl(var(--focus)), 
                      inset 0 1px 0 0 hsl(var(--focus)), 
                      inset 2px 0 0 0 hsl(var(--focus)), 
                      0 1px 0 0 hsl(var(--focus)), 
                      inset 0 -1px 0 0 hsl(var(--focus)), 
                      inset -2px 0 0 0 hsl(var(--focus))`,
          position: "relative",
          zIndex: "2",
        },
      });

      addComponents({
        ".fluid-heading-03": {
          fontSize: "1.25rem", // 20px
          lineHeight: "1.75rem", // 28px
          fontWeight: "400",
          letterSpacing: "0px",
        },
        ".fluid-heading-04": {
          fontSize: "1.75rem", // 28px
          lineHeight: "2.25rem", // 36px
          fontWeight: "400",
          letterSpacing: "0px",
          "@screen xl": {
            fontSize: "2rem", // 32px
            lineHeight: "2.5rem", // 40px
            fontWeight: "300",
          },
        },
        ".fluid-heading-05": {
          fontSize: "2rem", // 32px
          lineHeight: "2.5rem", // 40px
          fontWeight: "300",
          letterSpacing: "0px",
          "@screen md": {
            fontSize: "2.25rem", // 36px
            lineHeight: "2.75rem", // 44px
          },
          "@screen lg": {
            fontSize: "2.625rem", // 42px
            lineHeight: "3.125rem", // 50px
          },
          "@screen xl": {
            fontSize: "3rem", // 48px
            lineHeight: "3.5rem", // 56px
          },
          "@screen 2xl": {
            fontSize: "3.75rem", // 60px
            lineHeight: "4.375rem", // 70px
          },
        },
        ".fluid-heading-06": {
          fontSize: "2rem", // 32px
          lineHeight: "2.5rem", // 40px
          fontWeight: "600",
          letterSpacing: "0px",
          "@screen md": {
            fontSize: "2.25rem", // 36px
            lineHeight: "2.75rem", // 44px
          },
          "@screen lg": {
            fontSize: "2.625rem", // 42px
            lineHeight: "3.125rem", // 50px
          },
          "@screen xl": {
            fontSize: "3rem", // 48px
            lineHeight: "3.5rem", // 56px
          },
          "@screen 2xl": {
            fontSize: "3.75rem", // 60px
            lineHeight: "4.375rem", // 70px
          },
        },
        ".fluid-paragraph-01": {
          fontSize: "1.5rem", // 24px
          lineHeight: "1.875rem", // 30px
          fontWeight: "300",
          letterSpacing: "0px",
          "@screen lg": {
            fontSize: "1.75rem", // 28px
            lineHeight: "2.25rem", // 36px
          },
          "@screen 2xl": {
            fontSize: "2rem", // 32px
            lineHeight: "2.5rem", // 40px
          },
        },
        ".fluid-quotation-01": {
          fontSize: "1.25rem", // 20px
          lineHeight: "1.625rem", // 26px
          fontWeight: "400",
          letterSpacing: "0px",
          "@screen lg": {
            fontSize: "1.5rem", // 24px
            lineHeight: "1.875rem", // 30px
          },
          "@screen xl": {
            fontSize: "1.75rem", // 28px
            lineHeight: "2.25rem", // 36px
            fontWeight: "300",
          },
          "@screen 2xl": {
            fontSize: "2rem", // 32px
            lineHeight: "2.5rem", // 40px
          },
        },
        ".fluid-quotation-02": {
          fontSize: "2rem", // 32px
          lineHeight: "2.5rem", // 40px
          fontWeight: "300",
          letterSpacing: "0px",
          "@screen md": {
            fontSize: "2.25rem", // 36px
            lineHeight: "2.75rem", // 44px
          },
          "@screen lg": {
            fontSize: "2.625rem", // 42px
            lineHeight: "3.125rem", // 50px
          },
          "@screen xl": {
            fontSize: "3rem", // 48px
            lineHeight: "3.5rem", // 56px
          },
          "@screen 2xl": {
            fontSize: "3.75rem", // 60px
            lineHeight: "4.375rem", // 70px
          },
        },
        ".fluid-display-01": {
          fontSize: "2.625rem", // 42px
          lineHeight: "3.125rem", // 50px
          fontWeight: "300",
          letterSpacing: "0px",
          "@screen lg": {
            fontSize: "3.375rem",
            lineHeight: "4rem",
          },
          "@screen xl": {
            fontSize: "3.75rem", // 60px
            lineHeight: "4.375rem", // 70px
          },
          "@screen 2xl": {
            fontSize: "4.75rem", // 76px
            lineHeight: "5.375rem", // 86px
          },
        },
        ".fluid-display-02": {
          fontSize: "2.625rem", // 42px
          lineHeight: "3.125rem", // 50px
          fontWeight: "600",
          letterSpacing: "0px",
          "@screen lg": {
            fontSize: "3.375rem", // 54px
            lineHeight: "4rem", // 64px
          },
          "@screen xl": {
            fontSize: "3.75rem", // 60px
            lineHeight: "4.375rem", // 70px
          },
          "@screen 2xl": {
            fontSize: "4.75rem", // 76px
            lineHeight: "5.375rem", // 86px
          },
        },
        ".fluid-display-03": {
          fontSize: "2.625rem", // 42px
          lineHeight: "3.125rem", // 50px
          fontWeight: "300",
          letterSpacing: "0px",
          "@screen md": {
            fontSize: "3.375rem", // 54px
            lineHeight: "4rem", // 64px
          },
          "@screen lg": {
            fontSize: "3.75rem", // 60px
            lineHeight: "4.375rem", // 70px
          },
          "@screen xl": {
            fontSize: "4.75rem", // 76px
            lineHeight: "5.375rem", // 86px
          },
          "@screen 2xl": {
            fontSize: "5.25rem", // 84px
            lineHeight: "5.875rem", // 94px
          },
        },
        ".fluid-display-04": {
          fontSize: "2.625rem", // 42px
          lineHeight: "3.125rem", // 50px
          fontWeight: "300",
          letterSpacing: "0px",
          "@screen md": {
            fontSize: "4.25rem", // 68px
            lineHeight: "4.875rem", // 78px
          },
          "@screen lg": {
            fontSize: "5.75rem", // 92px
            lineHeight: "6.375rem", // 102px
            letterSpacing: "-0.64px",
          },
          "@screen xl": {
            fontSize: "7.625rem", // 122px
            lineHeight: "8.125rem", // 130px
          },
          "@screen 2xl": {
            fontSize: "9.75rem", // 156px
            lineHeight: "10.25rem", // 164px
            letterSpacing: "-0.96px",
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
