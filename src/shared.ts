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

const LABELS = ["", "K", "M"];

export function formatNumber(n: number) {
  const idx = Math.floor(Math.log(n) / Math.log(1000));
  if (idx >= LABELS.length) {
    return (n / 1_000_000).toFixed(1) + "M";
  }
  return `${(n / 1_000 ** n).toFixed(1)}${LABELS[idx]}`;
}
