import React from "react";
import { ContentAItem, ContentAItemProps } from "./ContentAItem";
import { Button, ButtonProps } from "../util/Button";
import { Section } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type ContentAItemsProps = WithTheme<{
  label: string;
  title: string;
  description: string;
  data: Array<WithoutTheme<ContentAItemProps, "theme">>;
}> &
  Pick<ButtonProps, "onClick">;

export function ContentAItems({
  data,
  label,
  title,
  description,
  onClick,
  theme = "light",
}: ContentAItemsProps) {
  const cls = getClass.bind(null, theme);
  return (
    <Section
      testId="content-a-items-section"
      theme={theme}
      extendClass="relative"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className={cls(
              "text-xs tracking-widest font-medium title-font mb-1",
              "text-indigo-500",
              "text-indigo-400"
            )}
          >
            {label}
          </h2>
          <h1
            className={cls(
              "sm:text-3xl text-2xl font-medium title-font mb-4",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap">
          {data.map((e, i) => (
            <ContentAItem {...e} key={e.label + i} theme={theme} />
          ))}
        </div>
        <Button
          text="Button"
          extendClass="flex mx-auto mt-16"
          onClick={onClick}
        />
      </div>
    </Section>
  );
}
