import React, { useRef } from "react";
import { FooterLinks, FooterLinksProps, FooterProps } from "./Footer";
import { Socials } from "../util/Socials";
import { Input } from "../util/Input";
import { FooterSection } from "../util/Section";
import { Button } from "../util/Button";
import { WithoutTheme, ReactInputProps } from "../types";
import { getClass, getRefValue } from "../shared";

export type FooterWithLinksAndInputBigProps = {
  formDescription: string | React.ReactNode;
  bottomText?: string;
  buttonText?: string;
  links: Array<WithoutTheme<FooterLinksProps, "extendClass">>;
  inputProps?: ReactInputProps;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string
  ) => void;
} & FooterProps;

export function FooterWithLinksAndInputBig({
  name,
  socials,
  formDescription,
  links,
  onClick,
  inputProps,
  bottomText = "",
  buttonText = "Button",
  theme = "light",
  color = "indigo",
  ...props
}: FooterWithLinksAndInputBigProps) {
  const cls = getClass.bind(null, theme);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <FooterSection
      testId="footer-with-links-and-input-big-section"
      theme={theme}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          {links.map((link, i) => (
            <FooterLinks
              {...link}
              extendClass="lg:w-1/6 md:w-1/2"
              title={link.title}
              key={link.title + i}
              theme={theme}
            />
          ))}
        </div>
      </div>
      <div className={cls("border-t", "border-gray-200", "border-gray-800")}>
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
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
              color={color}
              text={buttonText}
              onClick={(e) => {
                onClick(e, getRefValue(inputRef));
              }}
              extendClass="inline-flex"
            />
            <p className="text-sm md:ml-6 md:mt-0 mt-2 text-gray-500 text-center sm:text-left">
              {formDescription}
            </p>
          </div>
          <Socials
            {...socials}
            className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"
          />
        </div>
      </div>
      <div className={cls("", "bg-gray-100", "bg-gray-800 bg-opacity-75")}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          {"linkNode" in props ? (
            props.linkNode
          ) : (
            <p
              className={cls(
                "text-sm text-center sm:text-left",
                "text-gray-500",
                "text-gray-400"
              )}
            >
              © {props.credit.year || ""} {name} —
              <a
                className={cls("ml-1", "text-gray-600", "text-gray-500 ")}
                {...props.credit.aProps}
              >
                {props.credit.label}
              </a>
            </p>
          )}
          {bottomText && (
            <span
              className={cls(
                "sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-sm",
                "text-gray-500",
                "text-gray-400"
              )}
            >
              {bottomText}
            </span>
          )}
        </div>
      </div>
    </FooterSection>
  );
}
