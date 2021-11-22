import React from "react";
import { Section } from "../util/Section";
import { Icon, IconProps } from "../util/Icon";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { WithTheme, WithoutTheme, Image } from "../types";
import { getClass } from "../shared";

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
          {data.map(
            ({ title, description, linkText, onClick, ...iconProps }) => (
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <Icon
                  {...iconProps}
                  theme={theme}
                  color={color}
                  extendDivClass="w-12 h-12 mb-5"
                  extendSvgClass="w-6 h-6"
                />
                <div className="flex-grow">
                  <h2
                    className={getClass(
                      theme,
                      "text-lg title-font font-medium mb-3",
                      "text-gray-900",
                      "text-white"
                    )}
                  >
                    {title}
                  </h2>
                  <p className="leading-relaxed text-base">{description}</p>
                  <LearnMore
                    extendClass="mt-3"
                    linkText={linkText}
                    onClick={onClick}
                    theme={theme}
                    color={color}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}
