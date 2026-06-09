import { readFileSync } from "node:fs";
import path from "node:path";
import { cache } from "react";

export type IconName =
  | "business"
  | "culture"
  | "home"
  | "moon"
  | "search"
  | "tech"
  | "world";

type IconProps = {
  className: string;
  name: IconName;
};

const readIcon = cache((name: IconName) => {
  const iconPath = path.join(process.cwd(), "src", "assets", "icons", `${name}.svg`);

  return readFileSync(iconPath, "utf8");
});

export default function Icon({ className, name }: IconProps) {
  const svg = readIcon(name).replace("<svg", `<svg class="${className}"`);

  return <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
