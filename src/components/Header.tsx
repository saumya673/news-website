import Link from "next/link";

import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

const Header = () => {
  return (
    <header className="border-b border-header-border bg-header-surface">
      <div className="mx-auto w-full max-w-360">
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-8 md:px-12 lg:gap-6 lg:px-30">
          <div className="flex min-w-0 flex-1 items-center">
            <Link
              href="/"
              className="desktop-brand-text font-serif text-xl font-semibold tracking-[-0.02em] text-header-strong sm:text-2xl"
            >
              THE HERALD
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <Navbar />
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-header-muted transition-colors hover:bg-header-hover hover:text-header-strong"
            >
              <Icon name="search" className="h-5 w-5" />
            </button>
            <Theme />
            <button
              type="button"
              aria-label="Subscribe"
              className="inline-flex h-9 items-center justify-center rounded-md bg-header-accent px-4 text-sm font-medium text-header-inverse shadow-sm transition-colors hover:bg-header-accent-hover"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-header-border lg:hidden">
          <div className="px-4 py-2 sm:px-8 md:px-12">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
