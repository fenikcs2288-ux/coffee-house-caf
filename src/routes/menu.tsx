import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { DrinkCard } from "@/components/DrinkCard";
import { DRINKS } from "@/components/data";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [ { title: "Меню — Coffee House" }, { name: "description", content: "8 фирменных кофейных напитков Coffee House с ценами: от эспрессо до матча латте." }, { property: "og:title", content: "Меню — Coffee House" }, { property: "og:description", content: "8 фирменных кофейных напитков Coffee House с ценами: от эспрессо до матча латте." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <Layout>
      <PageTitle eyebrow="Наши напитки" title="Меню" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DRINKS.map((d, i) => <DrinkCard key={d.name} d={d} delay={(i % 4) * 90} />)}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">Альтернативное молоко (овсяное, миндальное) — +15 ₴</p>
      </section>
    </Layout>
  );
}
