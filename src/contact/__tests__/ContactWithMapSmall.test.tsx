import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  ContactWithMapSmall,
  ContactWithMapSmallProps,
} from "../ContactWithMapSmall";

function getEl({
  theme,
  onSubmit,
}: Pick<ContactWithMapSmallProps, "theme" | "onSubmit">) {
  return (
    <ContactWithMapSmall
      mapIframeSrc=""
      theme={theme}
      onSubmit={onSubmit}
      label="feedback"
      topDescription="top description"
      bottomDescription="bottom description"
      address="some address"
      email="some email"
      phone="123-456-789"
    />
  );
}

describe("ContactWithMapSmall", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(
      getEl({ theme: "light", onSubmit: () => {} })
    );
    expect(getByTestId("contact-with-map-small-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByTestId("contact-with-map-small-div")).toHaveClass(
      "bg-gray-300 lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
    );
    expect(getByTestId("contact-with-map-small-inner-div")).toHaveClass(
      "bg-white relative flex flex-wrap py-6 rounded shadow-md"
    );
    expect(getByText("ADDRESS")).toHaveClass(
      "text-gray-900 title-font font-semibold tracking-widest text-xs"
    );
    expect(getByText("EMAIL")).toHaveClass(
      "text-gray-900 title-font font-semibold tracking-widest text-xs"
    );
    expect(getByText("PHONE")).toHaveClass(
      "text-gray-900 title-font font-semibold tracking-widest text-xs mt-4"
    );
    expect("some address").toBeDefined();
    expect("some email").toBeDefined();
    expect("123-456-789").toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(
      getEl({ theme: "dark", onSubmit: () => {} })
    );
    expect(getByTestId("contact-with-map-small-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByTestId("contact-with-map-small-div")).toHaveClass(
      "bg-gray-900 lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
    );
    expect(getByTestId("contact-with-map-small-inner-div")).toHaveClass(
      "bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"
    );
    expect(getByText("ADDRESS")).toHaveClass(
      "text-white title-font font-semibold tracking-widest text-xs"
    );
    expect(getByText("EMAIL")).toHaveClass(
      "text-white title-font font-semibold tracking-widest text-xs"
    );
    expect(getByText("PHONE")).toHaveClass(
      "text-white title-font font-semibold tracking-widest text-xs mt-4"
    );
    expect("some address").toBeDefined();
    expect("some email").toBeDefined();
    expect("123-456-789").toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onSubmit: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});