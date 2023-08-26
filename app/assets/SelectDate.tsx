import React from "react";

function SelectDate({ ...props }) {
  return (
    <svg
      {...props}
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.78572 7.63531C6.38534 8.14386 5.61466 8.14386 5.21429 7.63531L1.21213 2.55189C0.69568 1.89591 1.16296 0.933301 1.99784 0.933301L10.0022 0.9333C10.837 0.9333 11.3043 1.89591 10.7879 2.55189L6.78572 7.63531Z"
        fill="#999999"
      />
    </svg>
  );
}

export default SelectDate;
