import React from "react";
import { render } from "@testing-library/react";
import {
  FeatureIconCardItems,
  FeatureIconCardItemsProps,
} from "../FeatureIconCardItems";
import { MOCK_DATA_WITH_ICON_CARD_ENTRIES } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<FeatureIconCardItemsProps>) {
  return (
    <FeatureIconCardItems data={MOCK_DATA_WITH_ICON_CARD_ENTRIES} {...props} />
  );
}

describe("FeatureIconCardItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("feature-with-icon-cards-section")).toHaveClass(
      "body-font text-gray-600"
    );

    MOCK_DATA_WITH_ICON_CARD_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("feature-with-icon-cards-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_DATA_WITH_ICON_CARD_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
});
