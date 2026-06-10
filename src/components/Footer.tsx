import Link from "next/link";

import Icon from "@/components/Icon";

const sectionLinks = [
  { href: "/world", label: "World" },
  { href: "/tech", label: "Tech" },
  { href: "/business", label: "Business" },
  { href: "/culture", label: "Culture" },
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/press", label: "Press" },
] as const;

const socialLinks = [
  { href: "https://facebook.com", icon: "facebook", label: "Facebook" },
  { href: "https://instagram.com", icon: "instagram", label: "Instagram" },
  { href: "https://x.com", icon: "x", label: "X" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-footer-border bg-footer-surface">
      <div className="mx-auto w-full max-w-360 px-4 sm:px-8 md:px-12 lg:px-30">
        <div className="px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-2.5">
                <Link
                  href="/"
                  className="block font-serif text-lg font-bold leading-7 tracking-[-0.02em] text-footer-strong sm:text-xl"
                >
                  THE HERALD
                </Link>
                <p className="max-w-66 text-sm leading-5.75 text-footer-muted">
                  Independent journalism for a changing world. Reporting that
                  informs, challenges, and endures.
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:col-span-6 lg:gap-8">
              <div className="space-y-2">
                <h2 className="pb-1 text-sm font-semibold leading-5 text-footer-strong">
                  Sections
                </h2>
                <div className="space-y-2">
                  {sectionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm leading-5 text-footer-muted transition-colors hover:text-footer-strong"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="pb-1 text-sm font-semibold leading-5 text-footer-strong">
                  Company
                </h2>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm leading-5 text-footer-muted transition-colors hover:text-footer-strong"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-3">
                <h2 className="text-sm font-semibold leading-5 text-footer-strong">
                  Follow Us
                </h2>
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-footer-button-border bg-footer-button text-footer-muted shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-footer-button-hover hover:text-footer-strong"
                    >
                      <Icon name={link.icon} className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-footer-border pt-5 text-sm leading-5 text-footer-muted sm:mt-10 sm:gap-4 sm:pt-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-88">
              &copy; {year} The Herald Media. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-footer-strong"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
