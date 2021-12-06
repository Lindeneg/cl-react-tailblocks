import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

export function useTheme<
  T extends Record<string, unknown>
>(): ThemeContextType<T> {
  const context = useContext<ThemeContextType<T>>(ThemeContext);
  if (!context) {
    console.error("ThemeContext must be wrapped in a ThemeContextProvider");
  }
  return context;
}
