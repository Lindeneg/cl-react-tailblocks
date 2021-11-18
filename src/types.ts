export type Theme = "light" | "dark";

export type WithTheme<T extends Record<string, unknown>> = T & {
  theme?: Theme;
};

export type WithoutTheme<
  T extends Record<string, unknown>,
  K extends keyof T = ""
> = Omit<T, "theme" | K>;
