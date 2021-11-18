import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LearnMore, LearnMoreProps } from "../LearnMore";
import { getThousands } from "../../util/Stat";

function getEl({ theme, linkText, onClick }: LearnMoreProps) {
  return <LearnMore theme={theme} onClick={onClick} />;
}

describe("LearnMore", () => {
  test("renders light component", () => {});
  test("renders dark component", () => {});
  test("renders custom linkText", () => {});
  test("handles onClick", () => {});
});
