import React from "react";
import { WithTheme } from "../types";
import { getClass } from "../shared";

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
      className={getClass(
        theme,
        `body-font ${extendClass}`,
        "text-gray-600",
        "text-gray-400 bg-gray-900"
      )}
    >
      {children}
    </section>
  );
}
