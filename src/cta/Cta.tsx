import React from "react";
import { Section } from "../util/Section";
import { Button, ButtonProps } from "../util/Button";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type CtaProps = WithTheme<{
  title: string;
  buttonText?: string;
}> &
  Pick<ButtonProps, "onClick">;

export function Cta({
  title,
  onClick,
  buttonText = "Button",
  ...props
}: CtaProps) {
  const { theme, color } = useMaybeTheme(props);
  return (
    <Section testId="cta-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1
            className={getClass(
              theme,
              "flex-grow sm:pr-16 text-2xl font-medium title-font",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <Button
            extendClass="flex-shrink-0 mt-10 sm:mt-0"
            text={buttonText}
            onClick={onClick}
            color={color}
          />
        </div>
      </div>
    </Section>
  );
}
