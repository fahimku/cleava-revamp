import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyCleava } from "@/components/home/WhyCleava";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { CtaBand } from "@/components/home/CtaBand";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <WhyCleava />
      <ReviewsSection />
      <CtaBand />
    </>
  );
}
