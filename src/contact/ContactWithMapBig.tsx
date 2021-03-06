import React, { useRef } from "react";
import { Input, TextArea } from "../util/Input";
import { Button } from "../util/Button";
import { Section } from "../util/Section";
import { EmbeddedMap } from "../util/EmbeddedMap";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { SharedFormProps, ReactInputProps } from "../types";
import { getClass, getRefValue } from "../shared";

export type ContactWithMapBigProps = SharedFormProps & {
  onSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string,
    textAreaValue: string
  ) => void;
  inputProps?: ReactInputProps;
};

export function ContactWithMapBig({
  label,
  topDescription,
  bottomDescription,
  buttonLabel,
  onSubmit,
  mapIframeSrc,
  inputProps = {},
  textAreaProps = {},
  ...props
}: ContactWithMapBigProps) {
  const { theme, color } = useMaybeTheme(props);
  const cls = getClass.bind(null, theme);
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Section
      testId="contact-with-map-big-section"
      theme={theme}
      extendClass="relative"
    >
      <div className={cls("absolute inset-0", "bg-gray-300", "bg-gray-900")}>
        <EmbeddedMap src={mapIframeSrc} theme={theme} />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div
          data-testid="contact-with-map-big-div"
          className={cls(
            "lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md",
            "bg-white",
            "bg-gray-900"
          )}
        >
          <h2
            className={cls(
              "text-lg mb-1 font-medium title-font",
              "text-gray-900",
              "text-white"
            )}
          >
            {label}
          </h2>
          {topDescription && (
            <p
              className={cls(
                "leading-relaxed mb-5",
                "text-gray-600",
                "text-gray-400"
              )}
            >
              {topDescription}
            </p>
          )}
          <div className="relative mb-4">
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              elementRef={inputRef}
              theme={theme}
              themeColor={color}
              extendClass="w-full leading-8"
              {...inputProps}
            />
          </div>
          <div className="relative mb-4">
            <TextArea
              type="text"
              id="message"
              name="message"
              label="Message"
              elementRef={textAreaRef}
              theme={theme}
              themeColor={color}
              extendClass="w-full h-32 resize-none leading-6"
              {...textAreaProps}
            />
          </div>
          <Button
            color={color}
            text={buttonLabel || "Button"}
            onClick={(e) => {
              onSubmit(e, getRefValue(inputRef), getRefValue(textAreaRef));
            }}
          />
          {bottomDescription && (
            <p
              className={cls("text-xs mt-3", "text-gray-500", "text-gray-400")}
            >
              {bottomDescription}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
