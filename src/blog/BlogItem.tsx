import React from "react";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { Stat, StatProps } from "../util/Stat";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

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
  const cls = getClass.bind(null, theme);
  return (
    <div
      data-testid="blog-item-outer"
      className={cls(
        "p-4 lg:w-1/3",
        "",
        includeWrapperBg ? "text-gray-400 bg-gray-900" : ""
      )}
    >
      <div
        data-testid="blog-item-inner"
        className={cls(
          "h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative",
          "bg-gray-100",
          "bg-gray-800"
        )}
      >
        <h2
          className={cls(
            "tracking-widest text-xs title-font font-medium mb-1",
            "text-gray-400",
            "text-gray-500"
          )}
        >
          {label}
        </h2>
        <h1
          className={cls(
            "title-font sm:text-2xl text-xl font-medium mb-3",
            "text-gray-900",
            "text-white"
          )}
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
