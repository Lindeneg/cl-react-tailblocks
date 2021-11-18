import React from "react";
import { WithTheme } from "../types";

export type LearnMoreProps = WithTheme<{
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  linkText?: string;
}>;

export function LearnMore({
  onClick,
  theme = "light",
  linkText = "Learn More",
}: LearnMoreProps) {
  const isDark = theme === "dark";
  return (
    <a
      onClick={onClick}
      className={`cursor-pointer text-indigo-${
        isDark ? "400" : "500"
      } hover:text-indigo-${
        isDark ? "500" : "600"
      } inline-flex items-center md:mb-2 lg:mb-0`}
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
