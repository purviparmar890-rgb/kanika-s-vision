import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  to: "/" | "/about" | "/speaking" | "/ventures" | "/media";
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function ActionLink({
  to,
  children,
  variant = "solid",
  className,
}: ActionLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        variant === "solid"
          ? "border-primary bg-primary text-primary-foreground hover:bg-accent hover:border-accent"
          : "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
