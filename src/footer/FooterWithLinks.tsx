import React from "react";
import { FooterProps, FooterLinks, FooterLinksProps } from "./Footer";
import { Socials } from "../util/Socials";
import { FooterSection } from "../util/Section";
import { WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FooterWithLinksProps = {
  description: string;
  links: Array<WithoutTheme<FooterLinksProps, "extendClass">>;
  reverse?: boolean;
} & FooterProps;

export function FooterWithLinks({
  name,
  description,
  socials,
  links,
  theme = "light",
  color = "indigo",
  reverse = false,
  ...props
}: FooterWithLinksProps) {
  const cls = getClass.bind(null, theme);
  const jsx = (
    <div
      className={`flex-grow flex flex-wrap ${
        reverse
          ? "md:pr-20 -mb-10 order-first"
          : "md:pl-20 -mb-10 md:mt-0 mt-10"
      } md:text-left text-center`}
    >
      {links.map((link, i) => (
        <FooterLinks
          {...link}
          extendClass="lg:w-1/4 md:w-1/2"
          title={link.title}
          key={link.title + i}
          theme={theme}
        />
      ))}
    </div>
  );
  return (
    <FooterSection testId="footer-with-links-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {reverse && jsx}
        {"linkNode" in props ? (
          <>{props.linkNode}</>
        ) : (
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              className={cls(
                "flex title-font font-medium items-center md:justify-start justify-center",
                "text-gray-900",
                "text-white"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`w-10 h-10 text-white p-2 bg-${color}-500 rounded-full`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">{name}</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          </div>
        )}
        {!reverse && jsx}
      </div>
      <div className={cls("", "bg-gray-100", "bg-gray-800 bg-opacity-75")}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          {"credit" in props && (
            <p
              className={cls(
                "text-sm text-center sm:text-left",
                "hover:text-gray-500",
                "text-gray-400"
              )}
            >
              © {props.credit?.year || ""} {name} —
              <a
                className={cls("ml-1", "text-gray-600", "text-gray-400")}
                {...props.credit?.aProps}
              >
                {props.credit?.label}
              </a>
            </p>
          )}
          <Socials
            {...socials}
            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          />
        </div>
      </div>
    </FooterSection>
  );
}
