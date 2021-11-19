import React from "react";
import { BlogItem, BlogItemProps } from "./BlogItem";
import { WithTheme, WithoutTheme } from "../types";

export type BlogItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogItemProps, "includeWrapperBg">>;
}>;

export function BlogItems({ data, theme }: BlogItemsProps) {
  return (
    <section
      data-testid="blog-items-section"
      className={`body-font ${
        theme === "dark" ? "text-gray-400 bg-gray-900" : "text-gray-600"
      }`}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((entry, idx) => (
            <BlogItem
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
