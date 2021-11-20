import React from "react";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type LearnMoreProps = WithTheme<{
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  linkText?: string;
}>;

export function LearnMore({
  onClick,
  theme = "light",
  linkText = "Learn More",
}: LearnMoreProps) {
  return (
    <a
      onClick={onClick}
      className={getClass(
        theme,
        "cursor-pointer inline-flex items-center md:mb-2 lg:mb-0",
        "text-indigo-500 hover:text-indigo-600",
        "text-indigo-400 hover:text-indigo-500"
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
  );
}
