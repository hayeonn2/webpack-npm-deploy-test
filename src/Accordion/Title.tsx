import React, { ReactNode, SyntheticEvent } from "react";
import { ToggleButton } from "../assets/";

type TitleProps = {
  children: ReactNode;
  className?: string;
  onClick: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
};
export default function Title({ children, className, onClick }: TitleProps) {
  return (
    <button
      type="button"
      className="flex mb-3 cursor-pointer items-center w-full"
      onClick={onClick}
    >
      <ToggleButton alt="토글 버튼" className={className} />
      <span className="ml-2">{children}</span>
    </button>
  );
}
