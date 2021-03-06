import React from "react";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithoutTheme, WithTheme } from "../types";
import { getClass } from "../shared";

export type ContentItemProps = WithTheme<{
  label: string;
  description: string;
}> &
  WithoutTheme<LearnMoreProps, "extendClass">;

export function ContentItem({
  label,
  description,
  linkText,
  onClick,
  linkNode,
  ...props
}: ContentItemProps) {
  const { theme, color } = useMaybeTheme(props);
  const cls = getClass.bind(null, theme);
  return (
    <div
      data-testid="content-a-item-div"
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
      <p
        className={cls(
          "leading-relaxed text-base mb-4",
          "text-gray-600",
          "text-gray-400"
        )}
      >
        {description}
      </p>
      <LearnMore
        theme={theme}
        color={color}
        onClick={onClick}
        linkText={linkText}
        linkNode={linkNode}
      />
    </div>
  );
}
