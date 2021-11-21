import React, { useRef } from "react";
import { Section } from "../util/Section";
import { Input, TextArea } from "../util/Input";
import { Button } from "../util/Button";
import { Socials, SocialConstraints } from "../util/Socials";
import { SharedFormProps, ReactInputProps } from "../types";
import { getClass, getRefValue } from "../shared";

// TODO tests

export type ContactWithSocialsProps = Omit<
  SharedFormProps,
  "topDescription" | "bottomDescription" | "mapIframeSrc"
> & {
  description: string;
  onSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    rightInputValue: string,
    leftInputValue: string,
    textAreaValue: string
  ) => void;
  city?: string;
  street?: string;
  email?: string;
  inputRightrops?: ReactInputProps;
  inputLeftProps?: ReactInputProps;
} & Omit<SocialConstraints, "mail">;

export function ContactWithSocials({
  description,
  label,
  buttonLabel,
  onSubmit,
  city,
  email,
  street,
  inputRightrops = {},
  inputLeftProps = {},
  textAreaProps = {},
  theme = "light",
  ...socials
}: ContactWithSocialsProps) {
  const cls = getClass.bind(null, theme);
  const inputRightRef = useRef<HTMLInputElement>(null);
  const inputLeftRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Section
      testId="contact-with-map-socials-section"
      theme={theme}
      extendClass="relative"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className={cls(
              "sm:text-3xl text-2xl font-medium title-font mb-4",
              "text-gray-900",
              "text-white"
            )}
          >
            {label}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {description}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  label="Name"
                  elementRef={inputLeftRef}
                  theme={theme}
                  extendClass="w-full leading-8"
                  {...inputLeftProps}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  elementRef={inputRightRef}
                  theme={theme}
                  extendClass="w-full leading-8"
                  {...inputRightrops}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <TextArea
                  type="text"
                  id="message"
                  name="message"
                  label="Message"
                  elementRef={textAreaRef}
                  theme={theme}
                  extendClass="w-full h-32 resize-none leading-6"
                  {...textAreaProps}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <Button
                text={buttonLabel || "Button"}
                extendClass="flex mx-auto"
                onClick={(e) => {
                  console.log(
                    getRefValue(inputRightRef),
                    getRefValue(inputLeftRef),
                    getRefValue(textAreaRef)
                  );
                  onSubmit(
                    e,
                    getRefValue(inputRightRef),
                    getRefValue(inputLeftRef),
                    getRefValue(textAreaRef)
                  );
                }}
              />
            </div>
            <div
              className={cls(
                "p-2 w-full pt-8 mt-8 border-t text-center",
                "border-gray-200",
                "border-gray-800"
              )}
            >
              {email && (
                <a className={cls("", "text-indigo-500", "text-indigo-400")}>
                  {email}
                </a>
              )}
              {city && street && (
                <p className="leading-normal my-5">
                  {street}
                  <br />
                  {city}
                </p>
              )}
              <Socials {...socials} className="inline-flex" mail={email} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
