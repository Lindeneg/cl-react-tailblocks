import React from "react";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { WithoutTheme, WithTheme } from "../types";
import { getClass } from "../shared";

export type ContentAItemProps = WithTheme<{
  label: string;
  description: string;
  linkNode?: React.ReactNode;
}> &
  WithoutTheme<LearnMoreProps>;

export function ContentAItem({
  label,
  description,
  linkText,
  onClick,
  linkNode,
  theme = "light",
}: ContentAItemProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div
      className={cls(
        "xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-opacity-60",
        "border-gray-200",
        "border-gray-800"
      )}
    >
      <h2
        className={cls(
          "text-lg sm:text-xl font-medium title-font mb-2",
          "text-gray-900",
          "text-white"
        )}
      >
        {label}
      </h2>
      <p className="leading-relaxed text-base mb-4">{description}</p>
      {linkNode ? (
        linkNode
      ) : (
        <LearnMore theme={theme} onClick={onClick} linkText={linkText} />
      )}
    </div>
  );
}
