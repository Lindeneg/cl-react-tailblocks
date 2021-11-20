import React from "react";
import { WithTheme, ReactHTMLInputElementProps } from "../types";

// TODO stories | tests

type BaseProps<T extends "input" | "text-area"> = WithTheme<{
  element: T;
  label: string;
  extendClass?: string;
  elementRef?: React.MutableRefObject<
    HTMLInputElement | HTMLTextAreaElement | null
  >;
}> &
  Omit<
    ReactHTMLInputElementProps<
      T extends "input" ? HTMLInputElement : HTMLTextAreaElement
    >,
    "className" | "ref"
  >;

function Base<T extends "input" | "text-area">({
  element,
  label,
  elementRef,
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
      content = (
        <input
          ref={elementRef as React.MutableRefObject<HTMLInputElement>}
          {...(inputProps as ReactHTMLInputElementProps<HTMLInputElement>)}
        />
      );
      break;
    case "text-area":
      content = (
        <textarea
          ref={elementRef as React.MutableRefObject<HTMLTextAreaElement>}
          {...(inputProps as ReactHTMLInputElementProps<HTMLTextAreaElement>)}
        />
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
