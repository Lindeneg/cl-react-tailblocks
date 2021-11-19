import React from "react";
import {
  BlogWithAvatarItem,
  BlogWithAvatarItemProps,
} from "./BlogWithAvatarItem";
import { WithTheme, WithoutTheme } from "../types";

export type BlogWithAvatarItemsProps = WithTheme<{
  data: Array<WithoutTheme<BlogWithAvatarItemProps, "includeWrapperBg">>;
}>;

export function BlogWithAvatarItems({ data, theme }: BlogWithAvatarItemsProps) {
  return (
    <section
      className={`${
        theme === "dark" ? "text-gray-400 bg-gray-900" : "text-gray-600"
      } body-font overflow-hidden`}
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
    </section>
  );
}
