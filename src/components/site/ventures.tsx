import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Venture = {
  index: string;
  name: string;
  role: string | null;
  description: string;
  note: string;
  to?: "/ventures";
};

/**
 * Replace placeholders only with sourced, approved venture details.
 * JetSetGo is the one verified venture; no additional ventures are invented.
 */
const FEATURED: Venture = {
  index: "01",
  name: "JetSetGo",
  role: "Founder",
  description:
    "An approved description of this venture will appear here once provided — what it does and the part it plays in Kanika’s entrepreneurial journey.",
  note: "Description awaiting approval",
  to: "/ventures",
};

const SLOTS: Venture[] = [
  {
    index: "02",
    name: "Venture to be confirmed",
    role: null,
    description:
      "Add a verified venture, company or initiative here. Nothing is invented in the meantime.",
    note: "Awaiting verified details",
  },
  {
    index: "03",
    name: "Initiative to be confirmed",
    role: null,
    description:
      "Add a verified venture, company or initiative here. Nothing is invented in the meantime.",
    note: "Awaiting verified details",
  },
];

export function VenturesShowcase() {
  return (
    <section
      className="relative border-t border-border bg-background"
      aria-labelledby="ventures-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <header className="grid gap-10 border-t border-border pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <p className="flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="text-primary">03</span>
              <span className="h-px w-9 bg-border" aria-hidden="true" />
              <span>Ventures</span>
            </p>
            <h2
              id="ventures-heading"
              className="mt-9 font-display text-[clamp(3.4rem,8vw,8rem)] font-semibold uppercase leading-[0.84] text-foreground"
            >
              What she built<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="flex items-end border-l border-primary pl-5 lg:col-span-5 lg:pl-8">
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
              An approved introduction to this portfolio of ventures will appear
              here.
            </p>
          </div>
        </header>

        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-12">
          {/* Featured verified venture */}
          <article className="group relative flex min-w-0 flex-col justify-between border border-border bg-secondary p-8 transition-colors duration-300 hover:border-primary sm:p-10 lg:col-span-7 lg:min-h-[32rem] lg:p-12">
            <span
              className="absolute right-0 top-0 h-px w-20 bg-primary opacity-70 transition-all duration-300 group-hover:w-28"
              aria-hidden="true"
            />

            <div className="min-w-0">
              <div className="flex items-start justify-between gap-6">
                <p className="font-display text-[clamp(2.75rem,4vw,4rem)] font-semibold leading-none text-primary">
                  {FEATURED.index}
                </p>
                {FEATURED.role ? (
                  <p className="flex shrink-0 items-center gap-2 pt-2 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="size-1.5 bg-primary" aria-hidden="true" />
                    {FEATURED.role}
                  </p>
                ) : null}
              </div>

              <h3 className="mt-10 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold uppercase leading-[0.9] text-foreground">
                {FEATURED.name}
              </h3>
              <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
                {FEATURED.description}
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                {FEATURED.note}
              </p>
              {FEATURED.to ? (
                <Link
                  to={FEATURED.to}
                  className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  Explore
                  <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              ) : null}
            </div>
          </article>

          {/* Placeholder slots — filled only with verified information */}
          <div className="grid min-w-0 gap-6 lg:col-span-5">
            {SLOTS.map((slot) => (
              <article
                key={slot.index}
                className="group relative flex min-w-0 flex-col justify-between border border-border bg-secondary p-7 transition-colors duration-300 hover:border-primary sm:p-8"
              >
                <div className="min-w-0">
                  <p className="font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-none text-border">
                    {slot.index}
                  </p>
                  <h3 className="mt-8 font-display text-2xl font-semibold uppercase leading-tight text-foreground/80">
                    {slot.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                    {slot.description}
                  </p>
                </div>
                <p className="mt-10 flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                  <span
                    className="size-1.5 border border-border bg-transparent"
                    aria-hidden="true"
                  />
                  {slot.note}
                </p>
              </article>
            ))}
          </div>
        </div>

        <footer className="mt-8 border-t border-border pt-10">
          <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
            Venture details awaiting approval — only verified information will
            be added
          </p>
        </footer>
      </div>
    </section>
  );
}
