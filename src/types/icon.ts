import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "business"
  | "culture"
  | "home"
  | "moon"
  | "search"
  | "tech"
  | "world";

export type SvgIconProps = SVGProps<SVGSVGElement>;

export type IconMap = Record<IconName, (props: SvgIconProps) => ReactElement>;
