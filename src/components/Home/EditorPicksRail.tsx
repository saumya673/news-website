"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import type { ReactNode } from "react";

type EditorPicksRailProps = {
  children: ReactNode;
};

export default function EditorPicksRail({
  children,
}: EditorPicksRailProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showEndFade, setShowEndFade] = useState(false);

  const syncFade = useEffectEvent(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      setShowEndFade(false);
      return;
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const isOverflowing = maxScrollLeft > 1;
    const isAtEnd = scroller.scrollLeft >= maxScrollLeft - 1;

    setShowEndFade(isOverflowing && !isAtEnd);
  });

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    syncFade();

    const handleScroll = () => {
      syncFade();
    };

    const resizeObserver = new ResizeObserver(() => {
      syncFade();
    });

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver.observe(scroller);
    window.addEventListener("resize", handleScroll);

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="editor-picks-scroll grid snap-x snap-mandatory grid-flow-col auto-cols-[85%] gap-6 overflow-x-auto pb-4 sm:auto-cols-[calc((100%-1.5rem)/2)] xl:auto-cols-[calc((100%-4.5rem)/4)]"
      >
        {children}
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(to_left,var(--background),transparent)] transition-opacity duration-200 ${
          showEndFade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
