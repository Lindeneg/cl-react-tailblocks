import React from "react";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type EmbededMapProps = WithTheme<{
  src?: string;
  className?: string;
}>;

export function EmbededMap({
  src,
  className,
  theme = "light",
}: EmbededMapProps) {
  return (
    <iframe
      data-testid="embeded-map-iframe"
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src={src}
      className={className}
      style={{
        filter: getClass(
          theme,
          "grayscale(1) contrast(1.2)",
          "opacity(0.4)",
          "opacity(0.16)"
        ),
      }}
    />
  );
}
