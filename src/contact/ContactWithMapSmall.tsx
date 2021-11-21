import React, { useRef } from "react";
import { Section } from "../util/Section";
import { EmbededMap } from "../util/EmbededMap";
import { Input, TextArea } from "../util/Input";
import { Button } from "../util/Button";
import { SharedFormProps, ReactInputProps } from "../types";
import { getClass, getRefValue } from "../shared";

export type ContactWithMapSmallProps = SharedFormProps & {
  onSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    topInputValue: string,
    bottomInputValue: string,
    textAreaValue: string
  ) => void;
  address?: string;
  email?: string;
  phone?: string;
  inputTopProps?: ReactInputProps;
  inputBottomProps?: ReactInputProps;
};

export function ContactWithMapSmall({
  label,
  topDescription,
  bottomDescription,
  buttonLabel,
  onSubmit,
  mapIframeSrc,
  address,
  email,
  phone,
  inputTopProps = {},
  inputBottomProps = {},
  textAreaProps = {},
  theme = "light",
  color = "indigo",
}: ContactWithMapSmallProps) {
  const cls = getClass.bind(null, theme);
  const inputTopRef = useRef<HTMLInputElement>(null);
  const inputBottomRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Section
      testId="contact-with-map-small-section"
      theme={theme}
      extendClass="relative"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          data-testid="contact-with-map-small-div"
          className={cls(
            "lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative",
            "bg-gray-300",
            "bg-gray-900"
          )}
        >
          <EmbededMap
            src={mapIframeSrc}
            theme={theme}
            className="absolute inset-0"
          />
          {(address || email || phone) && (
            <div
              data-testid="contact-with-map-small-inner-div"
              className={cls(
                "relative flex flex-wrap py-6 rounded shadow-md",
                "bg-white",
                "bg-gray-900"
              )}
            >
              {address && (
                <div className="lg:w-1/2 px-6">
                  <h2
                    className={cls(
                      "title-font font-semibold tracking-widest text-xs",
                      "text-gray-900",
                      "text-white"
                    )}
                  >
                    ADDRESS
                  </h2>
                  <p className="mt-1">{address}</p>
                </div>
              )}
              {(email || phone) && (
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  {email && (
                    <>
                      <h2
                        className={cls(
                          "title-font font-semibold tracking-widest text-xs",
                          "text-gray-900",
                          "text-white"
                        )}
                      >
                        EMAIL
                      </h2>
                      <a
                        className={cls(
                          "leading-relaxed",
                          `text-${color}-500`,
                          `text-${color}-400`
                        )}
                      >
                        {email}
                      </a>
                    </>
                  )}
                  {phone && (
                    <>
                      <h2
                        className={cls(
                          "title-font font-semibold tracking-widest text-xs mt-4",
                          "text-gray-900",
                          "text-white"
                        )}
                      >
                        PHONE
                      </h2>
                      <p className="leading-relaxed">{phone}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={cls(
            "lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0",
            "bg-white",
            ""
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
            <p className={cls("leading-relaxed mb-5", "text-gray-600", "")}>
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
          )}
          <div className="relative mb-4">
            <Input
              type="text"
              id="name"
              name="name"
              label="Name"
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
              onSubmit(
                e,
                getRefValue(inputTopRef),
                getRefValue(inputBottomRef),
                getRefValue(textAreaRef)
              );
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
