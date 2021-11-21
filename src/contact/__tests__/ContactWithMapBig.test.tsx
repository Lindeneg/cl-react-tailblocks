import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ContactWithMapBig,
  ContactWithMapBigProps,
} from "../ContactWithMapBig";

function getEl({
  theme,
  onSubmit,
}: Pick<ContactWithMapBigProps, "theme" | "onSubmit">) {
  return (
    <ContactWithMapBig
      mapIframeSrc=""
      theme={theme}
      onSubmit={onSubmit}
      label="feedback"
      topDescription="top description"
      bottomDescription="bottom description"
    />
  );
}

describe("ContactWithMapBig", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(
      getEl({ theme: "light", onSubmit: () => {} })
    );
    expect(getByTestId("contact-with-map-big-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByTestId("contact-with-map-big-div")).toHaveClass(
      "bg-white lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
    );
    expect(getByText("feedback")).toHaveClass(
      "text-lg mb-1 font-medium title-font text-gray-900"
    );
    expect(getByText("top description")).toHaveClass(
      "leading-relaxed mb-5 text-gray-600"
    );
    expect(getByText("bottom description")).toHaveClass(
      "text-xs mt-3 text-gray-500"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(
      getEl({ theme: "dark", onSubmit: () => {} })
    );
    expect(getByTestId("contact-with-map-big-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByTestId("contact-with-map-big-div")).toHaveClass(
      "bg-gray-900 lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
    );
    expect(getByText("feedback")).toHaveClass(
      "text-lg mb-1 font-medium title-font text-white"
    );
    expect(getByText("top description")).toHaveClass(
      "leading-relaxed mb-5 text-gray-400"
    );
    expect(getByText("bottom description")).toHaveClass(
      "text-xs mt-3 text-gray-400"
    );
  });
  test("handles onClick", () => {
    const results = { i: "", j: "" };
    const fn = jest.fn((_, i, j) => {
      results.i = i;
      results.j = j;
    });
    const { getByText, getByTestId } = render(getEl({ onSubmit: fn }));

    userEvent.type(getByTestId("input-test-id"), "hello");
    userEvent.type(getByTestId("texarea-test-id"), "some message");
    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
    expect(results.i).toEqual("hello");
    expect(results.j).toEqual("some message");
  });
});
