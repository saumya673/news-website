import Hero from "@/components/Home/Hero";
import TopStories from "@/components/Home/TopStories";
import LatestNews from "@/components/Home/LatestNews";
import EditorPicks from "@/components/Home/EditorPicks";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopStories />
      <LatestNews />
      <EditorPicks />
    </div>
  );
}
