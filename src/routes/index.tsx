import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "../components/site/home-hero";
import { HerStory } from "../components/site/her-story";
import { JourneyRoadmap } from "../components/site/journey-roadmap";
import { VenturesShowcase } from "../components/site/ventures";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanika Tekriwala — Founder & Speaker" },
      {
        name: "description",
        content: "The personal website of Kanika Tekriwala: ideas, ventures, journey, speaking and media.",
      },
      { property: "og:title", content: "Kanika Tekriwala — Founder & Speaker" },
      {
        property: "og:description",
        content: "Explore Kanika Tekriwala’s ideas, ventures, journey, speaking and media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background pt-20 lg:pt-24">
      <HomeHero />
      <HerStory />
      <JourneyRoadmap />
      <VenturesShowcase />
    </main>
  );
}
