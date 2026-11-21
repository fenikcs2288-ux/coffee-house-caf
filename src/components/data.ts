const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
export const HERO = u("photo-1495474472287-4d71bcdd2085", 1920);
export const HERO_OG = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=630&fit=crop";
export const ABOUT_IMG = u("photo-1554118811-1e0d58224f24", 1200);
// Заполнители: замените на реальные данные кофейни.
export const PHONE = "+000 00 000 00 00";
export const PHONE_HREF = "tel:+0000000000000";
export const EMAIL = "email@example.com";
export const ADDRESS = "Адрес кофейни (укажите)";
export const HOURS = "Ежедневно 8:00 – 22:00";

export const DRINKS = [
  { name: "Эспрессо", desc: "Насыщенный, с плотной крема", price: 55, img: u("photo-1510591509098-f4fdc6d0ff04", 700) },
  { name: "Американо", desc: "Эспрессо и горячая вода", price: 60, img: u("photo-1551030173-122aabc4489c", 700) },
  { name: "Капучино", desc: "Эспрессо, молоко, бархатная пена", price: 75, img: u("photo-1572442388796-11668a67e53d", 700) },
  { name: "Латте", desc: "Мягкий, сливочный, много молока", price: 80, img: u("photo-1561882468-9110e03e0f78", 700) },
  { name: "Флэт уайт", desc: "Двойной ристретто и микропена", price: 85, img: u("photo-1577968897966-3d4325b36b61", 700) },
  { name: "Раф ванильный", desc: "Сливки, ваниль, эспрессо", price: 95, img: u("photo-1534778101976-62847782c213", 700) },
  { name: "Мокко", desc: "Эспрессо, шоколад, молоко", price: 90, img: u("photo-1578314675249-a6910f80cc4e", 700) },
  { name: "Матча латте", desc: "Японский чай матча и молоко", price: 95, img: u("photo-1515823064-d6e0c04616a7", 700) },
];

export const GALLERY = [
  "photo-1509042239860-f550ce710b93",
  "photo-1442512595331-e89e73853f31",
  "photo-1501339847302-ac426a4a7cbb",
  "photo-1511920170033-f8396924c348",
  "photo-1453614512568-c4024d13c247",
  "photo-1497935586351-b67a49e012bf",
].map((id) => u(id));
