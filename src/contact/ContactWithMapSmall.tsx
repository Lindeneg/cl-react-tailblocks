import React, { useRef } from "react";
import { Section } from "../util/Section";
import { EmbededMap } from "../util/EmbededMap";
import { Input, TextArea } from "../util/Input";
import { Button } from "../util/Button";
import { SharedFormProps, ReactInputProps } from "../types";

// TODO stories | tests

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
}: ContactWithMapSmallProps) {
  const isDark = theme === "dark";
  return (
    <Section
      testId="contact-with-map-small-section"
      theme={theme}
      extendClass="relative"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <EmbededMap
            src={mapIframeSrc}
            theme={theme}
            className="absolute inset-0"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button text={buttonLabel || "Button"} onClick={(e) => {}} />
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
