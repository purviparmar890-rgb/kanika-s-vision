import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "./action-link";

type PressEntry = {
  index: string;
  headline: string;
  publication: string;
  date: string;
  mediaType: string;
  featured?: boolean;
};

/**
 * Replace these placeholders only with sourced, approved media coverage.
 * No publication names, headlines, dates or links are invented in the meantime.
 */
const PRESS_ENTRIES: PressEntry[] = [
  {
    index: "01",
    headline: "Headline awaiting approval.",
    publication: "Publication to be confirmed",
    date: "Date to be confirmed",
    mediaType: "Type to be confirmed",
    featured: true,
  },
  {
    index: "02",
    headline: "Headline awaiting approval.",
    publication: "Publication to be confirmed",
    date: "Date to be confirmed",
    mediaType: "Type to be confirmed",
  },
  {
    index: "03",
    headline: "Headline awaiting approval.",
    publication: "Publication to be confirmed",
    date: "Date to be confirmed",
    mediaType: "Type to be confirmed",
  },
  {
    index: "04",
    headline: "Headline awaiting approval.",
    publication: "Publication to be confirmed",
    date: "Date to be confirmed",
    mediaType: "Type to be confirmed",
  },
];

function TypeLabel({ index, mediaType }: { index: string; mediaType: string }) {
  return (
    <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">
      <span className="text-foreground/40">{index}</span> — {mediaType}
    </p>
  );
}

function LinkPlaceholder() {
  return (
    <span className="inline-flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-widest text-subtle transition-colors duration-300 group-hover:text-primary">
      Read / Watch — link to be added
      <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
    </span>
  );
}

export function MediaSection() {
  const featured = PRESS_ENTRIES.find((entry) => entry.featured);
  const archive = PRESS_ENTRIES.filter((entry) => !entry.featured);

  return (
    <main className="min-h-screen bg-background pt-20 lg:pt-24">
      <section className="border-t border-border" aria-labelledby="media-heading">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <header className="grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="min-w-0 lg:col-span-8">
              <p className="flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
                <span className="text-primary">06</span>
                <span className="h-px w-9 bg-border" aria-hidden="true" />
                <span>Media</span>
              </p>
              <h1
                id="media-heading"
                className="mt-9 max-w-4xl font-display text-[clamp(3.75rem,9vw,9rem)] font-semibold uppercase leading-[0.84] text-foreground"
              >
                In the press<span className="text-primary">.</span>
              </h1>
            </div>
            <div className="flex items-end border-l border-primary pl-5 lg:col-span-4 lg:pl-8">
              <p className="max-w-sm text-base leading-7 text-muted-foreground sm:leading-8">
                Selected coverage, interviews and public appearances will be
                listed here once verified and approved.
              </p>
            </div>
          </header>

          {featured ? (
            <article className="group relative mt-20 border border-border bg-secondary p-7 transition-colors duration-300 hover:border-primary sm:p-10 lg:mt-28 lg:p-14">
              <span
                className="absolute -left-3 -top-3 size-6 border-l border-t border-primary"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-3 -right-3 size-6 border-b border-r border-primary"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-6">
                <TypeLabel index={featured.index} mediaType={featured.mediaType} />
                <p className="hidden shrink-0 font-display text-5xl font-semibold leading-none text-primary sm:block">
                  {featured.index}
                </p>
              </div>

              <h2 className="mt-10 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold uppercase leading-[0.88] text-foreground">
                {featured.headline}
              </h2>

              <div className="mt-12 grid gap-8 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-3">
                <div className="min-w-0">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                    Publication
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                    {featured.publication}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                    Date
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                    {featured.date}
                  </p>
                </div>
                <div className="min-w-0 sm:col-span-2 lg:col-span-1 lg:text-right">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                    Link
                  </p>
                  <p className="mt-3">
                    <LinkPlaceholder />
                  </p>
                </div>
              </div>
            </article>
          ) : null}

          <div className="mt-16 border-t border-border lg:mt-24">
            {archive.map((entry) => (
              <article
                key={entry.index}
                className="group grid gap-4 border-b border-border py-8 transition-colors duration-300 sm:gap-6 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-10"
              >
                <div className="min-w-0 lg:col-span-3">
                  <TypeLabel index={entry.index} mediaType={entry.mediaType} />
                </div>

                <div className="min-w-0 lg:col-span-6">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                    {entry.publication}
                  </p>
                  <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold uppercase leading-tight text-foreground sm:text-3xl">
                    {entry.headline}
                  </h2>
                </div>

                <div className="min-w-0 lg:col-span-1">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                    {entry.date}
                  </p>
                </div>

                <div className="min-w-0 lg:col-span-2 lg:text-right">
                  <LinkPlaceholder />
                </div>
              </article>
            ))}
          </div>

          <footer className="mt-10 border-t-0 pt-8 sm:mt-14 sm:flex sm:items-end sm:justify-between sm:pt-10">
            <p className="max-w-sm text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
              Only verified media coverage will be listed
            </p>
            <div className="mt-8 sm:mt-0">
              <ActionLink to="/media" variant="outline">
                View All Media
              </ActionLink>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
