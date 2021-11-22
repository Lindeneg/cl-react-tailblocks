import React from "react";
import { Button, ButtonProps } from "../util/Button";
import { WithTheme, Image } from "../types";
import { getClass } from "../shared";

export type ContentWithImageBigItemProps = WithTheme<{
  title: string;
  description: string;
  buttonText?: string;
}> &
  Pick<ButtonProps, "onClick"> &
  Image;

export function ContentWithImageBigItem({
  title,
  description,
  imgSrc,
  onClick,
  buttonText = "Button",
  imgAlt = "content-image.item",
  theme = "light",
  color = "indigo",
}: ContentWithImageBigItemProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          className="object-cover object-center h-full w-full"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <h2
        className={cls(
          "title-font text-2xl font-medium mt-6 mb-3",
          "text-gray-900",
          "text-white"
        )}
      >
        {title}
      </h2>
      <p className={cls("leading-relaxed text-base", "", "text-gray-400")}>
        {description}
      </p>
      <Button
        text={buttonText}
        onClick={onClick}
        color={color}
        extendClass="flex mx-auto mt-6"
      />
    </div>
  );
}
