import { Suspense } from "react";

import Hero from "@/components/Home/Hero";
import TopStories, {
  TopStoriesSkeleton,
} from "@/components/Home/TopStories";
import LatestNews from "@/components/Home/LatestNews";
import EditorPicks from "@/components/Home/EditorPicks";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<TopStoriesSkeleton />}>
        <TopStories />
      </Suspense>
      <LatestNews />
      <EditorPicks />
    </div>
  );
}
