/* Демо для компании Ank Construction.
   Источник всех фактов — карточка 2ГИС https://2gis.kz/almaty/firm/70000001105807996 , снято 07.11.2026:
   ул. Саги Ашимова, 145 (мкр Айгерим-1, Алатауский р-н, Алматы); круглосуточно;
   техника (атрибут «Аренда техники»): тралы, тракторы, автокраны, экскаваторы, бульдозеры, погрузчики, ямобуры, самосвалы;
   WhatsApp из карточки +7 702 383 82 88; рейтинг 5.0, 7 отзывов.
   Цен в 2ГИС нет → в демо ПРИМЕРНЫЕ цены (как в шаблоне app/config.js; трактор — 7–20 тыс. ₸/ч по digitalbusiness.kz),
   с пометкой «≈»; бульдозер/ямобур/трал — «по запросу» (на рынке «договорная»). Статусы неизвестны → null. */
window.APP = {
  slug: "ank-construction",
  demo: false,
  examplePrices: true,
  demoText: { ru: "Демо-пример для Ank Construction. Сделан по открытым данным 2ГИС — это не официальный сайт компании. Цены — примерные по рынку, владелец меняет их в своей панели.", kk: "Ank Construction үшін демо-үлгі. 2ГИС-тегі ашық деректер бойынша жасалған — бұл компанияның ресми сайты емес. Бағалар нарық бойынша шамамен алынған, иесі оларды өз панелінде өзгертеді." },
  name: { ru: "Ank Construction", kk: "Ank Construction" },
  sub: { ru: "Аренда спецтехники", kk: "Арнайы техниканы жалға беру" },
  city: { ru: "Алматы, ул. Саги Ашимова, 145", kk: "Алматы, Сағи Әшімов к-сі, 145" },
  hours: { ru: "Круглосуточно", kk: "Тәулік бойы" },
  whatsapp: "77023838288",
  ownerLink: true,
  rating: { value: "5,0", count: 7, url: "https://2gis.kz/almaty/firm/70000001105807996/tab/reviews" },

  roundTo: 1000,
  spread: 0.1,

  items: [
    { id: "excavator", icon: "crawler", photo: null, price: 22000, min: 8, status: null,
      label: { ru: "Экскаватор", kk: "Экскаватор" },
      purpose: { ru: "Котлованы, траншеи, снос", kk: "Қазаншұңқыр, траншея, бұзу жұмыстары" } },
    { id: "loader", icon: "loader", photo: null, price: 16000, min: 4, status: null,
      label: { ru: "Погрузчик", kk: "Тиегіш" },
      purpose: { ru: "Погрузка грунта и материалов", kk: "Топырақ пен материал тиеу" } },
    { id: "bulldozer", icon: "bulldozer", photo: null, price: null, min: null, status: null,
      label: { ru: "Бульдозер", kk: "Бульдозер" },
      purpose: { ru: "Планировка и выравнивание участка", kk: "Учаскені тегістеу" } },
    { id: "truck", icon: "truck", photo: null, price: 12000, min: 4, status: null,
      label: { ru: "Самосвал", kk: "Самосвал" },
      purpose: { ru: "Вывоз грунта и мусора, песок, щебень", kk: "Топырақ пен қоқыс тасу, құм, қиыршық тас" } },
    { id: "crane", icon: "crane", photo: null, price: 15000, min: 4, status: null,
      label: { ru: "Автокран", kk: "Автокран" },
      purpose: { ru: "Подъём и монтаж конструкций", kk: "Конструкцияларды көтеру және монтаждау" } },
    { id: "tractor", icon: "tractor", photo: null, price: 12000, min: 4, status: null,
      label: { ru: "Трактор", kk: "Трактор" },
      purpose: { ru: "Земляные и хозяйственные работы", kk: "Жер және шаруашылық жұмыстары" } },
    { id: "auger", icon: "auger", photo: null, price: null, min: null, status: null,
      label: { ru: "Ямобур", kk: "Ямобур" },
      purpose: { ru: "Бурение ям под сваи и столбы", kk: "Қада мен бағанаға шұңқыр бұрғылау" } },
    { id: "trawl", icon: "trawl", photo: null, price: null, min: null, status: null,
      label: { ru: "Трал", kk: "Трал" },
      purpose: { ru: "Перевозка техники и тяжёлых грузов", kk: "Техника мен ауыр жүк тасымалдау" } }
  ],

  zones: [
    { id: "city", price: 10000, label: { ru: "В пределах города", kk: "Қала ішінде" } },
    { id: "near", price: 25000, label: { ru: "До 30 км от города", kk: "Қаладан 30 км-ге дейін" } },
    { id: "far", price: null, label: { ru: "Дальше 30 км", kk: "30 км-ден әрі" } }
  ]
};
