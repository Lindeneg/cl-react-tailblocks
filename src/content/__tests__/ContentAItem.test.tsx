import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ContentAItem, ContentAItemProps } from "../ContentAItem";
import { MOCK_DATA_A_ENTRY } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<ContentAItemProps>) {
  return <ContentAItem {...MOCK_DATA_A_ENTRY} {...props} />;
}

describe("ContentAItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("content-a-item-div")).toHaveClass(
      "xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-opacity-60 border-gray-200"
    );
    expect(getByText(MOCK_DATA_A_ENTRY.label)).toHaveClass(
      "text-lg sm:text-xl font-medium title-font mb-2 text-gray-900"
    );
    expect(getByText(MOCK_DATA_A_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base mb-4 text-gray-900"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("content-a-item-div")).toHaveClass(
      "xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-opacity-60 border-gray-800"
    );
    expect(getByText(MOCK_DATA_A_ENTRY.label)).toHaveClass(
      "text-lg sm:text-xl font-medium title-font mb-2 text-white"
    );
    expect(getByText(MOCK_DATA_A_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base mb-4 text-gray-300"
    );
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
