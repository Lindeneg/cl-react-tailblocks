import React from "react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "./FeatureWithIconItem";
import { Section } from "../util/Section";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type FeatureIconCardItemsWithHeaderProps = WithTheme<{
  label: string;
  title: string;
  data: Array<
    WithoutTheme<FeatureWithIconItemProps, "outerClass" | "innerClass">
  >;
}>;

export function FeatureIconCardItemsWithHeader({
  label,
  title,
  data,
  theme = "light",
  color = "indigo",
}: FeatureIconCardItemsWithHeaderProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            {label}
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((entry, i) => (
            <div className="p-4 md:w-1/3">
              <FeatureWithIconItem
                {...entry}
                outerClass="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
                innerClass="flex-grow"
                tightClass="flex items-center mb-3"
                extendDivClass="w-8 h-8 mr-3 flex-shrink-0"
                extendSvgClass="w-4 h-4"
                color={color}
                key={entry.title + i}
                theme={theme}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
