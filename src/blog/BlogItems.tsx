import React from "react";
import { Section } from "../util/Section";
import { BlogItem, BlogItemProps } from "./BlogItem";
import { WithTheme, WithoutTheme } from "../types";

export type BlogItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogItemProps, "includeWrapperBg">>;
}>;

export function BlogItems({
  data,
  theme = "light",
  color = "indigo",
}: BlogItemsProps) {
  return (
    <Section theme={theme} testId="blog-items-section">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((entry, idx) => (
            <BlogItem
              {...entry}
              theme={theme}
              color={color}
              includeWrapperBg={false}
              key={entry.label + idx}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
