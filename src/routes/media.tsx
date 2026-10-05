import { createFileRoute } from "@tanstack/react-router";
import { MediaSection } from "../components/site/media-section";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — Kanika Tekriwala" },
      {
        name: "description",
        content: "Selected media coverage and press resources for Kanika Tekriwala.",
      },
      { property: "og:title", content: "Media — Kanika Tekriwala" },
      {
        property: "og:description",
        content: "Selected media coverage and press resources for Kanika Tekriwala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaSection,
});
