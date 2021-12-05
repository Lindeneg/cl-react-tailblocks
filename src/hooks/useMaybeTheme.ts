import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";
import { Theme, ThemeColor } from "../types";

/* Every component has access to the Theme context but 
each component also takes individual theme properties. 

If context is defined and individual theme props are undefined,
the context theme will be used.

If context is defined and individual theme props are defined,
the individual theme props will be used.

If context is undefined and individual theme props are undefined,
the default props will be used. */

export function useMaybeTheme(
  initial?: Partial<ThemeContextType<{}>>
): ThemeContextType<{}> {
  const cxt = useContext(ThemeContext);

  let t: Theme;
  let c: ThemeColor;

  if (initial?.theme) {
    t = initial.theme;
  } else if (cxt?.theme) {
    t = cxt.theme;
  } else {
    t = "light";
  }
  if (initial?.color) {
    c = initial.color;
  } else if (cxt?.color) {
    c = cxt.color;
  } else {
    c = "indigo";
  }

  return { theme: t, color: c };
}
