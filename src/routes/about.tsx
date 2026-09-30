import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "../components/site/editorial-page";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Kanika Tekriwala" },
    { name: "description", content: "An introduction to Kanika Tekriwala and her perspective." },
    { property: "og:title", content: "About — Kanika Tekriwala" },
    { property: "og:description", content: "An introduction to Kanika Tekriwala and her perspective." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <EditorialPage index="01" eyebrow="About" title="The person behind the perspective" introduction="A considered introduction to Kanika’s story, values and point of view will live here." />,
});
