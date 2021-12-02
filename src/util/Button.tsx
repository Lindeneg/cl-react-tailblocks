import React from "react";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { ThemeColor } from "../types";

export type ButtonProps = {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  overrideClass?: string;
  extendClass?: string;
  color?: ThemeColor;
  children?: React.ReactNode;
};

export function Button({
  overrideClass,
  extendClass,
  onClick,
  children,
  text = "",
  ...props
}: ButtonProps) {
  const { color } = useMaybeTheme(props);
  return (
    <button
      onClick={onClick}
      className={`${
        overrideClass
          ? overrideClass
          : `text-white bg-${color}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${color}-600 rounded text-lg ${extendClass}`
      }`}
    >
      <>
        {text}
        {children}
      </>
    </button>
  );
}
