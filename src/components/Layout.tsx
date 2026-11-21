import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Coffee, Menu as MenuIcon, X, Phone } from "lucide-react";
import { ADDRESS, EMAIL, HOURS, PHONE, PHONE_HREF } from "./data";

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
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary sm:text-2xl">
            <Coffee className="h-6 w-6" /> Some Like It Hot
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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-3xl"><Coffee className="h-6 w-6" /> Some Like It Hot</Link>
            <p className="mt-4 text-sm leading-relaxed opacity-70">Свежеобжаренный кофе и тёплая атмосфера каждый день.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] opacity-60">Навигация</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => <li key={n.to}><Link to={n.to} className="opacity-80 transition hover:pl-1 hover:opacity-100">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] opacity-60">Контакты</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>{ADDRESS}</li>
              <li><a href={PHONE_HREF} className="hover:opacity-100">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="break-all hover:opacity-100">{EMAIL}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] opacity-60">Часы работы</h4>
            <p className="mt-4 text-sm opacity-80">{HOURS}</p>
            <Link to="/contacts" className="mt-5 inline-block rounded-full border border-cream/40 px-5 py-2 text-sm transition hover:bg-cream hover:text-espresso">Написать нам</Link>
          </div>
        </div>
        <div className="border-t border-cream/15 px-5 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} Some Like It Hot. Все права защищены.</div>
      </footer>
      <a href={PHONE_HREF} aria-label="Позвонить нам" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-primary p-4 sm:px-5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
        <Phone className="h-4 w-4" /><span className="hidden sm:inline">Связаться</span>
      </a>
    </div>
  );
}

export function PageTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="bg-secondary py-16 text-center md:py-24">
      <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h1 className="animate-fade-up mt-3 text-4xl text-primary sm:text-5xl md:text-6xl">{title}</h1>
    </div>
  );
}
