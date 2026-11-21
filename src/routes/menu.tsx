import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { DRINKS } from "@/components/data";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [ { title: "Меню — Coffee House" }, { name: "description", content: "8 фирменных кофейных напитков Coffee House с ценами: от эспрессо до матча латте." }, { property: "og:title", content: "Меню — Coffee House" }, { property: "og:description", content: "8 фирменных кофейных напитков Coffee House с ценами: от эспрессо до матча латте." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <Layout>
      <PageTitle eyebrow="Наши напитки" title="Меню" />
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {DRINKS.map((d, i) => (
            <Reveal key={d.name} delay={(i % 2) * 120}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl text-primary">{d.name}</h3>
                <span className="flex-1 border-b border-dashed" />
                <span className="font-semibold">{d.price} ₴</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">Альтернативное молоко (овсяное, миндальное) — +15 ₴</p>
      </section>
    </Layout>
  );
}
