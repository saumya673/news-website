import type { Metadata } from "next";

import SectionFeaturePage from "@/components/SectionFeaturePage";
import { sectionPages } from "@/lib/section-pages";

export const metadata: Metadata = sectionPages.culture.metadata;

export default function CulturePage() {
  return <SectionFeaturePage data={sectionPages.culture.data} />;
}
