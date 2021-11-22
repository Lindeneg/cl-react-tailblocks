import React from "react";
import { Socials, SocialsProps } from "../util/Socials";
import { FooterSection } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

type AReactProps = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  "className"
>;

type AProps = {
  label: string;
  aProps?: AReactProps;
  extendClass?: string;
};

export type FooterLinksProps = WithTheme<{
  title: string;
  links: Array<{ node: React.ReactNode } | AProps>;
  extendClass?: string;
}>;

export function FooterLinks({
  title,
  links,
  extendClass = "",
  theme = "light",
}: FooterLinksProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div className={`lg:w-1/4 md:w-1/2 w-full px-4 ${extendClass}`}>
      <h2
        className={cls(
          "title-font font-medium tracking-widest text-sm mb-3",
          "text-gray-900",
          "text-white"
        )}
      >
        {title}
      </h2>
      <nav className="list-none mb-10">
        {links.map((link, i) => {
          if ("node" in link) {
            return <React.Fragment key={i}>{link.node}</React.Fragment>;
          }
          return (
            <li key={link.label + i}>
              <a
                {...link.aProps}
                className={cls(
                  `cursor-pointer ${link.extendClass}`,
                  "text-gray-600 hover:text-gray-800",
                  "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </nav>
    </div>
  );
}

export type FooterProps = WithTheme<{
  name: string;
  description: string;
  links: Array<WithoutTheme<FooterLinksProps, "extendClass">>;
  socials: Omit<SocialsProps, "className">;
  credit: {
    year?: string | number;
  } & AProps;
  reverse?: boolean;
}>;

export function Footer({
  name,
  description,
  credit,
  socials,
  links,
  theme = "light",
  color = "indigo",
  reverse = false,
}: FooterProps) {
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
          title={link.title}
          key={link.title + i}
          theme={theme}
        />
      ))}
    </div>
  );
  return (
    <FooterSection theme={theme}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {reverse && jsx}
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className={`w-10 h-10 text-white p-2 bg-${color}-500 rounded-full`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{name}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        {!reverse && jsx}
      </div>
      <div className={cls("", "bg-gray-100", "bg-gray-800 bg-opacity-75")}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p
            className={cls(
              "text-sm text-center sm:text-left",
              "hover:text-gray-500",
              "text-gray-400"
            )}
          >
            © {credit.year || ""} {name} —
            <a
              className={cls("ml-1", "text-gray-600", "text-gray-400")}
              {...credit.aProps}
            >
              {credit.label}
            </a>
          </p>
          <Socials
            {...socials}
            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          />
        </div>
      </div>
    </FooterSection>
  );
}
