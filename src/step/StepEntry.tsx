import React from "react";
import { Icon, IconProps } from "../util/Icon";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type StepEntryProps = WithTheme<{
  description: string;
  label?: string;
  withLine?: boolean;
  extendWrapperClass?: string;
}> &
  Pick<IconProps, "icon" | "iconNode" | "extendSvgClass" | "svgNode">;

export type StepEntryIsolatedProps = WithoutTheme<
  StepEntryProps,
  "withLine" | "extendWrapperClass"
>;

export function StepEntry({
  description,
  label = "",
  withLine = false,
  extendWrapperClass = "",
  theme = "light",
  color = "indigo",
  ...iconProps
}: StepEntryProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div className={`flex relative ${extendWrapperClass}`}>
      {withLine && (
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div
            className={cls(
              "h-full w-1 pointer-events-none",
              "bg-gray-200",
              "bg-gray-800"
            )}
          ></div>
        </div>
      )}
      <Icon
        overrideDivClass={`flex-shrink-0 w-10 h-10 rounded-full bg-${color}-500 inline-flex items-center justify-center text-white relative z-10`}
        extendSvgClass="w-5 h-5"
        {...iconProps}
      />
      <div className="flex-grow pl-4">
        <h2
          className={cls(
            "font-medium title-font text-sm mb-1 tracking-wider",
            "text-gray-900",
            "text-white"
          )}
        >
          {label}
        </h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
