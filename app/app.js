/* Заявка на мебель — приложение-шаблон FurnitureWeb.
   Данные клиента нигде не хранятся: только собираются в текст и уходят в его WhatsApp. */
(function () {
  var A = window.APP;
  var ICON = {
    kitchen: '<path d="M3 11h18v9H3zM3 11V7h18v4M8 15h.01M12 11v9M7 4h2M15 4h2"/>',
    wardrobe: '<path d="M5 3h14v17H5zM12 3v17M9.5 11v2M14.5 11v2M6 20v1M18 20v1"/>',
    table: '<path d="M3 9h18l-1.5 3h-15zM6 12v8M18 12v8M9 12v4M15 12v4"/>',
    hall: '<path d="M4 8h16v11H4zM4 13.5h16M10 10.5h4M10 16h4M6 19v2M18 19v2M8 8V4h8v4"/>',
    other: '<path d="M14.5 4.5l5 5L9 20H4v-5zM12.5 6.5l5 5"/>'
  };
  var I = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', ruler: '<path d="M3 17L17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    doc: '<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"/>', wa: '<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2.5 2.5 4.5 5 5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'
  };
  var svg = function (p) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>"; };

  var T = {
    ru: {
      cta: "Оставить заявку", eyebrow: "Мебель на заказ", h1: "Выберите мебель под вашу задачу",
      heroLead: "Делаем по вашим размерам. Выберите вид мебели, укажите детали — заявка уйдёт мастеру в WhatsApp.",
      flow1: "Выберите", flow2: "Детали", flow3: "WhatsApp",
      photoPh: "здесь будут фото работ", pick: "Выбрать", picked: "Выбрано", priceNone: "Цена — по размерам",
      h2: "Укажите детали", h2lead: "Чем подробнее, тем точнее мастер назовёт цену и сроки. Не знаете размеры — оставьте пустым.",
      kind: "Вид мебели", choose: "— выберите —", variant: "Уточните вид", optional: "(необязательно)",
      sizes: "Размеры", material: "Материал", extras: "Пожелания", when: "Когда нужно",
      photo: "У меня есть фото или эскиз — пришлю в чате",
      photoNote: "Ссылка WhatsApp передаёт только текст. После отправки прикрепите фото прямо в чате.",
      district: "Район или адрес", districtHint: "Например: Алатауский район, мкр Байбесик", name: "Ваше имя",
      comment: "Комментарий", commentHint: "Цвет, фурнитура, что важно",
      sEyebrow: "Ваша заявка", sTitle: "Что получит мастер", total: "Цена", totalVal: "мастер рассчитает",
      sKind: "Мебель", sVariant: "Вид", sSize: "Размеры", sMat: "Материал", sExtras: "Пожелания", sWhen: "Когда", sName: "Имя",
      empty: "не указано", send: "Отправить в WhatsApp", copy: "Скопировать текст", copied: "Текст скопирован",
      noWa: "Номер мастерской ещё не подключён — это шаблон. Текст заявки можно скопировать.",
      needType: "Выберите вид мебели в каталоге.", needName: "Напишите, как к вам обращаться.", needField: "Опишите, что нужно.",
      phone: "Телефон не нужен: заявка придёт с вашего номера WhatsApp.",
      mbarEmpty: "Выберите мебель", mbarGo: "К заявке",
      demo: "Демо-шаблон FurnitureWeb. Данные заявки никуда не сохраняются.",
      m: { hello: "Здравствуйте! Заявка на мебель.", what: "Что нужно", size: "Размеры", sizeNone: "уточним",
           material: "Материал", extras: "Пожелания", when: "Когда нужно", comment: "Комментарий", photo: "Фото",
           photoYes: "пришлю в чате", district: "Район / адрес", name: "Имя" }
    },
    kk: {
      cta: "Өтінім қалдыру", eyebrow: "Тапсырыспен жиһаз", h1: "Міндетіңізге сай жиһаз таңдаңыз",
      heroLead: "Өлшеміңізге қарай жасаймыз. Жиһаз түрін таңдап, мәліметтерді көрсетіңіз — өтінім шеберге WhatsApp арқылы барады.",
      flow1: "Таңдаңыз", flow2: "Мәліметтер", flow3: "WhatsApp",
      photoPh: "мұнда жұмыс фотолары болады", pick: "Таңдау", picked: "Таңдалды", priceNone: "Бағасы — өлшемге қарай",
      h2: "Мәліметтерді көрсетіңіз", h2lead: "Неғұрлым толық жазсаңыз, шебер бағасы мен мерзімін соғұрлым дәл айтады. Өлшемін білмесеңіз — бос қалдырыңыз.",
      kind: "Жиһаз түрі", choose: "— таңдаңыз —", variant: "Түрін нақтылаңыз", optional: "(міндетті емес)",
      sizes: "Өлшемдері", material: "Материалы", extras: "Тілектер", when: "Қашан керек",
      photo: "Менде фото немесе эскиз бар — чатта жіберемін",
      photoNote: "WhatsApp сілтемесі тек мәтін жібереді. Өтінімді жібергеннен кейін фотоны чатқа тіркеңіз.",
      district: "Аудан немесе мекенжай", districtHint: "Мысалы: Алатау ауданы, Байбесік шағын ауданы", name: "Атыңыз",
      comment: "Түсініктеме", commentHint: "Түсі, фурнитура, не маңызды",
      sEyebrow: "Сіздің өтініміңіз", sTitle: "Шебер не алады", total: "Бағасы", totalVal: "шебер есептейді",
      sKind: "Жиһаз", sVariant: "Түрі", sSize: "Өлшемдері", sMat: "Материалы", sExtras: "Тілектер", sWhen: "Қашан", sName: "Аты",
      empty: "көрсетілмеген", send: "WhatsApp-қа жіберу", copy: "Мәтінді көшіру", copied: "Мәтін көшірілді",
      noWa: "Шеберхананың нөмірі әлі қосылмаған — бұл үлгі. Өтінім мәтінін көшіруге болады.",
      needType: "Каталогтан жиһаз түрін таңдаңыз.", needName: "Сізге қалай хабарласу керегін жазыңыз.", needField: "Не керек екенін жазыңыз.",
      phone: "Телефон керек емес: өтінім сіздің WhatsApp нөміріңізден келеді.",
      mbarEmpty: "Жиһаз таңдаңыз", mbarGo: "Өтінімге",
      demo: "FurnitureWeb демо-үлгісі. Өтінім деректері ешқайда сақталмайды.",
      m: { hello: "Сәлеметсіз бе! Жиһазға өтінім.", what: "Не керек", size: "Өлшемдері", sizeNone: "нақтылаймыз",
           material: "Материалы", extras: "Тілектер", when: "Қашан керек", comment: "Түсініктеме", photo: "Фото",
           photoYes: "чатта жіберемін", district: "Аудан / мекенжай", name: "Аты" }
    }
  };

  var lang = "ru";
  try { lang = localStorage.getItem("fw-app-lang") === "kk" ? "kk" : "ru"; } catch (e) {}
  var S = { type: null, variant: null, vals: {}, material: null, extras: [], when: null, photo: false, comment: "", district: "", name: "" };
  var err = "", copied = false;

  var $ = function (id) { return document.getElementById(id); };
  var t = function (k) { return T[lang][k]; };
  var L = function (o) { return o ? (o[lang] || o.ru) : ""; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var type = function () { return A.types.filter(function (x) { return x.id === S.type; })[0]; };

  /* ---------- каталог ---------- */
  function cards() {
    $("cards").innerHTML = A.types.map(function (x) {
      var on = S.type === x.id;
      return '<button type="button" class="card' + (on ? " is-on" : "") + '" data-type="' + x.id + '" aria-pressed="' + on + '">' +
        '<span class="badge">' + svg(I.check) + t("picked") + "</span>" +
        '<span class="card__img">' + (x.photo ? '<img src="images/' + esc(x.photo) + '" alt="' + esc(L(x.label)) + '" loading="lazy">'
          : svg(ICON[x.id] || ICON.other) + "<small>" + t("photoPh") + "</small>") + "</span>" +
        '<span class="card__body"><span class="card__name">' + esc(L(x.label)) + "</span>" +
        '<span class="card__purpose">' + esc(L(x.purpose)) + "</span>" +
        '<span class="card__foot"><span class="price">' + esc(x.price ? L(x.price) : t("priceNone")) + "</span>" +
        '<span class="pick">' + (on ? svg(I.check) + t("picked") : t("pick")) + "</span></span></span></button>";
    }).join("");
  }

  /* ---------- форма ---------- */
  function chips(list, isOn, attr) {
    return '<div class="chips">' + list.map(function (o, i) {
      return '<button type="button" class="chip" data-' + attr + '="' + i + '" aria-pressed="' + isOn(i) + '">' + esc(L(o)) + "</button>";
    }).join("") + "</div>";
  }
  function field(f) {
    var v = S.vals[f.id] || "";
    return '<div class="' + (f.kind === "text" ? "wide" : "") + '"><label class="label" for="f-' + f.id + '">' + esc(L(f.label)) + "</label>" +
      '<input class="input" id="f-' + f.id + '" data-val="' + f.id + '" value="' + esc(v) + '"' + (f.kind === "num" ? ' inputmode="decimal"' : "") + ">" +
      (f.hint ? '<p class="hint">' + esc(L(f.hint)) + "</p>" : "") + "</div>";
  }
  function form() {
    var ty = type(), h = "";
    h += '<div class="group"><label class="label" for="kind">' + t("kind") + '</label><select class="input" id="kind"><option value="">' + t("choose") + "</option>" +
      A.types.map(function (x) { return '<option value="' + x.id + '"' + (S.type === x.id ? " selected" : "") + ">" + esc(L(x.label)) + "</option>"; }).join("") + "</select></div>";
    if (ty && ty.variants.length) h += '<div class="group"><p class="label">' + t("variant") + " <small>" + t("optional") + "</small></p>" + chips(ty.variants, function (i) { return S.variant === i; }, "variant") + "</div>";
    if (ty) h += '<div class="group"><div class="row row--3">' + ty.fields.map(field).join("") + "</div></div>";
    h += '<div class="group"><p class="label">' + t("material") + "</p>" + chips(A.materials, function (i) { return S.material === i; }, "material") + "</div>";
    h += '<div class="group"><p class="label">' + t("extras") + " <small>" + t("optional") + "</small></p>" + chips(A.extras, function (i) { return S.extras.indexOf(i) > -1; }, "extra") + "</div>";
    h += '<div class="group"><p class="label">' + t("when") + "</p>" + chips(A.when, function (i) { return S.when === i; }, "when") + "</div>";
    h += '<div class="group row">' +
      '<div><label class="label" for="name">' + t("name") + '</label><div class="control">' + svg(I.user) + '<input class="input" id="name" data-key="name" autocomplete="given-name" value="' + esc(S.name) + '"></div></div>' +
      '<div><label class="label" for="district">' + t("district") + ' <small>' + t("optional") + '</small></label><div class="control">' + svg(I.pin) + '<input class="input" id="district" data-key="district" value="' + esc(S.district) + '"></div><p class="hint">' + t("districtHint") + "</p></div></div>";
    h += '<div class="group"><p class="hint" style="margin:0">' + t("phone") + "</p></div>";
    h += '<div class="group"><label class="check"><input type="checkbox" id="photo"' + (S.photo ? " checked" : "") + "> " + t("photo") + '</label><p class="note">' + svg(I.info) + "<span>" + t("photoNote") + "</span></p></div>";
    h += '<div class="group"><label class="label" for="comment">' + t("comment") + " <small>" + t("optional") + '</small></label><textarea class="input" id="comment" data-key="comment" placeholder="' + esc(t("commentHint")) + '">' + esc(S.comment) + "</textarea></div>";
    $("form").innerHTML = h;
  }

  /* ---------- заявка ---------- */
  function sizes() {
    var ty = type(); if (!ty) return [];
    return ty.fields.filter(function (f) { return f.id !== "what" && (S.vals[f.id] || "").trim(); }).map(function (f) {
      var p = L(f.label).split(", ");
      return p[0] + " " + S.vals[f.id].trim() + (p[1] ? " " + p[1] : "");
    });
  }
  function message() {
    var m = T[lang].m, ty = type(), lines = [m.hello];
    var what = L(ty.label) + (S.variant !== null ? " — " + L(ty.variants[S.variant]) : "");
    if (ty.id === "other" && (S.vals.what || "").trim()) what = S.vals.what.trim();
    lines.push(m.what + ": " + what);
    var sz = sizes(); lines.push(m.size + ": " + (sz.length ? sz.join(", ") : m.sizeNone));
    if (S.material !== null) lines.push(m.material + ": " + L(A.materials[S.material]));
    if (S.extras.length) lines.push(m.extras + ": " + S.extras.map(function (i) { return L(A.extras[i]); }).join(", "));
    if (S.when !== null) lines.push(m.when + ": " + L(A.when[S.when]));
    if (S.comment.trim()) lines.push(m.comment + ": " + S.comment.trim());
    if (S.photo) lines.push(m.photo + ": " + m.photoYes);
    if (S.district.trim()) lines.push(m.district + ": " + S.district.trim());
    lines.push(m.name + ": " + S.name.trim());
    return lines.join("\n");
  }
  function problem() {
    var ty = type();
    if (!ty) return t("needType");
    if (ty.fields.some(function (f) { return f.req && !(S.vals[f.id] || "").trim(); })) return t("needField");
    if (!S.name.trim()) return t("needName");
    return "";
  }
  function line(k, v) { return "<div><dt>" + t(k) + "</dt><dd" + (v ? "" : ' class="empty"') + ">" + esc(v || t("empty")) + "</dd></div>"; }
  function summary() {
    var ty = type(), wa = (A.whatsapp || "").replace(/\D/g, ""), sz = sizes(), ready = !problem();
    var h = '<div class="summary__head"><span class="summary__icon">' + svg(I.doc) + "</span><span><small>" + t("sEyebrow") + "</small><strong>" + t("sTitle") + "</strong></span></div>" +
      '<dl class="lines">' +
      line("sKind", ty ? (ty.id === "other" && (S.vals.what || "").trim() ? S.vals.what.trim() : L(ty.label)) : "") +
      (ty && ty.variants.length ? line("sVariant", S.variant !== null ? L(ty.variants[S.variant]) : "") : "") +
      line("sSize", sz.join(", ")) +
      line("sMat", S.material !== null ? L(A.materials[S.material]) : "") +
      line("sExtras", S.extras.map(function (i) { return L(A.extras[i]); }).join(", ")) +
      line("sWhen", S.when !== null ? L(A.when[S.when]) : "") +
      line("sName", S.name.trim()) + "</dl>" +
      '<div class="total"><span>' + t("total") + "</span><b>" + t("totalVal") + "</b></div>";
    if (err) h += '<p class="s-err" role="alert">' + err + "</p>";
    if (wa) h += '<a class="btn btn--wa" id="send" target="_blank" rel="noopener" href="' + (ready ? "https://wa.me/" + wa + "?text=" + encodeURIComponent(message()) : "#details") + '">' + svg(I.wa) + t("send") + "</a>";
    else h += '<span class="btn btn--wa" aria-disabled="true">' + svg(I.wa) + t("send") + "</span>";
    h += '<button type="button" class="btn btn--ghost" id="copy">' + svg(I.copy) + t("copy") + "</button>";
    if (copied) h += '<p class="s-ok">' + t("copied") + "</p>";
    if (!wa) h += '<p class="s-note">' + t("noWa") + "</p>";
    $("summary").innerHTML = h;

    var mb = $("mbar");
    mb.innerHTML = "<span>" + esc(ty ? L(ty.label) + (S.variant !== null ? " · " + L(ty.variants[S.variant]) : "") : t("mbarEmpty")) + "</span><b>" + t("mbarGo") + "</b>";
    mb.setAttribute("href", ty ? "#summary" : "#catalog");
  }

  /* ---------- общее ---------- */
  function texts() {
    document.documentElement.lang = lang === "kk" ? "kk" : "ru";
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.dataset.t); });
    document.querySelectorAll("[data-c]").forEach(function (el) { el.textContent = L(A[el.dataset.c]); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang); });
  }
  function all() { texts(); cards(); form(); summary(); }
  function setType(id, scroll) {
    if (S.type !== id) { S.type = id || null; S.variant = null; S.vals = {}; }
    err = ""; copied = false; cards(); form(); summary();
    if (scroll && id) $("details").scrollIntoView({ behavior: "smooth" });
  }
  function soft() { if (err) err = problem(); copied = false; summary(); }

  $("cards").addEventListener("click", function (e) { var b = e.target.closest("[data-type]"); if (b) setType(b.dataset.type, true); });
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("fw-app-lang", lang); } catch (e) {} if (err) err = problem(); all(); });
  });

  var F = $("form");
  F.addEventListener("submit", function (e) { e.preventDefault(); });
  F.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    var d = b.dataset, i;
    if (d.variant !== undefined) { i = +d.variant; S.variant = S.variant === i ? null : i; cards(); }
    else if (d.material !== undefined) { i = +d.material; S.material = S.material === i ? null : i; }
    else if (d.when !== undefined) { i = +d.when; S.when = S.when === i ? null : i; }
    else if (d.extra !== undefined) { i = +d.extra; var k = S.extras.indexOf(i); if (k > -1) S.extras.splice(k, 1); else S.extras.push(i); }
    b.parentNode.querySelectorAll(".chip").forEach(function (c) {
      var cd = c.dataset;
      var on = cd.variant !== undefined ? S.variant === +cd.variant : cd.material !== undefined ? S.material === +cd.material :
               cd.when !== undefined ? S.when === +cd.when : S.extras.indexOf(+cd.extra) > -1;
      c.setAttribute("aria-pressed", on);
    });
    soft();
  });
  F.addEventListener("input", function (e) {
    var el = e.target;
    if (el.dataset.val) S.vals[el.dataset.val] = el.value; else if (el.dataset.key) S[el.dataset.key] = el.value;
    if (el.value.trim()) el.removeAttribute("aria-invalid");
    soft();
  });
  F.addEventListener("change", function (e) {
    if (e.target.id === "kind") setType(e.target.value, false);
    else if (e.target.id === "photo") { S.photo = e.target.checked; soft(); }
  });

  $("summary").addEventListener("click", function (e) {
    var send = e.target.closest("#send"), copy = e.target.closest("#copy");
    if (!send && !copy) return;
    err = problem();
    if (err) {
      e.preventDefault(); summary();
      var target = !S.type ? $("catalog") : (type().fields.some(function (f) { return f.req && !(S.vals[f.id] || "").trim(); }) ? $("f-what") : $("name"));
      if (target.classList.contains("input")) { target.setAttribute("aria-invalid", "true"); target.focus({ preventScroll: true }); }
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (copy && navigator.clipboard) navigator.clipboard.writeText(message()).then(function () { copied = true; summary(); }, function () {});
  });

  all();
})();
