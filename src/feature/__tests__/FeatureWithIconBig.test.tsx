import React from "react";
import { render } from "@testing-library/react";
import {
  FeatureWithIconBig,
  FeatureWithIconBigProps,
} from "../FeatureWithIconBig";
import { MOCK_DATA_WITH_ICON_BIG_ENTRIES } from "../__stories__/mock-data";

function getEl({
  description = "some description",
  title = "some title",
  ...props
}: Partial<FeatureWithIconBigProps>) {
  return (
    <FeatureWithIconBig
      description={description}
      title={title}
      data={MOCK_DATA_WITH_ICON_BIG_ENTRIES}
      {...props}
    />
  );
}

describe("FeatureWithIconBig", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("feature-icon-big-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("some description")).toHaveClass(
      "text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500"
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
    expect(getByTestId("feature-icon-big-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some description")).toHaveClass(
      "text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500"
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
