import React from "react";
import { render } from "@testing-library/react";
import { PricingDynamic, PricingDynamicProps } from "../PricingDynamic";
import { MOCK_DATA_CARDS } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<PricingDynamicProps>) {
  return <PricingDynamic {...MOCK_DATA_CARDS} {...props} />;
}

describe("PricingDynamic", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("price-dynamic-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText(MOCK_DATA_CARDS.title)).toHaveClass(
      "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
    );
    expect(getByText(MOCK_DATA_CARDS.description)).toHaveClass(
      "lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("price-dynamic-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText(MOCK_DATA_CARDS.title)).toHaveClass(
      "sm:text-4xl text-3xl font-medium title-font mb-2 text-white"
    );
    expect(getByText(MOCK_DATA_CARDS.description)).toHaveClass(
      "lg:w-2/3 mx-auto leading-relaxed text-base"
    );
  });
});
