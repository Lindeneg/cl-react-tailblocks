import React from "react";
import { BlogItemProps } from "./BlogItem";
import { LearnMore } from "../util/LearnMore";
import { WithTheme, WithoutTheme } from "../types";

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
  theme = "light",
  includeWrapperBg = true,
}: BlogWithDateItemProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={`py-8 flex flex-wrap md:flex-nowrap ${
        isDark && includeWrapperBg ? "text-gray-400 bg-gray-900" : ""
      }`}
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span
          className={`font-semibold title-font ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {label}
        </span>
        <span className="mt-1 text-gray-500 text-sm">
          {date.toLocaleDateString()}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2
          className={`text-2xl font-medium ${
            isDark ? "text-white" : "text-gray-900"
          } title-font mb-2`}
        >
          {title}
        </h2>
        <p className="leading-relaxed">{content}</p>
        {linkNode ? (
          linkNode
        ) : (
          <div className="mt-4">
            <LearnMore onClick={onClick} theme={theme} linkText={linkText} />
          </div>
        )}
      </div>
    </div>
  );
}
