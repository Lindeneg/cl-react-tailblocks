import React from "react";
import { WithoutTheme, WithTheme } from "../types";
import { BlogWithDateItem, BlogWithDateItemProps } from "./BlogWithDateItem";
import { Section } from "../util/Section";

export type BlogWithDateItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogWithDateItemProps, "includeWrapperBg">>;
}>;

export function BlogWithDateItems({
  data,
  theme = "light",
}: BlogWithDateItemsProps) {
  const isDark = theme === "dark";
  return (
    <Section
      theme={theme}
      testId="blog-with-date-section"
      extendClass="overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div
          data-testid="blog-with-date-wrapper"
          className={`-my-8 divide-y-2 divide-gray-${isDark ? "800" : "100"}`}
        >
          {data.map((entry, idx) => (
            <BlogWithDateItem
              {...entry}
              theme={theme}
              includeWrapperBg={false}
              key={entry.label + idx}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
