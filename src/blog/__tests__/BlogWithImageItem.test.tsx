import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  BlogWithImageItem,
  BlogWithImageItemProps,
} from "../BlogWithImageItem";
import { MOCK_ENTRY } from "../__stories__/mock-data";
import { getThousands } from "../../util/Stat";

function getEl({
  theme,
  onClick,
}: Pick<BlogWithImageItemProps, "theme" | "onClick">) {
  return <BlogWithImageItem {...MOCK_ENTRY} theme={theme} onClick={onClick} />;
}

describe("BlogWithImageItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-with-image-item-outer")).toHaveClass(
      "p-4 md:w-1/3"
    );
    expect(getByTestId("blog-with-image-item-inner")).toHaveClass(
      "h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    );
    expect(getByText(MOCK_ENTRY.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    );
    expect(getByText(MOCK_ENTRY.title)).toHaveClass(
      "title-font text-lg font-medium text-gray-900 mb-3"
    );
    expect(getByText(MOCK_ENTRY.content)).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY.comments))).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY.views))).toBeDefined();
    expect(getByText("Learn More")).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-with-image-item-outer")).toHaveClass(
      "p-4 md:w-1/3 text-gray-400 bg-gray-900"
    );
    expect(getByTestId("blog-with-image-item-inner")).toHaveClass(
      "h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden"
    );
    expect(getByText(MOCK_ENTRY.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
    );
    expect(getByText(MOCK_ENTRY.title)).toHaveClass(
      "title-font text-lg font-medium text-white mb-3"
    );
    expect(getByText(MOCK_ENTRY.content)).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY.comments))).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY.views))).toBeDefined();
    expect(getByText("Learn More")).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
