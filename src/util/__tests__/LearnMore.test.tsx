import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LearnMore, LearnMoreProps } from "../LearnMore";
import { getThousands } from "../../util/Stat";

function getEl({ theme, linkText, onClick }: LearnMoreProps) {
  return <LearnMore linkText={linkText} theme={theme} onClick={onClick} />;
}

describe("LearnMore", () => {
  test("renders light component", () => {
    const { getByText } = render(getEl({}));
    expect(getByText("Learn More")).toHaveClass(
      "cursor-pointer text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-600"
    );
  });
  test("renders dark component", () => {
    const { getByText } = render(getEl({ theme: "dark" }));
    expect(getByText("Learn More")).toHaveClass(
      "cursor-pointer text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-500"
    );
  });
  test("renders custom linkText", () => {
    const { getByText } = render(getEl({ linkText: "Miles Davis" }));
    expect(getByText("Miles Davis")).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
