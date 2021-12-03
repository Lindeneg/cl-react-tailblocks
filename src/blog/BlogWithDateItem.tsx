import React from "react";
import { BlogItemProps } from "./BlogItem";
import { LearnMore } from "../util/LearnMore";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type BlogWithDateItemProps = WithTheme<{
  date: Date;
}> &
  WithoutTheme<BlogItemProps, "views" | "comments">;

export function BlogWithDateItem({
  label,
  title,
  content,
  date,
  linkNode,
  linkText,
  onClick,
  includeWrapperBg = true,
  ...props
}: BlogWithDateItemProps) {
  const { theme, color } = useMaybeTheme(props);
  const cls = getClass.bind(null, theme);
  return (
    <div
      data-testid="blog-date-item-outer"
      className={cls(
        "py-8 flex flex-wrap md:flex-nowrap",
        "",
        includeWrapperBg ? "text-gray-400 bg-gray-900" : ""
      )}
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span
          className={cls(
            "font-semibold title-font",
            "text-gray-700",
            "text-white"
          )}
        >
          {label}
        </span>
        <span className="mt-1 text-gray-500 text-sm">
          {date.toLocaleDateString()}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2
          className={cls(
            "text-2xl font-medium title-font mb-2",
            "text-gray-900",
            "text-white"
          )}
        >
          {title}
        </h2>
        <p className="leading-relaxed">{content}</p>
        <div className="mt-4">
          <LearnMore
            onClick={onClick}
            theme={theme}
            color={color}
            linkText={linkText}
            linkNode={linkNode}
          />
        </div>
      </div>
    </div>
  );
}
