/* Панель владельца: цены, минимальная смена, статусы, доставка, номер WhatsApp. */
(function () {
  var A = window.STORE.get();
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var svg = function (p) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>"; };
  var ST = { free: "Свободна", busy: "Занята", ask: "Уточнить" };
  var savedAt = null;

  $("oName").textContent = A.name.ru;

  function stats() {
    var n = { free: 0, busy: 0, ask: 0 };
    A.items.forEach(function (x) { n[x.status]++; });
    var box = function (k, label, col, bg, ico) {
      return '<div class="stat"><i style="color:' + col + ";background:" + bg + '">' + svg(ico) + "</i><div><b>" + n[k] + "</b><span>" + label + "</span></div></div>";
    };
    $("stats").innerHTML =
      box("free", "Свободны", "var(--ok)", "var(--ok-soft)", '<path d="M5 12.5l4.5 4.5L19 7.5"/>') +
      box("busy", "Заняты", "var(--muted)", "rgba(147,166,179,.14)", '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>') +
      box("ask", "Уточнить", "var(--warn)", "var(--warn-soft)", '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>');
  }

  function items() {
    $("items").innerHTML = A.items.map(function (x, i) {
      return '<div class="o-card" data-i="' + i + '">' +
        '<div class="o-card__top"><span class="o-card__ico">' + svg(window.EQUIP_ICON[x.icon] || window.EQUIP_ICON.excavator) + "</span>" +
        "<div><strong>" + esc(x.label.ru) + "</strong><span>" + esc(x.purpose.ru) + "</span></div></div>" +
        '<div class="row">' +
          '<div><label class="label" for="p' + i + '">Цена за час, ₸</label><input class="input" id="p' + i + '" type="number" min="0" step="500" inputmode="numeric" data-f="price" value="' + x.price + '"></div>' +
          '<div><label class="label" for="m' + i + '">Мин. смена, ч</label><input class="input" id="m' + i + '" type="number" min="1" max="24" inputmode="numeric" data-f="min" value="' + x.min + '"></div>' +
        "</div>" +
        '<div class="seg" role="group" aria-label="Статус">' +
          ["free", "busy", "ask"].map(function (s) { return '<button type="button" data-st="' + s + '" aria-pressed="' + (x.status === s) + '">' + ST[s] + "</button>"; }).join("") +
        "</div></div>";
    }).join("");
  }

  function zones() {
    $("zones").innerHTML = '<p class="label">Доставка техники, ₸</p>' + A.zones.map(function (z, i) {
      return '<div class="group" style="margin-top:10px"><label class="hint" for="z' + i + '" style="display:block;margin:0 0 4px">' + esc(z.label.ru) + '</label>' +
        '<input class="input" id="z' + i + '" type="number" min="0" step="500" inputmode="numeric" data-z="' + i + '" value="' + (z.price === null ? "" : z.price) + '" placeholder="пусто — рассчитаю сам"></div>';
    }).join("");
    $("wa").value = A.whatsapp || "";
  }

  function msg() {
    $("msg").innerHTML = savedAt ? "<b>Сохранено</b> в этом браузере · " + savedAt : (window.STORE.hasEdits() ? "Есть ваши изменения в этом браузере" : "Сейчас — цены из config.js");
  }
  function save() {
    window.STORE.save(A);
    var d = new Date(); savedAt = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    stats(); msg();
  }

  function bad(el, text) {
    el.setAttribute("aria-invalid", "true"); savedAt = null;
    $("msg").innerHTML = '<span style="color:#C0392B;font-weight:700">Не сохранено:</span> ' + text;
  }
  $("items").addEventListener("input", function (e) {
    var el = e.target, card = el.closest("[data-i]"); if (!card || !el.dataset.f) return;
    var v = Number(el.value), isMin = el.dataset.f === "min";
    if (isMin ? !(Number.isInteger(v) && v >= 1 && v <= 24) : !(Number.isInteger(v) && v > 0))
      return bad(el, isMin ? "мин. смена — целое число от 1 до 24" : "цена — целое число больше 0");
    el.removeAttribute("aria-invalid");
    A.items[+card.dataset.i][el.dataset.f] = v; save();
  });
  $("items").addEventListener("click", function (e) {
    var b = e.target.closest("[data-st]"); if (!b) return;
    var card = b.closest("[data-i]");
    A.items[+card.dataset.i].status = b.dataset.st;
    card.querySelectorAll("[data-st]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    save();
  });
  $("zones").addEventListener("input", function (e) {
    var el = e.target; if (el.dataset.z === undefined) return;
    var v = el.value.trim() === "" ? null : Number(el.value);
    if (v !== null && !(Number.isInteger(v) && v >= 0)) return bad(el, "доставка — целое число от 0 (или пусто)");
    el.removeAttribute("aria-invalid");
    A.zones[+el.dataset.z].price = v; save();
  });
  $("wa").addEventListener("input", function (e) {
    var d = e.target.value.replace(/\D/g, "");
    if (d && !/^7\d{10}$/.test(d)) { $("waHint").style.color = "#C0392B"; return bad(e.target, "номер — 11 цифр, начинается с 7 (например 77001234567)"); }
    $("waHint").style.color = ""; e.target.removeAttribute("aria-invalid");
    A.whatsapp = d; save();
  });

  $("reset").addEventListener("click", function () {
    if (!confirm("Вернуть цены и статусы из config.js? Ваши изменения в этом браузере пропадут.")) return;
    window.STORE.reset(); A = window.STORE.get(); savedAt = null; all();
  });
  $("download").addEventListener("click", function () {
    var blob = new Blob(["﻿" + window.STORE.configText(A)], { type: "text/javascript;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "config.js";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });

  function all() { stats(); items(); zones(); msg(); }
  all();
})();
