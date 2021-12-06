import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

export type ThemeContextProviderProps<T extends Record<string, unknown>> = {
  children: React.ReactNode;
  value: ThemeContextType<T>;
};

export function ThemeContextProvider<T extends Record<string, unknown>>({
  children,
  value,
}: ThemeContextProviderProps<T>) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext<T extends Record<string, unknown>>() {
  const context = useContext<ThemeContextType<T>>(ThemeContext);
  return context;
}
