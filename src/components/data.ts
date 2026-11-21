const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
export const HERO = u("photo-1495474472287-4d71bcdd2085", 1920);
export const HERO_OG = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=630&fit=crop";
export const ABOUT_IMG = u("photo-1554118811-1e0d58224f24", 1200);
export const PHONE = "+380 44 123 45 67";
export const PHONE_HREF = "tel:+380441234567";
export const EMAIL = "hello@coffeehouse.ua";
export const ADDRESS = "ул. Кофейная, 12, Киев";

export const DRINKS = [
  { name: "Эспрессо", desc: "Насыщенный, с плотной крема", price: 55 },
  { name: "Американо", desc: "Эспрессо и горячая вода", price: 60 },
  { name: "Капучино", desc: "Эспрессо, молоко, бархатная пена", price: 75 },
  { name: "Латте", desc: "Мягкий, сливочный, много молока", price: 80 },
  { name: "Флэт уайт", desc: "Двойной ристретто и микропена", price: 85 },
  { name: "Раф ванильный", desc: "Сливки, ваниль, эспрессо", price: 95 },
  { name: "Мокко", desc: "Эспрессо, шоколад, молоко", price: 90 },
  { name: "Матча латте", desc: "Японский чай матча и молоко", price: 95 },
];

export const GALLERY = [
  "photo-1509042239860-f550ce710b93",
  "photo-1442512595331-e89e73853f31",
  "photo-1501339847302-ac426a4a7cbb",
  "photo-1511920170033-f8396924c348",
  "photo-1453614512568-c4024d13c247",
  "photo-1497935586351-b67a49e012bf",
].map((id) => u(id));
