import React from "react";

export type ButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  overrideClass?: string;
  extendClass?: string;
};

export function Button({
  text,
  overrideClass,
  extendClass,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        overrideClass
          ? overrideClass
          : "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg " +
            extendClass
      }`}
    >
      {text}
    </button>
  );
}
