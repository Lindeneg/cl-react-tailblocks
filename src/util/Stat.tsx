import React from "react";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export function getThousands(target: number) {
  if (target >= 1000) {
    return `${(target / 1000).toFixed(1)}K`;
  }
  return target.toString();
}

export type StatProps = WithTheme<{
  views?: number | null;
  comments?: number | null;
}>;

export function Stat({ views, comments, ...props }: StatProps) {
  const { theme, color } = useMaybeTheme(props);
  return (
    <>
      {typeof views === "number" && typeof comments === "number" && (
        <>
          <span
            data-testid="stat-views-span"
            className={getClass(
              theme,
              "mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 text-gray-400",
              "border-gray-200",
              "border-gray-800"
            )}
          >
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {getThousands(views)}
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            {getThousands(comments)}
          </span>
        </>
      )}
    </>
  );
}
