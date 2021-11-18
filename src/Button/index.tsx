import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export function Button({ onClick }: ButtonProps) {
  return (
    <div onClick={onClick} className="text-white w-64 h-64 bg-blue-600">
      Hello There
    </div>
  );
}
