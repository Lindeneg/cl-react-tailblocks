import React from "react";
import { HeaderSection } from "../util/Section";
import { AProps } from "../footer/Footer";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "../util/Button";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

const orientationMap: {
  [T in "nav" | "a"]: {
    [K in HeaderOrientation]: [string, string, string];
  };
} = {
  nav: {
    right: [
      "flex flex-wrap items-center text-base justify-center md:ml-auto",
      "",
      "",
    ],
    left: [
      "flex flex-wrap items-center text-base justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l",
      "md:border-gray-400",
      "md:border-gray-700",
    ],
    swap: ["flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto", "", ""],
    middle: [
      "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center",
      "",
      "",
    ],
  },
  a: {
    right: [
      "flex title-font font-medium items-center mb-4 md:mb-0",
      "text-gray-900",
      "text-white",
    ],
    left: [
      "flex title-font font-medium items-center mb-4 md:mb-0",
      "hover:text-gray-900",
      "hover:text-white",
    ],
    swap: [
      "flex order-first lg:order-none lg:w-1/5 title-font font-medium lg:items-center lg:justify-center mb-4 md:mb-0",
      "text-gray-900",
      "text-white",
    ],
    middle: [
      "flex title-font font-medium items-center mb-4 md:mb-0",
      "text-gray-900",
      "text-white",
    ],
  },
};

type LinkProps = WithTheme<{
  aClass?: string;
  spanClass?: string;
  linkNode?: React.ReactNode;
  name?: string;
}>;

function Link({
  linkNode,
  aClass = "",
  spanClass = "",
  name = "",
  ...props
}: LinkProps) {
  const { color } = useMaybeTheme(props);
  return linkNode ? (
    <>{linkNode}</>
  ) : (
    <a className={aClass}>
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
      <span className={`ml-3 text-xl ${spanClass}`}>{name}</span>
    </a>
  );
}

type NavProps = {
  links: Array<Omit<AProps, "extendClass"> & { linkNode?: React.ReactNode }>;
  navClass?: string;
  aClass?: string;
};

function Nav({ links, navClass = "", aClass = "" }: NavProps) {
  return (
    <nav className={navClass}>
      {links.map((link, i) => {
        if ("linkNode" in link) {
          return <React.Fragment key={i}>{link.linkNode}</React.Fragment>;
        }
        return (
          <a {...link.aProps} key={i} className={aClass}>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

type ButtonProps = WithTheme<{
  buttonText?: string;
  className?: string;
  buttonNode?: React.ReactNode;
}> &
  Pick<BaseButtonProps, "onClick">;

function Button({
  buttonNode,
  onClick,
  buttonText = "",
  className = "",
  ...props
}: ButtonProps) {
  const { color } = useMaybeTheme(props);
  if (buttonNode) {
    return <>{buttonNode}</>;
  }
  return (
    <BaseButton
      overrideClass={className}
      color={color}
      text={buttonText}
      onClick={onClick}
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </BaseButton>
  );
}

export type HeaderOrientation = "right" | "left" | "middle" | "swap";

export type HeaderProps = WithTheme<{
  orientation?: HeaderOrientation;
}> &
  WithoutTheme<ButtonProps, "className"> &
  WithoutTheme<LinkProps, "aClass"> &
  Omit<NavProps, "aClass" | "navClass">;

export function Header({
  links,
  buttonNode,
  onClick,
  theme,
  color,
  orientation = "right",
  buttonText = "Button",
  ...linkProps
}: HeaderProps) {
  const cxt = useMaybeTheme({ theme, color });
  const cls = getClass.bind(null, cxt.theme);
  const linkJsx = (
    <Link
      {...linkProps}
      aClass={cls(...orientationMap.a[orientation])}
      spanClass={orientation === "swap" ? "xl:block lg:hidden" : ""}
      theme={cxt.theme}
      color={cxt.color}
    />
  );
  const nav = (
    <Nav
      links={links}
      navClass={cls(...orientationMap.nav[orientation])}
      aClass={cls("mr-5", "hover:text-gray-900", "hover:text-white")}
    />
  );
  const btn = (
    <Button
      className={cls(
        "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0",
        "bg-gray-100 hover:bg-gray-200",
        "bg-gray-800 hover:bg-gray-700"
      )}
      color={cxt.color}
      buttonNode={buttonNode}
      buttonText={buttonText}
      onClick={onClick}
    />
  );
  return (
    <HeaderSection testId="header-section" theme={cxt.theme}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {orientation === "swap" ? (
          <>
            {nav}
            {linkJsx}
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
              {btn}
            </div>
          </>
        ) : (
          <>
            {linkJsx}
            {nav}
            {btn}
          </>
        )}
      </div>
    </HeaderSection>
  );
}
