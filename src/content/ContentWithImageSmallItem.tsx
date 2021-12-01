import React from "react";
import { Img, ImgProps } from "../util/Img";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type ContentWithImageSmallItemProps = WithTheme<{
  title: string;
  label: string;
  description: string;
}> &
  ImgProps;

export function ContentWithImageSmallItem({
  title,
  label,
  description,
  imgSrc,
  imgNode,
  imgAlt = "content-with-image-small-img",
  theme = "light",
  color = "indigo",
}: ContentWithImageSmallItemProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div
        data-testid="content-with-image-small-item-div"
        className={cls("p-6 rounded-lg", "bg-gray-100", "bg-gray-800")}
      >
        <Img
          imgClass="h-40 rounded w-full object-cover object-center mb-6"
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          imgNode={imgNode}
        />
        <h3
          className={cls(
            "tracking-widest text-xs font-medium title-font",
            `text-${color}-500`,
            `text-${color}-400`
          )}
        >
          {label}
        </h3>
        <h2
          className={cls(
            "text-lg font-medium title-font mb-4",
            "text-gray-900",
            "text-white"
          )}
        >
          {title}
        </h2>
        <p
          className={cls(
            "leading-relaxed text-base",
            "text-gray-600",
            "text-gray-400"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
