import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  ContentWithImageBigItem,
  ContentWithImageBigItemProps,
} from "../ContentWithImageBigItem";
import { MOCK_DATA_BIG_IMAGE_ENTRY } from "../__stories__/mock-data";

function getEl({
  onClick = () => {},
  ...props
}: Partial<ContentWithImageBigItemProps>) {
  return (
    <ContentWithImageBigItem
      {...MOCK_DATA_BIG_IMAGE_ENTRY}
      {...props}
      onClick={onClick}
    />
  );
}

describe("ContentWithImageBigItem", () => {
  test("renders light component", () => {
    const { getByText } = render(getEl({ theme: "light" }));
    expect(getByText(MOCK_DATA_BIG_IMAGE_ENTRY.title)).toHaveClass(
      "title-font text-2xl font-medium mt-6 mb-3 text-gray-900"
    );
    expect(getByText(MOCK_DATA_BIG_IMAGE_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base"
    );
  });
  test("renders dark component", () => {
    const { getByText } = render(getEl({ theme: "dark" }));
    expect(getByText(MOCK_DATA_BIG_IMAGE_ENTRY.title)).toHaveClass(
      "title-font text-2xl font-medium mt-6 mb-3 text-white"
    );
    expect(getByText(MOCK_DATA_BIG_IMAGE_ENTRY.description)).toHaveClass(
      "leading-relaxed text-base text-gray-400"
    );
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
