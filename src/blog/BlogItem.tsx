import React from "react";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { Stat, StatProps } from "../util/Stat";
import { WithTheme, WithoutTheme } from "../types";

export type BlogItemProps = WithTheme<{
  label: string;
  title: string;
  content: string;
  linkNode?: React.ReactNode;
  includeWrapperBg?: boolean;
}> &
  WithoutTheme<LearnMoreProps> &
  WithoutTheme<StatProps>;

export function BlogItem({
  label,
  title,
  content,
  linkNode,
  linkText,
  comments,
  views,
  onClick,
  theme = "light",
  includeWrapperBg = true,
}: BlogItemProps) {
  const isDark = theme === "dark";
  return (
    <div
      data-testid="blog-item-outer"
      className={`p-4 lg:w-1/3 ${
        includeWrapperBg && isDark ? "text-gray-400 bg-gray-900" : ""
      }`}
    >
      <div
        data-testid="blog-item-inner"
        className={`h-full bg-gray-${
          isDark ? "800" : "100"
        } bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative`}
      >
        <h2
          className={`tracking-widest text-xs title-font font-medium text-gray-${
            isDark ? "500" : "400"
          } mb-1`}
        >
          {label}
        </h2>
        <h1
          className={`title-font sm:text-2xl text-xl font-medium ${
            isDark ? "text-white" : "text-gray-900"
          } mb-3`}
        >
          {title}
        </h1>
        <p className="leading-relaxed mb-3">{content}</p>
        {linkNode ? (
          linkNode
        ) : (
          <LearnMore onClick={onClick} theme={theme} linkText={linkText} />
        )}
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <div>
            <Stat comments={comments} views={views} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
