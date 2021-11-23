import React, { useRef } from "react";
import { Footer, FooterLinks, FooterLinksProps, FooterProps } from "./Footer";
import { Input } from "../util/Input";
import { FooterSection } from "../util/Section";
import { Button } from "../util/Button";
import { WithoutTheme, ReactInputProps } from "../types";
import { getClass } from "../shared";
import { getRefValue } from "..";

export type FooterWithLinksAndInputSmallProps = {
  formHeader: string;
  formLabel: string;
  formDescription: string | React.ReactNode;
  buttonText?: string;
  links: Array<WithoutTheme<FooterLinksProps, "extendClass">>;
  inputProps?: ReactInputProps;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string
  ) => void;
} & FooterProps;

export function FooterWithLinksAndInputSmall({
  formHeader,
  formLabel,
  formDescription,
  links,
  onClick,
  inputProps,
  buttonText = "Button",
  theme = "light",
  color = "indigo",
  ...footerProps
}: FooterWithLinksAndInputSmallProps) {
  const cls = getClass.bind(null, theme);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <FooterSection
      testId="footer-with-links--and-input-small-section"
      theme={theme}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {links.map((link, i) => (
            <FooterLinks
              {...link}
              title={link.title}
              key={link.title + i}
              theme={theme}
            />
          ))}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className={cls(
                "title-font font-medium tracking-widest text-sm mb-3",
                "text-gray-900",
                "text-white"
              )}
            >
              {formHeader}
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <Input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  label="Placeholder"
                  elementRef={inputRef}
                  theme={theme}
                  themeColor={color}
                  extendClass="w-full leading-8"
                  {...inputProps}
                />
              </div>
              <Button
                text={buttonText}
                onClick={(e) => {
                  onClick(e, getRefValue(inputRef));
                }}
                extendClass="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex"
              />
            </div>
            {typeof formDescription !== "string" ? (
              <>{formDescription}</>
            ) : (
              <p className="text-sm mt-2 md:text-left text-center text-gray-500">
                {formDescription}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={cls("", "bg-gray-100", "bg-gray-800 bg-opacity-75")}>
        <Footer {...footerProps} theme={theme} color={color} withoutSection />
      </div>
    </FooterSection>
  );
}
