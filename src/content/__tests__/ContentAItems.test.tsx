import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ContentAItems, ContentAItemsProps } from "../ContentAItems";
import { MOCK_DATA_A_ENTRIES } from "../__stories__/mock-data";

function getEl({
  label = "some label",
  description = "some description",
  title = "some title",
  data = MOCK_DATA_A_ENTRIES,
  onClick = () => {},
  ...props
}: Partial<ContentAItemsProps>) {
  return (
    <ContentAItems
      label={label}
      description={description}
      title={title}
      onClick={onClick}
      data={data}
      {...props}
    />
  );
}

describe("ContentAItems", () => {
  test("renders light component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("content-a-items-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("some label")).toHaveClass(
      "text-xs tracking-widest font-medium title-font mb-1 text-indigo-500"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
    );
    expect(getByText("some description")).toBeDefined();
    MOCK_DATA_A_ENTRIES.forEach((entry) => {
      expect(getByText(entry.description)).toBeDefined();
      expect(getByText(entry.label)).toBeDefined();
    });
    done();
  });
  test("renders dark component", (done) => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("content-a-items-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some label")).toHaveClass(
      "text-xs tracking-widest font-medium title-font mb-1 text-indigo-400"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
    );
    expect(getByText("some description")).toBeDefined();
    MOCK_DATA_A_ENTRIES.forEach((entry) => {
      expect(getByText(entry.description)).toBeDefined();
      expect(getByText(entry.label)).toBeDefined();
    });
    done();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
