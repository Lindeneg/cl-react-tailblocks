import React from "react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "./FeatureWithIconItem";
import { Section } from "../util/Section";
import { Button, ButtonProps } from "../util/Button";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureWithIconBigProps = WithTheme<{
  title: string;
  description: string;
  buttonText?: string;
  data: Array<
    WithoutTheme<
      FeatureWithIconItemProps,
      "extendDivClass" | "extendSvgClass" | "innerClass" | "outerClass"
    >
  >;
}> &
  Pick<ButtonProps, "onClick">;

export function FeatureWithIconBig({
  data,
  title,
  description,
  onClick,
  buttonText = "Button",
  theme = "light",
  color = "indigo",
}: FeatureWithIconBigProps) {
  return (
    <Section testId="feature-icon-big-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1
            className={getClass(
              theme,
              "sm:text-3xl text-2xl font-medium title-font mb-4",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            {description}
          </p>
          <div className="flex mt-6 justify-center">
            <div
              className={`w-16 h-1 rounded-full bg-${color}-500 inline-flex`}
            ></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {data.map((e, i) => (
            <FeatureWithIconItem
              {...e}
              outerClass="p-4 md:w-1/3 flex flex-col text-center items-center"
              innerClass="flex-grow pl-6"
              extendDivClass="w-20 h-20 mb-5 flex-shrink-0"
              extendSvgClass="w-10 h-10"
              color={color}
              key={e.title + i}
              theme={theme}
            />
          ))}
        </div>
        <Button
          extendClass="flex mx-auto mt-16"
          text={buttonText}
          onClick={onClick}
          color={color}
        />
      </div>
    </Section>
  );
}
