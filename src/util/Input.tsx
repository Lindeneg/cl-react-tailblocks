import React from "react";
import { WithTheme } from "../types";

// TODO stories | tests

type ReactHTMLProps<T extends HTMLInputElement | HTMLTextAreaElement> =
  React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T>;

type BaseProps<T extends "input" | "text-area"> = WithTheme<{
  element: T;
  label: string;
  extendClass?: string;
}> &
  Omit<
    ReactHTMLProps<T extends "input" ? HTMLInputElement : HTMLTextAreaElement>,
    "className"
  >;

function Base<T extends "input" | "text-area">({
  element,
  label,
  extendClass = "",
  theme = "light",
  ...props
}: BaseProps<T>) {
  const isDark = theme === "dark";
  const inputProps = {
    ...props,
    className: `rounded border focus:ring-2 text-base outline-none py-1 px-3 focus:border-indigo-500 transition-colors duration-200 ease-in-out ${
      isDark
        ? "bg-gray-800 border-gray-700 focus:ring-indigo-900 text-gray-100"
        : "bg-white border-gray-300 focus:ring-indigo-200 text-gray-700"
    } ${extendClass}`,
  };
  let content: JSX.Element | null;
  switch (element) {
    case "input":
      content = <input {...(inputProps as ReactHTMLProps<HTMLInputElement>)} />;
      break;
    case "text-area":
      content = (
        <textarea {...(inputProps as ReactHTMLProps<HTMLTextAreaElement>)} />
      );
      break;
    default:
      content = null;
      break;
  }
  return (
    <>
      <label
        htmlFor={label}
        className={`leading-7 text-sm text-gray-${isDark ? "400" : "600"}`}
      >
        {label}
      </label>
      {content}
      <input />
    </>
  );
}

export type InputProps = Omit<BaseProps<"input">, "element">;

export function Input(props: InputProps) {
  return <Base {...props} element="input" />;
}

export type TextAreaProps = Omit<BaseProps<"text-area">, "element">;

export function TextArea(props: TextAreaProps) {
  return <Base {...props} element="text-area" />;
}
