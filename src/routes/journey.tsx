import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "../components/site/editorial-page";

export const Route = createFileRoute("/journey")({
  head: () => ({ meta: [
    { title: "Journey — Kanika Tekriwala" },
    { name: "description", content: "Explore the defining chapters in Kanika Tekriwala’s journey." },
    { property: "og:title", content: "Journey — Kanika Tekriwala" },
    { property: "og:description", content: "Explore the defining chapters in Kanika Tekriwala’s journey." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <EditorialPage index="02" eyebrow="Journey" title="Defining chapters" introduction="A curated timeline of formative moments, pivotal decisions and lessons will be developed here." />,
});
