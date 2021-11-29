import React from "react";
import { Icon, IconProps } from "../util/Icon";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureWithIconItemProps = WithTheme<{
  iconPlacement?: "start" | "end";
  outerClass?: string;
  innerClass?: string;
  tightClass?: string | null;
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
  tightClass = null,
  iconPlacement = "start",
  outerClass = "",
  innerClass = "",
  theme = "light",
  color = "indigo",
  ...iconProps
}: FeatureWithIconItemProps) {
  const cls = getClass.bind(null, theme);
  return !tightClass ? (
    <div className={outerClass}>
      {iconPlacement === "start" && (
        <Icon {...iconProps} theme={theme} color={color} />
      )}
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
          <>{linkNode}</>
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
      {iconPlacement === "end" && (
        <Icon {...iconProps} theme={theme} color={color} />
      )}
    </div>
  ) : (
    <div className={outerClass}>
      <div className={tightClass}>
        <Icon {...iconProps} theme={theme} color={color} />
        <h2
          className={cls(
            "text-lg title-font font-medium",
            "text-gray-900",
            "text-white"
          )}
        >
          {title}
        </h2>
      </div>
      <div className={innerClass}>
        <p className="leading-relaxed text-base">{description}</p>
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
