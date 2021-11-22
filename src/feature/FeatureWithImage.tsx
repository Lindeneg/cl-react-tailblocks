import React from "react";
import { FeatureWithIconItem } from "./FeatureWithIconItem";
import { Section } from "../util/Section";
import { IconProps } from "../util/Icon";
import { LearnMoreProps } from "../util/LearnMore";
import { WithTheme, WithoutTheme, Image } from "../types";

export type FeatureWithImageProps = WithTheme<{
  data: Array<
    {
      title: string;
      description: string;
    } & WithoutTheme<LearnMoreProps, "extendClass"> &
      WithoutTheme<IconProps, "extendDivClass" | "extendSvgClass">
  >;
}> &
  Image;

export function FeatureWithImage({
  data,
  imgSrc,
  imgAlt = "feature-image",
  theme = "light",
  color = "indigo",
}: FeatureWithImageProps) {
  return (
    <Section testId="feature-with-image-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            className="object-cover object-center h-full w-full"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {data.map((entry, idx) => (
            <FeatureWithIconItem
              {...entry}
              key={entry.title + idx}
              theme={theme}
              color={color}
              outerClass="flex flex-col mb-10 lg:items-start items-center"
              innerClass="flex-grow"
              extendDivClass="w-12 h-12 mb-5"
              extendSvgClass="w-6 h-6"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
