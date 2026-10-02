import { createFileRoute } from "@tanstack/react-router";
import { VenturesShowcase } from "../components/site/ventures";

export const Route = createFileRoute("/ventures")({
  head: () => ({ meta: [
    { title: "Ventures — Kanika Tekriwala" },
    { name: "description", content: "A future home for Kanika Tekriwala’s ventures and founder work." },
    { property: "og:title", content: "Ventures — Kanika Tekriwala" },
    { property: "og:description", content: "A future home for Kanika Tekriwala’s ventures and founder work." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => (
    <main className="min-h-screen overflow-hidden bg-background pt-20 lg:pt-24">
      <VenturesShowcase />
    </main>
  ),
});
