import React from "react";

export type AvatarProps = {
  height: number;
  width: number;
  name: string;
  role: string;
  imgSrc: string;
  imgAlt?: string;
};

export function Avatar({
  height,
  width,
  name,
  role,
  imgSrc,
  imgAlt = "avatar-image",
}: AvatarProps) {
  return (
    <a className="inline-flex items-center">
      <img
        alt={imgAlt}
        src={imgSrc}
        className={`w-${width} h-${height} rounded-full flex-shrink-0 object-cover object-center`}
      />
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-medium text-gray-900">{name}</span>
        <span className="text-gray-400 text-xs tracking-widest mt-0.5">
          {role}
        </span>
      </span>
    </a>
  );
}
