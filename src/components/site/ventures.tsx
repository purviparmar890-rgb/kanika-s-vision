import { ArrowUpRight } from "lucide-react";
import aviationEditorial from "@/assets/kanika-aviation-editorial.jpg";

type Venture = {
  index: string;
  name: string;
  role: string | null;
  description: string;
  note: string;
  image?: string;
  imageAlt?: string;
};

const FEATURED: Venture = {
  index: "01",
  name: "JetSetGo",
  role: "Founder",
  description:
    "An important chapter in Kanika’s entrepreneurial journey. The venture story and its impact will be expanded here with approved details.",
  note: "Featured venture",
  image: aviationEditorial,
  imageAlt: "Private aircraft on a dark runway",
};

const SLOTS: Venture[] = [
  {
    index: "02",
    name: "Venture to be confirmed",
    role: null,
    description: "A verified company, venture or initiative can be added here.",
    note: "Awaiting verified details",
  },
  {
    index: "03",
    name: "Initiative to be confirmed",
    role: null,
    description: "A verified initiative can be added here once the details are approved.",
    note: "Awaiting verified details",
  },
];

function VentureStatus({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
      <span className="size-1.5 border border-border" aria-hidden="true" />
      {children}
    </p>
  );
}

export function VenturesShowcase() {
  return (
    <section className="relative border-t border-border bg-background" aria-labelledby="ventures-heading">
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
              className="mt-9 max-w-4xl font-display text-[clamp(3.4rem,8vw,8rem)] font-semibold uppercase leading-[0.84] text-foreground"
            >
              What she built<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="flex items-end border-l border-primary pl-5 lg:col-span-5 lg:pl-8">
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:leading-8">
              A portfolio of impact — the ventures, companies and initiatives that belong to Kanika’s story.
            </p>
          </div>
        </header>

        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-12">
          <article className="group relative grid min-w-0 overflow-hidden border border-border bg-secondary transition-colors duration-300 hover:border-primary lg:col-span-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(16rem,1.08fr)]">
            <div className="relative min-h-[22rem] overflow-hidden bg-card lg:min-h-[34rem]">
              <img
                src={FEATURED.image}
                alt={FEATURED.imageAlt}
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-[0.625rem] font-bold uppercase tracking-widest text-foreground sm:left-8">
                <span className="text-primary">01</span> — Aviation
              </p>
            </div>

            <div className="relative flex min-w-0 flex-col justify-between p-7 sm:p-9 lg:p-10">
              <span className="absolute right-0 top-0 h-px w-20 bg-primary transition-all duration-300 group-hover:w-32" aria-hidden="true" />
              <div>
                <div className="flex items-start justify-between gap-5">
                  <p className="font-display text-5xl font-semibold leading-none text-primary">{FEATURED.index}</p>
                  <p className="flex shrink-0 items-center gap-2 pt-2 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="size-1.5 bg-primary" aria-hidden="true" />
                    {FEATURED.role}
                  </p>
                </div>
                <h3 className="mt-12 font-display text-[clamp(2.75rem,5vw,4.75rem)] font-semibold uppercase leading-[0.88] text-foreground">
                  {FEATURED.name}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {FEATURED.description}
                </p>
              </div>

              <div className="mt-12 border-t border-border pt-5">
                <VentureStatus>{FEATURED.note}</VentureStatus>
              </div>
            </div>
          </article>

          <div className="grid min-w-0 gap-6 lg:col-span-5">
            {SLOTS.map((slot) => (
              <article
                key={slot.index}
                className="group relative flex min-w-0 flex-col justify-between border border-border bg-secondary p-7 transition-colors duration-300 hover:border-primary sm:p-9"
              >
                <span className="absolute right-0 top-0 h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-display text-4xl font-semibold leading-none text-border">{slot.index}</p>
                  <h3 className="mt-9 max-w-sm font-display text-[clamp(1.8rem,3vw,2.7rem)] font-semibold uppercase leading-[0.94] text-foreground/80">
                    {slot.name}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">{slot.description}</p>
                </div>
                <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-5">
                  <VentureStatus>{slot.note}</VentureStatus>
                  <ArrowUpRight className="size-4 text-border transition-colors duration-300 group-hover:text-primary" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="mt-8 border-t border-border pt-10 sm:mt-12 sm:flex sm:items-end sm:justify-between">
          <p className="max-w-sm text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
            Only verified ventures and initiatives will be added
          </p>
          <p className="mt-8 max-w-xl font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.9] text-foreground sm:mt-0 sm:text-right">
            Built to <span className="text-primary">matter.</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
