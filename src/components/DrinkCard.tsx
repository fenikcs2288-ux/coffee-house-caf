import { Reveal } from "./Reveal";

type Drink = { name: string; desc: string; price: number; img: string };

export function DrinkCard({ d, delay = 0 }: { d: Drink; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-primary backdrop-blur">{d.price} ₴</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-2xl text-primary transition-colors group-hover:text-accent-foreground">{d.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
        </div>
      </article>
    </Reveal>
  );
}
