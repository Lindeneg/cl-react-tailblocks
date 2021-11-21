import React from "react";
import { WithTheme, ReactHTMLInputElementProps, ThemeColor } from "../types";
import { getClass } from "../shared";

export type BaseProps<T extends "input" | "text-area"> = WithTheme<{
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
    "className" | "ref" | "color"
  >;

export function Base<T extends "input" | "text-area">({
  element,
  label,
  elementRef,
  extendClass = "",
  theme = "light",
  color = "indigo",
  ...props
}: BaseProps<T>) {
  const cls = getClass.bind(null, theme);
  const inputProps = {
    ...props,
    className: cls(
      `rounded border focus:ring-2 text-base outline-none py-1 px-3 focus:border-${color}-500 transition-colors duration-200 ease-in-out ${extendClass}`,
      `bg-white border-gray-300 focus:ring-${color}-200 text-gray-700`,
      `bg-gray-800 border-gray-700 focus:ring-${color}-900 text-gray-100`
    ),
  };
  let content: JSX.Element | null;
  switch (element) {
    case "input":
      content = (
        <input
          data-testid="input-test-id"
          ref={elementRef as React.MutableRefObject<HTMLInputElement>}
          {...(inputProps as ReactHTMLInputElementProps<HTMLInputElement>)}
        />
      );
      break;
    case "text-area":
      content = (
        <textarea
          data-testid="texarea-test-id"
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
        className={cls("leading-7 text-sm", "text-gray-600", "text-gray-400")}
      >
        {label}
      </label>
      {content}
    </>
  );
}

export type InputProps = Omit<BaseProps<"input">, "element" | "color"> & {
  themeColor?: ThemeColor;
};

export function Input({ themeColor, ...props }: InputProps) {
  return <Base {...props} color={themeColor} element="input" />;
}

export type TextAreaProps = Omit<
  BaseProps<"text-area">,
  "element" | "color"
> & {
  themeColor?: ThemeColor;
};

export function TextArea({ themeColor, ...props }: TextAreaProps) {
  return <Base {...props} color={themeColor} element="text-area" />;
}
