"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "../registry/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="space-x-1">
      {[
        { value: "light", label: "Light" },
        { value: "dim", label: "Dim" },
        { value: "dark", label: "Dark" },
        { value: "system", label: "System" },
      ].map(({ value, label }) => (
        <Button
          key={value}
          variant={theme === value ? "default" : "tertiary"}
          onClick={() => setTheme(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
