import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  FeatureWithIconItem,
  FeatureWithIconItemProps,
} from "../FeatureWithIconItem";

function getEl({ ...props }: Partial<FeatureWithIconItemProps>) {
  return (
    <FeatureWithIconItem
      title="some title"
      description="some description"
      {...props}
    />
  );
}

describe("FeatureWithIconItem", () => {
  test("renders light component", () => {
    const { getByText } = render(getEl({ theme: "light" }));

    expect(getByText("some title")).toHaveClass(
      "text-gray-900 text-lg title-font font-medium mb-2"
    );
    expect(getByText("some description")).toHaveClass(
      "leading-relaxed text-base"
    );
  });
  test("renders dark component", () => {
    const { getByText } = render(getEl({ theme: "dark" }));

    expect(getByText("some title")).toHaveClass(
      "text-white text-lg title-font font-medium mb-2"
    );
    expect(getByText("some description")).toHaveClass(
      "leading-relaxed text-base text-gray-400"
    );
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
