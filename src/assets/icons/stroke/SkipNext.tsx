import React from "react";
import { IconProps } from "@/components/Icon/Icon";

function SkipNext({ width, height, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.30435 -6.2198e-08C2.02472 -9.65491e-08 2.6087 0.583976 2.6087 1.30435L2.6087 18.6957C2.6087 19.416 2.02472 20 1.30435 20C0.583977 20 9.25857e-07 19.416 8.91505e-07 18.6957L6.21981e-08 1.30435C2.7847e-08 0.583976 0.583976 -2.7847e-08 1.30435 -6.2198e-08Z"
        fill="#666666"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.61876 7.73569C4.27226 8.94499 4.27226 11.0551 5.61876 12.2644L13.016 18.9078C14.9753 20.6674 18.0931 19.2769 18.0931 16.6435L18.0931 3.35657C18.0931 0.723125 14.9753 -0.667378 13.016 1.09224L5.61876 7.73569ZM7.36185 10.3235C7.16949 10.1507 7.16949 9.84931 7.36185 9.67655L14.7591 3.0331C15.039 2.78172 15.4844 2.98037 15.4844 3.35657L15.4844 16.6435C15.4844 17.0197 15.039 17.2183 14.7591 16.967L7.36185 10.3235Z"
        fill="#666666"
      />
    </svg>
  );
}

export default SkipNext;
