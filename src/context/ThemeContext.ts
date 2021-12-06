import { createContext } from "react";
import { Theme, ThemeColor } from "../types";

export type ThemeContextContent = {
  theme: Theme;
  color: ThemeColor;
};

export type ThemeContextType<T extends Record<string, unknown>> =
  ThemeContextContent & T;

export const ThemeContext = createContext<ThemeContextType<any> | null>(null);
