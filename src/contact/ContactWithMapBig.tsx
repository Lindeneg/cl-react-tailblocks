import React, { useRef } from "react";
import { Input, TextArea } from "../util/Input";
import { Button } from "../util/Button";
import { Section } from "../util/Section";
import { EmbededMap } from "../util/EmbededMap";
import { SharedFormProps, ReactInputProps } from "../types";

// TODO stories | tests

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
  theme = "light",
}: ContactWithMapBigProps) {
  const isDark = theme === "dark";
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Section
      testId="contact-with-map-big-section"
      theme={theme}
      extendClass="relative"
    >
      <div className={`absolute inset-0 bg-gray-${isDark ? "900" : "300"}`}>
        <EmbededMap src={mapIframeSrc} theme={theme} />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div
          className={`lg:w-1/3 md:w-1/2 ${
            isDark ? "bg-gray-900" : "bg-white"
          } rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md`}
        >
          <h2
            className={`${
              isDark ? "text-white" : "text-gray-900"
            } text-lg mb-1 font-medium title-font`}
          >
            {label}
          </h2>
          {topDescription && (
            <p
              className={`leading-relaxed mb-5 text-gray-${
                isDark ? "400" : "600"
              }`}
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
              extendClass="w-full leading-8"
              // overwrite values with user-defined props
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
              extendClass="w-full h-40 resize-none leading-6"
              // overwrite values with user-defined props
              {...textAreaProps}
            />
          </div>
          <Button
            text={buttonLabel || "Button"}
            onClick={(e) => {
              console.log(
                inputRef.current?.value || "",
                textAreaRef.current?.value || ""
              );
              onSubmit(
                e,
                inputRef.current?.value || "",
                textAreaRef.current?.value || ""
              );
            }}
          />
          {bottomDescription && (
            <p className={`text-xs text-gray-${isDark ? "400" : "500"} mt-3`}>
              {bottomDescription}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
