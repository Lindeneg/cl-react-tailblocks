import React from "react";

export type BlogWithImageItemsProps = {
  theme?: "light" | "dark";
};

export function BlogWithImageItems({ theme }: BlogWithImageItemsProps) {
  return (
    <section
      className={`body-font ${
        theme === "dark" ? "text-gray-400 bg-gray-900" : "text-gray-600"
      }`}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4"></div>
      </div>
    </section>
  );
}
