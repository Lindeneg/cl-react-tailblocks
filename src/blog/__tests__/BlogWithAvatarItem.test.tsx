import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  BlogWithAvatarItem,
  BlogWithAvatarItemProps,
} from "../BlogWithAvatarItem";
import { MOCK_ENTRY_WITH_AVATAR } from "../__stories__/mock-data";
import { getThousands } from "../../util/Stat";

function getEl({
  theme,
  onClick,
}: Pick<BlogWithAvatarItemProps, "theme" | "onClick">) {
  return (
    <BlogWithAvatarItem
      {...MOCK_ENTRY_WITH_AVATAR}
      theme={theme}
      onClick={onClick}
    />
  );
}

describe("BlogWithAvatarItem", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-with-avatar-item-outer")).toHaveClass(
      "p-12 md:w-1/2 flex flex-col items-start"
    );
    expect(getByTestId("blog-with-avatar-item-inner")).toHaveClass(
      "flex items-baseline sm:items-center sm:flex-row flex-col flex-wrap pb-4 mb-4 border-b-2 border-gray-100 w-full place-content-between"
    );
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.label)).toHaveClass(
      "inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"
    );
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.title)).toHaveClass(
      "sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4"
    );
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.content)).toBeDefined();
    expect(
      getByText(getThousands(MOCK_ENTRY_WITH_AVATAR.comments))
    ).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY_WITH_AVATAR.views))).toBeDefined();
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.name)).toBeDefined();
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.role)).toBeDefined();
    expect(getByText("Learn More")).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-with-avatar-item-outer")).toHaveClass(
      "p-12 md:w-1/2 flex flex-col items-start text-gray-400 bg-gray-900"
    );
    expect(getByTestId("blog-with-avatar-item-inner")).toHaveClass(
      "flex items-baseline sm:items-center sm:flex-row flex-col flex-wrap pb-4 mb-4 border-b-2 border-gray-800 w-full place-content-between"
    );
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.label)).toHaveClass(
      "inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-xs font-medium tracking-widest"
    );
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.title)).toHaveClass(
      "sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4"
    );
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.content)).toBeDefined();
    expect(
      getByText(getThousands(MOCK_ENTRY_WITH_AVATAR.comments))
    ).toBeDefined();
    expect(getByText(getThousands(MOCK_ENTRY_WITH_AVATAR.views))).toBeDefined();
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.name)).toBeDefined();
    expect(getByText(MOCK_ENTRY_WITH_AVATAR.role)).toBeDefined();
    expect(getByText("Learn More")).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
