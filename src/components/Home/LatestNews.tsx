import { icons } from "@/lib/svg/icons";

const latestHeadlines = [
  "Senate passes infrastructure bill in late-night vote",
  "Tech giant unveils next-gen wearable at keynote",
  "Wildfire containment reaches 80% in coastal region",
] as const;

const LatestNews = () => {
  const WorldIcon = icons.world;

  return (
    <section className="bg-hero-surface">
      <div className="mx-auto w-full max-w-360 px-4 py-4 sm:px-8 md:px-12 lg:px-30">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-3 rounded-none bg-hero-surface lg:min-h-14 lg:flex-row lg:items-center lg:px-6">
          <div className="inline-flex h-6 w-fit shrink-0 items-center gap-1.5 rounded-md bg-header-accent px-3 text-[0.75rem] leading-4 font-bold tracking-[0.3px] text-white uppercase">
            <WorldIcon className="h-3.5 w-3.5" />
            <span>Latest</span>
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
              {latestHeadlines.map((headline, index) => (
                <div
                  key={headline}
                  className="flex min-w-0 items-center gap-3 text-sm leading-5 font-medium text-header-strong"
                >
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="hidden text-header-accent sm:inline"
                    >
                      &bull;
                    </span>
                  ) : null}
                  <span className="truncate">{headline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
