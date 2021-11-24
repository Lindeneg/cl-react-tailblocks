import React from "react";
import { Theme } from "./types";

export function getRefValue<
  T extends HTMLInputElement | HTMLTextAreaElement | null
>(ref: React.MutableRefObject<T>, fallback = "") {
  return ref.current?.value || fallback;
}

export function getClass(
  theme: Theme,
  base: string,
  light: string,
  dark: string
) {
  return `${base} ${theme === "light" ? light : dark}`;
}
