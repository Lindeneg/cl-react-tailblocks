import React, { useState } from "react";
import { PricingCard, PricingCardProps } from "./PricingCard";
import { Button } from "../util/Button";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type PricingDynamicProps = WithTheme<{
  data: Array<WithoutTheme<PricingCardProps>>;
  description: string;
  options: [string, string];
  title?: string;
}>;

export function PricingDynamic({
  data,
  description,
  options,
  title = "Pricing",
  theme = "light",
  color = "indigo",
}: PricingDynamicProps) {
  const cls = getClass.bind(null, theme);
  const [selected, setSelected] = useState<string>(options[0]);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            {title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            {description}
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
              {options[0]}
            </button>
            <button className="py-1 px-4 focus:outline-none">
              {options[1]}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((entry, i) => (
            <PricingCard
              {...entry}
              key={entry.label + i}
              theme={theme}
              color={color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
