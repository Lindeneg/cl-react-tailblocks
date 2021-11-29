import React from "react";
import { Button, ButtonProps } from "../util/Button";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type Prices = {
  price: string | number;
  per?: string;
};

export type PricingCardProps = WithTheme<{
  label: string;
  features: Array<React.ReactNode | string>;
  selectedTag?: string;
  selected?: boolean;
  buttonText?: string;
  bottomText?: string;
  comparison?: string | React.ReactNode;
}> &
  Prices &
  Pick<ButtonProps, "onClick">;

export function PricingCard({
  features,
  label,
  price,
  bottomText,
  onClick,
  selected = false,
  per,
  comparison,
  selectedTag = "POPULAR",
  buttonText = "Button",
  theme = "light",
  color = "indigo",
}: PricingCardProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div
        className={cls(
          "flex flex-col relative overflow-hidden h-full p-6 rounded-lg border-2",
          selected ? `border-${color}-500` : "border-gray-300",
          selected ? `border-${color}-500` : "border-gray-700"
        )}
      >
        {selected && (
          <span
            className={`bg-${color}-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}
          >
            {selectedTag}
          </span>
        )}
        <h2
          className={cls(
            "text-sm tracking-widest title-font mb-1 font-medium",
            "",
            "text-gray-400"
          )}
        >
          {label}
        </h2>
        <h1
          className={cls(
            "text-5xl leading-none flex items-center pb-4 mb-4 border-b",
            "text-gray-900 border-gray-200",
            "text-white border-gray-800"
          )}
        >
          {per ? (
            <>
              {comparison ? (
                typeof comparison === "string" ? (
                  <span className="line-through text-lg mr-2">
                    {comparison}
                  </span>
                ) : (
                  <>{comparison}</>
                )
              ) : null}
              <>{price}</>
              <span
                className={cls(
                  "text-lg ml-1 font-normal",
                  "text-gray-500",
                  "text-gray-400"
                )}
              >
                {per}
              </span>
            </>
          ) : (
            <>{price}</>
          )}
        </h1>
        {features.map((feature, i) => {
          if (typeof feature !== "string") {
            return <React.Fragment key={i}>{feature}</React.Fragment>;
          }
          return (
            <p
              key={feature + i}
              className={cls(
                `flex items-center mb-${i === features.length - 1 ? "6" : "2"}`,
                "text-gray-600",
                "text-gray-400"
              )}
            >
              <span
                className={cls(
                  "w-4 h-4 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0",
                  selected
                    ? `bg-${color}-500 hover:bg-${color}-600 text-white`
                    : "bg-gray-400 text-white",
                  "bg-gray-400 text-gray-500"
                )}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {feature}
            </p>
          );
        })}
        <Button
          onClick={onClick}
          overrideClass={cls(
            "flex text-white items-center mt-auto border-0 py-2 px-4 w-full focus:outline-none rounded",
            selected
              ? `bg-${color}-500 hover:bg-${color}-600`
              : "bg-gray-400 hover:bg-gray-500",
            selected
              ? `bg-${color}-500 hover:bg-${color}-600`
              : "bg-gray-800 hover:bg-gray-700 "
          )}
        >
          {buttonText}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Button>
        {bottomText && (
          <p className={cls("text-xs mt-3", "text-gray-500", "text-gray-400")}>
            {bottomText}
          </p>
        )}
      </div>
    </div>
  );
}
