import React from "react";
import { WithTheme, Image } from "../types";

export type AvatarProps = WithTheme<{
  height: number;
  width: number;
  name: string;
  role: string;
}> &
  Image;

export function Avatar({
  height,
  width,
  name,
  role,
  imgSrc,
  theme = "light",
  imgAlt = "avatar-image",
}: AvatarProps) {
  const isDark = theme === "dark";
  return (
    <a className="inline-flex items-center">
      <img
        data-testid="avatar-image"
        alt={imgAlt}
        src={imgSrc}
        className={`w-${width} h-${height} rounded-full flex-shrink-0 object-cover object-center`}
      />
      <span className="flex-grow flex flex-col pl-4">
        <span
          className={`title-font font-medium ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </span>
        <span
          className={`text-gray-${
            isDark ? "500" : "400"
          } text-xs tracking-widest mt-0.5`}
        >
          {role}
        </span>
      </span>
    </a>
  );
}
