import React from "react";
import { render } from "@testing-library/react";
import {
  BlogWithAvatarItems,
  BlogWithAvatarItemsProps,
} from "../BlogWithAvatarItems";
import { MOCK_ENTRIES_WITH_AVATAR } from "../__stories__/mock-data";
import { getThousands } from "../../util/Stat";

function getEl({
  theme,
  data = MOCK_ENTRIES_WITH_AVATAR,
}: Partial<BlogWithAvatarItemsProps>) {
  return <BlogWithAvatarItems theme={theme} data={data} />;
}

describe("BlogWithAvatarItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-with-avatar-section")).toHaveClass(
      "body-font text-gray-600"
    );
    MOCK_ENTRIES_WITH_AVATAR.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.content)).toBeDefined();
      expect(getByText(entry.name)).toBeDefined();
      expect(getByText(entry.role)).toBeDefined();
      expect(getByText(getThousands(entry.comments))).toBeDefined();
      expect(getByText(getThousands(entry.views))).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-with-avatar-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_ENTRIES_WITH_AVATAR.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.content)).toBeDefined();
      expect(getByText(entry.name)).toBeDefined();
      expect(getByText(entry.role)).toBeDefined();
      expect(getByText(getThousands(entry.comments))).toBeDefined();
      expect(getByText(getThousands(entry.views))).toBeDefined();
    });
    done();
  });
});
