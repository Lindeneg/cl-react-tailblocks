import React from "react";
import { render } from "@testing-library/react";
import { BlogItems, BlogItemsProps } from "../BlogItems";
import { MOCK_ENTRIES_WITH_IMG } from "../__stories__/mock-data";
import { getThousands } from "../../util/Stat";

function getEl({
  data = MOCK_ENTRIES_WITH_IMG,
  theme,
}: Partial<BlogItemsProps>) {
  return <BlogItems data={data} theme={theme} />;
}

describe("BlogItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("blog-items-section")).toHaveClass(
      "body-font text-gray-600"
    );
    MOCK_ENTRIES_WITH_IMG.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.content)).toBeDefined();
      expect(getByText(getThousands(entry.comments))).toBeDefined();
      expect(getByText(getThousands(entry.views))).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("blog-items-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    MOCK_ENTRIES_WITH_IMG.forEach((entry) => {
      expect(getByText(entry.title)).toBeDefined();
      expect(getByText(entry.content)).toBeDefined();
      expect(getByText(getThousands(entry.comments))).toBeDefined();
      expect(getByText(getThousands(entry.views))).toBeDefined();
    });
    done();
  });
});
