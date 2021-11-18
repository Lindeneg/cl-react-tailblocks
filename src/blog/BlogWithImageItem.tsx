import React from "react";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { Stat, StatProps } from "../util/Stat";
import { WithTheme, WithoutTheme } from "../types";

export type BlogWithImageItemProps = WithTheme<{
  imgSrc: string;
  label: string;
  title: string;
  content: string;
  linkNode?: React.ReactNode;
  imgAlt?: string;
  includeWrapperBg?: boolean;
}> &
  WithoutTheme<LearnMoreProps> &
  WithoutTheme<StatProps>;

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
  imgAlt = "blog-with-image-alt",
  includeWrapperBg = true,
}: BlogWithImageItemProps) {
  const isDark = theme === "dark";
  return (
    <div
      data-test-id="blog-with-image-item-outer"
      className={`p-4 md:w-1/3 ${
        includeWrapperBg && isDark ? "text-gray-400 bg-gray-900" : ""
      }`}
    >
      <div
        data-test-id="blog-with-image-item-inner"
        className={`h-full border-2 border-gray-${
          isDark ? "800" : "200"
        } border-opacity-60 rounded-lg overflow-hidden`}
      >
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="p-6">
          <h2
            className={`tracking-widest text-xs title-font font-medium text-gray-${
              isDark ? "500" : "400"
            } mb-1`}
          >
            {label}
          </h2>
          <h1
            className={`title-font text-lg font-medium ${
              isDark ? "text-white" : "text-gray-900"
            } mb-3`}
          >
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{content}</p>
          <div className="flex items-center flex-wrap">
            {linkNode ? (
              linkNode
            ) : (
              <LearnMore onClick={onClick} theme={theme} linkText={linkText} />
            )}
            <Stat views={views} comments={comments} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
