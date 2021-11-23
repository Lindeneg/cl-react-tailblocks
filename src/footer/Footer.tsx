import React from "react";
import { FooterSection } from "../util/Section";
import { Socials, SocialsProps } from "../util/Socials";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type AReactProps = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  "className"
>;

export type AProps = {
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
    <div className={`w-full px-4 ${extendClass}`}>
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
  socials: Omit<SocialsProps, "className">;
}> &
  (
    | {
        credit: {
          year?: string | number;
        } & AProps;
      }
    | { linkNode: React.ReactNode }
  );

export function Footer({
  name,
  socials,
  withoutSection = false,
  theme = "light",
  color = "indigo",
  ...props
}: FooterProps & { withoutSection?: boolean }) {
  const cls = getClass.bind(null, theme);
  const jsx = (
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      {"linkNode" in props ? (
        props.linkNode
      ) : (
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
            className={`w-10 h-10 p-2 text-white bg-${color}-500 rounded-full`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{name}</span>
        </a>
      )}
      {"credit" in props && (
        <p
          className={cls(
            "text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4",
            "text-gray-500",
            "text-gray-400 sm:border-gray-800"
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
      <Socials
        {...socials}
        className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
      />
    </div>
  );
  return (
    <>
      {withoutSection ? (
        jsx
      ) : (
        <FooterSection testId="footer-with-links-section" theme={theme}>
          {jsx}
        </FooterSection>
      )}
    </>
  );
}
