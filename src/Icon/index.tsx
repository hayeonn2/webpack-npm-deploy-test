import React from "react";

// imgIcon
import { Agree } from "../assets/icons/imgIcon";
import {
  Hello,
  AI,
  All,
  App,
  AngelFace,
  Data,
  Design,
  Disagree,
  Folder,
  Game,
  Hit,
  Link,
  Note,
  Security,
  Sound,
  Web,
  Live,
} from "../assets/icons/imgIcon";

// strokeIcon
import {
  Arrow,
  CoverBox,
  Quality,
  SkipNext,
  WideScreen,
} from "../assets/icons/stroke";

export type IconNameProps =
  | "Hello"
  | "Agree"
  | "AI"
  | "All"
  | "App"
  | "AngelFace"
  | "Data"
  | "Design"
  | "Disagree"
  | "Folder"
  | "Game"
  | "Hit"
  | "Link"
  | "Live"
  | "Note"
  | "Security"
  | "Sound"
  | "Web"
  | "Arrow"
  | "CoverBox"
  | "Quality"
  | "SkipNext"
  | "WideScreen";

export type IconProps = {
  name: IconNameProps;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const iconComponents = {
  Hello,
  Agree,
  AI,
  All,
  App,
  AngelFace,
  Data,
  Design,
  Disagree,
  Folder,
  Game,
  Hit,
  Link,
  Live,
  Note,
  Security,
  Sound,
  Web,
  Arrow,
  CoverBox,
  Quality,
  SkipNext,
  WideScreen,
};

export default function Icon({
  name,
  width = 21,
  height = 21,
  ...props
}: IconProps) {
  const IconComponent = iconComponents[name];

  return <IconComponent name={name} width={width} height={height} {...props} />;
}
