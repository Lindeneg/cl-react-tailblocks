import React from "react";
import { StepEntry, StepEntryIsolatedProps } from "./StepEntry";
import { Section } from "../util/Section";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type StepProps = WithTheme<{
  steps: Array<StepEntryIsolatedProps>;
}>;

export function Step({ steps, theme = "light", color = "indigo" }: StepProps) {
  return (
    <Section testId="step-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {steps.map(({ label, ...step }, idx) => {
          const count = idx + 1;
          return (
            <StepEntry
              {...step}
              key={idx}
              label={label || ""}
              divInnerWrapperClass="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              extendDivClass={getClass(
                theme,
                "flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center",
                `bg-${color}-100 text-${color}-500`,
                `bg-gray-800 text-${color}-400`
              )}
              extendSvgClass="w-12 h-12"
              extendWrapperClass={`${idx === 0 ? "pt-10" : ""} pb-${
                idx === steps.length - 1 ? "10" : "20"
              } sm:items-center md:w-2/3 mx-auto`}
              line={{ extendWrapperClass: "w-6", extendLineClass: "w-1" }}
              theme={theme}
              color={color}
            >
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-${color}-500 text-white relative z-10 title-font font-medium text-sm`}
              >
                {count}
              </div>
            </StepEntry>
          );
        })}
      </div>
    </Section>
  );
}
