import React from "react";
import { HeaderSection } from "../util/Section";
import { AProps } from "../footer/Footer";
import { Button, ButtonProps } from "../util/Button";
import { WithTheme, Theme } from "../types";
import { getClass } from "../shared";

const orientationMap: { [K in HeaderOrientation]: string } = {
  right: "",
  left: "f",
  middle: "",
  swap: "",
};

function getOrientationClass(theme: Theme, key: HeaderOrientation): string {
  const light = theme === "light";
  switch (key) {
    // nav
    case "right":
      return "flex-wrap items-center text-base justify-center md:ml-auto";
    // nav
    case "left":
      return `flex-wrap items-center text-base justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-${
        light ? "400" : "700"
      }`;
    case "middle":
      // link anchor
      return `order-first lg:order-none lg:w-1/5 title-font font-medium text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0`;
    case "swap":
      return "";
    default:
      return "";
  }
}

export type HeaderOrientation = "right" | "left" | "middle" | "swap";

export type HeaderProps = WithTheme<{
  links: Array<AProps | { node: React.ReactNode }>;
  linkNode?: React.ReactNode;
  buttonNode?: React.ReactNode;
  orientation?: HeaderOrientation;
  name?: string;
  buttonText?: string;
}> &
  Pick<ButtonProps, "onClick">;

export function Header({
  links,
  linkNode,
  buttonNode,
  onClick,
  name = "",
  orientation = "right",
  buttonText = "Button",
  theme = "light",
  color = "indigo",
}: HeaderProps) {
  const cls = getClass.bind(null, theme);
  // make each const a component and easily pass classes
  const linkJsx = linkNode ? (
    linkNode
  ) : (
    <a
      className={cls(
        "flex title-font font-medium items-center mb-4 md:mb-0",
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
  );
  const navJsx = (
    <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto">
      {links.map((link, i) => {
        if ("node" in link) {
          return <React.Fragment key={name + i}>{link.node}</React.Fragment>;
        }
        return (
          <a
            {...link.aProps}
            key={link.label + i}
            className={cls("mr-5", "hover:text-gray-900", "hover:text-white")}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
  const btnJsx = buttonNode ? (
    buttonNode
  ) : (
    <Button
      overrideClass={cls(
        "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0",
        "bg-gray-100 hover:bg-gray-200",
        "bg-gray-800 hover:bg-gray-700"
      )}
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
    </Button>
  );
  return (
    <HeaderSection testId="header-section" theme={theme}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {linkJsx}
        {navJsx}
        {btnJsx}
      </div>
    </HeaderSection>
  );
}
