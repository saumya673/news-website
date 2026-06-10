"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import Icon from "@/components/Icon";

function subscribe() {
  return () => {};
}

export default function Theme() {
  const { resolvedTheme, setTheme } = useTheme();
  const isHydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!isHydrated) {
    return (
      <button
        type="button"
        aria-label="Theme"
        title="Theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-header-muted transition-colors hover:bg-header-hover hover:text-header-strong"
      >
        <Icon name="moon" className="h-5 w-5" />
      </button>
    );
  }

  const isDarkTheme = resolvedTheme === "dark";
  const nextTheme = isDarkTheme ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-header-muted transition-colors hover:bg-header-hover hover:text-header-strong"
    >
      <Icon name={isDarkTheme ? "sun" : "moon"} className="h-5 w-5" />
    </button>
  );
}
