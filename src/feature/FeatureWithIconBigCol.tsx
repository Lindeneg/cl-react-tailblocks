import React from "react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "./FeatureWithIconItem";
import { Section } from "../util/Section";
import { Button, ButtonProps } from "../util/Button";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";

export type FeatureWithIconBigColProps = WithTheme<{
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
}> &
  Pick<ButtonProps, "onClick"> & { buttonText?: string };

export function FeatureWithIconBigCol({
  data,
  onClick,
  buttonText = "Button",
  ...props
}: FeatureWithIconBigColProps) {
  const { theme, color } = useMaybeTheme(props);
  return (
    <Section testId="feature-with-icon-big-col-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        {data.map((entry, i) => (
          <FeatureWithIconItem
            {...entry}
            outerClass="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
            innerClass="flex-grow sm:text-left text-center mt-6 sm:mt-0"
            extendDivClass="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 flex-shrink-0"
            extendSvgClass="sm:w-16 sm:h-16 w-10 h-10"
            iconPlacement={i % 2 === 0 ? "start" : "end"}
            color={color}
            key={entry.title + i}
            theme={theme}
          ></FeatureWithIconItem>
        ))}
        <Button
          text={buttonText}
          extendClass="flex mx-auto mt-20"
          onClick={onClick}
          color={color}
        />
      </div>
    </Section>
  );
}
