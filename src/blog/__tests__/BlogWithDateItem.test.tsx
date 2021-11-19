import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BlogWithDateItem, BlogWithDateItemProps } from "../BlogWithDateItem";
import { MOCK_ENTRY_WITH_DATE } from "../__stories__/mock-data";

const DATE = new Date();

function getEl({
  theme,
  onClick,
}: Pick<BlogWithDateItemProps, "theme" | "onClick">) {
  return (
    <BlogWithDateItem
      {...MOCK_ENTRY_WITH_DATE}
      date={DATE}
      theme={theme}
      onClick={onClick}
    />
  );
}

describe("BlogWithDateItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-date-item-outer")).toHaveClass(
      "py-8 flex flex-wrap md:flex-nowrap"
    );
    expect(getByText(MOCK_ENTRY_WITH_DATE.label)).toHaveClass(
      "font-semibold title-font text-gray-700"
    );
    expect(getByText(MOCK_ENTRY_WITH_DATE.title)).toHaveClass(
      "text-2xl font-medium text-gray-900 title-font mb-2"
    );
    expect(getByText(DATE.toLocaleDateString())).toHaveClass(
      "mt-1 text-gray-500 text-sm"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-date-item-outer")).toHaveClass(
      "py-8 flex flex-wrap md:flex-nowrap text-gray-400 bg-gray-900"
    );
    expect(getByText(MOCK_ENTRY_WITH_DATE.label)).toHaveClass(
      "font-semibold title-font text-white"
    );
    expect(getByText(MOCK_ENTRY_WITH_DATE.title)).toHaveClass(
      "text-2xl font-medium text-white title-font mb-2"
    );
    expect(getByText(DATE.toLocaleDateString())).toHaveClass(
      "mt-1 text-gray-500 text-sm"
    );
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
