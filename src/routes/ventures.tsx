import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "../components/site/editorial-page";

export const Route = createFileRoute("/ventures")({
  head: () => ({ meta: [
    { title: "Ventures — Kanika Tekriwala" },
    { name: "description", content: "A future home for Kanika Tekriwala’s ventures and founder work." },
    { property: "og:title", content: "Ventures — Kanika Tekriwala" },
    { property: "og:description", content: "A future home for Kanika Tekriwala’s ventures and founder work." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <EditorialPage index="03" eyebrow="Ventures" title="Built with intent" introduction="Selected ventures and the thinking behind them will be presented here once approved." />,
});
