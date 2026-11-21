import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Layout, PageTitle } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, EMAIL, HOURS, PHONE, PHONE_HREF } from "@/components/data";

export const Route = createFileRoute("/contacts")({
  head: () => ({ meta: [
    { title: "Контакты — Some Like It Hot" },
    { name: "description", content: "Адрес, телефон и часы работы кофейни Some Like It Hot в Харькове. Напишите нам через форму обратной связи." },
    { property: "og:title", content: "Контакты — Some Like It Hot" },
    { property: "og:description", content: "Адрес, телефон и часы работы кофейни Some Like It Hot в Харькове." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contacts,
});

type Errors = Partial<Record<"name" | "contact" | "message", string>>;

function validate(f: FormData): Errors {
  const e: Errors = {};
  const name = String(f.get("name") ?? "").trim();
  const contact = String(f.get("contact") ?? "").trim();
  const message = String(f.get("message") ?? "").trim();
  if (name.length < 2) e.name = "Введите имя (минимум 2 символа)";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && !/^\+?[\d\s()-]{7,}$/.test(contact)) e.contact = "Укажите email или телефон";
  if (message.length < 10) e.message = "Сообщение должно быть не короче 10 символов";
  return e;
}

function Contacts() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const f = new FormData(form);
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")}, ${f.get("contact")}`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Сообщение с сайта Some Like It Hot")}&body=${body}`;
    setSent(true);
    form.reset();
  };
  const items = [
    { Icon: MapPin, label: "Адрес", text: ADDRESS },
    { Icon: Phone, label: "Телефон", text: PHONE, href: PHONE_HREF },
    { Icon: Mail, label: "Email", text: EMAIL, href: "mailto:" + EMAIL },
    { Icon: Clock, label: "Часы работы", text: HOURS },
  ];
  const field = (bad?: string) => `w-full rounded-lg border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 ${bad ? "border-destructive" : ""}`;
  return (
    <Layout>
      <PageTitle eyebrow="Ждём вас" title="Контакты" />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-12 md:py-20">
        <Reveal className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 content-start">
          {items.map(({ Icon, label, text, href }) => (
            <div key={label} className="group flex min-w-0 items-start gap-4 rounded-2xl border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                {href ? <a href={href} className="mt-1 block break-words font-medium hover:text-primary">{text}</a> : <p className="mt-1 break-words font-medium">{text}</p>}
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={150}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-card p-10 text-center shadow-soft">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h2 className="mt-4 text-3xl text-primary">Спасибо!</h2>
              <p className="mt-2 text-muted-foreground">Ваше письмо подготовлено в почтовой программе. Мы ответим как можно скорее.</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Написать ещё</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl bg-card p-6 shadow-soft sm:p-8">
              <h2 className="text-3xl text-primary">Обратная связь</h2>
              <p className="text-sm text-muted-foreground">Вопрос, отзыв или бронь столика — напишите нам.</p>
              {([
                ["name", "Ваше имя", "input"],
                ["contact", "Email или телефон", "input"],
                ["message", "Сообщение", "textarea"],
              ] as const).map(([n, label, kind]) => (
                <label key={n} className="block">
                  <span className="mb-1.5 block text-sm font-medium">{label}</span>
                  {kind === "input" ? <input name={n} className={field(errors[n])} /> : <textarea name={n} rows={4} className={field(errors[n])} />}
                  {errors[n] && <span className="mt-1 block text-xs text-destructive">{errors[n]}</span>}
                </label>
              ))}
              <button type="submit" className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lift">Отправить</button>
            </form>
          )}
        </Reveal>
      </section>
    </Layout>
  );
}
