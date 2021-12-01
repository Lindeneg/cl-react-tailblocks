import React from "react";
import { WithTheme, WithoutTheme } from "../types";
import { BlogWithImageItem, BlogWithImageItemProps } from "./BlogWithImageItem";
import { Section } from "../util/Section";
import { useMaybeTheme } from "../hooks/useMaybeTheme";

export type BlogWithImageItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogWithImageItemProps, "includeWrapperBg">>;
}>;

export function BlogWithImageItems({
  data,
  ...props
}: BlogWithImageItemsProps) {
  const { theme, color } = useMaybeTheme(props);
  return (
    <Section theme={theme} testId="blog-with-image-section">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((entry, idx) => (
            <BlogWithImageItem
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
