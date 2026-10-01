import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "./action-link";
import heroPortrait from "@/assets/kanika-hero-portrait.png.asset.json";
import "./hero.css";

const PORTRAIT_SRC: string | null = heroPortrait.url;

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

export function HomeHero() {
  return (
    <section className="relative mx-auto max-w-screen-2xl overflow-hidden lg:min-h-[calc(100svh-6rem)]">
      <div className="relative grid gap-12 px-5 pb-24 pt-8 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:px-12 lg:pb-28 lg:pt-10">
        {/* Top rule */}
        <div className="hero-line-x absolute left-5 right-5 top-0 h-px bg-border sm:left-8 sm:right-8 lg:left-12 lg:right-12" />

        {/* Text column */}
        <div className="relative z-10 flex flex-col lg:col-span-7 lg:pt-16">
          <p className="hero-fade flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground sm:text-[0.6875rem]" style={d(150)}>
            <span className="hero-line-x h-px w-10 bg-primary" style={d(300)} />
            Entrepreneur <span className="text-primary">•</span> Aviation <span className="text-primary">•</span> Innovation
          </p>

          <h1 className="relative z-20 mt-8 whitespace-nowrap font-display text-[clamp(3.4rem,14.5vw,11rem)] font-semibold uppercase leading-[0.84] tracking-tight text-foreground lg:text-[clamp(5rem,9.6vw,10rem)]">
            <span className="hero-line-mask">
              <span className="hero-rise" style={d(250)}>Kanika</span>
            </span>
            <span className="hero-line-mask">
              <span className="hero-rise" style={d(400)}>
                Tekriwala<span className="text-primary">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-10 max-w-md border-l border-primary pl-5 lg:mt-12 lg:pl-7">
            <p className="hero-fade text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8" style={d(750)}>
              {/* Placeholder statement — replace with approved copy. */}
              A short supporting statement will introduce Kanika’s perspective here, once approved.
            </p>
          </div>

          <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row" style={d(900)}>
            <ActionLink to="/speaking">Invite Kanika to Speak</ActionLink>
            <Link
              to="/journey"
              className="group inline-flex min-h-12 items-center justify-center gap-3 border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Explore Her Journey
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Portrait column */}
        <div className="relative lg:col-span-5 lg:-ml-16 lg:mt-6">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Orange graphic details */}
            <span className="hero-line-y absolute -left-4 top-10 h-40 w-px bg-primary sm:-left-6" style={d(900)} />
            <span className="hero-line-x absolute -top-4 right-10 h-px w-32 bg-primary" style={d(1000)} />
            <span className="absolute -bottom-3 -right-3 size-6 border-b border-r border-primary" />
            <span className="absolute -left-3 -top-3 size-6 border-l border-t border-primary/60" />

            <div className="hero-unveil relative aspect-[4/5] overflow-hidden bg-card">
              <img
                src={PORTRAIT_SRC}
                alt="Portrait of Kanika Tekriwala"
                className="hero-drift h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,var(--background)_100%)]" />
            </div>

            <p className="absolute -bottom-8 left-0 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="text-primary">01</span> — Portrait
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-fade absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 lg:left-12 lg:translate-x-0 lg:flex-row" style={d(1300)}>
        <span className="relative block h-10 w-px overflow-hidden bg-border">
          <span className="hero-scroll-dot absolute inset-x-0 top-0 h-1/2 bg-primary" />
        </span>
        <span className="text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">Scroll</span>
      </div>
    </section>
  );
}
