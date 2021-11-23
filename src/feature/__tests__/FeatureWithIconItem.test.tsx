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
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    //expect(getByTestId("")).toHaveClass("");
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    //expect(getByTestId("")).toHaveClass("");
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    //fireEvent.click(getByText("Button"));

    //expect(fn).toHaveBeenCalledTimes(1);
  });
});
