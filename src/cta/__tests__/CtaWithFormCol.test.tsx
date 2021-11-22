import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CtaWithFormCol, CtaWithFormColProps } from "../CtaWithFormCol";

function getEl({
  title = "some title",
  description = "some description",
  onSubmit = () => {},
  ...props
}: Partial<CtaWithFormColProps>) {
  return (
    <CtaWithFormCol
      title={title}
      description={description}
      onSubmit={onSubmit}
      {...props}
    />
  );
}

describe("CtaWithFormCol", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("cta-with-form-col-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
    );
    expect(getByText("some description")).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("cta-with-form-col-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some title")).toHaveClass(
      "sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
    );
    expect(getByText("some description")).toBeDefined();
  });
  test("handles onClick", () => {
    const results = { i: "", j: "" };
    const fn = jest.fn((_, i, j) => {
      results.i = i;
      results.j = j;
    });
    const { getByText, getAllByTestId } = render(getEl({ onSubmit: fn }));

    const inputs = getAllByTestId("input-test-id");

    userEvent.type(inputs[0], "hello");
    userEvent.type(inputs[1], "there");
    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
    expect(results.i).toEqual("hello");
    expect(results.j).toEqual("there");
  });
});
