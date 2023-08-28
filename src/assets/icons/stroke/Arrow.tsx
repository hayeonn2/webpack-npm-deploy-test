import React from "react";
import { IconProps } from "@/components/Icon/Icon";

function Arrow({ width, height, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 14 20"
      fill="#666666"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.0858 0.509135C13.5251 1.08011 13.4182 1.89904 12.8473 2.33825L2.88699 10L12.8473 17.6617C13.4182 18.101 13.5251 18.9199 13.0858 19.4909C12.6466 20.0618 11.8277 20.1687 11.2567 19.7294L0.848449 11.7231L1.64372 10.6892L0.848449 11.7231C-0.282817 10.8529 -0.282815 9.14712 0.848449 8.27692L1.64372 9.31077L0.84845 8.27691L11.2567 0.270554C11.8277 -0.168662 12.6466 -0.0618454 13.0858 0.509135Z"
      />
    </svg>
  );
}

export default Arrow;
