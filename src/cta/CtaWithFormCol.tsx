import React, { useRef } from "react";
import { Section } from "../util/Section";
import { Button } from "../util/Button";
import { Input } from "../util/Input";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, ReactInputProps } from "../types";
import { getClass, getRefValue } from "../shared";

export type CtaWithFormColProps = WithTheme<{
  title: string;
  description: string;
  buttonText?: string;
  onSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputLeftValue: string,
    inputRightValue: string
  ) => void;
  inputLeftProps?: ReactInputProps;
  inputRightProps?: ReactInputProps;
}>;

export function CtaWithFormCol({
  title,
  description,
  onSubmit,
  buttonText = "Button",
  inputLeftProps = {},
  inputRightProps = {},
  ...props
}: CtaWithFormColProps) {
  const { theme, color } = useMaybeTheme(props);
  const inputLeftRef = useRef<HTMLInputElement>(null);
  const inputRightRef = useRef<HTMLInputElement>(null);
  return (
    <Section testId="cta-with-form-col-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
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
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {description}
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <Input
              type="text"
              id="name"
              name="name"
              label="Full Name"
              elementRef={inputLeftRef}
              theme={theme}
              themeColor={color}
              extendClass="w-full leading-8"
              {...inputLeftProps}
            />
          </div>
          <div className="relative flex-grow w-full">
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              elementRef={inputRightRef}
              theme={theme}
              themeColor={color}
              extendClass="w-full leading-8"
              {...inputRightProps}
            />
          </div>
          <Button
            text={buttonText}
            color={color}
            onClick={(e) => {
              onSubmit(
                e,
                getRefValue(inputLeftRef),
                getRefValue(inputRightRef)
              );
            }}
          />
        </div>
      </div>
    </Section>
  );
}
