"use client";

import Link from "next/link";
import { useRef, type MouseEvent, type PointerEvent } from "react";

import type { RankedArticle } from "@/types/news";
import { icons } from "@/lib/svg/icons";

export default function LatestNewsTicker({
  headlines,
}: {
  headlines: RankedArticle[];
}) {
  const DRAG_THRESHOLD_PX = 6;
  const WorldIcon = icons.world;
  const scrollRef = useRef<HTMLDivElement>(null);
  const suppressClickRef = useRef(false);
  const dragStateRef = useRef<{
    isDragging: boolean;
    pointerId: number;
    startX: number;
    startScrollLeft: number;
  } | null>(null);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    dragStateRef.current = {
      isDragging: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    const dragState = dragStateRef.current;

    if (!container || !dragState?.isDragging) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;

    if (!dragState.isDragging) {
      if (Math.abs(deltaX) < DRAG_THRESHOLD_PX) {
        return;
      }

      dragState.isDragging = true;
      suppressClickRef.current = true;
      container.setPointerCapture(dragState.pointerId);
    }

    container.scrollLeft =
      dragState.startScrollLeft - deltaX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current = null;
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) {
      return;
    }

    event.preventDefault();
    suppressClickRef.current = false;
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
            {headlines.length === 0 ? (
              <p className="text-sm leading-5 text-header-muted">
                No latest headlines are available from the mock API right now.
              </p>
            ) : (
              <div
                ref={scrollRef}
                className="mobile-nav-scroll flex w-full touch-pan-x items-center gap-3 overflow-x-auto whitespace-nowrap md:cursor-grab md:active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onClickCapture={handleClickCapture}
              >
                {headlines.map((headline, index) => (
                  <div
                    key={headline.id}
                    className="flex shrink-0 items-center gap-3 text-sm leading-5 font-medium text-header-strong"
                  >
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-header-accent">
                        &bull;
                      </span>
                    ) : null}
                    <Link
                      href={headline.href}
                      className="transition-colors hover:text-header-accent"
                    >
                      {headline.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
