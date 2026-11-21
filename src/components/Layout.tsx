import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Coffee, Menu as MenuIcon, X, Phone } from "lucide-react";
import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from "./data";

const NAV = [
  { to: "/", label: "Главная" },
  { to: "/menu", label: "Меню" },
  { to: "/about", label: "О нас" },
  { to: "/gallery", label: "Галерея" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-semibold text-primary">
            <Coffee className="h-6 w-6" /> Coffee House
          </Link>
          <nav className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <button aria-label="Открыть меню" className="md:hidden text-primary" onClick={() => setOpen(!open)}>
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
        {open && (
          <nav className="animate-fade-up flex flex-col gap-1 border-t bg-background px-5 py-4 md:hidden">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-foreground hover:bg-secondary">{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-3">
          <div className="font-display text-2xl">Coffee House</div>
          <div className="text-sm opacity-80">{ADDRESS}<br />Ежедневно 8:00 – 22:00</div>
          <div className="text-sm opacity-80"><a href={PHONE_HREF} className="hover:opacity-100">{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
        </div>
        <div className="border-t border-cream/15 py-4 text-center text-xs opacity-60">© 2026 Coffee House</div>
      </footer>
      <a href={PHONE_HREF} aria-label="Позвонить нам" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
        <Phone className="h-4 w-4" /> Связаться
      </a>
    </div>
  );
}

export function PageTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="bg-secondary py-16 text-center md:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h1 className="animate-fade-up mt-3 text-5xl text-primary md:text-6xl">{title}</h1>
    </div>
  );
}
