import React, { useContext } from "react";
import { Theme } from "..";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

export type ThemeContextProviderProps = {
  children: React.ReactNode;
  value: ThemeContextType<{ callback: (theme: Theme) => void }>;
};

export function ThemeContextProvider({
  children,
  value,
}: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext<T extends Record<string, unknown>>() {
  const context = useContext<ThemeContextType<T>>(ThemeContext);
  return context;
}
