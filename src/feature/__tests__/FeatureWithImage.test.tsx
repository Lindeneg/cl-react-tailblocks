import React from "react";
import { render } from "@testing-library/react";
import { FeatureWithImage, FeatureWithImageProps } from "../FeatureWithImage";
import { MOCK_DATA_WITH_IMAGE_ENTRIES } from "../__stories__/mock-data";

function getEl({ imgSrc = "", ...props }: Partial<FeatureWithImageProps>) {
  return (
    <FeatureWithImage
      {...props}
      data={MOCK_DATA_WITH_IMAGE_ENTRIES}
      imgSrc={imgSrc}
    />
  );
}

describe("FeatureWithImage", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("feature-with-image-section")).toHaveClass(
      "body-font text-gray-600"
    );

    MOCK_DATA_WITH_IMAGE_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("feature-with-image-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_DATA_WITH_IMAGE_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
});
