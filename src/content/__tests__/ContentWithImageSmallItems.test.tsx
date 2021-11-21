import React from "react";
import { render } from "@testing-library/react";
import {
  ContentWithImageSmallItems,
  ContentWithImageSmallItemsProps,
} from "../ContentWithImageSmallItems";
import { MOCK_DATA_SMALL_IMAGE_ENTRIES } from "../__stories__/mock-data";

function getEl({
  data = MOCK_DATA_SMALL_IMAGE_ENTRIES,
  title = "some title",
  description = "some description",
  ...props
}: Partial<ContentWithImageSmallItemsProps>) {
  return (
    <ContentWithImageSmallItems
      title={title}
      description={description}
      data={data}
      {...props}
    />
  );
}

describe("ContentWithImageSmallItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("content-with-image-small-items-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
    );
    expect(getByText("some description")).toHaveClass(
      "lg:w-1/2 w-full leading-relaxed text-gray-500"
    );
    MOCK_DATA_SMALL_IMAGE_ENTRIES.forEach((entry) => {
      expect(getByText(entry.description)).toBeDefined();
      expect(getByText(entry.title)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("content-with-image-small-items-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font mb-2 text-white"
    );
    expect(getByText("some description")).toHaveClass(
      "lg:w-1/2 w-full leading-relaxed text-gray-400"
    );
    MOCK_DATA_SMALL_IMAGE_ENTRIES.forEach((entry) => {
      expect(getByText(entry.description)).toBeDefined();
      expect(getByText(entry.title)).toBeDefined();
    });
    done();
  });
});
