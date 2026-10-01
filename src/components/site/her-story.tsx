import { ActionLink } from "./action-link";
import "./story.css";

import portrait from "@/assets/kanika-portrait.png.asset.json";

/** Biography copy is a placeholder — replace only with approved, verified text. */
const BIOGRAPHY_PLACEHOLDER =
  "Her biography will be written here once approved: the decisions that shaped her, the ventures they led to, and the perspective she brings to each.";

export function HerStory() {
  return (
    <section className="relative border-t border-border bg-background">
      {/* Fine transition detail under the hero */}
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12">
        <div className="story-line-x h-px w-28 bg-primary" />
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-14 px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-32 lg:pt-28">
        {/* Left — editorial headline */}
        <div className="flex min-w-0 flex-col lg:col-span-7 lg:pr-10">
          <p className="story-rise flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">01</span>
            <span className="h-px w-9 bg-border" />
            <span>Her Story</span>
          </p>

          <h2 className="story-rise mt-10 font-display text-[clamp(2.6rem,5.4vw,4.25rem)] font-semibold uppercase leading-[0.92] tracking-tight text-foreground">
            A journey built
            <br />
            one <span className="text-primary">decision</span>
            <br />
            at a time.
          </h2>

          <div className="story-rise mt-10 max-w-md border-l border-primary pl-5 lg:mt-14">
            <p className="text-base leading-7 text-muted-foreground sm:leading-8">
              A short introduction to Kanika will live here — written from approved
              information only.
            </p>
          </div>

          <div className="story-rise mt-10 lg:mt-12">
            <ActionLink to="/about" variant="outline">
              Read More
            </ActionLink>
          </div>
        </div>

        {/* Right — portrait and biography area */}
        <div className="relative flex min-w-0 flex-col gap-12 lg:col-span-5 lg:gap-14 lg:pt-4">
          <span
            className="story-line-y absolute -left-4 top-0 hidden h-full w-px bg-border lg:block"
            aria-hidden="true"
          />

          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <span className="story-line-x absolute -top-4 right-0 h-px w-24 bg-primary" aria-hidden="true" />
            <span className="absolute -right-3 -top-3 size-6 border-r border-t border-primary/60" aria-hidden="true" />
            <span className="absolute -bottom-3 -left-3 size-6 border-b border-l border-primary" aria-hidden="true" />

            <div className="story-unveil relative aspect-[4/5] overflow-hidden bg-card">
              <img
                src={portrait.url}
                alt="Portrait of Kanika Tekriwala"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <figcaption className="mt-3 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="text-primary">02</span> — Portrait
            </figcaption>
          </figure>

          <div className="story-rise relative border-t border-border pt-6 lg:pt-8">
            <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">
              Biography
            </p>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              {BIOGRAPHY_PLACEHOLDER}
            </p>
            <p className="mt-8 text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
              Content to be developed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
