import React from "react";

export type ImgProps = {
  imgClass?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgNode?: ((intendedClass: string) => React.ReactNode) | React.ReactNode;
};

export function Img({ imgNode, imgSrc, imgAlt, imgClass = "" }: ImgProps) {
  if (imgNode) {
    if (imgNode instanceof Function) {
      return <>{imgNode(imgClass)}</>;
    } else {
      return <>{imgNode}</>;
    }
  } else {
    return <img className={imgClass} src={imgSrc} alt={imgAlt} />;
  }
}
