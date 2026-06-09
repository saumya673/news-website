import { icons } from "@/lib/svg/icons";
import type { IconName } from "@/types/icon";

type IconProps = {
  className: string;
  name: IconName;
};

export default function Icon({ className, name }: IconProps) {
  const SvgIcon = icons[name];
  return <SvgIcon className={className} />;
}
