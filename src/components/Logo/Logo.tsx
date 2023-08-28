import React from "react";
import { LogoImage } from "@/assets";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

export default function Logo({ width, height, className }: LogoProps) {
  return (
    <LogoImage
      className={`${className} block`}
      width={width}
      height={height}
      alt="logo"
    />
  );
}
