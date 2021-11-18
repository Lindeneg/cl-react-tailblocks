import React from "react";
import { WithTheme, WithoutTheme } from "../types";
import { BlogWithImageItem, BlogWithImageItemProps } from "./BlogWithImageItem";

export type BlogWithImageItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogWithImageItemProps, "includeWrapperBg">>;
}>;

export function BlogWithImageItems({ data, theme }: BlogWithImageItemsProps) {
  return (
    <section
      data-testid="blog-with-image-section"
      className={`body-font ${
        theme === "dark" ? "text-gray-400 bg-gray-900" : "text-gray-600"
      }`}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((entry, idx) => (
            <BlogWithImageItem
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
