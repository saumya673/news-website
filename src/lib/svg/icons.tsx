import type { IconMap, SvgIconProps } from "@/types/icon";

const svgProps = {
  "aria-hidden": "true",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
} satisfies SvgIconProps;

export const icons = {
  business: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="M4 16l5-5 4 3 7-8" />
      <path d="M4 20h16" />
    </svg>
  ),
  culture: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H13a2 2 0 0 1-2-2 2 2 0 0 1 2-2h3a5 5 0 0 0 0-10Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="M14.5 8H13a2 2 0 0 0-2 2v3" />
      <path d="M10 13h4" />
      <path d="M12 21v-8" />
      <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75v14.5A1.75 1.75 0 0 1 16.25 21h-8.5A1.75 1.75 0 0 1 6 19.25Z" />
    </svg>
  ),
  home: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6.5 9.5V20h11V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  instagram: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="16.25" cy="7.75" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  ),
  moon: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  ),
  search: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  ),
  tech: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
    </svg>
  ),
  world: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  x: (props: SvgIconProps) => (
    <svg {...svgProps} {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  ),
} satisfies IconMap;
