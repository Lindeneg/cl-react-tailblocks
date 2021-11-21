import React from "react";
import { render } from "@testing-library/react";
import { Section, SectionProps } from "../Section";

function getEl({
  theme,
  children = <p>Hello There</p>,
  extendClass = "",
}: Partial<SectionProps>) {
  return (
    <Section theme={theme} children={children} extendClass={extendClass} />
  );
}

describe("Section", () => {
  test("renders light component", () => {
    const { getByText, getByTestId } = render(getEl({ theme: "light" }));
    expect(getByTestId("section-test-id")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("Hello There")).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByText, getByTestId } = render(getEl({ theme: "dark" }));
    expect(getByTestId("section-test-id")).toHaveClass(
      "text-gray-400 bg-gray-900"
    );
    expect(getByText("Hello There")).toBeDefined();
  });
  test("renders extended component", () => {
    const { getByTestId } = render(
      getEl({ theme: "dark", extendClass: "flex flex-wrap" })
    );
    expect(getByTestId("section-test-id")).toHaveClass(
      "flex flex-wrap text-gray-400 bg-gray-900"
    );
  });
});
