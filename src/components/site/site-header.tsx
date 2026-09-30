import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionLink } from "./action-link";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Journey", to: "/journey" },
  { label: "Ventures", to: "/ventures" },
  { label: "Ideas", to: "/ideas" },
  { label: "Speaking", to: "/speaking" },
  { label: "Media", to: "/media" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:h-24 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-12">
        <Link
          to="/"
          aria-label="Kanika home"
          onClick={() => setIsOpen(false)}
          className="min-w-0 font-display text-xl font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
        >
          KANIKA<span className="text-primary">.</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link text-[0.6875rem] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "nav-link is-active text-foreground" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ActionLink to="/speaking">Invite Kanika to Speak</ActionLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 shrink-0 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-20 h-[calc(100dvh-5rem)] border-t border-border bg-background transition-[opacity,visibility] duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex h-full flex-col px-5 py-8 sm:px-8">
          <ul className="flex-1">
            {navItems.map((item, index) => (
              <li key={item.to} className="border-b border-border">
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-5 py-4 font-display text-3xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <span className="text-[0.625rem] font-bold tracking-widest text-primary">0{index + 1}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ActionLink to="/speaking" className="w-full" >Invite Kanika to Speak</ActionLink>
        </nav>
      </div>
    </header>
  );
}
