import React from "react";
import {
  ContentWithIconItem,
  ContentWithIconItemProps,
} from "./ContentWithIconItem";
import { Section } from "../util/Section";
import { Button, ButtonProps } from "../util/Button";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type ContentWithIconItemsProps = WithTheme<{
  data: Array<WithoutTheme<ContentWithIconItemProps>>;
  title: string;
  description: string;
  buttonText?: string;
}> &
  Pick<ButtonProps, "onClick">;

export function ContentWithIconItems({
  data,
  title,
  description,
  onClick,
  buttonText = "Button",
  ...props
}: ContentWithIconItemsProps) {
  const { theme, color } = useMaybeTheme(props);
  const cls = getClass.bind(null, theme);
  return (
    <Section testId="content-with-icons-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1
            className={cls(
              "sm:text-3xl text-2xl font-medium title-font mb-2",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p
            className={cls(
              "lg:w-1/2 w-full leading-relaxed",
              "text-gray-500",
              "text-opacity-80"
            )}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((e, i) => (
            <ContentWithIconItem
              {...e}
              key={e.title + i}
              theme={theme}
              color={color}
            />
          ))}
        </div>
        <Button
          extendClass="flex mx-auto mt-16"
          text={buttonText}
          onClick={onClick}
          color={color}
        />
      </div>
    </Section>
  );
}
