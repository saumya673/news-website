import type { Metadata } from "next";

import type { SectionFeaturePageData } from "@/components/SectionFeaturePage";

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
  data: SectionFeaturePageData;
  metadata: Metadata;
};

export const sectionPages: Record<
  "business" | "culture" | "tech" | "world",
  SectionPageEntry
> = {
  tech: {
    metadata: {
      title: "Tech | The Herald",
      description:
        "A feature article page for The Herald's tech section, focused on AI's role in the modern newsroom.",
    },
    data: {
      slug: "tech",
      category: "Tech",
      title: "The Quiet Revolution: How AI Is Reshaping the Newsroom",
      excerpt:
        "Inside the editorial floors where algorithms now draft headlines, surface leads, and quietly redraw the boundaries of modern journalism.",
      author: "Eleanor Hayes",
      publishedAt: "March 14, 2026",
      readTime: "8 min read",
      figureCredit:
        "Photograph: Growtika / Unsplash - A neural network visualization inside a modern editorial workspace.",
      intro: [
        "In the dim hours before dawn, the newsroom hums with a different kind of energy. Where copy editors once squinted at proofs, machine-learning models now scan thousands of incoming wire reports, ranking them by relevance and surfacing the stories most likely to define the morning agenda. It is a transformation that has unfolded not with fanfare, but in the quiet margins of daily practice.",
        "For decades, the architecture of a newsroom was a study in human hierarchy - reporters feeding editors, editors feeding the front page. Today, that pipeline is increasingly mediated by software that suggests headlines, flags factual inconsistencies, and even predicts which angle a given audience will click. The result is a newsroom that is faster, leaner, and, some argue, fundamentally altered in character.",
      ],
      quote:
        "The machines didn't replace our judgment - they amplified it, and in doing so, forced us to ask what judgment really means.",
      sectionHeading: "When Speed Meets Scrutiny",
      closing: [
        "Yet the promise of automation carries an undercurrent of unease. Editors describe a growing tension between the relentless pace these tools enable and the slower, deliberative work that distinguishes reliable journalism from noise. The challenge ahead is not whether to adopt these systems, but how to embed them with the values that have always defined the craft.",
      ],
      heroArtwork: <TechHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-24 -top-32 h-80 w-80 rounded-full bg-rose-600/35 blur-3xl",
        "absolute -right-20 top-10 h-80 w-80 rounded-full bg-indigo-600/35 blur-3xl",
        "absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl",
        "absolute bottom-[-8rem] right-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl",
      ],
      readMoreClassName: "text-rose-300 hover:text-rose-200",
      newsletterDescription:
        "Get the week's most important tech stories, curated by our editors, delivered to your inbox every Friday.",
      relatedArticles: [
        {
          href: "/tech",
          title: "The Hidden Cost of Always-On Computing",
          publishedAt: "Mar 11, 2026",
          image: {
            src: "https://picsum.photos/seed/always-on-compute/128/128",
            alt: "Server racks glowing in a dim data center aisle.",
          },
        },
        {
          href: "/tech",
          title: "Inside the Lab Teaching Machines to Reason",
          publishedAt: "Mar 9, 2026",
          image: {
            src: "https://picsum.photos/seed/machine-reasoning-lab/128/128",
            alt: "Researchers working around a bright robotics lab table.",
          },
        },
        {
          href: "/tech",
          title: "Why Local News Is Betting on Automation",
          publishedAt: "Mar 6, 2026",
          image: {
            src: "https://picsum.photos/seed/local-news-automation/128/128",
            alt: "A local newsroom with desks, screens, and studio lights.",
          },
        },
      ],
    },
  },
  world: {
    metadata: {
      title: "World | The Herald",
      description:
        "A feature article page for The Herald's world section, focused on climate diplomacy and the politics of urgency.",
    },
    data: {
      slug: "world",
      category: "World",
      title: "Inside the Diplomatic Sprint Before the Climate Clock Runs Out",
      excerpt:
        "Negotiators are racing to turn broad climate promises into binding language, while vulnerable nations press for timelines that match the science.",
      author: "Maya Fulton",
      publishedAt: "April 2, 2026",
      readTime: "7 min read",
      figureCredit:
        "Photograph: CHUTTERSNAP / Unsplash - Delegates gather beneath a lattice of translation booths during late-night climate negotiations.",
      intro: [
        "By the time ministers step to the podium, much of the real work has already happened in quieter rooms. Legal teams, policy advisers, and exhausted diplomats spend their days translating moral urgency into clauses, percentages, and deadlines that can survive political scrutiny back home.",
        "The central tension is no longer whether the planet is warming, but how quickly governments can align domestic economics with international commitments. Wealthier states argue for flexible pathways, while countries on the front lines of flooding and drought say flexibility has too often meant delay. Each paragraph in the final text becomes a proxy for larger questions of power, responsibility, and trust.",
      ],
      quote:
        "Every negotiation now takes place in the shadow of physics. The argument is not about whether time matters, but whose timetable gets protected.",
      sectionHeading: "When Consensus Meets Consequence",
      closing: [
        "That is why even minor wording shifts draw fierce attention. A softer verb can preserve diplomatic harmony while weakening accountability; a harder deadline can energize implementation but threaten the fragile coalition needed to sign at all. The summit process remains imperfect, but it is still one of the few forums where global ambition can be tested against shared consequence in public view.",
      ],
      heroArtwork: <WorldHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl",
        "absolute -right-24 top-12 h-72 w-72 rounded-full bg-sky-600/25 blur-3xl",
        "absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-blue-500/18 blur-3xl",
      ],
      readMoreClassName: "text-cyan-300 hover:text-cyan-200",
      newsletterDescription:
        "Get the week's most important world stories, curated by our editors, delivered to your inbox every Friday.",
      relatedArticles: [
        {
          href: "/world",
          title: "Aid Corridors Reopen After Weeks of Border Delays",
          publishedAt: "Apr 1, 2026",
          image: {
            src: "https://picsum.photos/seed/aid-corridor-world/128/128",
            alt: "Relief trucks lined up at a border crossing.",
          },
        },
        {
          href: "/world",
          title: "How Small Island States Reframed the Energy Debate",
          publishedAt: "Mar 29, 2026",
          image: {
            src: "https://picsum.photos/seed/island-energy-world/128/128",
            alt: "A coastal town beside bright blue water.",
          },
        },
        {
          href: "/world",
          title: "Wildfire Recovery Tests Regional Emergency Planning",
          publishedAt: "Mar 25, 2026",
          image: {
            src: "https://picsum.photos/seed/wildfire-recovery-world/128/128",
            alt: "Emergency workers near a burned hillside community.",
          },
        },
      ],
    },
  },
  business: {
    metadata: {
      title: "Business | The Herald",
      description:
        "A feature article page for The Herald's business section, focused on how boardrooms are recalculating growth in a slower economy.",
    },
    data: {
      slug: "business",
      category: "Business",
      title: "The New Math in the Boardroom: Growth, Patience, and Cost of Capital",
      excerpt:
        "Executives are learning that the post-cheap-money era rewards steadier margins, disciplined hiring, and fewer assumptions about demand.",
      author: "Marcus Bell",
      publishedAt: "May 8, 2026",
      readTime: "6 min read",
      figureCredit:
        "Photograph: Austin Distel / Unsplash - Finance teams track changing forecasts across a wall of market and operations dashboards.",
      intro: [
        "For years, managers could justify aggressive expansion with a simple promise: growth today would pay for itself tomorrow. That logic has weakened. Higher financing costs, softer consumer demand, and more skeptical investors have changed what counts as credible strategy inside earnings meetings and board reviews.",
        "The result is not exactly austerity, but a recalibration of confidence. Companies are still investing, though more selectively and with greater attention to how quickly a new initiative can prove its worth. In many sectors, the flashiest presentations now receive the hardest questions, while modest plans with clear operating discipline attract renewed respect.",
      ],
      quote:
        "Capital is no longer a backdrop. It is part of the story, and every decision now has to explain itself in that language.",
      sectionHeading: "Why Efficiency Became a Narrative",
      closing: [
        "That shift has cultural consequences as much as financial ones. When boards ask for resilience instead of pure acceleration, leadership teams start measuring success differently: fewer vanity launches, tighter staffing models, and a deeper focus on customers who already exist. The winners in this cycle may not be the loudest companies, but the ones that can make prudence look like momentum.",
      ],
      heroArtwork: <BusinessHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-16 top-8 h-72 w-72 rounded-full bg-emerald-500/22 blur-3xl",
        "absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-500/15 blur-3xl",
        "absolute bottom-[-8rem] right-1/3 h-72 w-72 rounded-full bg-emerald-400/18 blur-3xl",
      ],
      readMoreClassName: "text-emerald-300 hover:text-emerald-200",
      newsletterDescription:
        "Get the week's most important business stories, curated by our editors, delivered to your inbox every Friday.",
      relatedArticles: [
        {
          href: "/business",
          title: "Why CFOs Are Rewriting Hiring Forecasts",
          publishedAt: "May 5, 2026",
          image: {
            src: "https://picsum.photos/seed/cfo-hiring-business/128/128",
            alt: "Colleagues reviewing financial documents in an office.",
          },
        },
        {
          href: "/business",
          title: "Retailers Turn to Smaller Bets Ahead of Holiday Season",
          publishedAt: "May 1, 2026",
          image: {
            src: "https://picsum.photos/seed/retail-bets-business/128/128",
            alt: "A retail floor with shoppers moving between displays.",
          },
        },
        {
          href: "/business",
          title: "Logistics Firms Search for Margin in Delivery Software",
          publishedAt: "Apr 28, 2026",
          image: {
            src: "https://picsum.photos/seed/logistics-margin-business/128/128",
            alt: "Freight containers stacked in a shipping yard.",
          },
        },
      ],
    },
  },
  culture: {
    metadata: {
      title: "Culture | The Herald",
      description:
        "A feature article page for The Herald's culture section, focused on how museums are rethinking curation for contemporary audiences.",
    },
    data: {
      slug: "culture",
      category: "Culture",
      title: "Curating for the Present Tense: How Museums Are Reframing Memory",
      excerpt:
        "Across major institutions, curators are shifting from neutral chronology toward exhibitions that openly argue with the past and with their own collections.",
      author: "Talia Brooks",
      publishedAt: "February 18, 2026",
      readTime: "7 min read",
      figureCredit:
        "Photograph: Dan Freeman / Unsplash - Visitors move through a warm-lit gallery where interpretation panels compete with the art for attention.",
      intro: [
        "The most talked-about museum shows now do more than display objects beautifully. They explain why those objects were collected, how narratives around them were constructed, and what earlier exhibitions chose not to say. In that sense, the label on the wall has become almost as important as the frame around the work itself.",
        "This new approach reflects a broader shift in audience expectations. Visitors arrive with questions about power, ownership, and context, and institutions that once relied on authority alone are finding they need a more candid voice. The gallery is increasingly treated as a public argument rather than a neutral container, with curators expected to make their decisions legible instead of invisible.",
      ],
      quote:
        "To curate now is not simply to arrange beauty. It is to disclose perspective, and to admit that perspective has consequences.",
      sectionHeading: "From Display to Interpretation",
      closing: [
        "That does not mean scholarship is disappearing; if anything, it has become more visible. The strongest exhibitions still depend on rigorous research, but they present that research with greater self-awareness and less institutional distance. What emerges is a cultural space that feels less settled, more participatory, and better equipped to speak to the present tense in which audiences actually live.",
      ],
      heroArtwork: <CultureHeroArtwork />,
      heroGlowClasses: [
        "absolute -left-24 top-4 h-72 w-72 rounded-full bg-amber-500/22 blur-3xl",
        "absolute right-4 top-0 h-72 w-72 rounded-full bg-rose-500/22 blur-3xl",
        "absolute bottom-[-9rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/14 blur-3xl",
      ],
      readMoreClassName: "text-amber-300 hover:text-amber-200",
      newsletterDescription:
        "Get the week's most important culture stories, curated by our editors, delivered to your inbox every Friday.",
      relatedArticles: [
        {
          href: "/culture",
          title: "The Stage Designers Rebuilding Theater After Streaming",
          publishedAt: "Feb 15, 2026",
          image: {
            src: "https://picsum.photos/seed/stage-design-culture/128/128",
            alt: "A theater stage under warm rehearsal lights.",
          },
        },
        {
          href: "/culture",
          title: "Why Archive Fever Is Reshaping Fashion Exhibitions",
          publishedAt: "Feb 12, 2026",
          image: {
            src: "https://picsum.photos/seed/archive-fashion-culture/128/128",
            alt: "Garments displayed in a museum-style fashion exhibit.",
          },
        },
        {
          href: "/culture",
          title: "The City Soundscapes Turning Noise Into Public Art",
          publishedAt: "Feb 9, 2026",
          image: {
            src: "https://picsum.photos/seed/soundscape-culture/128/128",
            alt: "An urban plaza hosting an outdoor sound installation.",
          },
        },
      ],
    },
  },
};
