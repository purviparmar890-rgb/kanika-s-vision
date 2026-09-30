import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "../components/site/editorial-page";

export const Route = createFileRoute("/media")({
  head: () => ({ meta: [
    { title: "Media — Kanika Tekriwala" },
    { name: "description", content: "Selected media coverage and press resources for Kanika Tekriwala." },
    { property: "og:title", content: "Media — Kanika Tekriwala" },
    { property: "og:description", content: "Selected media coverage and press resources for Kanika Tekriwala." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <EditorialPage index="06" eyebrow="Media" title="In the conversation" introduction="Selected coverage, interviews and approved press resources will be collected here." />,
});
