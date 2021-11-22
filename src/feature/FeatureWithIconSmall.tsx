import React from "react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "./FeatureWithIconItem";
import { Section } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureWithIconSmallProps = WithTheme<{
  title: string | { top: string; bottom: string };
  data: Array<
    WithoutTheme<
      FeatureWithIconItemProps,
      "extendDivClass" | "extendSvgClass" | "innerClass" | "outerClass"
    >
  >;
}>;

export function FeatureWithIconSmall({
  title,
  data,
  theme = "light",
  color = "indigo",
}: FeatureWithIconSmallProps) {
  return (
    <Section testId="feature-icon-small-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <h1
          className={getClass(
            theme,
            "sm:text-3xl text-2xl font-medium title-font text-center mb-20",
            "text-gray-900",
            "text-white"
          )}
        >
          {typeof title === "string" ? (
            { title }
          ) : (
            <>
              {title.top}
              <br className="hidden sm:block" />
              {title.bottom}
            </>
          )}
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {data.map((e, i) => (
            <FeatureWithIconItem
              {...e}
              outerClass="p-4 md:w-1/3 flex"
              innerClass="flex-grow pl-6"
              extendDivClass="w-12 h-12 mb-4 flex-shrink-0"
              extendSvgClass="w-6 h-6"
              color={color}
              key={e.title + i}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
