import React from "react";
import { render } from "@testing-library/react";
import {
  ContentWithIconItem,
  ContentWithIconItemProps,
} from "../ContentWithIconItem";
import { MOCK_DATA_ICON_ENTRY } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<ContentWithIconItemProps>) {
  return <ContentWithIconItem {...MOCK_DATA_ICON_ENTRY} {...props} />;
}

describe("ContentWithIconItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));

    expect(getByTestId("content-with-icon-wrapper-div")).toHaveClass(
      "border p-6 rounded-lg border-gray-200"
    );
    expect(getByText(MOCK_DATA_ICON_ENTRY.title)).toHaveClass(
      "text-lg font-medium title-font mb-2 text-gray-900"
    );
    expect(getByText(MOCK_DATA_ICON_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));

    expect(getByTestId("content-with-icon-wrapper-div")).toHaveClass(
      "border p-6 rounded-lg border-gray-700 border-opacity-75"
    );
    expect(getByText(MOCK_DATA_ICON_ENTRY.title)).toHaveClass(
      "text-lg font-medium title-font mb-2 text-white"
    );
    expect(getByText(MOCK_DATA_ICON_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base text-gray-400"
    );
  });
});
