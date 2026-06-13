import { getLatestHeadlines } from "@/lib/api/news";

import LatestNewsTicker from "./LatestNewsTicker";

export default async function LatestNews() {
  const latestHeadlines = await getLatestHeadlines();

  return <LatestNewsTicker headlines={latestHeadlines} />;
}
