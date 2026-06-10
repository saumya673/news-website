"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/Icon";
import type { NavItem } from "@/types/navigation";

const navItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/world", icon: "world", label: "World" },
  { href: "/tech", icon: "tech", label: "Tech" },
  { href: "/business", icon: "business", label: "Business" },
  { href: "/culture", icon: "culture", label: "Culture" },
] as const satisfies ReadonlyArray<{
  href: NavItem["href"];
  icon: NavItem["icon"];
  label: NavItem["label"];
}>;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="mobile-nav-scroll flex w-full items-center justify-start gap-1 overflow-x-auto md:justify-center lg:w-auto lg:justify-start"
    >
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
            className={`desktop-nav-text inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm leading-5 transition-colors ${
              isActive
                ? "font-semibold text-header-accent"
                : "font-medium text-header-muted hover:bg-neutral-50 hover:text-header-strong"
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
