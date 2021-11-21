import React from "react";
import { render } from "@testing-library/react";
import {
  ContentWithImageBigItems,
  ContentWithImageBigItemsProps,
} from "../ContentWithImageBigItems";
import { MOCK_DATA_BIG_IMAGE_ENTRIES } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<ContentWithImageBigItemsProps>) {
  return (
    <ContentWithImageBigItems
      data={MOCK_DATA_BIG_IMAGE_ENTRIES.map((e) => ({
        ...e,
        onClick: () => {},
      }))}
      {...props}
    />
  );
}

describe("ContentWithImageBigItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("content-with-image-big-items-section")).toHaveClass(
      "body-font text-gray-600"
    );
    MOCK_DATA_BIG_IMAGE_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("content-with-image-big-items-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_DATA_BIG_IMAGE_ENTRIES.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.description)).toBeDefined();
    });
    done();
  });
});
