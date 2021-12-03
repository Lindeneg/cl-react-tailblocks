import React from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

export type ThemeContextProviderProps = {
  children: React.ReactNode;
  value: ThemeContextType;
};

export function ThemeContextProvider({
  children,
  value,
}: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
