import type { Metadata } from "next";

import SectionFeaturePage from "@/components/SectionFeaturePage";
import { sectionPages } from "@/lib/section-pages";

export const metadata: Metadata = sectionPages.business.metadata;

export default function BusinessPage() {
  return <SectionFeaturePage data={sectionPages.business.data} />;
}
