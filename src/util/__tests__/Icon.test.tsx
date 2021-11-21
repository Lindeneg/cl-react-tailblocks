import React from "react";
import { render } from "@testing-library/react";
import { Icon, IconProps } from "../Icon";

function getEl({
  icon,
  theme = "light",
  color = "indigo",
  ...props
}: Partial<IconProps>) {
  return <Icon {...props} icon={icon} theme={theme} color={color} />;
}

describe("Icon", () => {
  test("renders light component", () => {
    const { getByTestId } = render(getEl({ icon: "graph" }));
    expect(getByTestId("icon-wrapper-div")).toHaveClass(
      "inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"
    );
    expect(getByTestId("icon-graph-path")).toHaveAttribute(
      "d",
      "M22 12h-4l-3 9L9 3l-3 9H2"
    );
  });
  test("renders dark component", () => {
    const { getByTestId } = render(getEl({ theme: "dark", icon: "graph" }));
    expect(getByTestId("icon-wrapper-div")).toHaveClass(
      "inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400"
    );
    expect(getByTestId("icon-graph-path")).toHaveAttribute(
      "d",
      "M22 12h-4l-3 9L9 3l-3 9H2"
    );
  });
  test("renders extended svg class", () => {
    const { getByTestId } = render(
      getEl({ icon: "graph", extendSvgClass: "w-6 h-6" })
    );
    expect(getByTestId("icon-svg-component")).toHaveClass("w-6 h-6");
  });
  test("renders extended svg component", () => {
    const { getByText } = render(getEl({ iconNode: <p>Hello There</p> }));
    expect(getByText("Hello There")).toBeDefined();
  });
  test("renders extended div class", () => {
    const { getByTestId } = render(
      getEl({ icon: "graph", extendDivClass: "w-10 h-10" })
    );
    expect(getByTestId("icon-wrapper-div")).toHaveClass(
      "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500"
    );
  });
});
