const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
export const HERO = u("photo-1495474472287-4d71bcdd2085", 1920);
export const HERO_OG = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=630&fit=crop";
export const ABOUT_IMG = u("photo-1554118811-1e0d58224f24", 1200);
// Заполнители: замените на реальные данные кофейни.
export const PHONE = "+000 00 000 00 00";
export const PHONE_HREF = "tel:+0000000000000";
export const EMAIL = "email@example.com";
export const ADDRESS = "вулиця Сумська, 71, Харків, Харківська область, 61023";
export const HOURS = "Ежедневно 8:00 – 22:00";

export type MenuItem = { name: string; size: string; price: number | null };
export type MenuCategory = { title: string; img: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    title: "Кава specialty",
    img: u("photo-1447933601403-0c6688de566e", 1400),
    items: [
      { name: "Еспресо", size: "30 мл", price: 75 },
      { name: "Американо", size: "130 мл", price: 75 },
      { name: "Американо з молоком", size: "230 мл", price: 80 },
      { name: "Капучино", size: "200 мл", price: 95 },
      { name: "Капучино XL", size: "300 мл", price: 145 },
      { name: "Лате", size: "250 мл", price: 105 },
      { name: "Halva-Latte", size: "250 мл", price: 100 },
      { name: "Pumpkin latte macchiato", size: "250 мл", price: 125 },
      { name: "Капуоранж", size: "200 мл", price: 155 },
      { name: "Капуоранж", size: "250 мл", price: 220 },
      { name: "Фільтр кава", size: "150 мл", price: 80 },
      { name: "Фільтр кава", size: "250 мл", price: 100 },
      { name: "Раф кава", size: "250 мл", price: 125 },
      { name: "Флет вайт", size: "200 мл", price: 115 },
      { name: "Espresso tonic", size: "200 мл", price: 125 },
      { name: "Солоне Фрапе", size: "170 мл", price: 95 },
    ],
  },
  {
    title: "Випікаємо щодня",
    img: u("photo-1551024601-bec78aea704b", 1400),
    items: [
      { name: "Донат лимон", size: "120 г", price: 105 },
      { name: "Донат класичний", size: "120 г", price: 105 },
      { name: "Донат шоколад-нутелла", size: "120 г", price: 105 },
      { name: "Сінабон з грушевим компоте", size: "210 г", price: 225 },
      { name: "Яблучний пиріг", size: "175 г", price: 165 },
    ],
  },
  {
    title: "Вафлі солодкі",
    img: u("photo-1562376552-0d160a2f238d", 1400),
    items: [
      { name: "Вафля Some like it hot", size: "270 г", price: 335 },
      { name: "Вафля з вишнею", size: "360 г", price: 365 },
      { name: "Вафля з карамелізованими яблуками", size: "450 г", price: 355 },
    ],
  },
  {
    title: "Десерти",
    img: u("photo-1551024506-0bccd828d307", 1400),
    items: [
      { name: "Морквяний торт", size: "150 г", price: 175 },
      { name: "Чізкейк кава-карамель", size: "165 г", price: 195 },
      { name: "Баскський фісташковий чізкейк", size: "150 г", price: 215 },
      { name: "Чізкейк «Нью-Йорк»", size: "140 г", price: 190 },
      { name: "Чізкейк синій з дор-блю", size: "150 г", price: 205 },
      { name: "Кокосовий наполеон", size: "200 г", price: 195 },
      { name: "Класичний наполеон", size: "200 г", price: 185 },
      { name: "Еклер кейк", size: "170 г", price: 210 },
      { name: "Панакота малина-виноград", size: "200 г", price: 195 },
      { name: "Три молока", size: "150 г", price: 150 },
      { name: "Тірамісу", size: "130 г", price: 205 },
      { name: "Шу ваніль-малина", size: "90 г", price: 115 },
      { name: "Шу карамель-маскарпоне", size: "90 г", price: 115 },
      { name: "Макарон груша дорблю", size: "50 г", price: 85 },
      { name: "Макарон полуниця м'ята", size: "50 г", price: 85 },
      { name: "Макарон фісташка-малина", size: "50 г", price: 85 },
      { name: "Американське печиво", size: "40 г", price: 60 },
      { name: "Злаковий кейк", size: "100 г", price: null },
    ],
  },
];

// Популярные позиции с фото для главной страницы.
export const POPULAR = [
  { name: "Капучино", desc: "Еспресо, молоко та оксамитова пінка · 200 мл", price: 95, img: u("photo-1572442388796-11668a67e53d", 700) },
  { name: "Лате", desc: "М'який, вершковий, багато молока · 250 мл", price: 105, img: u("photo-1561882468-9110e03e0f78", 700) },
  { name: "Раф кава", desc: "Вершки, ваніль, еспресо · 250 мл", price: 125, img: u("photo-1534778101976-62847782c213", 700) },
  { name: "Флет вайт", desc: "Подвійний рістретто та мікропіна · 200 мл", price: 115, img: u("photo-1577968897966-3d4325b36b61", 700) },
];

export const GALLERY = [
  "photo-1509042239860-f550ce710b93",
  "photo-1442512595331-e89e73853f31",
  "photo-1501339847302-ac426a4a7cbb",
  "photo-1511920170033-f8396924c348",
  "photo-1453614512568-c4024d13c247",
  "photo-1497935586351-b67a49e012bf",
].map((id) => u(id));
