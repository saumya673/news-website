"use client";

import { useRef, type PointerEvent } from "react";

import { icons } from "@/lib/svg/icons";

const latestHeadlines = [
  "Senate passes infrastructure bill in late-night vote",
  "Tech giant unveils next-gen wearable at keynote",
  "Wildfire containment reaches 80% in coastal region",
  "Developers are mcksvkjdfvn",
] as const;

const LatestNews = () => {
  const WorldIcon = icons.world;
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{
    isDragging: boolean;
    startX: number;
    startScrollLeft: number;
  } | null>(null);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
    };

    container.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    const dragState = dragStateRef.current;

    if (!container || !dragState?.isDragging) {
      return;
    }

    container.scrollLeft =
      dragState.startScrollLeft - (event.clientX - dragState.startX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current = null;
  };

  return (
    <section className="bg-hero-surface">
      <div className="mx-auto w-full max-w-360 px-4 py-4 sm:px-8 md:px-12 lg:px-30">
        <div className="mx-auto flex w-full max-w-300 flex-col gap-3 rounded-none bg-hero-surface lg:min-h-14 lg:flex-row lg:items-center lg:px-6">
          <div className="inline-flex h-6 w-fit shrink-0 items-center gap-1.5 rounded-md bg-header-accent px-3 text-[0.75rem] leading-4 font-bold tracking-[0.3px] text-white uppercase">
            <WorldIcon className="h-3.5 w-3.5" />
            <span>Latest</span>
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              ref={scrollRef}
              className="mobile-nav-scroll flex w-full touch-pan-x items-center gap-3 overflow-x-auto whitespace-nowrap md:cursor-grab md:active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {latestHeadlines.map((headline, index) => (
                <div
                  key={headline}
                  className="flex shrink-0 items-center gap-3 text-sm leading-5 font-medium text-header-strong"
                >
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-header-accent">
                      &bull;
                    </span>
                  ) : null}
                  <span>{headline}</span>
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
