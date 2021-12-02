import React from "react";
import { BlogItemProps } from "./BlogItem";
import { Img, ImgProps } from "../util/Img";
import { LearnMore } from "../util/LearnMore";
import { Stat } from "../util/Stat";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type BlogWithImageItemProps = WithTheme<ImgProps> &
  WithoutTheme<BlogItemProps>;

export function BlogWithImageItem({
  label,
  title,
  content,
  linkNode,
  views,
  comments,
  onClick,
  linkText,
  theme,
  color,
  includeWrapperBg = true,
  ...imgProps
}: BlogWithImageItemProps) {
  const cxt = useMaybeTheme({ theme, color });
  const cls = getClass.bind(null, cxt.theme);
  return (
    <div
      data-testid="blog-with-image-item-outer"
      className={cls(
        "p-4 md:w-1/3",
        "",
        includeWrapperBg ? "text-gray-400 bg-gray-900" : ""
      )}
    >
      <div
        data-testid="blog-with-image-item-inner"
        className={cls(
          "h-full border-2 border-opacity-60 rounded-lg overflow-hidden",
          "border-gray-200",
          "border-gray-800"
        )}
      >
        <Img
          imgAlt="blog-with-image-alt"
          imgClass="lg:h-48 md:h-36 w-full object-cover object-center"
          {...imgProps}
        />
        <div className="p-6">
          <h2
            className={cls(
              "tracking-widest text-xs title-font font-medium mb-1",
              "text-gray-400",
              "text-gray-500"
            )}
          >
            {label}
          </h2>
          <h1
            className={cls(
              "title-font text-lg font-medium mb-3",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{content}</p>
          <div className="flex items-center place-content-between flex-wrap">
            <LearnMore
              onClick={onClick}
              theme={cxt.theme}
              color={cxt.color}
              linkText={linkText}
              linkNode={linkNode}
            />
            <div className="mt-2 sm:mt-0">
              <Stat
                views={views}
                comments={comments}
                theme={cxt.theme}
                color={cxt.color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
