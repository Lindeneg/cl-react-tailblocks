import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "../Button";

function getEl({
  text,
  onClick,
  overrideClass,
  extendClass,
}: Partial<ButtonProps>) {
  return (
    <Button
      text={text || "Button"}
      onClick={onClick || (() => {})}
      overrideClass={overrideClass || ""}
      extendClass={extendClass || ""}
    />
  );
}

describe("Button", () => {
  test("renders default component", () => {
    const { getByText } = render(getEl({}));
    expect(getByText("Button")).toHaveClass(
      "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    );
  });
  test("renders extended component", () => {
    const { getByText } = render(getEl({ extendClass: "w-64 h-32" }));
    expect(getByText("Button")).toHaveClass(
      "w-64 h-32 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    );
  });
  test("renders overwritten component", () => {
    const { getByText } = render(
      getEl({ overrideClass: "bg-white text-blue-600 w-64 h-32" })
    );
    expect(getByText("Button")).toHaveClass("bg-white text-blue-600 w-64 h-32");
  });
  test("renders custom text", () => {
    const { getByText } = render(getEl({ text: "Hello There" }));
    expect(getByText("Hello There")).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
