import React, { useState } from "react";
import { Section } from "../util/Section";
import { Button } from "../util/Button";
import { LearnMore, LearnMoreProps } from "../util/LearnMore";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme } from "../types";
import { getClass } from "../shared";

type PricingEvent<T extends HTMLAnchorElement | HTMLButtonElement> = (
  event: React.MouseEvent<T, MouseEvent>,
  chosenIndex: number
) => void;

type Constraint = string | React.ReactNode;

export type PricingStaticProps = WithTheme<{
  title: string;
  description: string;
  headers: Constraint[];
  data: [Constraint, ...Constraint[]][];
  buttonText?: string;
  selectedIndex?: number;
  onLearnMore?: PricingEvent<HTMLAnchorElement>;
  onClick: PricingEvent<HTMLButtonElement>;
}> &
  Pick<LearnMoreProps, "linkNode" | "linkText">;

const headerClass = [
  "px-4 py-3 title-font tracking-wider font-medium text-sm rounded-tl rounded-bl",
  "text-gray-900 bg-gray-100",
  "text-white text-sm bg-gray-800",
] as [string, string, string];

export function PricingStatic({
  title,
  description,
  headers,
  data,
  linkNode,
  linkText,
  onLearnMore,
  onClick,
  selectedIndex = -1,
  buttonText = "Button",
  ...props
}: PricingStaticProps) {
  const { theme, color } = useMaybeTheme(props);
  const cls = getClass.bind(null, theme);
  const [idx, setIdx] = useState<number>(selectedIndex);
  return (
    <Section testId="pricing-static-section" theme={theme}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            className={cls(
              "sm:text-4xl text-3xl font-medium title-font mb-2",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {description}
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                {headers.map((entry, i) => {
                  if (typeof entry === "string") {
                    return (
                      <th key={entry + i} className={cls(...headerClass)}>
                        {entry}
                      </th>
                    );
                  }
                  return <React.Fragment key={i}>{entry}</React.Fragment>;
                })}
                <th className={cls(...headerClass)}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((entries, i) => {
                return (
                  <tr key={i}>
                    {entries.map((entry, k) => {
                      if (typeof entry === "string") {
                        return (
                          <td
                            key={entry + k}
                            className={cls(
                              `px-4 py-3 border-t-2 ${
                                i === entries.length - 1 ? "border-b-2" : ""
                              }`,
                              "border-gray-200",
                              "border-gray-800"
                            )}
                          >
                            {entry}
                          </td>
                        );
                      }
                      return (
                        <React.Fragment key={i + k}>{entry}</React.Fragment>
                      );
                    })}
                    <td
                      className={cls(
                        "border-t-2 border-b-2 w-10 text-center",
                        "border-gray-200",
                        "border-gray-800"
                      )}
                    >
                      <input
                        onChange={() => {
                          setIdx(i);
                        }}
                        name="plan"
                        type="radio"
                        checked={idx === i}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          {(onLearnMore || linkNode) && (
            <LearnMore
              onClick={(e) => {
                onLearnMore && onLearnMore(e, idx);
              }}
              theme={theme}
              color={color}
              linkText={linkText}
              linkNode={linkNode}
            />
          )}
          <Button
            extendClass="flex ml-auto"
            text={buttonText}
            onClick={(e) => {
              onClick(e, idx);
            }}
            color={color}
          />
        </div>
      </div>
    </Section>
  );
}
