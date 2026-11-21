import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Layout, PageTitle } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from "@/components/data";

export const Route = createFileRoute("/contacts")({
  head: () => ({ meta: [ { title: "Контакты — Coffee House" }, { name: "description", content: "Адрес, телефон и часы работы кофейни Coffee House. Напишите нам или заходите в гости." }, { property: "og:title", content: "Контакты — Coffee House" }, { property: "og:description", content: "Адрес, телефон и часы работы кофейни Coffee House. Напишите нам или заходите в гости." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Contacts,
});

function Contacts() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")}, ${f.get("phone")}`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Сообщение с сайта")}&body=${body}`;
    setSent(true);
    e.currentTarget.reset();
  };
  const items = [
    { Icon: MapPin, text: ADDRESS, href: "https://maps.google.com/?q=" + encodeURIComponent(ADDRESS) },
    { Icon: Phone, text: PHONE, href: PHONE_HREF },
    { Icon: Mail, text: EMAIL, href: "mailto:" + EMAIL },
    { Icon: Clock, text: "Ежедневно 8:00 – 22:00" },
  ];
  const input = "w-full rounded-lg border bg-card px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  return (
    <Layout>
      <PageTitle eyebrow="Ждём вас" title="Контакты" />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <Reveal className="space-y-6">
          {items.map(({ Icon, text, href }) => (
            <div key={text} className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
              {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-primary">{text}</a> : <span>{text}</span>}
            </div>
          ))}
          <iframe title="Карта" className="mt-6 h-64 w-full rounded-xl border" loading="lazy" src={"https://maps.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed"} />
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={submit} className="space-y-4 rounded-xl bg-card p-8 shadow-soft">
            <h2 className="text-3xl text-primary">Напишите нам</h2>
            <input name="name" required placeholder="Ваше имя" className={input} />
            <input name="phone" required type="tel" placeholder="Телефон" className={input} />
            <textarea name="message" required rows={4} placeholder="Сообщение" className={input} />
            <button className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90">Отправить</button>
            {sent && <p className="text-center text-sm text-primary">Спасибо! Мы скоро свяжемся с вами.</p>}
          </form>
        </Reveal>
      </section>
    </Layout>
  );
}
