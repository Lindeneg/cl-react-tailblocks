import React from "react";
import { Icon, IconProps } from "../util/Icon";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureWithIconItemProps = WithTheme<{
  outerClass?: string;
  innerClass?: string;
  title: string;
  description: string;
  linkNode?: React.ReactNode;
}> &
  WithoutTheme<IconProps> &
  WithoutTheme<LearnMoreProps>;

export function FeatureWithIconItem({
  title,
  description,
  linkNode,
  onClick,
  linkText,
  outerClass = "",
  innerClass = "",
  theme = "light",
  color = "indigo",
  ...iconProps
}: FeatureWithIconItemProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div className={outerClass}>
      <Icon {...iconProps} theme={theme} color={color} />
      <div className={innerClass}>
        <h2
          className={cls(
            "text-lg title-font font-medium mb-2",
            "text-gray-900",
            "text-white"
          )}
        >
          {title}
        </h2>
        <p className={cls("leading-relaxed text-base", "", "text-gray-400")}>
          {description}
        </p>
        {linkNode ? (
          linkNode
        ) : (
          <LearnMore
            extendClass="mt-3"
            linkText={linkText}
            onClick={onClick}
            theme={theme}
            color={color}
          />
        )}
      </div>
    </div>
  );
}
