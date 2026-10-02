import { createFileRoute } from "@tanstack/react-router";
import { IdeasSection } from "../components/site/ideas-section";

export const Route = createFileRoute("/ideas")({
  head: () => ({
    meta: [
      { title: "Ideas — Kanika Tekriwala" },
      {
        name: "description",
        content: "Ideas, observations and perspectives from Kanika Tekriwala.",
      },
      { property: "og:title", content: "Ideas — Kanika Tekriwala" },
      {
        property: "og:description",
        content: "Ideas, observations and perspectives from Kanika Tekriwala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IdeasSection,
});
