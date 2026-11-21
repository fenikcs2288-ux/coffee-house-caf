import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { DrinkCard } from "@/components/DrinkCard";
import { Reveal } from "@/components/Reveal";
import { POPULAR, HERO, HERO_OG, ABOUT_IMG } from "@/components/data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [ { title: "Some Like It Hot — кофейня specialty кофе в Харькове" }, { name: "description", content: "Уютная кофейня Some Like It Hot на Сумской, 71: кава specialty, свежая выпечка, вафли и десерты." }, { property: "og:title", content: "Some Like It Hot — кофейня specialty кофе в Харькове" }, { property: "og:description", content: "Уютная кофейня Some Like It Hot на Сумской, 71: кава specialty, свежая выпечка, вафли и десерты." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: HERO_OG }, { name: "twitter:image", content: HERO_OG } ] }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img src={HERO} alt="Чашка свежего кофе" className="absolute inset-0 h-full w-full scale-105 object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-2xl px-6 text-center text-cream">
          <p className="animate-fade-up text-xs uppercase tracking-[0.35em] opacity-90">С 2015 года</p>
          <h1 className="animate-fade-up mt-4 text-5xl leading-none sm:text-6xl md:text-8xl" style={{ animationDelay: "120ms" }}>Some Like It Hot</h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-md text-lg opacity-90" style={{ animationDelay: "240ms" }}>Кофе, сваренный с любовью. Место, куда хочется возвращаться.</p>
          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: "360ms" }}>
            <Link to="/menu" className="rounded-full bg-cream px-8 py-3 font-semibold text-espresso transition hover:scale-105">Смотреть меню</Link>
            <Link to="/contacts" className="rounded-full border border-cream/70 px-8 py-3 font-semibold text-cream transition hover:bg-cream/10">Как нас найти</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Популярное</p>
          <h2 className="mt-3 text-5xl text-primary">Любимые напитки</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR.map((d, i) => <DrinkCard key={d.name} d={d} delay={i * 100} />)}
        </div>
        <div className="mt-12 text-center"><Link to="/menu" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lift">Всё меню</Link></div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <Reveal><img src={ABOUT_IMG} alt="Интерьер кофейни" className="aspect-[4/5] w-full rounded-xl object-cover shadow-soft" loading="lazy" /></Reveal>
          <Reveal delay={150}>
            <h2 className="text-5xl text-primary">Больше, чем кофе</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Мы обжариваем зёрна небольшими партиями и готовим каждый напиток вручную. Some Like It Hot — это тишина утра, тёплый свет и аромат свежей выпечки.</p>
            <Link to="/about" className="mt-8 inline-block border-b-2 border-primary pb-1 font-semibold text-primary">Узнать о нас →</Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
