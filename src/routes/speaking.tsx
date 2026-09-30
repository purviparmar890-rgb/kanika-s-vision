import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "../components/site/editorial-page";

export const Route = createFileRoute("/speaking")({
  head: () => ({ meta: [
    { title: "Speaking — Kanika Tekriwala" },
    { name: "description", content: "Speaking information and invitation details for Kanika Tekriwala." },
    { property: "og:title", content: "Speaking — Kanika Tekriwala" },
    { property: "og:description", content: "Speaking information and invitation details for Kanika Tekriwala." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <EditorialPage index="05" eyebrow="Speaking" title="Ideas in the room" introduction="Speaking themes, selected appearances and invitation details will be added here." />,
});
