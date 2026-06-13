import type { Metadata } from "next";

import SectionFeaturePage from "@/components/SectionFeaturePage";
import { sectionPages } from "@/lib/section-pages";

export const metadata: Metadata = sectionPages.world.metadata;

export default function WorldPage() {
  return <SectionFeaturePage data={sectionPages.world.data} />;
}
