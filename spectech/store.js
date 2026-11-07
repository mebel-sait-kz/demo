/* Общие данные для страницы клиента и панели владельца.
   Правки из «Панели владельца» лежат только в этом браузере (localStorage).
   Чтобы их увидели клиенты, владелец скачивает новый config.js и заменяет файл на сайте. */
(function () {
  var KEY = "st-owner-v1";
  var base = JSON.parse(JSON.stringify(window.APP));

  function read() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }

  function merged() {
    var o = read(), a = JSON.parse(JSON.stringify(base));
    if (typeof o.whatsapp === "string") a.whatsapp = o.whatsapp;
    a.items.forEach(function (x) {
      var p = (o.items || {})[x.id]; if (!p) return;
      if (p.price !== undefined) x.price = p.price;
      if (p.min !== undefined) x.min = p.min;
      if (p.status) x.status = p.status;
    });
    a.zones.forEach(function (z) {
      var p = (o.zones || {})[z.id]; if (p !== undefined) z.price = p;
    });
    return a;
  }

  window.STORE = {
    base: base,
    hasEdits: function () { return Object.keys(read()).length > 0; },
    get: merged,
    save: function (a) {
      var o = { whatsapp: a.whatsapp, items: {}, zones: {} };
      a.items.forEach(function (x) { o.items[x.id] = { price: x.price, min: x.min, status: x.status }; });
      a.zones.forEach(function (z) { o.zones[z.id] = z.price; });
      try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; }
    },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} },
    /* текст нового config.js с текущими ценами и статусами */
    configText: function (a) {
      return "/* Настройки приложения «Заявка на спецтехнику». Скачано из Панели владельца " +
        new Date().toLocaleDateString("ru-RU") + ". Положите вместо старого config.js. */\n" +
        "window.APP = " + JSON.stringify(Object.assign({}, a, { demo: false, ownerLink: false }), null, 2) + ";\n";
    }
  };

  /* общий помощник: формат денег */
  window.money = function (n, lang) {
    return Math.round(n).toLocaleString(lang === "kk" ? "kk-KZ" : "ru-RU").replace(/,/g, " ") + " ₸";
  };

  /* рисунки-заглушки техники (свои, простые линии) */
  window.EQUIP_ICON = {
    excavator: '<path d="M3 17h11v-4H6l-1 4"/><circle cx="6" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><path d="M14 13l3-7 4 4-2 3h-3"/><path d="M8 13V9h4v4"/>',
    mini: '<rect x="4" y="15" width="10" height="4" rx="2"/><path d="M6 15v-4h5v4M11 11l4-5 3 4-2 2"/>',
    crawler: '<rect x="2" y="16" width="13" height="4" rx="2"/><path d="M4 16v-4h9v4M7 12V8h5v4M13 10l5-6 4 5-3 3"/>',
    loader: '<circle cx="7" cy="18" r="3"/><circle cx="16" cy="18" r="2"/><path d="M4 15V9h6v6M10 12h6l1 4M17 11l3-1v5h-3"/>',
    truck: '<path d="M2 16V8h11v8M13 11h4l3 3v2"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M2 8l3-3h8"/>',
    crane: '<path d="M2 16v-4h12v4M14 13h4l2 3"/><circle cx="5" cy="18" r="2"/><circle cx="16" cy="18" r="2"/><path d="M6 12L18 3M18 3v8"/>',
    manipulator: '<path d="M2 16v-5h13v5M15 12h3l3 3v1"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M5 11V6l6-3 2 3"/>',
    lift: '<path d="M2 17v-4h14v4M16 14h3l2 3"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M8 13L15 4M13 3h5v3h-5z"/>'
  };
})();
