import React from "react";
import { render } from "@testing-library/react";
import {
  BlogWithDateItems,
  BlogWithDateItemsProps,
} from "../BlogWithDateItems";
import { MOCK_ENTRIES_WITH_DATE } from "../__stories__/mock-data";

function getEl({
  theme,
  data = MOCK_ENTRIES_WITH_DATE,
}: Partial<BlogWithDateItemsProps>) {
  return <BlogWithDateItems data={data} theme={theme} />;
}

describe("BlogWithDateItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-with-date-section")).toHaveClass(
      "text-gray-600 body-font overflow-hidden"
    );
    expect(getByTestId("blog-with-date-wrapper")).toHaveClass(
      "-my-8 divide-y-2 divide-gray-100"
    );
    MOCK_ENTRIES_WITH_DATE.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.content)).toBeDefined();
      expect(getByText(entry.date.toLocaleDateString())).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-with-date-section")).toHaveClass(
      "text-gray-400 bg-gray-900 body-font overflow-hidden"
    );
    expect(getByTestId("blog-with-date-wrapper")).toHaveClass(
      "-my-8 divide-y-2 divide-gray-800"
    );
    MOCK_ENTRIES_WITH_DATE.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.content)).toBeDefined();
      expect(getByText(entry.date.toLocaleDateString())).toBeDefined();
    });
    done();
  });
});
