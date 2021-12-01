import React from "react";
import { StepEntry, StepEntryIsolatedProps } from "./StepEntry";
import { Img, ImgProps } from "../util/Img";
import { Section } from "../util/Section";
import { WithTheme } from "../types";

export type StepWithImageProps = WithTheme<{
  steps: Array<StepEntryIsolatedProps>;
}> &
  ImgProps;

export function StepWithImage({
  steps,
  imgSrc,
  imgNode,
  imgAlt = "step-with-image",
  theme = "light",
  color = "indigo",
}: StepWithImageProps) {
  return (
    <Section testId="step-with-image-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {steps.map(({ label, ...step }, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <StepEntry
                  {...step}
                  key={idx}
                  label={label || `STEP ${idx + 1}`}
                  extendWrapperClass={isLast ? "" : "pb-12"}
                  extendDivClass={`flex-shrink-0 w-10 h-10 rounded-full bg-${color}-500 inline-flex items-center justify-center text-white relative z-10`}
                  extendSvgClass="w-5 h-5"
                  line={
                    isLast
                      ? null
                      : { extendWrapperClass: "w-10", extendLineClass: "w-1" }
                  }
                  theme={theme}
                  color={color}
                />
              );
            })}
          </div>
          <Img
            imgClass="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            imgNode={imgNode}
          />
        </div>
      </div>
    </Section>
  );
}
