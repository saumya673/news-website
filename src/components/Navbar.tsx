import Link from "next/link";

import Icon, { type IconName } from "@/components/Icon";

const navItems = [
  { href: "/", icon: "home", label: "Home", active: false },
  { href: "/world", icon: "world", label: "World", active: false },
  { href: "/tech", icon: "tech", label: "Tech", active: true },
  { href: "/business", icon: "business", label: "Business", active: false },
  { href: "/culture", icon: "culture", label: "Culture", active: false },
] as const satisfies ReadonlyArray<{
  href: string;
  icon: IconName;
  label: string;
  active: boolean;
}>;

export default function Navbar() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm leading-5 transition-colors ${
            item.active
              ? "font-semibold text-rose-700"
              : "font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
          }`}
        >
          <Icon name={item.icon} className="h-4 w-4" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
