import React from "react";
import { WithTheme } from "../types";

// TODO stories | tests

export type SectionProps = WithTheme<{
  children: React.ReactNode;
  testId?: string;
  extendClass?: string;
}>;

export function Section({
  children,
  testId = "section-test-id",
  extendClass = "",
  theme = "light",
}: SectionProps) {
  return (
    <section
      data-testid={testId}
      className={`${
        theme === "dark" ? "text-gray-400 bg-gray-900" : "text-gray-600"
      } body-font ${extendClass}`}
    >
      {children}
    </section>
  );
}
