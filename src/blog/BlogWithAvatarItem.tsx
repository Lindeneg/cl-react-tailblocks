import React from "react";
import { BlogItemProps, LearnMore } from "..";
import { Avatar, AvatarProps } from "../util/Avatar";
import { Stat } from "../util/Stat";
import { WithoutTheme } from "../types";

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
  includeWrapperBg = true,
  ...avatarProps
}: BlogWithAvatarItemProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={`p-12 md:w-1/2 flex flex-col items-start ${
        isDark && includeWrapperBg ? "text-gray-400 bg-gray-900" : ""
      }`}
    >
      <span
        className={`inline-block py-1 px-2 rounded ${
          isDark ? "bg-gray-800 text-gray-400" : "bg-indigo-50 text-indigo-500"
        } text-xs font-medium tracking-widest`}
      >
        {label}
      </span>
      <h2
        className={`sm:text-3xl text-2xl title-font font-medium ${
          isDark ? "text-white" : "text-gray-900"
        } mt-4 mb-4`}
      >
        {title}
      </h2>
      <p className="leading-relaxed mb-8">{content}</p>
      <div
        className={`flex items-baseline sm:items-center sm:flex-row flex-col flex-wrap pb-4 mb-4 border-b-2 border-gray-${
          isDark ? "800" : "100"
        }  w-full place-content-between`}
      >
        {linkNode ? (
          linkNode
        ) : (
          <LearnMore onClick={onClick} theme={theme} linkText={linkText} />
        )}
        <div className="mt-2 sm:mt-0">
          <Stat views={views} comments={comments} theme={theme} />
        </div>
      </div>
      <Avatar {...avatarProps} theme={theme} />
    </div>
  );
}
