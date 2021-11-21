import React from "react";
import { BlogItemProps } from "./BlogItem";
import { LearnMore } from "../util/LearnMore";
import { Stat } from "../util/Stat";
import { Image, WithTheme, WithoutTheme } from "../types";
import { getClass } from "../shared";

export type BlogWithImageItemProps = WithTheme<Image> &
  WithoutTheme<BlogItemProps>;

export function BlogWithImageItem({
  imgSrc,
  label,
  title,
  content,
  linkNode,
  views,
  comments,
  onClick,
  linkText,
  theme = "light",
  color = "indigo",
  imgAlt = "blog-with-image-alt",
  includeWrapperBg = true,
}: BlogWithImageItemProps) {
  const cls = getClass.bind(null, theme);
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
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imgSrc}
          alt={imgAlt}
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
            {linkNode ? (
              linkNode
            ) : (
              <LearnMore
                onClick={onClick}
                theme={theme}
                color={color}
                linkText={linkText}
              />
            )}
            <div className="mt-2 sm:mt-0">
              <Stat
                views={views}
                comments={comments}
                theme={theme}
                color={color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
