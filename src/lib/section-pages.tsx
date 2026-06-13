import type { Metadata } from "next";

import type { SectionPageConfig } from "@/components/SectionFeaturePage";

function TechHeroArtwork() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-fuchsia-400/70 via-sky-300/50 to-slate-900" />
      <div className="absolute inset-x-12 bottom-6 h-5 rounded-full bg-slate-100/70 blur-md" />
      <div className="absolute inset-x-16 bottom-5 h-16 rounded-t-[1.75rem] rounded-b-md bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.55)]" />
      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-rose-600/35 blur-3xl" />
      <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-indigo-500/35 blur-3xl" />
      <div className="absolute bottom-14 left-1/2 h-32 w-52 -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />

      <svg
        viewBox="0 0 420 260"
        className="absolute inset-x-6 top-5 h-[72%] w-[calc(100%-3rem)] text-violet-100/80"
        aria-hidden="true"
      >
        <path
          d="M120 160c-22-16-36-42-32-68 6-41 45-70 89-68 36 2 67 24 80 54 10 22 11 49 0 72"
          className="stroke-current"
          strokeWidth="1.2"
        />
        <path
          d="M150 73c22-15 50-20 77-13 37 10 65 40 71 77 3 20 0 40-9 57"
          className="stroke-current"
          strokeWidth="1.2"
        />
        <path
          d="M102 131c18 11 39 15 61 11 26-4 49-18 64-39"
          className="stroke-current"
          strokeWidth="1.2"
        />
        <path
          d="M121 173c27 4 55 0 80-13 22-11 40-29 51-51"
          className="stroke-current"
          strokeWidth="1.2"
        />
        <path
          d="M138 97l35 31 40-40 34 28 31-29"
          className="stroke-current"
          strokeWidth="1.4"
        />
        <path
          d="M139 145l47-16 37 30 48-14"
          className="stroke-current"
          strokeWidth="1.4"
        />
        <path d="M173 128l13 43" className="stroke-current" strokeWidth="1.1" />
        <path d="M213 88l10 71" className="stroke-current" strokeWidth="1.1" />
        <path d="M247 116l24 29" className="stroke-current" strokeWidth="1.1" />
        {[
          [120, 160],
          [138, 97],
          [173, 128],
          [186, 171],
          [213, 88],
          [223, 159],
          [247, 116],
          [271, 145],
          [278, 87],
          [309, 116],
          [300, 162],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="currentColor"
            className="text-rose-100/90"
          />
        ))}
      </svg>
    </div>
  );
}

function WorldHeroArtwork() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-950 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
      <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/25 bg-cyan-200/5" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/15" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10" />
      <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-2xl" />
      <div className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-cyan-100/25" />
      <div className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-cyan-100/25" />

      <svg
        viewBox="0 0 420 260"
        className="absolute inset-0 h-full w-full text-cyan-50/85"
        aria-hidden="true"
      >
        <path
          d="M110 96c18-16 42-24 67-21 19 3 28 14 46 16 18 2 36-6 54-2 18 4 33 18 42 34"
          className="stroke-current"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M104 136c16-8 36-8 54-3 14 4 28 13 43 15 18 3 36-3 54 0 20 3 38 16 49 33"
          className="stroke-current"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M131 175c24-6 50-4 73 4 15 5 29 14 45 15 17 1 33-7 48-15"
          className="stroke-current"
          strokeWidth="1.3"
          fill="none"
        />
        {[
          [140, 105],
          [177, 97],
          [213, 113],
          [248, 105],
          [284, 116],
          [127, 138],
          [171, 142],
          [212, 153],
          [259, 151],
          [301, 165],
          [162, 177],
          [212, 186],
          [263, 181],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="currentColor"
            className="text-cyan-100"
          />
        ))}
      </svg>
    </div>
  );
}

function BusinessHeroArtwork() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-300/20 to-transparent" />
      <div className="absolute inset-8 rounded-xl border border-white/8" />
      <div className="absolute inset-x-10 bottom-12 h-px bg-white/10" />
      <div className="absolute inset-y-10 left-14 w-px bg-white/10" />
      <div className="absolute bottom-12 left-18 h-18 w-8 rounded-t-md bg-emerald-200/35" />
      <div className="absolute bottom-12 left-30 h-26 w-8 rounded-t-md bg-emerald-200/45" />
      <div className="absolute bottom-12 left-42 h-14 w-8 rounded-t-md bg-emerald-200/30" />
      <div className="absolute bottom-12 left-54 h-32 w-8 rounded-t-md bg-emerald-200/55" />
      <div className="absolute bottom-12 left-66 h-22 w-8 rounded-t-md bg-emerald-200/40" />
      <svg
        viewBox="0 0 420 260"
        className="absolute inset-0 h-full w-full text-emerald-100"
        aria-hidden="true"
      >
        <path
          d="M72 183 123 162 171 172 220 124 269 136 318 97 350 78"
          className="stroke-current"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M340 78h16v16"
          className="stroke-current"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="123" cy="162" r="5" fill="currentColor" />
        <circle cx="220" cy="124" r="5" fill="currentColor" />
        <circle cx="318" cy="97" r="5" fill="currentColor" />
      </svg>
    </div>
  );
}

function CultureHeroArtwork() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-amber-950 to-rose-950 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-100/10 to-transparent" />
      <div className="absolute left-10 top-12 h-40 w-28 rotate-[-8deg] rounded-lg border border-white/15 bg-white/8 shadow-lg" />
      <div className="absolute left-16 top-18 h-28 w-16 rounded-md bg-gradient-to-b from-amber-200/50 to-rose-300/20" />
      <div className="absolute left-36 top-16 h-44 w-32 rotate-[5deg] rounded-lg border border-white/15 bg-white/10 shadow-xl" />
      <div className="absolute left-44 top-24 h-20 w-16 rounded-full bg-orange-200/60 blur-sm" />
      <div className="absolute right-14 top-10 h-44 w-28 rotate-[10deg] rounded-lg border border-white/15 bg-white/8 shadow-lg" />
      <div className="absolute right-20 top-18 h-32 w-16 rounded-md bg-gradient-to-b from-rose-200/55 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}

type SectionPageEntry = {
  config: SectionPageConfig;
  metadata: Metadata;
};

export type SectionSlug = "business" | "culture" | "tech" | "world";

export const sectionPages: Record<
  SectionSlug,
  SectionPageEntry
> = {
  tech: {
    metadata: {
      title: "Tech | The Herald",
      description:
        "Section landing page for The Herald's tech coverage, featuring the latest reporting on AI, devices, and infrastructure.",
    },
    config: {
      slug: "tech",
      label: "Tech",
      description:
        "Reporting on AI infrastructure, consumer devices, labs, and the systems quietly reshaping daily life.",
      heroArtwork: <TechHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-24 -top-32 h-80 w-80 rounded-full bg-rose-600/35 blur-3xl",
        "absolute -right-20 top-10 h-80 w-80 rounded-full bg-indigo-600/35 blur-3xl",
        "absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl",
        "absolute bottom-[-8rem] right-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl",
      ],
      accentLinkClassName: "text-rose-300 hover:text-rose-200",
      newsletterDescription:
        "Get the week's most important tech stories, curated by our editors, delivered to your inbox every Friday.",
    },
  },
  world: {
    metadata: {
      title: "World | The Herald",
      description:
        "Section landing page for The Herald's world coverage, featuring the latest reporting on diplomacy, climate, and global affairs.",
    },
    config: {
      slug: "world",
      label: "World",
      description:
        "Coverage from diplomacy, conflict, climate, and the global negotiations that shape the next cycle of events.",
      heroArtwork: <WorldHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl",
        "absolute -right-24 top-12 h-72 w-72 rounded-full bg-sky-600/25 blur-3xl",
        "absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-blue-500/18 blur-3xl",
      ],
      accentLinkClassName: "text-cyan-300 hover:text-cyan-200",
      newsletterDescription:
        "Get the week's most important world stories, curated by our editors, delivered to your inbox every Friday.",
    },
  },
  business: {
    metadata: {
      title: "Business | The Herald",
      description:
        "Section landing page for The Herald's business coverage, featuring the latest reporting on markets, policy, and corporate strategy.",
    },
    config: {
      slug: "business",
      label: "Business",
      description:
        "Markets, policy, balance sheets, and the operating decisions that reveal where confidence is actually moving.",
      heroArtwork: <BusinessHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-16 top-8 h-72 w-72 rounded-full bg-emerald-500/22 blur-3xl",
        "absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-500/15 blur-3xl",
        "absolute bottom-[-8rem] right-1/3 h-72 w-72 rounded-full bg-emerald-400/18 blur-3xl",
      ],
      accentLinkClassName: "text-emerald-300 hover:text-emerald-200",
      newsletterDescription:
        "Get the week's most important business stories, curated by our editors, delivered to your inbox every Friday.",
    },
  },
  culture: {
    metadata: {
      title: "Culture | The Herald",
      description:
        "Section landing page for The Herald's culture coverage, featuring the latest reporting on art, exhibitions, and public life.",
    },
    config: {
      slug: "culture",
      label: "Culture",
      description:
        "Arts, exhibitions, cities, and the public conversations that turn taste into something larger than trend.",
      heroArtwork: <CultureHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-24 top-4 h-72 w-72 rounded-full bg-amber-500/22 blur-3xl",
        "absolute right-4 top-0 h-72 w-72 rounded-full bg-rose-500/22 blur-3xl",
        "absolute bottom-[-9rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/14 blur-3xl",
      ],
      accentLinkClassName: "text-amber-300 hover:text-amber-200",
      newsletterDescription:
        "Get the week's most important culture stories, curated by our editors, delivered to your inbox every Friday.",
    },
  },
};
