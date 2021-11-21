import React from "react";
import { render } from "@testing-library/react";
import { Socials, SocialsProps } from "../Socials";

function getEl({ className = "", ...props }: Partial<SocialsProps>) {
  return <Socials {...props} className={className} />;
}

describe("Socials", () => {
  test("renders facebook component", () => {
    const { getByTestId } = render(getEl({ facebook: "hello" }));
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("facebook-path")).toHaveAttribute(
      "d",
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
    );
    expect(wrapper).toHaveAttribute("href", "hello");
    expect(wrapper).toHaveAttribute("target", "_blank");
    expect(wrapper).toHaveAttribute("rel", "no-referrer");
  });
  test("renders non-blank facebook component", () => {
    const { getByTestId } = render(
      getEl({ facebook: { href: "hello", newTab: false } })
    );
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("facebook-path")).toHaveAttribute(
      "d",
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
    );
    expect(wrapper).toHaveAttribute("href", "hello");
    expect(wrapper).not.toHaveAttribute("target", "_blank");
    expect(wrapper).not.toHaveAttribute("rel", "no-referrer");
  });
  test("renders twitter component", () => {
    const { getByTestId } = render(getEl({ twitter: "hello" }));
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("twitter-path")).toHaveAttribute(
      "d",
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
    );
    expect(wrapper).toHaveAttribute("href", "hello");
    expect(wrapper).toHaveAttribute("target", "_blank");
    expect(wrapper).toHaveAttribute("rel", "no-referrer");
  });
  test("renders non-blank twitter component", () => {
    const { getByTestId } = render(
      getEl({ twitter: { href: "hello", newTab: false } })
    );
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("twitter-path")).toHaveAttribute(
      "d",
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
    );
    expect(wrapper).toHaveAttribute("href", "hello");
    expect(wrapper).not.toHaveAttribute("target", "_blank");
    expect(wrapper).not.toHaveAttribute("rel", "no-referrer");
  });
  test("renders instagram component", () => {
    const { getByTestId } = render(getEl({ instagram: "hello" }));
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("instagram-path")).toHaveAttribute(
      "d",
      "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
    );
    expect(getByTestId("instagram-rect")).toBeDefined();
    expect(wrapper).toHaveAttribute("href", "hello");
    expect(wrapper).toHaveAttribute("target", "_blank");
    expect(wrapper).toHaveAttribute("rel", "no-referrer");
  });
  test("renders non-blank instagram component", () => {
    const { getByTestId } = render(
      getEl({ instagram: { href: "hello", newTab: false } })
    );
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("instagram-path")).toHaveAttribute(
      "d",
      "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
    );
    expect(getByTestId("instagram-rect")).toBeDefined();
    expect(wrapper).toHaveAttribute("href", "hello");
    expect(wrapper).not.toHaveAttribute("target", "_blank");
    expect(wrapper).not.toHaveAttribute("rel", "no-referrer");
  });
  test("renders mail component", () => {
    const { getByTestId } = render(getEl({ mail: "hello" }));
    const wrapper = getByTestId("test-id-icon-wrapper");
    expect(getByTestId("mail-path")).toHaveAttribute(
      "d",
      "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
    );
    expect(wrapper).toHaveAttribute("href", "mailto:hello");
    expect(wrapper).toHaveAttribute("target", "_blank");
    expect(wrapper).toHaveAttribute("rel", "no-referrer");
  });
});
