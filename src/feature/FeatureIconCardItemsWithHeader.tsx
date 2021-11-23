import React from "react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "./FeatureWithIconItem";
import { FooterSection } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureIconCardItemsWithHeaderProps = WithTheme<{
  label: string;
  title: string;
  data: Array<
    WithoutTheme<
      FeatureWithIconItemProps,
      | "outerClass"
      | "innerClass"
      | "tightClass"
      | "extendClass"
      | "extendDivClass"
      | "extendSvgClass"
    >
  >;
}>;

export function FeatureIconCardItemsWithHeader({
  label,
  title,
  data,
  theme = "light",
  color = "indigo",
}: FeatureIconCardItemsWithHeaderProps) {
  const cls = getClass.bind(null, theme);
  return (
    <FooterSection testId="feature-with-icon-and-header-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className={cls(
              "text-xs tracking-widest font-medium title-font mb-1",
              `text-${color}-500`,
              `text-${color}-400`
            )}
          >
            {label}
          </h2>
          <h1
            className={cls(
              "sm:text-3xl text-2xl font-medium title-font",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((entry, i) => (
            <div className="p-4 md:w-1/3">
              <FeatureWithIconItem
                {...entry}
                outerClass={cls(
                  "flex rounded-lg h-full p-8 flex-col",
                  "bg-gray-100",
                  "bg-gray-800 bg-opacity-60"
                )}
                innerClass="flex-grow"
                tightClass="flex items-center mb-3"
                extendDivClass="w-8 h-8 mr-3 flex-shrink-0"
                extendSvgClass="w-4 h-4"
                color={color}
                key={entry.title + i}
                theme={theme}
              />
            </div>
          ))}
        </div>
      </div>
    </FooterSection>
  );
}
