import React from "react";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type LearnMoreProps = WithTheme<{
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  linkText?: string;
  extendClass?: string;
  linkNode?: React.ReactNode;
}>;

export function LearnMore({
  onClick,
  linkNode,
  extendClass = "",
  linkText = "Learn More",
  ...props
}: LearnMoreProps) {
  const { theme, color } = useMaybeTheme(props);
  return (
    <>
      {linkNode ? (
        <>{linkNode}</>
      ) : (
        <a
          onClick={onClick}
          className={getClass(
            theme,
            `cursor-pointer inline-flex items-center md:mb-2 lg:mb-0 ${extendClass}`,
            `text-${color}-500 hover:text-${color}-600`,
            `text-${color}-400 hover:text-${color}-500`
          )}
        >
          {linkText}
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      )}
    </>
  );
}
