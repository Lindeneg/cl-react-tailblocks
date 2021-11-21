import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  ContactWithSocials,
  ContactWithSocialsProps,
} from "../ContactWithSocials";

function getEl({
  theme,
  onSubmit,
}: Pick<ContactWithSocialsProps, "theme" | "onSubmit">) {
  return (
    <ContactWithSocials
      theme={theme}
      onSubmit={onSubmit}
      label="feedback"
      description="some description"
      city="some city"
      street="some street"
      email="some email"
    />
  );
}

describe("ContactWithSocials", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(
      getEl({ theme: "light", onSubmit: () => {} })
    );
    expect(getByTestId("contact-with-socials-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText("feedback")).toHaveClass(
      "text-gray-900 sm:text-3xl text-2xl font-medium title-font mb-4"
    );
    expect(getByText("some email")).toHaveClass("text-indigo-500");
    expect(getByText(/some description/));
    expect(getByText(/some city/)).toBeDefined();
    expect(getByText(/some street/)).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(
      getEl({ theme: "dark", onSubmit: () => {} })
    );
    expect(getByTestId("contact-with-socials-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText("feedback")).toHaveClass(
      "text-white sm:text-3xl text-2xl font-medium title-font mb-4"
    );
    expect(getByText("some email")).toHaveClass("text-indigo-400");
    expect(getByText(/some description/));
    expect(getByText(/some city/)).toBeDefined();
    expect(getByText(/some street/)).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onSubmit: fn }));

    fireEvent.click(getByText("Button"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
