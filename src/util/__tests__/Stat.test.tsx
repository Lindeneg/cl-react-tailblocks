import React from "react";
import { render } from "@testing-library/react";
import { Stat, StatProps } from "../Stat";
import { getThousands } from "../../util/Stat";

function getEl({ theme }: Pick<StatProps, "theme">) {
  return <Stat views={1200} comments={6} theme={theme} />;
}

describe("Stat", () => {
  test("renders light component", () => {
    const { getByText, getByTestId } = render(getEl({}));
    expect(getByTestId("stat-views-span")).toHaveClass(
      "border-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 text-gray-400"
    );
    expect(getByText(getThousands(1200))).toBeDefined();
    expect(getByText(getThousands(6))).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByText, getByTestId } = render(getEl({ theme: "dark" }));
    expect(getByTestId("stat-views-span")).toHaveClass(
      "border-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 text-gray-400"
    );
    expect(getByText(getThousands(1200))).toBeDefined();
    expect(getByText(getThousands(6))).toBeDefined();
  });
});
