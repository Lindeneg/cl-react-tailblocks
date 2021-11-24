import React from "react";
import { render } from "@testing-library/react";
import {
  FeatureWithIconBigCol,
  FeatureWithIconBigColProps,
} from "../FeatureWithIconBigCol";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<FeatureWithIconBigColProps>) {
  return (
    <FeatureWithIconBigCol data={MOCK_DATA_WITH_ICON_BIG_ENTRIES} {...props} />
  );
}

describe("FeatureWithIconBigCol", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("feature-with-icon-big-col-section")).toHaveClass(
      "body-font text-gray-600"
    );
    MOCK_DATA_WITH_ICON_BIG_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("feature-with-icon-big-col-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_DATA_WITH_ICON_BIG_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
});
