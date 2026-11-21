import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ABOUT_IMG } from "@/components/data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [ { title: "О нас — Coffee House" }, { name: "description", content: "История Coffee House: собственная обжарка, бариста-чемпионы и уютное пространство в центре города." }, { property: "og:title", content: "О нас — Coffee House" }, { property: "og:description", content: "История Coffee House: собственная обжарка, бариста-чемпионы и уютное пространство в центре города." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: About,
});

const STATS = [["10+", "лет опыта"], ["12", "сортов зерна"], ["50 000", "чашек в год"]];

function About() {
  return (
    <Layout>
      <PageTitle eyebrow="Наша история" title="О нас" />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <Reveal><img src={ABOUT_IMG} alt="Интерьер Coffee House" className="aspect-square w-full rounded-xl object-cover shadow-soft" /></Reveal>
        <Reveal delay={150} className="space-y-5 leading-relaxed text-muted-foreground">
          <h2 className="text-4xl text-primary">Каждая чашка — история</h2>
          <p>Coffee House открылась как маленькая стойка с одной кофемашиной. Сегодня это место встречи для тех, кто ценит хороший кофе и неспешные разговоры.</p>
          <p>Мы работаем напрямую с фермерами Эфиопии, Колумбии и Бразилии и обжариваем зерно сами — чтобы вы чувствовали настоящий вкус.</p>
        </Reveal>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 py-16 text-center sm:grid-cols-3">
          {STATS.map(([n, l], i) => (
            <Reveal key={l} delay={i * 120}><div className="font-display text-5xl text-primary">{n}</div><div className="mt-2 text-sm text-muted-foreground">{l}</div></Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
