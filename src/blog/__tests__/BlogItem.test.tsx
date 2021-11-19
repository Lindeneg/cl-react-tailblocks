import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BlogItem, BlogItemProps } from "../BlogItem";
import { MOCK_ENTRY_WITH_IMG } from "../__stories__/mock-data";
import { getThousands } from "../../util/Stat";

function getEl({ theme, onClick }: Pick<BlogItemProps, "theme" | "onClick">) {
  return <BlogItem {...MOCK_ENTRY_WITH_IMG} theme={theme} onClick={onClick} />;
}

describe("BlogItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-item-outer")).toHaveClass("p-4 lg:w-1/3");
    expect(getByTestId("blog-item-inner")).toHaveClass(
      "h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.title)).toHaveClass(
      "title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.content)).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY_WITH_IMG.comments))).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY_WITH_IMG.views))).toBeDefined();
    expect(getByText("Learn More")).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-item-outer")).toHaveClass(
      "p-4 lg:w-1/3 text-gray-400 bg-gray-900"
    );
    expect(getByTestId("blog-item-inner")).toHaveClass(
      "h-full bg-gray-800 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.title)).toHaveClass(
      "title-font sm:text-2xl text-xl font-medium text-white mb-3"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.content)).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY_WITH_IMG.comments))).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY_WITH_IMG.views))).toBeDefined();
    expect(getByText("Learn More")).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
