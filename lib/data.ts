export const COMPANY = {
  name: "Мир Ремонта",
  city: "Семей",
  tagline: "Качество на складе. Цена на месте.",
  phone: "+7 701 800 20 23",
  phoneHref: "tel:+77018002023",
  whatsapp: "https://wa.me/77018002023",
  email: "Mirremonta16@yandex.ru",
  address: "Абайская обл., г. Семей, ул. Чайковского 71А",
  hours: "Пн–Вс, 09:00–18:00",
  instagram: "https://instagram.com/mir_remonta_semey1",
  instagramHandle: "@mir_remonta_semey1",
  since: 2008,
  legalName: "ТОО «Атмосфера Уюта»",
  iik: "KZ128562203130326340",
  bank: "АО «Банк Центр Кредит»",
  bik: "KCBKZKX",
} as const;

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  span: "wide" | "tall" | "square";
  items: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "metal",
    title: "Металлопрокат",
    subtitle: "Трубы, арматура, уголок",
    image: "/images/cat-metal.jpg",
    span: "wide",
    items: [
      "Трубы профильные",
      "Трубы водогазопроводные",
      "Арматура",
      "Уголок и швеллер",
      "Катанка и полоса",
    ],
  },
  {
    id: "smes",
    title: "Сухие смеси",
    subtitle: "Knauf · Ceresit · Tytan",
    image: "/images/cat-smes.jpg",
    span: "square",
    items: ["Цемент", "Штукатурки", "Шпаклёвки", "Клей для плитки"],
  },
  {
    id: "wood",
    title: "Плитные материалы",
    subtitle: "Фанера · ОСБ · гипсокартон",
    image: "/images/cat-wood.jpg",
    span: "square",
    items: ["Фанера ФК и ФСФ", "ОСБ-3", "Гипсокартон", "ДВП и ДСП"],
  },
  {
    id: "profnastil",
    title: "Профнастил",
    subtitle: "Кровля и забор",
    image: "/images/cat-profnastil.jpg",
    span: "square",
    items: [
      "Кровельный C-21",
      "Стеновой С-8",
      "Несущий H-75",
      "Доборные элементы",
    ],
  },
  {
    id: "doors",
    title: "Двери",
    subtitle: "Деревянные и металлические",
    image: "/images/cat-doors.jpg",
    span: "square",
    items: ["Межкомнатные", "Входные", "Двери для бани", "Фурнитура"],
  },
  {
    id: "floor",
    title: "Напольные покрытия",
    subtitle: "Ламинат, линолеум, погонаж",
    image: "/images/cat-floor.jpg",
    span: "wide",
    items: [
      "Ламинат 32/33 класс",
      "Линолеум",
      "Вагонка и блок-хаус",
      "Плинтус и порожки",
    ],
  },
];

export const BRANDS = [
  "KNAUF",
  "CERESIT",
  "TYTAN",
  "ALINEX",
  "ALIT",
  "ИЗОСПАН",
  "TECHNONICOL",
  "URSA",
];

export const PROMISES = [
  {
    n: "01",
    title: "Гарантия цены",
    text: "Нашли дешевле в Семее — снизим. Просто пришлите фото или скриншот.",
  },
  {
    n: "02",
    title: "Свой склад 1 200 м²",
    text: "Всё в наличии. Без долгих ожиданий поставок и предзаказов.",
  },
  {
    n: "03",
    title: "Доставка по городу",
    text: "От 1 часа по Семею. До дома, объекта или на дачу.",
  },
  {
    n: "04",
    title: "Опт и розница",
    text: "Работаем с прорабами и частниками. Безналичный расчёт для юр. лиц.",
  },
];

export const PROMOS = [
  {
    title: "Деревянная дверь для бани",
    desc: "Цельный массив сосны. Доставим и поможем с установкой.",
    badge: "−15%",
  },
  {
    title: "Профнастил кровельный",
    desc: "Прямые поставки с завода. Любой цвет под заказ за 3 дня.",
    badge: "Хит",
  },
  {
    title: "Полный комплект для бани",
    desc: "Вагонка, дверь, погонаж и крепёж — собираем под ключ.",
    badge: "Комплект",
  },
];
