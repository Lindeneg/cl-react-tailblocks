import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PricingCard, PricingCardProps } from "../PricingCard";
import { MOCK_DATA_CARD } from "../__stories__/mock-data";

function getEl({
  selected = false,
  selectedTag = "",
  ...props
}: Partial<PricingCardProps>) {
  return (
    <PricingCard
      selected={selected}
      selectedTag={selectedTag}
      {...MOCK_DATA_CARD}
      {...props}
    />
  );
}

describe("PricingCard", () => {
  test("renders light component", () => {
    const { getByText } = render(getEl({ theme: "light" }));
    expect(getByText(MOCK_DATA_CARD.label)).toHaveClass(
      "text-sm tracking-widest title-font mb-1 font-medium"
    );
    expect(getByText(MOCK_DATA_CARD.price)).toBeDefined();
    MOCK_DATA_CARD.features.forEach((entry) => {
      expect(getByText(entry)).toBeDefined();
    });
  });
  test("renders dark component", () => {
    const { getByText } = render(getEl({ theme: "dark" }));
    expect(getByText(MOCK_DATA_CARD.label)).toHaveClass(
      "text-sm tracking-widest title-font mb-1 font-medium text-gray-400"
    );
    expect(getByText(MOCK_DATA_CARD.price)).toBeDefined();
    MOCK_DATA_CARD.features.forEach((entry) => {
      expect(getByText(entry)).toBeDefined();
    });
  });
  test("renders selected component", () => {
    const { getByText } = render(
      getEl({ selectedTag: "popular", selected: true, theme: "light" })
    );
    expect(getByText("popular")).toHaveClass(
      "bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
    );
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
