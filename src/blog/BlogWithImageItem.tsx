import React from "react";

function getThousands(target: number) {
  if (target >= 1000) {
    return `${(target / 1000).toFixed(1)}K`;
  }
  return target.toString();
}

export type BlogWithImageItemProps = {
  imgSrc: string;
  label: string;
  title: string;
  content: string;
  linkNode?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  views?: number;
  comments?: number;
  theme?: "light" | "dark";
  imgAlt?: string;
  includeWrapperBg?: boolean;
};

export function BlogWithImageItem({
  imgSrc,
  label,
  title,
  content,
  linkNode,
  views,
  comments,
  onClick,
  theme = "light",
  imgAlt = "blog-with-image-alt",
  includeWrapperBg = true,
}: BlogWithImageItemProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={`p-4 md:w-1/3 ${
        includeWrapperBg && isDark ? "text-gray-400 bg-gray-900" : ""
      }`}
    >
      <div
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
          <div className="flex items-center flex-wrap ">
            {linkNode ? (
              linkNode
            ) : (
              // LearnMore component
              <a
                onClick={onClick}
                className={`cursor-pointer text-indigo-${
                  isDark ? "400" : "500"
                } hover:text-indigo-${
                  isDark ? "500" : "600"
                } inline-flex items-center md:mb-2 lg:mb-0`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            )}
            {/* StatComponent */}
            {typeof views !== "undefined" && (
              <span
                className={`mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 text-gray-400 border-gray-${
                  isDark ? "800" : "200"
                }`}
              >
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {getThousands(views)}
              </span>
            )}
            {typeof comments !== "undefined" && (
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                {getThousands(comments)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
