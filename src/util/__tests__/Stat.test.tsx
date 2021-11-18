import React from "react";
import { render } from "@testing-library/react";
import { Stat, StatProps } from "../Stat";
import { getThousands } from "../../util/Stat";

function getEl({ theme }: Pick<StatProps, "theme">) {
  return <Stat theme={theme} />;
}

describe("LearnMore", () => {
  test("renders light component", () => {});
  test("renders dark component", () => {});
});
