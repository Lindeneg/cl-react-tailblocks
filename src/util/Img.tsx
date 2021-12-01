import React from "react";

export type MetaImgProps = {
  imgClass?: string;
  imgSrc?: string;
  imgAlt?: string;
  testId?: string;
  imgNode?: ((intendedClass: string) => React.ReactNode) | React.ReactNode;
};

export type ImgProps = Omit<MetaImgProps, "imgClass" | "testId">;

export function Img({
  imgNode,
  imgSrc,
  imgAlt,
  testId = "test-id-image",
  imgClass = "",
}: MetaImgProps) {
  if (imgNode) {
    if (imgNode instanceof Function) {
      return <>{imgNode(imgClass)}</>;
    } else {
      return <>{imgNode}</>;
    }
  } else {
    return (
      <img
        data-testid={testId}
        className={imgClass}
        src={imgSrc}
        alt={imgAlt}
      />
    );
  }
}
