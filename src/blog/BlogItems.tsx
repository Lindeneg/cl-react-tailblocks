import React from "react";

export type BlogItemsProps = {};

// dark: text-gray-400 bg-gray-900 body-font

export function BlogItems({}: BlogItemsProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4"></div>
      </div>
    </section>
  );
}
