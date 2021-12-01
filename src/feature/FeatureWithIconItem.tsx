import React from "react";
import { Icon, IconProps } from "../util/Icon";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
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
  theme,
  color,
  tightClass = null,
  iconPlacement = "start",
  outerClass = "",
  innerClass = "",
  ...iconProps
}: FeatureWithIconItemProps) {
  const cxt = useMaybeTheme({ theme, color });
  const cls = getClass.bind(null, cxt.theme);
  return !tightClass ? (
    <div className={outerClass}>
      {iconPlacement === "start" && (
        <Icon {...iconProps} theme={cxt.theme} color={cxt.color} />
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
            theme={cxt.theme}
            color={cxt.color}
          />
        )}
      </div>
      {iconPlacement === "end" && (
        <Icon {...iconProps} theme={cxt.theme} color={cxt.color} />
      )}
    </div>
  ) : (
    <div className={outerClass}>
      <div className={tightClass}>
        <Icon {...iconProps} theme={cxt.theme} color={cxt.color} />
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
            theme={cxt.theme}
            color={cxt.color}
          />
        )}
      </div>
    </div>
  );
}
