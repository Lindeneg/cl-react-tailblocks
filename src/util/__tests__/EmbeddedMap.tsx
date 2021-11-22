import React from "react";
import { render } from "@testing-library/react";
import { EmbeddedMap, EmbeddedMapProps } from "../EmbeddedMap";

function getEl({ theme, className, src = "" }: Partial<EmbeddedMapProps>) {
  return <EmbeddedMap theme={theme} src={src} className={className} />;
}

describe("EmbeddedMap", () => {
  test("renders light component", () => {
    const { getByTestId } = render(getEl({ theme: "light" }));
    expect(getByTestId("embedded-map-iframe")).toHaveStyle({
      filter: "grayscale(1) contrast(1.2) opacity(0.4)",
    });
  });
  test("renders dark component", () => {
    const { getByTestId } = render(getEl({ theme: "dark" }));
    expect(getByTestId("embedded-map-iframe")).toHaveStyle({
      filter: "grayscale(1) contrast(1.2) opacity(0.16)",
    });
  });
  test("renders extended component", () => {
    const { getByTestId } = render(
      getEl({ theme: "dark", className: "absolute inset-0" })
    );
    expect(getByTestId("embedded-map-iframe")).toHaveClass("absolute inset-0");
  });
});
