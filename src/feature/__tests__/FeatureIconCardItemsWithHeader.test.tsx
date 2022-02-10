import React from "react";
import { render } from "@testing-library/react";
import {
  FeatureIconCardItemsWithHeader,
  FeatureIconCardItemsWithHeaderProps,
} from "../FeatureIconCardItemsWithHeader";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "../__stories__/mock-data";

function getEl({
  label = "some label",
  title = "some title",
  ...props
}: Partial<FeatureIconCardItemsWithHeaderProps>) {
  return (
    <FeatureIconCardItemsWithHeader
      label={label}
      title={title}
      data={MOCK_DATA_WITH_ICON_BIG_ENTRIES}
      {...props}
    />
  );
}

describe("FeatureIconCardItemsWithHeader", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("feature-with-icon-and-header-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("some label")).toHaveClass(
      "text-xs tracking-widest font-medium title-font mb-1 text-indigo-500"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font text-gray-900"
    );

    MOCK_DATA_WITH_ICON_BIG_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("feature-with-icon-and-header-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some label")).toHaveClass(
      "text-xs tracking-widest font-medium title-font mb-1 text-indigo-400"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font text-white"
    );
    MOCK_DATA_WITH_ICON_BIG_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
});
