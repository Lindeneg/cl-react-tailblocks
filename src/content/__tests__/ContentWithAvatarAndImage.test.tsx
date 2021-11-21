import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  ContentWithAvatarAndImage,
  ContentWithAvatarAndImageProps,
} from "../ContentWithAvatarAndImage";
import { MOCK_AVATAR_AND_IMAGE_ENTRY } from "../__stories__/mock-data";

function getEl({ ...props }: Partial<ContentWithAvatarAndImageProps>) {
  return (
    <ContentWithAvatarAndImage {...MOCK_AVATAR_AND_IMAGE_ENTRY} {...props} />
  );
}

describe("ContentWithAvatarAndImage", () => {
  test("renders light component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "light" }));
    expect(getByTestId("content-with-avatar-and-image-section")).toHaveClass(
      "body-font text-gray-600"
    );
    expect(getByText(MOCK_AVATAR_AND_IMAGE_ENTRY.title)).toHaveClass(
      "font-medium title-font mt-4 text-lg text-gray-900"
    );
    expect(getByText(MOCK_AVATAR_AND_IMAGE_ENTRY.description)).toHaveClass(
      "text-base"
    );
    expect(getByText(MOCK_AVATAR_AND_IMAGE_ENTRY.content)).toBeDefined();
  });
  test("renders dark component", () => {
    const { getByTestId, getByText } = render(getEl({ theme: "dark" }));
    expect(getByTestId("content-with-avatar-and-image-section")).toHaveClass(
      "body-font text-gray-400 bg-gray-900"
    );
    expect(getByText(MOCK_AVATAR_AND_IMAGE_ENTRY.title)).toHaveClass(
      "font-medium title-font mt-4 text-lg text-white"
    );
    expect(getByText(MOCK_AVATAR_AND_IMAGE_ENTRY.description)).toHaveClass(
      "text-base text-gray-400"
    );
    expect(getByText(MOCK_AVATAR_AND_IMAGE_ENTRY.content)).toBeDefined();
  });
  test("handles onClick", () => {
    const fn = jest.fn();
    const { getByText } = render(getEl({ onClick: fn }));

    fireEvent.click(getByText("Learn More"));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
