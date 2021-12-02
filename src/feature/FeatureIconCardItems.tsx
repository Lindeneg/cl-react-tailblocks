import React from "react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "./FeatureWithIconItem";
import { Section } from "../util/Section";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureIconCardItemsProps = WithTheme<{
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

export function FeatureIconCardItems({
  data,
  ...props
}: FeatureIconCardItemsProps) {
  const { theme, color } = useMaybeTheme(props);
  return (
    <Section testId="feature-with-icon-cards-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          {data.map((entry, idx) => (
            <div className="p-4 lg:w-1/2 md:w-full" key={entry.title + idx}>
              <FeatureWithIconItem
                {...entry}
                theme={theme}
                color={color}
                outerClass={getClass(
                  theme,
                  "flex border-2 rounded-lg border-opacity-50 p-8 sm:flex-row flex-col",
                  "border-gray-200",
                  "border-gray-800"
                )}
                innerClass="flex-grow"
                extendDivClass="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 flex-shrink-0"
                extendSvgClass="w-8 h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
