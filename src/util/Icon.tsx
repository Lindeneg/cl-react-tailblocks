import React from "react";
import { WithTheme } from "../types";
import { getClass } from "../shared";

function Svg({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  if (!children) {
    return null;
  }
  return (
    <svg
      data-testid="icon-svg-component"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

export type IconConstraints =
  | "graph"
  | "scissor"
  | "person"
  | "flag"
  | "moon"
  | "shield"
  | "anchor"
  | "finish";

export type IconProps = WithTheme<{
  icon?: IconConstraints;
  iconNode?: React.ReactNode;
  svgNode?: React.ReactNode;
  overrideDivClass?: string;
  extendDivClass?: string;
  extendSvgClass?: string;
}>;

export function Icon({
  icon,
  iconNode,
  svgNode,
  overrideDivClass = "",
  extendDivClass = "",
  extendSvgClass = "",
  theme = "light",
  color = "indigo",
}: IconProps) {
  if (!icon && !iconNode) {
    return null;
  }
  let iconSvg: React.ReactNode | null;
  if (svgNode) {
    iconSvg = svgNode;
  } else {
    switch (icon) {
      case "graph":
        iconSvg = (
          <path
            data-testid="icon-graph-path"
            d="M22 12h-4l-3 9L9 3l-3 9H2"
          ></path>
        );
        break;
      case "scissor":
        iconSvg = (
          <>
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </>
        );
        break;
      case "person":
        iconSvg = (
          <>
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </>
        );
        break;
      case "flag":
        iconSvg = (
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
        );
        break;
      case "moon":
        iconSvg = <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>;
        break;
      case "shield":
        iconSvg = <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>;
        break;
      case "finish":
        iconSvg = (
          <>
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </>
        );
        break;
      case "anchor":
        iconSvg = (
          <>
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </>
        );
        break;
      default:
        iconSvg = null;
        break;
    }
  }
  return (
    <>
      {iconNode ? (
        <>{iconNode}</>
      ) : (
        <div
          data-testid="icon-wrapper-div"
          className={
            overrideDivClass
              ? overrideDivClass
              : getClass(
                  theme,
                  `inline-flex items-center justify-center rounded-full ${extendDivClass}`,
                  `bg-${color}-100 text-${color}-500`,
                  `bg-gray-800 text-${color}-400`
                )
          }
        >
          <Svg className={extendSvgClass}>{iconSvg}</Svg>
        </div>
      )}
    </>
  );
}
