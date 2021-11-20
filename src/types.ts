export type Theme = "light" | "dark";

export type ReactHTMLInputElementProps<
  T extends HTMLInputElement | HTMLTextAreaElement
> = React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T>;

export type ReactInputProps = Omit<
  ReactHTMLInputElementProps<HTMLInputElement>,
  "className" | "ref"
> & { label?: string };
export type ReactTextAreaProps = Omit<
  ReactHTMLInputElementProps<HTMLTextAreaElement>,
  "className" | "ref"
> & { label?: string };

export type SharedFormProps = WithTheme<{
  label: string;
  mapIframeSrc: string;
  topDescription?: string;
  bottomDescription?: string;
  buttonLabel?: string;
  textAreaProps?: ReactTextAreaProps;
}>;

export type Image = {
  imgSrc: string;
  imgAlt?: string;
};

export type WithTheme<T extends Record<string, unknown>> = T & {
  theme?: Theme;
};

export type WithoutTheme<
  T extends Record<string, unknown>,
  K extends keyof T = ""
> = Omit<T, "theme" | K>;
