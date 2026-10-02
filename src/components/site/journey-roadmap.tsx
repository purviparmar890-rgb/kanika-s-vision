import "./journey-roadmap.css";

type Milestone = {
  date: string;
  category: "Personal milestone" | "Company milestone";
  title: string;
  description: string;
  imageLabel?: string;
};

/** Replace these placeholders only with sourced, approved milestones. */
const MILESTONES: Milestone[] = [
  {
    date: "YEAR",
    category: "Personal milestone",
    title: "A formative chapter",
    description:
      "Add a verified experience or decision from Kanika’s personal journey here.",
  },
  {
    date: "YEAR",
    category: "Personal milestone",
    title: "A defining decision",
    description:
      "Add approved context about a pivotal personal or entrepreneurial decision here.",
    imageLabel: "Editorial image",
  },
  {
    date: "YEAR",
    category: "Company milestone",
    title: "A company chapter",
    description:
      "Add a sourced JetSetGo or company milestone here, clearly credited to the company.",
  },
  {
    date: "YEAR",
    category: "Personal milestone",
    title: "The next perspective",
    description:
      "Add a verified milestone that shaped Kanika’s current perspective and work here.",
  },
];

export function JourneyRoadmap() {
  return (
    <section className="journey-section relative border-t border-border bg-secondary" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-screen-2xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <header className="grid gap-10 border-t border-border pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <p className="journey-reveal flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="text-primary">02</span>
              <span className="h-px w-9 bg-border" aria-hidden="true" />
              <span>The Journey</span>
            </p>
            <h2
              id="journey-heading"
              className="journey-reveal mt-9 font-display text-[clamp(3.4rem,8vw,8rem)] font-semibold uppercase leading-[0.84] text-foreground"
            >
              The roadmap<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="journey-reveal flex items-end border-l border-primary pl-5 lg:col-span-5 lg:pl-8">
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
              A visual timeline of the experiences, decisions and milestones that shaped the journey.
            </p>
          </div>
        </header>

        <div className="mt-20 lg:mt-28">
          <div className="journey-track grid gap-0 lg:grid-cols-4">
            {MILESTONES.map((milestone, index) => (
              <article
                className="journey-milestone relative min-w-0 pb-16 pl-9 lg:min-h-[34rem] lg:border-t lg:border-border lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-10"
                key={`${milestone.category}-${index}`}
              >
                <span
                  className="journey-point absolute left-0 top-1 size-3 bg-primary lg:-top-[0.4rem]"
                  aria-hidden="true"
                />

                <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">
                  {String(index + 1).padStart(2, "0")} / {milestone.category}
                </p>
                <p className="mt-7 font-display text-[clamp(3.4rem,5vw,5.75rem)] font-semibold leading-none text-foreground">
                  {milestone.date}
                </p>

                {milestone.imageLabel ? (
                  <div className="journey-image mt-8 grid aspect-[16/9] place-items-center border border-border bg-background">
                    <span className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
                      {milestone.imageLabel} placeholder
                    </span>
                  </div>
                ) : null}

                <div className="mt-8 border-t border-border pt-5">
                  <h3 className="font-display text-xl font-semibold uppercase leading-tight text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="journey-reveal mt-8 border-t border-border pt-10 sm:mt-14 lg:mt-20 lg:flex lg:items-end lg:justify-between">
          <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
            Timeline content awaiting approval
          </p>
          <p className="mt-8 max-w-3xl font-display text-[clamp(2.5rem,6vw,6rem)] font-semibold uppercase leading-[0.9] text-foreground lg:mt-0 lg:text-right">
            The journey <span className="text-primary">continues.</span>
          </p>
        </footer>
      </div>
    </section>
  );
}