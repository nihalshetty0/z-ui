import type { Preview } from "@storybook/react";

import "../app/globals.css";
import React from "react";

import { fontSans, fontMono } from "../lib/fonts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`font-sans ${fontSans.variable} ${fontMono.variable} `}>
        <Story />
      </div>
    ),
  ],
} satisfies Preview;

export default preview;
