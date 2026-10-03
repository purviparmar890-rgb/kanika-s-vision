import { ArrowUpRight } from "lucide-react";
import aviationEditorial from "@/assets/kanika-aviation-editorial.jpg";

type IdeaCard = {
  index: string;
  category: string;
  headline: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

const IDEA_CARDS: IdeaCard[] = [
  {
    index: "01",
    category: "Aviation",
    headline: "Editable headline placeholder.",
    description: "An approved article or perspective on aviation will be published here.",
    image: aviationEditorial,
    imageAlt: "Aircraft on a dark runway at night",
  },
  {
    index: "02",
    category: "Entrepreneurship",
    headline: "Editable headline placeholder.",
    description: "A verified point of view on entrepreneurship will be added here once approved.",
  },
  {
    index: "03",
    category: "Innovation",
    headline: "Editable headline placeholder.",
    description: "A sourced conversation about innovation will be added here once approved.",
  },
  {
    index: "04",
    category: "Future Mobility",
    headline: "Editable headline placeholder.",
    description: "An approved perspective on future mobility will be published here.",
  },
  {
    index: "05",
    category: "Technology",
    headline: "Editable headline placeholder.",
    description: "A verified discussion about technology will be added here once approved.",
  },
];

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="grid h-full min-h-64 place-items-center bg-card">
      <div className="text-center">
        <span className="mx-auto mb-4 block h-px w-12 bg-primary" aria-hidden="true" />
        <p className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">{label}</p>
      </div>
    </div>
  );
}

export function IdeasSection() {
  return (
    <section className="border-t border-border bg-background pt-20 lg:pt-24" aria-labelledby="ideas-heading">
      <div className="mx-auto max-w-screen-2xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <header className="grid gap-10 border-t border-border pt-5 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-8">
            <p className="flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="text-primary">04</span>
              <span className="h-px w-9 bg-border" aria-hidden="true" />
              <span>Ideas</span>
            </p>
            <h1
              id="ideas-heading"
              className="mt-9 max-w-5xl font-display text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase leading-[0.84] text-foreground"
            >
              Thinking about
              <br />
              what comes next<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="flex items-end border-l border-primary pl-5 lg:col-span-4 lg:pl-8">
            <p className="max-w-sm text-base leading-7 text-muted-foreground sm:leading-8">
              A developing collection of conversations around the industries, questions and possibilities shaping the future.
            </p>
          </div>
        </header>

        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-12">
          {IDEA_CARDS.map((card, index) => (
            <article
              key={card.index}
              className={`group relative min-w-0 overflow-hidden border border-border bg-secondary transition-colors duration-300 hover:border-primary ${
                index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4"
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[1.08/1]" : "aspect-[1.18/1]"}`}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <PlaceholderImage label="Editable image placeholder" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-foreground">
                    <span className="text-primary">{card.index}</span> — {card.category}
                  </p>
                  <ArrowUpRight className="size-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>

              <div className="relative flex min-h-64 flex-col justify-between p-7 sm:p-9">
                <span className="absolute right-0 top-0 h-px w-16 bg-primary transition-all duration-300 group-hover:w-28" aria-hidden="true" />
                <div>
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">{card.category}</p>
                  <h2 className="mt-7 max-w-lg font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold uppercase leading-[0.9] text-foreground">
                    {card.headline}
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{card.description}</p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-[0.625rem] font-bold uppercase tracking-widest text-subtle">Editable placeholder</span>
                  <span className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-widest text-primary transition-transform duration-300 group-hover:translate-x-1">
                    Read More <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 border-t border-border pt-8 sm:mt-14 sm:flex sm:items-end sm:justify-between">
          <p className="max-w-md text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
            Topics are placeholders until content is verified and approved
          </p>
          <p className="mt-8 max-w-2xl font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.9] text-foreground sm:mt-0 sm:text-right">
            Stay curious<span className="text-primary">.</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
