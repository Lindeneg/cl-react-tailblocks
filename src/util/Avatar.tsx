import React from "react";
import { WithTheme, Image } from "../types";
import { getClass } from "../shared";

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
  const cls = getClass.bind(null, theme);
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
          className={cls(
            "title-font font-medium",
            "text-gray-900",
            "text-white"
          )}
        >
          {name}
        </span>
        <span
          className={cls(
            "text-xs tracking-widest mt-0.5",
            "text-gray-400",
            "text-gray-500"
          )}
        >
          {role}
        </span>
      </span>
    </a>
  );
}
