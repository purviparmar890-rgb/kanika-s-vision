import { ArrowDownRight } from "lucide-react";

export type EditorialPageProps = {
  index: string;
  eyebrow: string;
  title: string;
  introduction: string;
};

export function EditorialPage({ index, eyebrow, title, introduction }: EditorialPageProps) {
  return (
    <main className="min-h-screen bg-background pt-20 lg:pt-24">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-screen-2xl flex-col px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:min-h-[calc(100vh-6rem)] lg:px-12 lg:pb-12 lg:pt-20">
        <div className="grid flex-1 gap-14 border-t border-border pt-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.5fr)] lg:gap-16">
          <div className="flex min-w-0 flex-col justify-between">
            <div className="flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-widest text-primary">
              <span>{index}</span>
              <span className="h-px w-9 bg-primary" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="mt-16 max-w-5xl font-display text-[clamp(3.75rem,10vw,9rem)] font-semibold leading-[0.84] text-foreground">
              {title}
              <span className="text-primary">.</span>
            </h1>
          </div>

          <aside className="flex flex-col justify-end border-l border-border pl-5 lg:pl-8">
            <ArrowDownRight className="mb-8 size-8 text-primary" strokeWidth={1.5} />
            <p className="max-w-sm text-base leading-7 text-muted-foreground">{introduction}</p>
            <p className="mt-8 border-t border-border pt-4 text-[0.625rem] font-bold uppercase tracking-widest text-subtle">
              Content to be developed
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
