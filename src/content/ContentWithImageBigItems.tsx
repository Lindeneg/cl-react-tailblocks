import React from "react";
import {
  ContentWithImageBigItem,
  ContentWithImageBigItemProps,
} from "./ContentWithImageBigItem";
import { Section } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";

export type ContentWithImageBigItemsProps = WithTheme<{
  data: Array<WithoutTheme<ContentWithImageBigItemProps>>;
}>;

export function ContentWithImageBigItems({
  data,
  theme = "light",
  color = "indigo",
}: ContentWithImageBigItemsProps) {
  return (
    <Section testId="content-with-image-big-items-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {data.map((e, i) => (
            <ContentWithImageBigItem
              {...e}
              key={e.title + i}
              theme={theme}
              color={color}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
