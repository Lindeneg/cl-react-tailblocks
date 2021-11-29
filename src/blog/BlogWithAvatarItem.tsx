import React from "react";
import { BlogItemProps } from "./BlogItem";
import { Avatar, AvatarProps } from "../util/Avatar";
import { Stat } from "../util/Stat";
import { LearnMore } from "../util/LearnMore";
import { WithoutTheme } from "../types";
import { getClass } from "../shared";

export type BlogWithAvatarItemProps = BlogItemProps & WithoutTheme<AvatarProps>;

export function BlogWithAvatarItem({
  label,
  title,
  content,
  linkNode,
  linkText,
  onClick,
  views,
  comments,
  theme = "light",
  color = "indigo",
  includeWrapperBg = true,
  ...avatarProps
}: BlogWithAvatarItemProps) {
  const cls = getClass.bind(null, theme);
  return (
    <div
      data-testid="blog-with-avatar-item-outer"
      className={cls(
        "p-12 md:w-1/2 flex flex-col items-start",
        "",
        includeWrapperBg ? "text-gray-400 bg-gray-900" : ""
      )}
    >
      <span
        className={cls(
          "inline-block py-1 px-2 rounded text-xs font-medium tracking-widest",
          `bg-${color}-50 text-${color}-500`,
          "bg-gray-800 text-gray-400"
        )}
      >
        {label}
      </span>
      <h2
        className={cls(
          "sm:text-3xl text-2xl title-font font-medium mt-4 mb-4",
          "text-gray-900",
          "text-white"
        )}
      >
        {title}
      </h2>
      <p className="leading-relaxed mb-8">{content}</p>
      <div
        data-testid="blog-with-avatar-item-inner"
        className={cls(
          "w-full place-content-between flex items-baseline sm:items-center sm:flex-row flex-col flex-wrap pb-4 mb-4 border-b-2",
          "border-gray-100",
          "border-gray-800"
        )}
      >
        {linkNode ? (
          <>{linkNode}</>
        ) : (
          <LearnMore
            onClick={onClick}
            theme={theme}
            color={color}
            linkText={linkText}
          />
        )}
        <div className="mt-2 sm:mt-0">
          <Stat views={views} comments={comments} theme={theme} color={color} />
        </div>
      </div>
      <Avatar {...avatarProps} theme={theme} color={color} />
    </div>
  );
}
