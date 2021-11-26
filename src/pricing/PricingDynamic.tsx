import React, { useState } from "react";
import { Prices, PricingCard, PricingCardProps } from "./PricingCard";
import { Section } from "../util/Section";
import { Button } from "../util/Button";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type PricingDynamicProps = WithTheme<{
  data: Array<
    WithoutTheme<PricingCardProps, "price" | "comparison"> & {
      prices: [Prices, Prices] | Prices;
      comparisons?: [string | React.ReactNode, string | React.ReactNode];
    }
  >;
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
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  return (
    <Section
      testId="price-dynamic-section"
      extendClass="overflow-hidden"
      theme={theme}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            className={cls(
              "sm:text-4xl text-3xl font-medium title-font mb-2",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p
            className={cls(
              "lg:w-2/3 mx-auto leading-relaxed text-base",
              "text-gray-500",
              ""
            )}
          >
            {description}
          </p>
          <div
            className={`flex mx-auto border-2 border-${color}-500 rounded overflow-hidden mt-6`}
          >
            <Button
              overrideClass={`py-1 px-4 focus:outline-none ${
                selectedIdx === 0 ? `bg-${color}-500 text-white` : ""
              }`}
              text={options[0]}
              onClick={() => {
                setSelectedIdx(0);
              }}
            />
            <Button
              overrideClass={`py-1 px-4 focus:outline-none ${
                selectedIdx === 1 ? `bg-${color}-500 text-white` : ""
              }`}
              text={options[1]}
              onClick={() => {
                setSelectedIdx(1);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map(({ prices, comparisons, ...entry }, i) => {
            let selectedPrice: string | number;
            let selectedPer: string | undefined;
            if (Array.isArray(prices)) {
              const { price, per } = prices[selectedIdx];
              selectedPrice = price;
              selectedPer = per;
            } else {
              selectedPrice = prices.price;
              selectedPer = prices.per;
            }
            return (
              <PricingCard
                {...entry}
                comparison={comparisons && comparisons[selectedIdx]}
                price={selectedPrice}
                per={selectedPer}
                key={entry.label + i}
                theme={theme}
                color={color}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
