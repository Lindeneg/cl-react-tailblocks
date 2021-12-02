import React from "react";
import { render } from "@testing-library/react";
import { BlogItem } from "../../blog/BlogItem";
import { MOCK_ENTRY_WITH_IMG } from "../../blog/__stories__/mock-data";
import { ThemeContext, ThemeContextType } from "../ThemeContext";
import userEvent from "@testing-library/user-event";

function renderWithContext(
  element: React.ReactElement,
  providerProps?: Partial<ThemeContextType>
) {
  return render(
    <ThemeContext.Provider
      value={{
        theme: providerProps?.theme || "light",
        color: providerProps?.color || "indigo",
        setContext: providerProps?.setContext || (() => {}),
      }}
    >
      {element}
    </ThemeContext.Provider>
  );
}

describe("ThemeContext", () => {
  test("default theme renders", () => {
    const { getByTestId, getByText } = renderWithContext(
      <BlogItem {...MOCK_ENTRY_WITH_IMG} />
    );

    expect(getByTestId("blog-item-inner")).toHaveClass(
      "h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.title)).toHaveClass(
      "title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
    );

    expect(getByText("Learn More")).toHaveClass(
      "text-indigo-500 hover:text-indigo-600"
    );
  });
  test("dark theme renders", () => {
    const { getByTestId, getByText } = renderWithContext(
      <BlogItem {...MOCK_ENTRY_WITH_IMG} />,
      { theme: "dark", color: "green" }
    );

    expect(getByTestId("blog-item-inner")).toHaveClass(
      "h-full bg-gray-800 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.title)).toHaveClass(
      "title-font sm:text-2xl text-xl font-medium text-white mb-3"
    );

    expect(getByText("Learn More")).toHaveClass(
      "text-green-400 hover:text-green-500"
    );
  });
  test("theme context is overridable", () => {
    const { getByTestId, getByText } = renderWithContext(
      <BlogItem {...MOCK_ENTRY_WITH_IMG} theme="light" color="indigo" />,
      { theme: "dark", color: "green" }
    );
    expect(getByTestId("blog-item-inner")).toHaveClass(
      "h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.label)).toHaveClass(
      "tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    );
    expect(getByText(MOCK_ENTRY_WITH_IMG.title)).toHaveClass(
      "title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
    );

    expect(getByText("Learn More")).toHaveClass(
      "text-indigo-500 hover:text-indigo-600"
    );
  });
  test("setContext can be called", () => {
    const fn = jest.fn();
    const { getByText } = renderWithContext(
      <BlogItem
        {...MOCK_ENTRY_WITH_IMG}
        onClick={fn}
        linkText="Switch Theme"
      />,
      { setContext: fn }
    );
    userEvent.click(getByText("Switch Theme"));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
