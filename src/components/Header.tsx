import Link from "next/link";

import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex min-h-16 w-full max-w-360 items-center justify-between gap-6 px-4 sm:px-8 md:px-12 lg:px-30">
        <div className="flex min-w-0 flex-1 items-center">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-[-0.03em] text-neutral-950"
          >
            THE HERALD
          </Link>
        </div>

        <Navbar />

        <div className="flex flex-1 items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
          >
            <Icon name="search" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
          >
            <Icon name="moon" className="h-5 w-5" />
          </button>
          <Link
            href="/subscribe"
            className="inline-flex h-9 items-center justify-center rounded-md bg-rose-700 px-4 text-sm font-medium text-neutral-50 shadow-sm transition-colors hover:bg-rose-800"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
