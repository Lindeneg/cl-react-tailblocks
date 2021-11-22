import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Cta, CtaProps } from "../Cta";

function getEl({
  title = "some title",
  onClick = () => {},
  ...props
}: Partial<CtaProps>) {
  return <Cta title={title} onClick={onClick} {...props} />;
}

describe("Cta", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("cta-section")).toHaveClass("body-font text-gray-600");
    expect(getByText("some title")).toHaveClass(
      "flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("cta-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("some title")).toHaveClass(
      "flex-grow sm:pr-16 text-2xl font-medium title-font text-white"
    );
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
