import { icons, type IconName } from "@/lib/svg/icons";

type IconProps = {
  className: string;
  name: IconName;
};

export default function Icon({ className, name }: IconProps) {
  const SvgIcon = icons[name];
  return <SvgIcon className={className} />;
}
