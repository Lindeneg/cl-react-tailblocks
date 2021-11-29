import React from "react";
import { render } from "@testing-library/react";
import { PricingStatic, PricingStaticProps } from "../PricingStatic";

const DATA: Omit<PricingStaticProps, "onClick"> = {
  title: "Pricing",
  description:
    "Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee",
  headers: ["Plan", "Speed", "Storage", "Price"],
  data: [
    ["Start", "5 Mb/s", "15 GB", "Free"],
    ["Pro", "25 Mb/s", "25 GB", "$24"],
    ["Business", "36 Mb/s", "40 GB", "$50"],
    ["Exclusive", "48 Mb/s", "120 GB", "$72"],
  ],
};

function getEl({ onClick = () => {}, ...props }: Partial<PricingStaticProps>) {
  return <PricingStatic {...DATA} {...props} onClick={onClick} />;
}

describe("PricingDynamic", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("pricing-static-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText(DATA.title)).toHaveClass(
      "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
    );
    expect(getByText(DATA.description)).toHaveClass(
      "lg:w-2/3 mx-auto leading-relaxed text-base"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("pricing-static-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText(DATA.title)).toHaveClass(
      "sm:text-4xl text-3xl font-medium title-font mb-2 text-white"
    );
    expect(getByText(DATA.description)).toHaveClass(
      "lg:w-2/3 mx-auto leading-relaxed text-base"
    );
  });
});
