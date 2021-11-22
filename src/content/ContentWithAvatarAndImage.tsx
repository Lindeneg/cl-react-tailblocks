import React from "react";
import { Section } from "../util/Section";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { WithTheme, WithoutTheme, Image } from "../types";
import { getClass } from "../shared";

export type ContentWithAvatarAndImageProps = WithTheme<{
  title: string;
  description: string;
  content: string;
  linkNode?: React.ReactNode;
  iconNode?: React.ReactNode;
}> &
  WithoutTheme<LearnMoreProps> &
  Image;

export function ContentWithAvatarAndImage({
  title,
  description,
  content,
  imgSrc,
  linkNode,
  iconNode,
  imgAlt = "content-image",
  theme = "light",
  color = "indigo",
  ...linkProps
}: ContentWithAvatarAndImageProps) {
  const cls = getClass.bind(null, theme);
  return (
    <Section testId="content-with-avatar-and-image-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              {iconNode ? (
                iconNode
              ) : (
                <div
                  className={cls(
                    "w-20 h-20 rounded-full inline-flex items-center justify-center",
                    "bg-gray-200 text-gray-400",
                    "bg-gray-800 text-gray-600"
                  )}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              )}
              <div className="flex flex-col items-center text-center justify-center">
                <h2
                  className={cls(
                    "font-medium title-font mt-4 text-lg",
                    "text-gray-900",
                    "text-white"
                  )}
                >
                  {title}
                </h2>
                <div
                  className={`w-12 h-1 rounded mt-2 mb-4 bg-${color}-500`}
                ></div>
                <p className={cls("text-base", "", "text-gray-400")}>
                  {description}
                </p>
              </div>
            </div>
            <div
              className={cls(
                "sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left",
                "border-gray-200",
                "border-gray-800"
              )}
            >
              <p className="leading-relaxed text-lg mb-4">{content}</p>
              {linkNode ? (
                linkNode
              ) : (
                <LearnMore {...linkProps} theme={theme} color={color} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
