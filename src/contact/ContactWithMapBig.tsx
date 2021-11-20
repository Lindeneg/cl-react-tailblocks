import React, { useRef } from "react";
import { Input, TextArea } from "../util/Input";
import { WithTheme } from "../types";
import { Button } from "../util/Button";
import { Section } from "../util/Section";

// TODO stories | tests

export type ContactWithMapBigProps = WithTheme<{
  label: string;
  topDescription: string;
  bottomDescription: string;
  inputLabel: string;
  textAreaLabel: string;
  buttonLabel: string;
  mapIframeSrc: string;
  onSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string,
    textAreaValue: string
  ) => void;
  inputProps?: {};
  textAreaProps?: {};
}>;

export function ContactWithMapBig({
  label,
  topDescription,
  bottomDescription,
  inputLabel,
  textAreaLabel,
  buttonLabel,
  onSubmit,
  mapIframeSrc,
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
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src={mapIframeSrc}
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
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
          <p
            className={`leading-relaxed mb-5 text-gray-${
              isDark ? "400" : "600"
            }`}
          >
            {topDescription}
          </p>
          <div className="relative mb-4">
            <Input
              elementRef={inputRef}
              theme={theme}
              label={inputLabel}
              extendClass="w-full leading-8"
            />
          </div>
          <div className="relative mb-4">
            <TextArea
              elementRef={textAreaRef}
              theme={theme}
              label={textAreaLabel}
              extendClass="w-full h-40 resize-none leading-6"
            />
          </div>
          <Button
            text={buttonLabel}
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
          <p className={`text-xs text-gray-${isDark ? "400" : "500"} mt-3`}>
            {bottomDescription}
          </p>
        </div>
      </div>
    </Section>
  );
}
