import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImage from "../assets/kanika-aviation-editorial.jpg";
import { ActionLink } from "../components/site/action-link";

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
      <section className="relative mx-auto min-h-[calc(100svh-5rem)] max-w-screen-2xl lg:min-h-[calc(100svh-6rem)]">
        <div className="absolute inset-x-0 bottom-0 top-[28%] sm:top-[22%] lg:bottom-8 lg:left-[36%] lg:right-12 lg:top-0">
          <img
            src={heroImage}
            alt="Close architectural detail of a private aircraft at night"
            width={1600}
            height={1200}
            className="h-full w-full object-cover object-center opacity-80 grayscale-[18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_26%,transparent_72%,var(--background)_100%)] lg:bg-[linear-gradient(90deg,var(--background)_0%,transparent_32%,transparent_80%,var(--background)_100%)]" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col px-5 pb-7 pt-8 sm:px-8 sm:pb-9 lg:min-h-[calc(100svh-6rem)] lg:px-12 lg:pb-12 lg:pt-10">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 border-t border-border pt-4">
            <p className="text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
              Personal website <span className="mx-2 text-primary">/</span> 2026
            </p>
            <p className="hidden text-right text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground sm:block">
              Founder · Ideas · Perspective
            </p>
          </div>

          <div className="mt-10 lg:mt-auto lg:mb-auto">
            <p className="mb-4 flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-primary">
              <span className="h-px w-10 bg-primary" />
              An independent point of view
            </p>
            <h1 className="max-w-[11ch] font-display text-[clamp(4.2rem,11.4vw,10.5rem)] font-semibold leading-[0.78] text-foreground">
              Kanika
              <br />
              Tekriwala<span className="text-primary">.</span>
            </h1>
          </div>

          <div className="mt-auto grid items-end gap-7 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="hidden items-center gap-3 lg:flex">
              <span className="grid size-10 place-items-center border border-border text-primary">
                <ArrowDown className="size-4" />
              </span>
              <span className="text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
                Continue to explore
              </span>
            </div>
            <div className="border-l border-primary pl-5 lg:pl-7">
              <p className="max-w-sm text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                A personal perspective on ambition, ideas and what comes next.
              </p>
              <ActionLink to="/about" variant="outline" className="mt-5">
                Discover Kanika
              </ActionLink>
            </div>
          </div>
        </div>

        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={0.65}
          className="pointer-events-none absolute -right-16 top-28 hidden size-72 text-border xl:block"
        />
      </section>
    </main>
  );
}
