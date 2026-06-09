"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon, { type IconName } from "@/components/Icon";

const navItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/world", icon: "world", label: "World" },
  { href: "/tech", icon: "tech", label: "Tech" },
  { href: "/business", icon: "business", label: "Business" },
  { href: "/culture", icon: "culture", label: "Culture" },
] as const satisfies ReadonlyArray<{
  href: string;
  icon: IconName;
  label: string;
}>;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm leading-5 transition-colors ${
              isActive
                ? "font-semibold text-rose-700"
                : "font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
            }`}
          >
            <Icon name={item.icon} className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
