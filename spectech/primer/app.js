/* Заявка на спецтехнику — страница клиента.
   Данные клиента нигде не хранятся: только собираются в текст и уходят в его WhatsApp. */
(function () {
  var A = window.STORE.get();
  var I = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h4"/>',
    wa: '<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2.5 2.5 4.5 5 5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    busy: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ask: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'
  };
  var svg = function (p) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>"; };

  var T = {
    ru: {
      cta: "Рассчитать", eyebrow: "Наша техника", h1: "Выберите технику под задачу",
      heroLead: "Выберите машину, укажите адрес и часы — увидите примерную цену и отправите заявку в WhatsApp.",
      heroLeadAsk: "Выберите машину, укажите адрес и часы — заявка уйдёт в WhatsApp, а цену назовёт владелец.",
      flow1: "Техника", flow2: "Объект и часы", flow3: "WhatsApp",
      photoPh: "здесь будет фото техники", perHour: "/час", approx: "≈ ", priceAsk: "Цена — по запросу", byOwner: "назовёт владелец", byOwnerBig: "Цену назовёт владелец",
      byOwnerNote: "Отправьте заявку — владелец посчитает стоимость по адресу, часам и условиям на объекте.",
      rating: function (r, n) { return "★ " + r + " · " + n + " отзывов в 2ГИС"; }, minShift: "мин. смена", hShort: "ч",
      pick: "Выбрать", picked: "Выбрано", pickedBtn: "Выбрана", busyBtn: "Сейчас занята",
      st: { free: "Свободна", busy: "Занята", ask: "Уточнить" },
      calcEyebrow: "Расчёт аренды", h2: "Укажите детали работы",
      h2lead: "Цена пересчитывается сразу. Это предварительная сумма — точную подтвердит владелец.",
      equip: "Техника", choose: "— выберите технику —", optional: "(необязательно)",
      address: "Адрес объекта", addressHint: "Улица, дом или ориентир",
      date: "Дата начала работ", time: "Время подачи", hours: "Сколько часов", zone: "Зона подачи",
      zoneAsk: "рассчитает владелец",
      minNote: function (m) { return "Минимальная смена для этой техники — " + m + " ч. Считаем по минимальной смене."; },
      askNote: "Эту технику владелец сначала проверит: свободна ли она на вашу дату.",
      photo: "У меня есть фото объекта — пришлю в чате",
      photoNote: "Фото помогают оценить подъезд и объём работ. Ссылка WhatsApp передаёт только текст — фото прикрепите в чате.",
      name: "Ваше имя", comment: "Комментарий", commentHint: "Что нужно сделать, подъезд, грунт",
      phone: "Если отправите через WhatsApp, ваш номер придёт вместе с заявкой — отдельно писать телефон не нужно.",
      sEyebrow: "Расчёт заказа", sTitle: "Предварительная стоимость",
      sEquip: "Техника", sHours: "Время работы", sCalcH: "к расчёту", sRent: "Аренда", sZone: "Подача",
      sDate: "Дата", sAddr: "Адрес", empty: "не указано",
      range: function (a, b) { return "от " + a + " до " + b; },
      rangeNote: "Точную стоимость и то, свободна ли техника на вашу дату, владелец подтвердит после проверки адреса и условий на объекте.",
      spreadNote: function (p) { return "Верхняя граница — запас " + p + "% на условия объекта."; },
      plusZone: "+ доставка — рассчитает владелец",
      send: "Отправить заявку в WhatsApp", copy: "Скопировать заявку", copied: "Заявка скопирована",
      noWa: "Номер компании ещё не подключён — это шаблон. Текст заявки можно скопировать.",
      needEquip: "Выберите технику.", needBusy: "Эта техника сейчас занята — выберите другую.",
      needAddr: "Укажите адрес объекта.", needDate: "Укажите дату начала работ.", needPast: "Дата уже прошла — выберите сегодня или позже.",
      needHours: "Укажите, сколько часов нужна техника: от 1 до 24.", needName: "Напишите, как к вам обращаться.",
      mbarEmpty: "Выберите технику", mbarGo: "К заявке",
      owner: "Панель владельца",
      demo: "Демо-шаблон. Цены примерные. Сайт не сохраняет данные заявки — они уходят только в ваш WhatsApp.",
      edits: "Вы видите цены из панели владельца, сохранённые только в этом браузере. Клиенты их не увидят, пока вы не замените config.js на сайте.",
      m: { hello: "Здравствуйте! Хочу заказать спецтехнику.", equip: "Техника", addr: "Адрес", date: "Дата", time: "Время подачи",
           hours: "Время работы", h: "ч", calc: "к расчёту", zone: "Подача", price: "Предварительно", zoneAsk: "доставку рассчитаете вы", plusZone: "+ доставка", bySite: "по сайту", askPrice: "прошу рассчитать", priceL: "Цена",
           photo: "Фото объекта", photoYes: "пришлю в чате", comment: "Комментарий", name: "Имя" }
    },
    kk: {
      cta: "Есептеу", eyebrow: "Біздің техника", h1: "Жұмысыңызға сай техниканы таңдаңыз",
      heroLead: "Машинаны таңдап, мекенжай мен сағатты көрсетіңіз — болжамды бағаны көріп, өтінімді WhatsApp-қа жібересіз.",
      heroLeadAsk: "Машинаны таңдап, мекенжай мен сағатты көрсетіңіз — өтінім WhatsApp-қа кетеді, ал бағасын иесі айтады.",
      flow1: "Техника", flow2: "Нысан мен сағат", flow3: "WhatsApp",
      photoPh: "мұнда техника фотосы болады", perHour: "/сағ", approx: "≈ ", priceAsk: "Бағасы — сұрау бойынша", byOwner: "иесі айтады", byOwnerBig: "Бағасын иесі айтады",
      byOwnerNote: "Өтінім жіберіңіз — иесі құнын мекенжай, сағат және нысандағы жағдай бойынша есептейді.",
      rating: function (r, n) { return "★ " + r + " · 2ГИС-те " + n + " пікір"; }, minShift: "ең аз ауысым", hShort: "сағ",
      pick: "Таңдау", picked: "Таңдалды", pickedBtn: "Таңдалды", busyBtn: "Қазір бос емес",
      st: { free: "Бос", busy: "Бос емес", ask: "Нақтылау керек" },
      calcEyebrow: "Жалға алу есебі", h2: "Жұмыс мәліметтерін көрсетіңіз",
      h2lead: "Баға бірден қайта есептеледі. Бұл алдын ала сома — нақтысын иесі растайды.",
      equip: "Техника", choose: "— техниканы таңдаңыз —", optional: "(міндетті емес)",
      address: "Нысан мекенжайы", addressHint: "Көше, үй немесе бағдар",
      date: "Жұмыс басталатын күн", time: "Келу уақыты", hours: "Неше сағат", zone: "Жеткізу аймағы",
      zoneAsk: "иесі есептейді",
      minNote: function (m) { return "Бұл техниканың ең аз ауысымы — " + m + " сағ. Есепті ең аз ауысым бойынша жасаймыз."; },
      askNote: "Бұл техника сіз таңдаған күнге бос па — иесі алдымен тексереді.",
      photo: "Менде нысанның фотосы бар — чатқа жіберемін",
      photoNote: "Фото техника кіретін жол мен жұмыс көлемін бағалауға көмектеседі. WhatsApp сілтемесі тек мәтінді жібереді — фотоны чатқа тіркеңіз.",
      name: "Атыңыз", comment: "Түсініктеме", commentHint: "Не істеу керек, кіру жолы, топырақ",
      phone: "WhatsApp арқылы жіберсеңіз, нөміріңіз өтініммен бірге келеді — телефонды бөлек жазудың қажеті жоқ.",
      sEyebrow: "Тапсырыс есебі", sTitle: "Алдын ала құн",
      sEquip: "Техника", sHours: "Жұмыс уақыты", sCalcH: "есеп бойынша", sRent: "Жалдау", sZone: "Жеткізу",
      sDate: "Күні", sAddr: "Мекенжай", empty: "көрсетілмеген",
      range: function (a, b) { return a + " – " + b; },
      rangeNote: "Нақты құнын және техника сіз таңдаған күнге бос па екенін иесі мекенжай мен нысандағы жағдайды тексергеннен кейін растайды.",
      spreadNote: function (p) { return "Жоғарғы шегі — нысандағы жағдайға " + p + "% қор."; },
      plusZone: "+ жеткізу — иесі есептейді",
      send: "Өтінімді WhatsApp-қа жіберу", copy: "Өтінімді көшіру", copied: "Өтінім көшірілді",
      noWa: "Компанияның нөмірі әлі қосылмаған — бұл үлгі. Өтінім мәтінін көшіруге болады.",
      needEquip: "Техниканы таңдаңыз.", needBusy: "Бұл техника қазір бос емес — басқасын таңдаңыз.",
      needAddr: "Нысан мекенжайын көрсетіңіз.", needDate: "Жұмыс басталатын күнді көрсетіңіз.", needPast: "Бұл күн өтіп кетті — бүгінді немесе кейінгі күнді таңдаңыз.",
      needHours: "Техника неше сағатқа керек екенін көрсетіңіз: 1-ден 24-ке дейін.", needName: "Атыңызды жазыңыз.",
      mbarEmpty: "Техниканы таңдаңыз", mbarGo: "Өтінімге",
      owner: "Иесінің панелі",
      demo: "Демо-үлгі. Бағалар шамамен көрсетілген. Сайт өтінім деректерін сақтамайды — олар тек сіздің WhatsApp-қа кетеді.",
      edits: "Сіз иесінің панеліндегі, тек осы браузерде сақталған бағаларды көріп отырсыз. Сайттағы config.js ауыстырылмайынша, клиенттер оларды көрмейді.",
      m: { hello: "Сәлеметсіз бе! Арнайы техникаға тапсырыс бергім келеді.", equip: "Техника", addr: "Мекенжай", date: "Күні", time: "Келу уақыты",
           hours: "Жұмыс уақыты", h: "сағ", calc: "есеп бойынша", zone: "Жеткізу", price: "Алдын ала баға", zoneAsk: "жеткізу құнын өзіңіз есептейсіз", plusZone: "+ жеткізу", bySite: "сайт бойынша", askPrice: "есептеп беруіңізді сұраймын", priceL: "Бағасы",
           photo: "Нысан фотосы", photoYes: "чатқа жіберемін", comment: "Түсініктеме", name: "Аты" }
    }
  };

  var lang = "ru";
  try { lang = localStorage.getItem("st-app-lang") === "kk" ? "kk" : "ru"; } catch (e) {}
  var S = { item: null, address: "", date: "", time: "", hours: "", zone: A.zones[0].id, photo: false, comment: "", name: "" };
  var err = "", copied = false;

  var $ = function (id) { return document.getElementById(id); };
  var t = function (k) { return T[lang][k]; };
  var L = function (o) { return o ? (o[lang] || o.ru) : ""; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var M = function (n) { return window.money(n, lang); };
  var item = function () { return A.items.filter(function (x) { return x.id === S.item; })[0]; };
  var zone = function () { return A.zones.filter(function (z) { return z.id === S.zone; })[0]; };

  /* ---------- расчёт ---------- */
  /* часы: число, округлённое до 0,5; пусто или мусор — NaN */
  function hoursVal() {
    var v = String(S.hours).trim().replace(",", ".");
    if (!/^\d+(\.\d+)?$/.test(v)) return NaN;
    return Math.round(parseFloat(v) * 2) / 2;
  }
  var fh = function (n) { return String(n).replace(".", ","); };
  function calc() {
    var it = item(); if (!it) return null;
    var h = hoursVal(), ok = h >= 1 && h <= 24, min = it.min || 0;
    var billH = ok ? Math.max(h, min) : min;
    var z = zone();
    /* цены нет (компания не указала) — сумму не считаем, её назовёт владелец */
    if (it.price == null) return { h: ok ? h : 0, billH: billH, zone: z, under: ok && h < min, noPrice: true };
    var rent = billH * it.price, del = z && z.price !== null ? z.price : 0;
    var base = rent + del;
    var r = typeof A.roundTo === "number" && A.roundTo > 0 ? A.roundTo : 1000;
    var sp = typeof A.spread === "number" && A.spread >= 0 ? A.spread : 0.1;
    return {
      h: ok ? h : 0, billH: billH, rent: rent, zone: z, del: del, under: ok && h < min, sp: sp,
      low: Math.floor(base / r) * r,
      /* Math.round убирает хвост дробей (99000.00000000001), иначе ceil добавлял лишнюю 1000 */
      high: Math.ceil(Math.round(base * (1 + sp)) / r) * r
    };
  }

  /* ---------- каталог ---------- */
  function badge(st) { if (!st || !t("st")[st]) return ""; return '<span class="st st--' + st + '">' + svg(st === "free" ? I.check : I[st]) + t("st")[st] + "</span>"; }
  function cards() {
    $("cards").innerHTML = A.items.map(function (x) {
      var on = S.item === x.id, busy = x.status === "busy";
      return '<article class="card' + (on ? " is-on" : "") + (busy ? " is-busy" : "") + '">' +
        '<span class="badge">' + svg(I.check) + t("picked") + "</span>" +
        '<div class="card__img">' + (x.photo ? '<img src="images/' + esc(x.photo) + '" alt="' + esc(L(x.label)) + '" loading="lazy">'
          : svg(window.EQUIP_ICON[x.icon] || window.EQUIP_ICON.excavator) + "<small>" + t("photoPh") + "</small>") + "</div>" +
        '<div class="card__body"><div class="card__head"><h3 class="card__name">' + esc(L(x.label)) + "</h3>" + badge(x.status) + "</div>" +
        '<p class="card__purpose">' + esc(L(x.purpose)) + "</p>" +
        (x.price == null ? '<p class="card__price card__price--ask"><b>' + t("priceAsk") + "</b>" + (x.min ? "<span>" + t("minShift") + " " + x.min + " " + t("hShort") + "</span>" : "") + "</p>"
          : '<p class="card__price"><b>' + (A.demo || A.examplePrices ? t("approx") : "") + M(x.price) + "</b><span>" + t("perHour") + (x.min ? " · " + t("minShift") + " " + x.min + " " + t("hShort") : "") + "</span></p>") +
        '<button type="button" class="pick" data-item="' + x.id + '"' + (busy ? " disabled" : "") + ' aria-pressed="' + on + '">' +
          (busy ? t("busyBtn") : on ? svg(I.check) + t("pickedBtn") : t("pick")) + "</button></div></article>";
    }).join("");
  }

  /* ---------- форма ---------- */
  function today() { var d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); }
  function ctl(icon, inner) { return '<div class="control">' + svg(icon) + inner + "</div>"; }
  function form() {
    var it = item(), h = "";
    h += '<div class="group"><label class="label" for="equip">' + t("equip") + '</label><select class="input" id="equip" data-key="item"><option value="">' + t("choose") + "</option>" +
      A.items.map(function (x) {
        return '<option value="' + x.id + '"' + (S.item === x.id ? " selected" : "") + (x.status === "busy" ? " disabled" : "") + ">" +
          esc(L(x.label)) + (x.price == null ? "" : " · " + M(x.price) + t("perHour")) + (x.status === "busy" ? " — " + t("st").busy.toLowerCase() : "") + "</option>";
      }).join("") + "</select>" +
      (it && it.status === "ask" ? '<p class="note note--soft">' + svg(I.info) + "<span>" + t("askNote") + "</span></p>" : "") + "</div>";
    h += '<div class="group"><label class="label" for="address">' + t("address") + "</label>" +
      ctl(I.pin, '<input class="input" id="address" data-key="address" autocomplete="street-address" placeholder="' + esc(t("addressHint")) + '" value="' + esc(S.address) + '">') + "</div>";
    h += '<div class="group row">' +
      '<div><label class="label" for="date">' + t("date") + "</label>" + ctl(I.cal, '<input class="input" type="date" id="date" data-key="date" min="' + today() + '" value="' + esc(S.date) + '">') + "</div>" +
      '<div><label class="label" for="time">' + t("time") + " <small>" + t("optional") + "</small></label>" + ctl(I.clock, '<input class="input" type="time" id="time" data-key="time" value="' + esc(S.time) + '">') + "</div></div>";
    h += '<div class="group row">' +
      '<div><label class="label" for="hours">' + t("hours") + "</label>" + ctl(I.clock, '<input class="input" type="text" inputmode="decimal" autocomplete="off" placeholder="1–24" id="hours" data-key="hours" value="' + esc(S.hours) + '">') + "</div>" +
      '<div><label class="label" for="zone">' + t("zone") + '</label><select class="input" id="zone" data-key="zone">' +
        A.zones.map(function (z) { return '<option value="' + z.id + '"' + (S.zone === z.id ? " selected" : "") + ">" + esc(L(z.label)) + " — " + (z.price === null ? t("zoneAsk") : M(z.price)) + "</option>"; }).join("") +
      "</select></div></div>";
    h += '<div class="group" id="minWrap"></div>';
    h += '<div class="group"><label class="check"><input type="checkbox" id="photo"' + (S.photo ? " checked" : "") + "> " + t("photo") + '</label><p class="note">' + svg(I.info) + "<span>" + t("photoNote") + "</span></p></div>";
    h += '<div class="group"><label class="label" for="comment">' + t("comment") + " <small>" + t("optional") + '</small></label><textarea class="input" id="comment" data-key="comment" placeholder="' + esc(t("commentHint")) + '">' + esc(S.comment) + "</textarea></div>";
    h += '<div class="group"><label class="label" for="name">' + t("name") + "</label>" + ctl(I.user, '<input class="input" id="name" data-key="name" autocomplete="given-name" value="' + esc(S.name) + '">') +
      '<p class="hint">' + t("phone") + "</p></div>";
    $("form").innerHTML = h;
    minNote();
  }
  function minNote() {
    var c = calc(), w = $("minWrap"); if (!w) return;
    w.innerHTML = c && c.under ? '<p class="note">' + svg(I.info) + "<span>" + t("minNote")(item().min) + "</span></p>" : "";
    w.hidden = !(c && c.under);
  }

  /* ---------- заявка ---------- */
  function fmtDate(v) {
    if (!v) return "";
    var p = v.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    /* казахские месяцы вручную: не все браузеры знают kk-KZ */
    if (lang === "kk") return +p[0] + " жылғы " + +p[2] + " " + ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"][+p[1] - 1];
    try { return d.toLocaleDateString(lang === "kk" ? "kk-KZ" : "ru-RU", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return v; }
  }
  function problem() {
    var it = item(), c = calc();
    if (!it) return ["needEquip", "equip"];
    if (it.status === "busy") return ["needBusy", "equip"];
    if (!S.address.trim()) return ["needAddr", "address"];
    if (!S.date) return ["needDate", "date"];
    if (S.date < today()) return ["needPast", "date"];
    if (!c.h) return ["needHours", "hours"];
    if (!S.name.trim()) return ["needName", "name"];
    return null;
  }
  function priceText(c, forMsg) {
    var s = t("range")(M(c.low), M(c.high));
    if (forMsg && c.zone.price === null) s += " " + T[lang].m.plusZone;
    return s;
  }
  function message() {
    var m = T[lang].m, it = item(), c = calc(), z = c.zone, lines = [m.hello, ""];
    lines.push(m.equip + ": " + L(it.label) + (it.price == null ? "" : " (" + m.bySite + " " + M(it.price) + t("perHour") + ")"));
    lines.push(m.addr + ": " + S.address.trim());
    lines.push(m.date + ": " + fmtDate(S.date));
    if (S.time) lines.push(m.time + ": " + S.time);
    lines.push(m.hours + ": " + fh(c.h) + " " + m.h + (c.under ? " (" + m.calc + " " + c.billH + " " + m.h + ")" : ""));
    lines.push(m.zone + ": " + L(z.label) + (z.price === null ? " — " + m.zoneAsk : ""));
    lines.push(c.noPrice ? m.priceL + ": " + m.askPrice : m.price + ": " + priceText(c, true));
    if (S.photo) lines.push(m.photo + ": " + m.photoYes);
    if (S.comment.trim()) lines.push(m.comment + ": " + S.comment.trim());
    lines.push(m.name + ": " + S.name.trim());
    return lines.join("\n");
  }
  function line(k, v, sub) {
    return "<div><dt>" + t(k) + "</dt><dd" + (v ? "" : ' class="empty"') + ">" + esc(v || t("empty")) + (sub ? "<small>" + esc(sub) + "</small>" : "") + "</dd></div>";
  }
  function summary() {
    var it = item(), c = calc(), wa = (A.whatsapp || "").replace(/\D/g, ""), ready = !problem();
    var h = '<div class="summary__head"><span class="summary__icon">' + svg(I.calc) + "</span><span><small>" + t("sEyebrow") + "</small><strong>" + t("sTitle") + "</strong></span></div>" +
      '<dl class="lines">' +
      line("sEquip", it ? L(it.label) : "") +
      line("sHours", c && c.h ? fh(c.h) + " " + t("hShort") : "", c && c.under ? t("sCalcH") + ": " + c.billH + " " + t("hShort") : "") +
      (c && c.noPrice ? "" : line("sRent", c && c.h ? M(c.rent) : "", c && c.h ? fh(c.billH) + " × " + M(it.price) : "")) +
      line("sZone", c ? (c.zone.price === null ? t("zoneAsk") : M(c.zone.price)) : "", c ? L(c.zone.label) : "") +
      line("sDate", fmtDate(S.date) + (S.time ? ", " + S.time : "")) +
      "</dl>";
    if (c && c.noPrice) {
      h += '<div class="total total--ask"><b>' + t("byOwnerBig") + "</b><p>" + t("byOwnerNote") + "</p></div>";
    } else if (c && c.h) {
      h += '<div class="total"><b>' + priceText(c) + "</b>" + (c.zone.price === null ? "<small>" + t("plusZone") + "</small>" : "") +
        "<p>" + t("rangeNote") + (c.sp > 0 ? " " + t("spreadNote")(Math.round(c.sp * 100)) : "") + "</p></div>";
    } else {
      h += '<div class="total total--empty"><b>—</b><p>' + t("rangeNote") + "</p></div>";
    }
    if (err) h += '<p class="s-err" role="alert">' + err + "</p>";
    if (wa) h += '<a class="btn btn--wa" id="send" target="_blank" rel="noopener" href="' + (ready ? "https://wa.me/" + wa + "?text=" + encodeURIComponent(message()) : "#details") + '">' + svg(I.wa) + t("send") + "</a>";
    else h += '<span class="btn btn--wa" aria-disabled="true">' + svg(I.wa) + t("send") + "</span>";
    h += '<button type="button" class="btn btn--ghost" id="copy">' + svg(I.copy) + t("copy") + "</button>";
    if (copied) h += '<p class="s-ok">' + t("copied") + "</p>";
    if (!wa) h += '<p class="s-note">' + t("noWa") + "</p>";
    $("summary").innerHTML = h;

    var mb = $("mbar");
    mb.innerHTML = "<span>" + esc(it ? L(it.label) + (c && c.h && !c.noPrice ? " · " + priceText(c, true) : "") : t("mbarEmpty")) + "</span><b>" + t("mbarGo") + "</b>";
    mb.setAttribute("href", it ? "#summary" : "#catalog");
  }

  /* ---------- общее ---------- */
  function texts() {
    document.documentElement.lang = lang === "kk" ? "kk" : "ru";
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.dataset.t); });
    document.querySelectorAll("[data-c]").forEach(function (el) { el.textContent = L(A[el.dataset.c]); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang); });
    $("ownerLink").hidden = !A.ownerLink;
    $("demo").hidden = !A.demo;
    if (A.items.every(function (x) { return x.price == null; })) document.querySelector('[data-t="heroLead"]').textContent = t("heroLeadAsk");
    if (A.slug) document.title = L(A.name) + " — заявка (демо)";
    var db = $("demobar"); db.hidden = !A.demoText; if (A.demoText) db.textContent = L(A.demoText);
    var rt = $("rating");
    if (rt) { rt.hidden = !A.rating; if (A.rating) { rt.textContent = t("rating")(A.rating.value, A.rating.count); rt.href = A.rating.url; } }
    var eb = $("edits"); eb.textContent = t("edits"); eb.hidden = !window.STORE.hasEdits();
  }
  function all() { texts(); cards(); form(); summary(); }
  function setItem(id, scroll) {
    var it = A.items.filter(function (x) { return x.id === id; })[0];
    if (it && it.status === "busy") return;
    S.item = id || null;
    if (it && !S.hours && it.min) S.hours = String(it.min);
    err = ""; copied = false; cards(); form(); summary();
    if (scroll && id) $("details").scrollIntoView({ behavior: "smooth" });
  }
  function soft() { if (err) { var p = problem(); err = p ? t(p[0]) : ""; } copied = false; minNote(); summary(); }

  $("cards").addEventListener("click", function (e) { var b = e.target.closest("[data-item]"); if (b && !b.disabled) setItem(b.dataset.item, true); });
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("st-app-lang", lang); } catch (e) {} soft(); all(); });
  });

  var F = $("form");
  F.addEventListener("submit", function (e) { e.preventDefault(); });
  F.addEventListener("input", function (e) {
    var el = e.target, k = el.dataset.key;
    if (!k || k === "item" || k === "zone") return;
    S[k] = el.value;
    if (String(el.value).trim()) el.removeAttribute("aria-invalid");
    soft();
  });
  F.addEventListener("change", function (e) {
    var el = e.target;
    if (el.id === "equip") setItem(el.value, false);
    else if (el.id === "zone") { S.zone = el.value; soft(); }
    else if (el.id === "photo") { S.photo = el.checked; soft(); }
    else if (el.dataset.key) { S[el.dataset.key] = el.value; soft(); }
  });

  $("summary").addEventListener("click", function (e) {
    var send = e.target.closest("#send"), copy = e.target.closest("#copy");
    if (!send && !copy) return;
    var p = problem();
    if (p) {
      e.preventDefault(); err = t(p[0]); summary();
      var target = !S.item ? $("catalog") : $(p[1]);
      if (target.classList.contains("input")) { target.setAttribute("aria-invalid", "true"); target.focus({ preventScroll: true }); }
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    err = "";
    if (copy && navigator.clipboard) navigator.clipboard.writeText(message()).then(function () { copied = true; summary(); }, function () {});
  });

  all();
})();
