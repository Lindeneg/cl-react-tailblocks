import { createContext } from "react";
import { Theme, ThemeColor } from "../types";

export type SetContext = (newState: {
  theme?: Theme;
  color?: ThemeColor;
}) => void;

export type ThemeContextContent = {
  theme: Theme;
  color: ThemeColor;
};

export type ThemeContextType = ThemeContextContent & {
  setContext?: SetContext;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
