import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Layout, PageTitle } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { GALLERY } from "@/components/data";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [ { title: "Галерея — Coffee House" }, { name: "description", content: "Фотографии кофейни Coffee House: интерьер, напитки и атмосфера." }, { property: "og:title", content: "Галерея — Coffee House" }, { property: "og:description", content: "Фотографии кофейни Coffee House: интерьер, напитки и атмосфера." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Layout>
      <PageTitle eyebrow="Атмосфера" title="Галерея" />
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-20 md:grid-cols-3">
        {GALLERY.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 100}>
            <button onClick={() => setOpen(src)} className="group block w-full overflow-hidden rounded-xl" aria-label="Открыть фото">
              <img src={src} alt="Фото кофейни" loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
            </button>
          </Reveal>
        ))}
      </section>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-4 animate-in fade-in" onClick={() => setOpen(null)}>
          <button aria-label="Закрыть" className="absolute right-5 top-5 text-cream"><X className="h-8 w-8" /></button>
          <img src={open} alt="Фото кофейни" className="max-h-[85vh] rounded-xl" />
        </div>
      )}
    </Layout>
  );
}
