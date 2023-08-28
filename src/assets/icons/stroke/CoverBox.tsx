import React from "react";
import { IconProps } from "@/components/Icon/Icon";

function CoverBox({ width, height, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_4360)">
        <path
          d="M7.12523 7.70758L10.3752 4.45758L13.6252 7.70758C13.9502 8.03258 14.4669 8.03258 14.7919 7.70758C15.1169 7.38258 15.1169 6.86592 14.7919 6.54092L10.9669 2.71592C10.6419 2.39092 10.1169 2.39092 9.79189 2.71592L5.95856 6.54092C5.63356 6.86592 5.63356 7.38258 5.95856 7.70758C6.28356 8.03258 6.80023 8.03258 7.12523 7.70758ZM7.12523 13.2076L10.3752 16.4576L13.6252 13.2076C13.9502 12.8826 14.4669 12.8826 14.7919 13.2076C15.1169 13.5326 15.1169 14.0493 14.7919 14.3743L10.9669 18.1993C10.6419 18.5243 10.1169 18.5243 9.79189 18.1993L5.95856 14.3743C5.63356 14.0493 5.63356 13.5326 5.95856 13.2076C6.28356 12.8826 6.80023 12.8826 7.12523 13.2076Z"
          fill="#666666"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4360">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(20.375 0.45752) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CoverBox;
