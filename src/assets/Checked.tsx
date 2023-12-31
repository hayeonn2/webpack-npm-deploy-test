import React from "react";

function Checked({ ...props }) {
  return (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="15" height="15" rx="3" fill="#99BDFF" />
      <path
        d="M3.49951 7L5.64208 9.39925C6.03847 9.84313 6.73243 9.84469 7.13082 9.40261L11.9995 4"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default Checked;
