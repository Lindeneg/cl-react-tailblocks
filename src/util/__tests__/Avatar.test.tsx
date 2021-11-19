import React from "react";
import { render } from "@testing-library/react";
import { Avatar, AvatarProps } from "../Avatar";

function getEl({
  imgSrc = "https://dummyimage.com/104x104",
  name = "Miles Davis",
  role = "DEVELOPER",
  height = 12,
  width = 12,
  theme = "light",
}: Partial<AvatarProps>) {
  return (
    <Avatar
      imgSrc={imgSrc}
      height={height}
      width={width}
      name={name}
      role={role}
      theme={theme}
    />
  );
}

describe("Avatar", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({}));
    expect(getByTestId("avatar-image")).toHaveClass(
      "w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
    );
    expect(getByText("Miles Davis")).toHaveClass(
      "title-font font-medium text-gray-900"
    );
    expect(getByText("DEVELOPER")).toHaveClass(
      "text-gray-400 text-xs tracking-widest mt-0.5"
    );
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("avatar-image")).toHaveClass(
      "w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
    );
    expect(getByText("Miles Davis")).toHaveClass(
      "title-font font-medium text-white"
    );
    expect(getByText("DEVELOPER")).toHaveClass(
      "text-gray-500 text-xs tracking-widest mt-0.5"
    );
  });
  test("renders custom size", () => {
    const { getByTestId } = render(getEl({ width: 32, height: 24 }));
    expect(getByTestId("avatar-image")).toHaveClass(
      "w-32 h-24 rounded-full flex-shrink-0 object-cover object-center"
    );
  });
});
