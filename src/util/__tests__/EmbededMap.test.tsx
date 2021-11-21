import React from "react";
import { render } from "@testing-library/react";
import { EmbededMap, EmbededMapProps } from "../EmbededMap";

function getEl({ theme, className, src = "" }: Partial<EmbededMapProps>) {
  return <EmbededMap theme={theme} src={src} className={className} />;
}

describe("EmbededMap", () => {
  test("renders light component", () => {
    const { getByTestId } = render(getEl({ theme: "light" }));
    expect(getByTestId("embeded-map-iframe")).toHaveStyle({
      filter: "grayscale(1) contrast(1.2) opacity(0.4)",
    });
  });
  test("renders dark component", () => {
    const { getByTestId } = render(getEl({ theme: "dark" }));
    expect(getByTestId("embeded-map-iframe")).toHaveStyle({
      filter: "grayscale(1) contrast(1.2) opacity(0.16)",
    });
  });
  test("renders extended component", () => {
    const { getByTestId } = render(
      getEl({ theme: "dark", className: "absolute inset-0" })
    );
    expect(getByTestId("embeded-map-iframe")).toHaveClass("absolute inset-0");
  });
});
