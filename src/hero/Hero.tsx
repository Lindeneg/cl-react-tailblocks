import React from "react";
import { Section } from "../util/Section";
import { Button, ButtonProps } from "../util/Button";
import { WithTheme, Image } from "../types";
import { getClass } from "../shared";

export type DoubleBtn = {
  btnLeft?: { buttonText: string } & Pick<ButtonProps, "onClick">;
  btnRight?: { buttonText: string } & Pick<ButtonProps, "onClick">;
};

export type HeroOrientation = "right" | "left" | "middle";

export type HeroProps = WithTheme<{
  title: string | React.ReactNode;
  description: string;
  orientation?: HeroOrientation;
}> &
  Image &
  DoubleBtn;

export function Hero({
  title,
  description,
  imgSrc,
  btnLeft = {
    buttonText: "Button",
  },
  btnRight = {
    buttonText: "Button",
  },
  imgAlt = "hero-image",
  orientation = "right",
  theme = "light",
  color = "indigo",
}: HeroProps) {
  const cls = getClass.bind(null, theme);
  const img =
    orientation === "middle" ? (
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt={imgAlt}
        src={imgSrc}
      />
    ) : (
      <div
        className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ${
          orientation === "left" ? "mb-10 md:mb-0" : ""
        }`}
      >
        <img
          className="object-cover object-center rounded"
          alt={imgAlt}
          src={imgSrc}
        />
      </div>
    );
  return (
    <Section testId="hero-section" theme={theme}>
      <div
        className={`container mx-auto flex px-5 py-24 flex-col items-center ${
          orientation === "middle" ? "justify-center" : "md:flex-row"
        }`}
      >
        {(orientation === "left" || orientation === "middle") && img}
        <div
          className={
            orientation === "middle"
              ? "text-center lg:w-2/3 w-full"
              : `lg:flex-grow md:w-1/2 ${
                  orientation === "right"
                    ? "lg:pr-24 md:pr-16"
                    : "lg:pl-24 md:pl-16"
                } flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center`
          }
        >
          <h1
            className={cls(
              "title-font sm:text-4xl text-3xl mb-4 font-medium",
              "text-gray-900",
              "text-white"
            )}
          >
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <Button
              extendClass="inline-flex"
              text={btnLeft.buttonText}
              onClick={btnLeft.onClick}
              color={color}
            />
            <Button
              overrideClass={cls(
                "ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg",
                "text-gray-700 bg-gray-100 hover:bg-gray-200",
                "text-gray-400 bg-gray-800 hover:text-white"
              )}
              text={btnRight.buttonText}
              onClick={btnRight.onClick}
              color={color}
            />
          </div>
        </div>
        {orientation === "right" && img}
      </div>
    </Section>
  );
}
