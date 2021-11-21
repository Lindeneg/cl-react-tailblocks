import React from "react";
import { render } from "@testing-library/react";
import {
  ContentWithImageSmallItem,
  ContentWithImageSmallItemProps,
} from "../ContentWithImageSmallItem";
import { MOCK_DATA_SMALL_IMAGE_ENTRY } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<ContentWithImageSmallItemProps>) {
  return (
    <ContentWithImageSmallItem {...MOCK_DATA_SMALL_IMAGE_ENTRY} {...props} />
  );
}

describe("ContentWithImageSmallItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("content-with-image-small-item-div")).toHaveClass(
      "p-6 rounded-lg bg-gray-100"
    );
    expect(getByText(MOCK_DATA_SMALL_IMAGE_ENTRY.label)).toHaveClass(
      "tracking-widest text-xs font-medium title-font text-indigo-500"
    );
    expect(getByText(MOCK_DATA_SMALL_IMAGE_ENTRY.title)).toHaveClass(
      "text-lg font-medium title-font mb-4 text-gray-900"
    );
    expect(getByText(MOCK_DATA_SMALL_IMAGE_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base text-gray-600"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("content-with-image-small-item-div")).toHaveClass(
      "p-6 rounded-lg bg-gray-800"
    );
    expect(getByText(MOCK_DATA_SMALL_IMAGE_ENTRY.label)).toHaveClass(
      "tracking-widest text-xs font-medium title-font text-indigo-400"
    );
    expect(getByText(MOCK_DATA_SMALL_IMAGE_ENTRY.title)).toHaveClass(
      "text-lg font-medium title-font mb-4 text-white"
    );
    expect(getByText(MOCK_DATA_SMALL_IMAGE_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base text-gray-400"
    );
  });
});
