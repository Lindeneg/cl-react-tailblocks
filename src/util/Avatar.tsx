import React from "react";
import { Img, ImgProps } from "../util/Img";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type AvatarProps = WithTheme<{
  height: number;
  width: number;
  name: string;
  role: string;
}> &
  ImgProps;

export function Avatar({
  height,
  width,
  name,
  role,
  imgSrc,
  imgNode,
  theme = "light",
  imgAlt = "avatar-image",
}: AvatarProps) {
  const cls = getClass.bind(null, theme);
  return (
    <a className="inline-flex items-center">
      <Img
        testId="avatar-image"
        imgClass={`w-${width} h-${height} rounded-full flex-shrink-0 object-cover object-center`}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        imgNode={imgNode}
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
