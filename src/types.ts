import React from "react";

export type Theme = "light" | "dark";

export type ThemeColor =
  | "indigo"
  | "yellow"
  | "red"
  | "purple"
  | "pink"
  | "blue"
  | "green";

export type ReactHTMLInputElementProps<
  T extends HTMLInputElement | HTMLTextAreaElement
> = React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T>;

export type ReactInputProps = Omit<
  ReactHTMLInputElementProps<HTMLInputElement>,
  "className" | "ref"
> & { label?: string };
export type ReactTextAreaProps = Omit<
  ReactHTMLInputElementProps<HTMLTextAreaElement>,
  "className" | "ref"
> & { label?: string };

export type SharedFormProps = WithTheme<{
  label: string;
  mapIframeSrc: string;
  topDescription?: string;
  bottomDescription?: string;
  buttonLabel?: string;
  textAreaProps?: ReactTextAreaProps;
}>;

export type WithTheme<T extends Record<string, unknown>> = T & {
  theme?: Theme;
  color?: ThemeColor;
};

export type WithoutTheme<
  T extends Record<string, unknown>,
  K extends keyof T = ""
> = Omit<T, "theme" | "color" | K>;
