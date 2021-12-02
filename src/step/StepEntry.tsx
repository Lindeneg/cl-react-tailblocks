import React from "react";
import { Icon, IconProps } from "../util/Icon";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type StepEntryProps = WithTheme<{
  description: string;
  label?: string;
  line?: {
    extendWrapperClass?: string;
    extendLineClass?: string;
  } | null;
  extendWrapperClass?: string;
  divInnerWrapperClass?: string;
  smallText?: boolean;
  children?: React.ReactNode;
}> &
  Pick<
    IconProps,
    "icon" | "iconNode" | "extendSvgClass" | "extendDivClass" | "svgNode"
  >;

export type StepEntryIsolatedProps = WithoutTheme<
  StepEntryProps,
  | "line"
  | "extendWrapperClass"
  | "extendDivClass"
  | "extendSvgClass"
  | "children"
>;

export function StepEntry({
  description,
  children,
  divInnerWrapperClass,
  theme,
  color,
  smallText = false,
  line = null,
  label = "",
  extendWrapperClass = "",
  extendDivClass = "",
  ...iconProps
}: StepEntryProps) {
  const cxt = useMaybeTheme({ theme, color });
  const cls = getClass.bind(null, cxt.theme);
  const jsx = (
    <>
      <Icon
        {...iconProps}
        overrideDivClass={extendDivClass}
        theme={cxt.theme}
        color={cxt.color}
      />
      <div
        className={`flex-grow ${smallText ? "pl-4" : "sm:pl-6 mt-6 sm:mt-0"}`}
      >
        <h2
          className={cls(
            `font-medium title-font ${
              smallText ? "tracking-wider text-sm" : "mb-1 text-xl"
            }`,
            "text-gray-900",
            "text-white"
          )}
        >
          {label}
        </h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </>
  );
  return (
    <div className={`flex relative ${extendWrapperClass}`}>
      {line && (
        <div
          className={`h-full absolute inset-0 flex items-center justify-center ${line.extendWrapperClass}`}
        >
          <div
            className={cls(
              `h-full pointer-events-none ${line.extendLineClass}`,
              "bg-gray-200",
              "bg-gray-800"
            )}
          ></div>
        </div>
      )}
      {children}
      {divInnerWrapperClass ? (
        <div className={divInnerWrapperClass}>{jsx}</div>
      ) : (
        <>{jsx}</>
      )}
    </div>
  );
}
