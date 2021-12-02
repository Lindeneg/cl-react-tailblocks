import React from "react";
import {
  ContentWithImageSmallItem,
  ContentWithImageSmallItemProps,
} from "./ContentWithImageSmallItem";
import { Section } from "../util/Section";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithoutTheme, WithTheme } from "../types";
import { getClass } from "../shared";

export type ContentWithImageSmallItemsProps = WithTheme<{
  title: string;
  description: string;
  data: Array<WithoutTheme<ContentWithImageSmallItemProps>>;
}>;

export function ContentWithImageSmallItems({
  data,
  title,
  description,
  ...props
}: ContentWithImageSmallItemsProps) {
  const { theme, color } = useMaybeTheme(props);
  const cls = getClass.bind(null, theme);
  return (
    <Section testId="content-with-image-small-items-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              className={cls(
                "sm:text-3xl text-2xl font-medium title-font mb-2",
                "text-gray-900",
                "text-white"
              )}
            >
              {title}
            </h1>
            <div className={`h-1 w-20 bg-${color}-500 rounded`}></div>
          </div>
          <p
            className={cls(
              "lg:w-1/2 w-full leading-relaxed",
              "text-gray-500",
              "text-gray-400"
            )}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((e, i) => (
            <ContentWithImageSmallItem
              {...e}
              key={e.label + i}
              theme={theme}
              color={color}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
