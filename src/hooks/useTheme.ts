import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";
import { Theme, ThemeColor } from "../types";

export function useMaybeTheme(
  initial: Partial<ThemeContextType>
): ThemeContextType {
  const cxt = useContext(ThemeContext);

  let t: Theme;
  let c: ThemeColor;

  if (initial.theme) {
    t = initial.theme;
  } else if (cxt?.theme) {
    t = cxt.theme;
  } else {
    t = "light";
  }
  if (initial.color) {
    c = initial.color;
  } else if (cxt?.color) {
    c = cxt.color;
  } else {
    c = "indigo";
  }

  return { theme: t, color: c };
}
