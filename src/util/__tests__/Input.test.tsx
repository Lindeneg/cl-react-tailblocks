import React from "react";
import { render } from "@testing-library/react";
import { Input, InputProps } from "../Input";

function getEl({ label = "some label", ...props }: Partial<InputProps>) {
  return <Input {...props} label={label} />;
}

describe("Input", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    const el = getByTestId("input-test-id");
    expect(el.tagName).toEqual("INPUT");
    expect(el).toHaveClass(
      "bg-white border-gray-300 focus:ring-indigo-200 text-gray-700 rounded border focus:ring-2 text-base outline-none py-1 px-3 focus:border-indigo-500 transition-colors duration-200 ease-in-out"
    );
    expect(getByText("some label")).toHaveClass(
      "leading-7 text-sm text-gray-600"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("input-test-id")).toHaveClass(
      "bg-gray-800 border-gray-700 focus:ring-indigo-900 text-gray-100 rounded border focus:ring-2 text-base outline-none py-1 px-3 focus:border-indigo-500 transition-colors duration-200 ease-in-out"
    );
    expect(getByText("some label")).toHaveClass(
      "leading-7 text-sm text-gray-400"
    );
  });
  test("renders extended component", () => {
    const { getByTestId } = render(
      getEl({ theme: "dark", extendClass: "w-full m-12" })
    );
    expect(getByTestId("input-test-id")).toHaveClass(
      "w-full m-12 bg-gray-800 border-gray-700 focus:ring-indigo-900 text-gray-100 rounded border focus:ring-2 text-base outline-none py-1 px-3 focus:border-indigo-500 transition-colors duration-200 ease-in-out"
    );
  });
});
