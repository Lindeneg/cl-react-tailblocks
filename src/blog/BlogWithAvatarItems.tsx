import React from "react";
import {
  BlogWithAvatarItem,
  BlogWithAvatarItemProps,
} from "./BlogWithAvatarItem";
import { Section } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";

export type BlogWithAvatarItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogWithAvatarItemProps, "includeWrapperBg">>;
}>;

export function BlogWithAvatarItems({
  data,
  theme = "light",
}: BlogWithAvatarItemsProps) {
  return (
    <Section
      theme={theme}
      testId="blog-with-avatar-section"
      extendClass="overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {data.map((entry, idx) => (
            <BlogWithAvatarItem
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
