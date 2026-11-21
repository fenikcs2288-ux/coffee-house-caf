import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { MENU } from "@/components/data";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [ { title: "Меню — Some Like It Hot" }, { name: "description", content: "Меню кофейни Some Like It Hot: кава specialty, свежая выпечка, сладкие вафли и десерты с ценами в гривнах." }, { property: "og:title", content: "Меню — Some Like It Hot" }, { property: "og:description", content: "Меню кофейни Some Like It Hot: кава specialty, свежая выпечка, сладкие вафли и десерты с ценами в гривнах." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <Layout>
      <PageTitle eyebrow="Наши напитки и десерты" title="Меню" />
      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 md:py-20">
        {MENU.map((cat, ci) => (
          <section key={cat.title}>
            <Reveal className="relative mb-10 overflow-hidden rounded-2xl shadow-soft">
              <img src={cat.img} alt={cat.title} loading="lazy" className="h-44 w-full object-cover sm:h-56" />
              <div className="hero-overlay absolute inset-0" />
              <h2 className="absolute bottom-5 left-6 text-3xl text-cream sm:text-4xl">{cat.title}</h2>
            </Reveal>
            <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
              {cat.items.map((item, i) => (
                <Reveal key={`${item.name}-${item.size}`} delay={(i % 6) * 60}>
                  <li className="group flex items-baseline gap-3">
                    <div className="min-w-0">
                      <span className="font-display text-xl text-primary transition-colors group-hover:text-accent-foreground">{item.name}</span>
                      <span className="ml-2 text-sm text-muted-foreground">{item.size}</span>
                    </div>
                    <span className="mx-1 flex-1 border-b border-dotted border-muted-foreground/40" />
                    <span className="shrink-0 font-semibold text-primary">
                      {item.price === null ? <span className="text-sm font-normal text-muted-foreground">ціну уточнюйте</span> : `${item.price} ₴`}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            {ci < MENU.length - 1 && <div className="mt-20 border-t border-border" />}
          </section>
        ))}
      </div>
    </Layout>
  );
}
