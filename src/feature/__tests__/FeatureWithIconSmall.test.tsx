import React from "react";
import { render } from "@testing-library/react";
import {
  FeatureWithIconSmall,
  FeatureWithIconSmallProps,
} from "../FeatureWithIconSmall";
import { MOCK_DATA_WITH_ICON_ENTRIES } from "../__stories__/mock-data";

function getEl({
  title = "some title",
  ...props
}: Partial<FeatureWithIconSmallProps>) {
  return (
    <FeatureWithIconSmall
      {...props}
      data={MOCK_DATA_WITH_ICON_ENTRIES}
      title={title}
    />
  );
}

describe("FeatureWithIconSmall", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("feature-icon-small-section")).toHaveClass(
      "body-font text-gray-600"
    );

    MOCK_DATA_WITH_ICON_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("feature-icon-small-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_DATA_WITH_ICON_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
});
