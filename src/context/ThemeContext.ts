import { createContext } from "react";
import { Theme, ThemeColor } from "../types";

export type ThemeContextType = {
  theme: Theme;
  color: ThemeColor;
  setContext: (newState: { theme?: Theme; color?: ThemeColor }) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ThemeContext.Provider;
