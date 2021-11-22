import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CtaWithFormRow, CtaWithFormRowProps } from "../CtaWithFormRow";

function getEl({
  title = "some title",
  description = "some description",
  formHeader = "Sign Up",
  bottomText = "some bottom text",
  onSubmit = () => {},
  ...props
}: Partial<CtaWithFormRowProps>) {
  return (
    <CtaWithFormRow
      title={title}
      description={description}
      formHeader={formHeader}
      bottomText={bottomText}
      onSubmit={onSubmit}
      {...props}
    />
  );
}

describe("CtaWithFormRow", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("cta-with-form-row-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("some title")).toHaveClass(
      "title-font font-medium text-3xl text-gray-900"
    );
    expect(getByText("Sign Up")).toHaveClass(
      "text-lg font-medium title-font mb-5 text-gray-900"
    );
    expect(getByText("some bottom text")).toHaveClass(
      "text-xs mt-3 text-gray-500"
    );
    expect(getByText("some description")).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("cta-with-form-row-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some title")).toHaveClass(
      "title-font font-medium text-3xl text-white"
    );
    expect(getByText("Sign Up")).toHaveClass(
      "text-lg font-medium title-font mb-5 text-white"
    );
    expect(getByText("some bottom text")).toHaveClass("text-xs mt-3");
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
