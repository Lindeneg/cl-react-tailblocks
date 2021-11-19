import React from "react";
import { WithoutTheme, WithTheme } from "../types";
import { BlogWithDateItem, BlogWithDateItemProps } from "./BlogWithDateItem";

export type BlogWithDateItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogWithDateItemProps, "includeWrapperBg">>;
}>;

export function BlogWithDateItems({
  data,
  theme = "light",
}: BlogWithDateItemsProps) {
  const isDark = theme === "dark";
  return (
    <section
      className={`${
        isDark ? "text-gray-400 bg-gray-900" : "text-gray-600"
      } body-font overflow-hidden`}
    >
      <div className="container px-5 py-24 mx-auto">
        <div
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
    </section>
  );
}
