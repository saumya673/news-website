import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "business"
  | "culture"
  | "facebook"
  | "home"
  | "instagram"
  | "moon"
  | "search"
  | "sun"
  | "tech"
  | "world"
  | "x";

export type SvgIconProps = SVGProps<SVGSVGElement>;

export type IconMap = Record<IconName, (props: SvgIconProps) => ReactElement>;
