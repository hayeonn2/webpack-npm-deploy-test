import React from "react";
import { IconProps } from "@/src/Icon";

function BreadArrow({ width, height, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.23828 5.49992L0.0595699 10.3211L0.0595703 0.678705L6.23828 5.49992Z" />
    </svg>
  );
}

export default BreadArrow;
