import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import aviationEditorial from "@/assets/kanika-aviation-editorial.jpg";

const SPEAKING_TOPICS = ["Entrepreneurship", "Aviation", "Innovation", "Leadership", "Future Mobility"];

export function SpeakingSection() {
  return (
    <main className="min-h-screen bg-background pt-20 lg:pt-24">
      <section className="border-t border-border" aria-labelledby="speaking-heading">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="relative min-w-0 lg:col-span-5 lg:col-start-1">
              <span className="absolute -left-3 -top-3 size-6 border-l border-t border-primary" aria-hidden="true" />
              <span className="absolute -bottom-3 -right-3 size-6 border-b border-r border-primary" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <img
                  src={aviationEditorial}
                  alt="Private aircraft on a dark runway at night"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 text-[0.625rem] font-bold uppercase tracking-widest text-foreground sm:left-8">
                  <span className="text-primary">01</span> — Editorial image
                </p>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-7 lg:col-start-6">
              <p className="flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground">
                <span className="text-primary">05</span>
                <span className="h-px w-9 bg-border" aria-hidden="true" />
                <span>Speaking</span>
              </p>
              <h1
                id="speaking-heading"
                className="mt-9 max-w-4xl font-display text-[clamp(3.75rem,9vw,9rem)] font-semibold uppercase leading-[0.84] text-foreground"
              >
                Ideas worth
                <br />
                sharing<span className="text-primary">.</span>
              </h1>
              <div className="mt-10 max-w-lg border-l border-primary pl-5 lg:mt-14 lg:pl-7">
                <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Speaking information and approved themes will be added here as they are confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-border pt-8 lg:mt-32 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">Potential speaking areas</p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                Topic placeholders are shown for review and must be supported by reliable, approved information before publication.
              </p>
            </div>
            <div className="grid min-w-0 gap-0 border-t border-border lg:col-span-8 lg:grid-cols-2 lg:border-t-0">
              {SPEAKING_TOPICS.map((topic, index) => (
                <div
                  key={topic}
                  className="group flex items-center justify-between gap-5 border-b border-border py-5 transition-colors duration-300 hover:border-primary lg:py-6 lg:first:border-t lg:nth-[2]:border-t"
                >
                  <div className="flex min-w-0 items-baseline gap-4">
                    <span className="text-[0.625rem] font-bold tracking-widest text-primary">0{index + 1}</span>
                    <h2 className="truncate font-display text-xl font-semibold uppercase leading-tight text-foreground sm:text-2xl">
                      {topic}
                    </h2>
                  </div>
                  <span className="shrink-0 text-[0.625rem] font-bold uppercase tracking-widest text-subtle transition-colors duration-300 group-hover:text-primary">
                    Placeholder
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:max-w-3xl">
            <a
              href="#speaking-enquiry"
              className="group inline-flex min-h-14 items-center justify-between gap-4 border border-primary bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors duration-300 hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Invite Kanika to Speak
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#media-enquiries"
              className="group inline-flex min-h-14 items-center justify-between gap-4 border border-border px-6 py-4 text-xs font-bold uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Media Enquiries
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-16 grid gap-5 border-t border-border pt-8 sm:grid-cols-2 lg:mt-24 lg:gap-10">
            <div id="speaking-enquiry" className="scroll-mt-32 border-l border-primary pl-5">
              <ArrowDownRight className="mb-5 size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">Speaking enquiry</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">Approved enquiry details will be added here.</p>
            </div>
            <div id="media-enquiries" className="scroll-mt-32 border-l border-border pl-5">
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-primary">Media enquiries</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">Approved media contact details will be added here.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
