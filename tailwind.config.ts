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
        10: "var(--gray-10)",
        20: "var(--gray-20)",
        30: "var(--gray-30)",
        40: "var(--gray-40)",
        50: "var(--gray-50)",
        60: "var(--gray-60)",
        70: "var(--gray-70)",
        80: "var(--gray-80)",
        90: "var(--gray-90)",
        100: "var(--gray-100)",
      },
      "cool-gray": {
        10: "var(--cool-gray-10)",
        20: "var(--cool-gray-20)",
        30: "var(--cool-gray-30)",
        40: "var(--cool-gray-40)",
        50: "var(--cool-gray-50)",
        60: "var(--cool-gray-60)",
        70: "var(--cool-gray-70)",
        80: "var(--cool-gray-80)",
        90: "var(--cool-gray-90)",
        100: "var(--cool-gray-100)",
      },
      "warm-gray": {
        10: "var(--warm-gray-10)",
        20: "var(--warm-gray-20)",
        30: "var(--warm-gray-30)",
        40: "var(--warm-gray-40)",
        50: "var(--warm-gray-50)",
        60: "var(--warm-gray-60)",
        70: "var(--warm-gray-70)",
        80: "var(--warm-gray-80)",
        90: "var(--warm-gray-90)",
        100: "var(--warm-gray-100)",
      },
      blue: {
        10: "var(--blue-10)",
        20: "var(--blue-20)",
        30: "var(--blue-30)",
        40: "var(--blue-40)",
        50: "var(--blue-50)",
        60: "var(--blue-60)",
        70: "var(--blue-70)",
        80: "var(--blue-80)",
        90: "var(--blue-90)",
        100: "var(--blue-100)",
      },
      cyan: {
        10: "var(--cyan-10)",
        20: "var(--cyan-20)",
        30: "var(--cyan-30)",
        40: "var(--cyan-40)",
        50: "var(--cyan-50)",
        60: "var(--cyan-60)",
        70: "var(--cyan-70)",
        80: "var(--cyan-80)",
        90: "var(--cyan-90)",
        100: "var(--cyan-100)",
      },
      green: {
        10: "var(--green-10)",
        20: "var(--green-20)",
        30: "var(--green-30)",
        40: "var(--green-40)",
        50: "var(--green-50)",
        60: "var(--green-60)",
        70: "var(--green-70)",
        80: "var(--green-80)",
        90: "var(--green-90)",
        100: "var(--green-100)",
      },
      magenta: {
        10: "var(--magenta-10)",
        20: "var(--magenta-20)",
        30: "var(--magenta-30)",
        40: "var(--magenta-40)",
        50: "var(--magenta-50)",
        60: "var(--magenta-60)",
        70: "var(--magenta-70)",
        80: "var(--magenta-80)",
        90: "var(--magenta-90)",
        100: "var(--magenta-100)",
      },
      purple: {
        10: "var(--purple-10)",
        20: "var(--purple-20)",
        30: "var(--purple-30)",
        40: "var(--purple-40)",
        50: "var(--purple-50)",
        60: "var(--purple-60)",
        70: "var(--purple-70)",
        80: "var(--purple-80)",
        90: "var(--purple-90)",
        100: "var(--purple-100)",
      },
      red: {
        10: "var(--red-10)",
        20: "var(--red-20)",
        30: "var(--red-30)",
        40: "var(--red-40)",
        50: "var(--red-50)",
        60: "var(--red-60)",
        70: "var(--red-70)",
        80: "var(--red-80)",
        90: "var(--red-90)",
        100: "var(--red-100)",
      },
      teal: {
        10: "var(--teal-10)",
        20: "var(--teal-20)",
        30: "var(--teal-30)",
        40: "var(--teal-40)",
        50: "var(--teal-50)",
        60: "var(--teal-60)",
        70: "var(--teal-70)",
        80: "var(--teal-80)",
        90: "var(--teal-90)",
        100: "var(--teal-100)",
      },
      yellow: {
        10: "var(--yellow-10)",
        20: "var(--yellow-20)",
        30: "var(--yellow-30)",
        40: "var(--yellow-40)",
        50: "var(--yellow-50)",
        60: "var(--yellow-60)",
        70: "var(--yellow-70)",
        80: "var(--yellow-80)",
        90: "var(--yellow-90)",
        100: "var(--yellow-100)",
      },
      orange: {
        10: "var(--orange-10)",
        20: "var(--orange-20)",
        30: "var(--orange-30)",
        40: "var(--orange-40)",
        50: "var(--orange-50)",
        60: "var(--orange-60)",
        70: "var(--orange-70)",
        80: "var(--orange-80)",
        90: "var(--orange-90)",
        100: "var(--orange-100)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        // text
        foreground: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          placeholder: "var(--text-placeholder)",
          "on-color": "var(--text-on-color)",
          "on-color-disabled": "var(--text-on-color-disabled)",
          helper: "var(--text-helper)",
          error: "var(--text-error)",
          inverse: "var(--text-inverse)",
          disabled: "#C5C5C5",
        },

        // border
        edge: {
          interactive: "var(--blue-60)",
          "subtle-00": "var(--gray-20)",
          "subtle-01": "var(--gray-30)",
          "subtle-02": "var(--gray-20)",
          "subtle-03": "var(--gray-30)",
          "subtle-selected-01": "var(--gray-30)",
          "subtle-selected-02": "var(--gray-30)",
          "subtle-selected-03": "var(--blue-40)",
          "strong-01": "var(--gray-50)",
          "strong-02": "var(--gray-50)",
          "strong-03": "var(--gray-50)",
          "tile-01": "var(--gray-30)",
          "tile-02": "var(--gray-40)",
          "tile-03": "var(--gray-30)",
          inverse: "var(--gray-100)",
          disabled: "var(--gray-30)",
        },

        // background
        background: {
          DEFAULT: "var(--background)",
          hover: "var(--background-hover)",
          active: "var(--background-active)",
          selected: "var(--background-selected)",
          "selected-hover": "var(--background-selected-hover)",
          inverse: "var(--background-inverse)",
          "inverse-hover": "var(--background-inverse-hover)",
          brand: "var(--background-brand)",
        },

        // layer colors
        layer: {
          "01": "var(--layer-01)",
          "02": "var(--layer-02)",
          "03": "var(--layer-03)",
          hover: {
            "01": "var(--layer-hover-01)",
            "02": "var(--layer-hover-02)",
            "03": "var(--layer-hover-03)",
          },
          active: {
            "01": "var(--layer-active-01)",
            "02": "var(--layer-active-02)",
            "03": "var(--layer-active-03)",
          },
          selected: {
            "01": "var(--layer-selected-01)",
            "02": "var(--layer-selected-02)",
            "03": "var(--layer-selected-03)",
          },
          "selected-hover": {
            "01": "var(--layer-selected-hover-01)",
            "02": "var(--layer-selected-hover-02)",
            "03": "var(--layer-selected-hover-03)",
          },
          "selected-inverse": "var(--layer-selected-inverse)",
          "selected-disabled": "var(--layer-selected-disabled)",

          // layer accent colors
          accent: {
            "01": "var(--gray-20)",
            "02": "var(--gray-20)",
            "03": "var(--gray-20)",
            hover: {
              "01": "#cacaca",
              "02": "#cacaca",
              "03": "#cacaca",
            },
            active: {
              "01": "var(--gray-40)",
              "02": "var(--gray-40)",
              "03": "var(--gray-40)",
            },
          },
        },

        // link colors
        link: {
          primary: "var(--link-primary)",
          "primary-hover": "var(--link-primary-hover)",
          secondary: "var(--link-secondary)",
          visited: "var(--link-visited)",
          inverse: "var(--link-inverse)",
        },

        // button colors
        button: {
          primary: {
            DEFAULT: "var(--button-primary)",
            hover: "var(--button-primary-hover)",
            active: "var(--button-primary-active)",
          },
          secondary: {
            DEFAULT: "var(--button-secondary)",
            hover: "var(--button-secondary-hover)",
            active: "var(--button-secondary-active)",
          },
          tertiary: {
            DEFAULT: "var(--button-tertiary)",
            hover: "var(--button-tertiary-hover)",
            active: "var(--button-tertiary-active)",
          },
          danger: {
            primary: "var(--button-danger-primary)",
            secondary: "var(--button-danger-secondary)",
            hover: "var(--button-danger-hover)",
            active: "var(--button-danger-active)",
          },
          separator: "var(--button-separator)",
          disabled: "var(--button-disabled)",
        },

        // icon colors
        icon: {
          primary: "var(--gray-100)",
          secondary: "var(--gray-70)",
          "on-color": "var(--white)",
          "on-color-disabled": "var(--gray-50)",
          interactive: "var(--blue-60)",
          inverse: "var(--white)",
          disabled: "#C5C5C5",
        },

        // support colors
        support: {
          error: "var(--red-60)",
          success: "var(--green-50)",
          warning: "var(--yellow-30)",
          info: "var(--blue-70)",
          "error-inverse": "var(--red-50)",
          "success-inverse": "var(--green-40)",
          "warning-inverse": "var(--yellow-30)",
          "info-inverse": "var(--blue-50)",
          "caution-major": "var(--orange-40)",
          "caution-minor": "var(--yellow-30)",
          undefined: "var(--purple-60)",
        },

        // tag colors
        tag: {
          "background-gray": "var(--gray-20)",
          "color-gray": "var(--gray-100)",
          "hover-gray": "#d1d1d1",
          "border-gray": "var(--gray-40)",

          "background-cool-gray": "var(--cool-gray-20)",
          "color-cool-gray": "var(--cool-gray-100)",
          "hover-cool-gray": "#cdd3da",
          "border-cool-gray": "var(--cool-gray-40)",

          "background-warm-gray": "var(--warm-gray-20)",
          "color-warm-gray": "var(--warm-gray-100)",
          "hover-warm-gray": "#d8d0cf",
          "border-warm-gray": "var(--warm-gray-40)",

          "background-red": "var(--red-20)",
          "color-red": "var(--red-70)",
          "hover-red": "#ffc2c5",
          "border-red": "var(--red-40)",

          "background-magenta": "var(--magenta-20)",
          "color-magenta": "var(--magenta-70)",
          "hover-magenta": "#ffbdda",
          "border-magenta": "var(--magenta-40)",

          "background-purple": "var(--purple-20)",
          "color-purple": "var(--purple-70)",
          "hover-purple": "#dcc7ff",
          "border-purple": "var(--purple-40)",

          "background-blue": "var(--blue-20)",
          "color-blue": "var(--blue-70)",
          "hover-blue": "#b8d3ff",
          "border-blue": "var(--blue-40)",

          "background-cyan": "var(--cyan-20)",
          "color-cyan": "var(--cyan-70)",
          "hover-cyan": "#99daff",
          "border-cyan": "var(--cyan-40)",

          "background-teal": "var(--teal-20)",
          "color-teal": "var(--teal-70)",
          "hover-teal": "#57e5e5",
          "border-teal": "var(--teal-40)",

          "background-green": "var(--green-20)",
          "color-green": "var(--green-70)",
          "hover-green": "#74e792",
          "border-green": "var(--green-40)",
        },

        // focus color
        focus: {
          DEFAULT: "var(--focus)",
          inset: "var(--focus-inset)",
          inverse: "var(--focus-inverse)",
        },

        // miscellaneous colors
        interactive: "var(--blue-60)",
        highlight: "var(--blue-20)",
        overlay: "var(--gray-100)",
        "skeleton-background": "#e5e5e5",
        "skeleton-element": "var(--gray-30)",
        "toggle-off": "var(--gray-50)",
      },

      boxShadow: {
        popover: "0 2px 2px 0px rgba(0, 0, 0, 0.2)",
        input:
          "inset 0 2px 0 0 var(--focus), inset -2px 0 0 0 var(--focus), inset 2px 0 0 0 var(--focus), inset 0 -1px 0 0 var(--focus)",
        "input-invalid":
          "inset 0 2px 0 0 var(--red-60), inset -2px 0 0 0 var(--red-60), inset 2px 0 0 0 var(--red-60), inset 0 -1px 0 0 var(--red-60)",
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
          boxShadow: `0 -1px 0 0 var(--focus), 
                      inset 0 1px 0 0 var(--focus), 
                      inset 2px 0 0 0 var(--focus), 
                      0 1px 0 0 var(--focus), 
                      inset 0 -1px 0 0 var(--focus), 
                      inset -2px 0 0 0 var(--focus)`,
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
