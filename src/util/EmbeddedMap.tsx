import React from "react";
import { useMaybeTheme } from "../hooks/useMaybeTheme";
import { WithTheme } from "../types";
import { getClass } from "../shared";

export type EmbeddedMapProps = WithTheme<{
  src?: string;
  className?: string;
}>;

export function EmbeddedMap({ src, className, ...props }: EmbeddedMapProps) {
  const { theme } = useMaybeTheme(props);
  return (
    <iframe
      data-testid="embedded-map-iframe"
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
