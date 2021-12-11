import React from "react";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
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
  ...props
}: SectionProps) {
  const { theme } = useMaybeTheme(props);
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

export function FooterSection({
  children,
  testId = "footer-test-id",
  extendClass = "",
  ...props
}: SectionProps) {
  const { theme } = useMaybeTheme(props);
  return (
    <footer
      data-testid={testId}
      className={getClass(
        theme,
        `body-font ${extendClass}`,
        "text-gray-600",
        "text-gray-400 bg-gray-900"
      )}
    >
      {children}
    </footer>
  );
}

export function HeaderSection({
  children,
  testId = "header-test-id",
  extendClass = "",
  ...props
}: SectionProps) {
  const { theme } = useMaybeTheme(props);
  return (
    <header
      data-testid={testId}
      className={getClass(
        theme,
        `body-font ${extendClass}`,
        "text-gray-600",
        "text-gray-400 bg-gray-900"
      )}
    >
      {children}
    </header>
  );
}
