import React, { useRef } from "react";
import { Section } from "../util/Section";
import { Button } from "../util/Button";
import { Input } from "../util/Input";
import { WithTheme, ReactInputProps } from "../types";
import { getClass, getRefValue } from "../shared";

export type CtaWithFormRowProps = WithTheme<{
  title: string;
  description: string;
  formHeader: string;
  bottomText?: string;
  buttonText?: string;
  onSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputTopValue: string,
    inputBottomValue: string
  ) => void;
  inputTopProps?: ReactInputProps;
  inputBottomProps?: ReactInputProps;
}>;

export function CtaWithFormRow({
  title,
  description,
  formHeader,
  bottomText,
  onSubmit,
  buttonText = "Button",
  theme = "light",
  color = "indigo",
  inputTopProps = {},
  inputBottomProps = {},
}: CtaWithFormRowProps) {
  const inputTopRef = useRef<HTMLInputElement>(null);
  const inputBottomRef = useRef<HTMLInputElement>(null);
  const cls = getClass.bind(null, theme);
  return (
    <Section testId="cta-with-form-row-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1
            className={cls(
              "title-font font-medium text-3xl",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p className="leading-relaxed mt-4">{description}</p>
        </div>
        <div
          className={cls(
            "lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0",
            "bg-gray-100",
            ""
          )}
        >
          <h2
            className={cls(
              "text-lg font-medium title-font mb-5",
              "text-gray-900 ",
              "text-white"
            )}
          >
            {formHeader}
          </h2>
          <div className="relative mb-4">
            <Input
              type="text"
              id="name"
              name="name"
              label="Full Name"
              elementRef={inputTopRef}
              theme={theme}
              themeColor={color}
              extendClass="w-full leading-8"
              {...inputTopProps}
            />
          </div>
          <div className="relative mb-4">
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              elementRef={inputBottomRef}
              theme={theme}
              themeColor={color}
              extendClass="w-full leading-8"
              {...inputBottomProps}
            />
          </div>
          <Button
            text={buttonText}
            color={color}
            onClick={(e) => {
              onSubmit(
                e,
                getRefValue(inputTopRef),
                getRefValue(inputBottomRef)
              );
            }}
          />
          {buttonText && (
            <p className={cls("text-xs mt-3", "text-gray-500", "")}>
              {bottomText}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
