import React from "react";

// TODO stories | tests

export type SocialEntry = string | { href: string; newTab: boolean };

export type IconWrapperProps = {
  entry: SocialEntry;
  children: React.ReactNode;
  className?: string;
  testId?: string;
};

export function IconWrapper({
  entry,
  children,
  className = "",
  testId = "test-id-icon-wrapper",
}: IconWrapperProps) {
  let href: string = "";
  let newTab: Record<string, unknown> = {
    target: "_blank",
    rel: "no-referrer",
  };
  if (typeof entry === "string") {
    href = entry;
  } else {
    href = entry.href;
    if (!entry.newTab) {
      newTab = {};
    }
  }
  return (
    <a
      data-testid={testId}
      className={`cursor-pointer text-gray-500 ${className}`}
      href={href}
      {...newTab}
    >
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </a>
  );
}

export type SocialConstraints = {
  facebook?: SocialEntry;
  twitter?: SocialEntry;
  instagram?: SocialEntry;
  linkedIn?: SocialEntry;
  mail?: SocialEntry;
};

export type SocialsProps = {
  className: string;
} & SocialConstraints;

export function Socials({
  className,
  facebook,
  twitter,
  instagram,
  linkedIn,
  mail,
}: SocialsProps) {
  return (
    <span className={className}>
      {facebook && (
        <IconWrapper entry={facebook}>
          <path
            data-testid="facebook-path"
            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
          ></path>
        </IconWrapper>
      )}
      {twitter && (
        <IconWrapper className="ml-4" entry={twitter}>
          <path
            data-testid="twitter-path"
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          ></path>
        </IconWrapper>
      )}
      {instagram && (
        <IconWrapper className="ml-4" entry={instagram}>
          <rect
            data-testid="instagram-rect"
            width="20"
            height="20"
            x="2"
            y="2"
            rx="5"
            ry="5"
          ></rect>
          <path
            data-testid="instagram-path"
            d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
          ></path>
        </IconWrapper>
      )}
      {linkedIn && (
        <IconWrapper
          data-testid="linkedin-path"
          className="ml-4"
          entry={linkedIn}
        >
          <path></path>
        </IconWrapper>
      )}
      {mail && (
        <IconWrapper
          className="ml-4"
          entry={`mailto:${typeof mail === "string" ? mail : mail.href}`}
        >
          <path
            data-testid="mail-path"
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          ></path>
        </IconWrapper>
      )}
    </span>
  );
}
