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
  return (
    <div className={outerClass}>
      <Icon {...iconProps} />
      <div className={innerClass}>
        <h2
          className={getClass(
            theme,
            "text-lg title-font font-medium mb-2",
            "text-gray-900",
            ""
          )}
        >
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        {linkNode ? (
          linkNode
        ) : (
          <LearnMore
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
