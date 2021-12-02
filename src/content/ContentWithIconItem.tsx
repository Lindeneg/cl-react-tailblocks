import React from "react";
import { Icon, IconProps } from "../util/Icon";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type ContentWithIconItemProps = WithTheme<{
  title: string;
  description: string;
}> &
  WithoutTheme<IconProps, "extendDivClass" | "extendSvgClass">;

export function ContentWithIconItem({
  title,
  description,
  theme,
  color,
  ...iconProps
}: ContentWithIconItemProps) {
  const cxt = useMaybeTheme({ theme, color });
  const cls = getClass.bind(null, cxt.theme);
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div
        data-testid="content-with-icon-wrapper-div"
        className={cls(
          "border p-6 rounded-lg",
          "border-gray-200",
          "border-gray-700 border-opacity-75"
        )}
      >
        <Icon
          {...iconProps}
          theme={cxt.theme}
          color={cxt.color}
          extendDivClass="w-10 h-10 mb-4"
          extendSvgClass="w-6 h-6"
        />
        <h2
          className={cls(
            "text-lg font-medium title-font mb-2",
            "text-gray-900",
            "text-white"
          )}
        >
          {title}
        </h2>
        <p className={cls("leading-relaxed text-base", "", "text-gray-400")}>
          {description}
        </p>
      </div>
    </div>
  );
}
