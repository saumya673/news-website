import type { Metadata } from "next";

import SectionFeaturePage from "@/components/SectionFeaturePage";
import { sectionPages } from "@/lib/section-pages";

export const metadata: Metadata = sectionPages.tech.metadata;

export default function TechPage() {
  return <SectionFeaturePage data={sectionPages.tech.data} />;
}
