import React from "react";

export type PricingPlan<T extends Array<string>> = {
  [K in T[number]]: Array<string | React.ReactNode>;
};

export type PricingStaticProps<T extends Array<string>> = {
  title: string;
  headers: T;
  data: PricingPlan<T>;
};

export function PricingStatic<T extends Array<string>>({
  headers,
  data,
}: PricingStaticProps<T>) {
  return <div></div>;
}
