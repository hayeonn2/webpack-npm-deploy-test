import React from "react";
import { IconProps } from "@/components/Icon/Icon";

function Quality({ width, height, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.4252 2.6V17.4H23.9395V2.6H3.4252ZM1.8252 0C1.27291 0 0.825195 0.447716 0.825195 1V19C0.825195 19.5523 1.27291 20 1.82519 20H25.5395C26.0918 20 26.5395 19.5523 26.5395 19V1C26.5395 0.447715 26.0918 0 25.5395 0H1.8252Z"
        fill="#666666"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.93594 6.88564V17.3999H23.94V6.88564H8.93594ZM7.12165 4.28564C6.68771 4.28564 6.33594 4.63742 6.33594 5.07136V19.2142C6.33594 19.6482 6.68771 19.9999 7.12165 19.9999H25.7543C26.1882 19.9999 26.54 19.6482 26.54 19.2142V5.07136C26.54 4.63742 26.1882 4.28564 25.7543 4.28564H7.12165Z"
        fill="#666666"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8539 11.4882V17.3996H23.94V11.4882H14.8539ZM12.8095 8.88818C12.5026 8.88818 12.2539 9.13692 12.2539 9.44375V19.444C12.2539 19.7509 12.5026 19.9996 12.8095 19.9996H25.9844C26.2913 19.9996 26.54 19.7509 26.54 19.444V9.44375C26.54 9.13692 26.2913 8.88818 25.9844 8.88818H12.8095Z"
        fill="#666666"
      />
    </svg>
  );
}

export default Quality;
