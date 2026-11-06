// номер WhatsApp выбран пользователем 06.11.2026
const CONTACT = { whatsapp: '77007170722' };
(function () {
  var KK = {
    'nav.list': 'Тізім', 'nav.catalog': 'Каталог', 'nav.terms': 'Шарттар', 'nav.contacts': 'Байланыс',
    'hero.meta': 'Алматы · Бәйбесік · көтерме және бөлшек сауда',
    'hero.title': 'Жиһаз бөлшектері · Алматы',
    'hero.lead': 'Кең ассортимент, көтерме бағалар, бүкіл Қазақстан бойынша жеткізу. Көтерме және бөлшек сауда.',
    'btn.wa': 'WhatsApp-қа жазу', 'btn.route': 'Маршрут',
    'list.tag': 'Өтінім', 'list.title': 'Тізімді жіберіңіз — WhatsApp-та жауап береміз',
    'list.text': 'Не керек екенін жазыңыз: артикул немесе фото, саны. WhatsApp-та жауап береміз.',
    'list.what': 'Хабарламада не жазу керек',
    'list.i1': 'тауардың артикулы немесе фотосы', 'list.i2': 'саны', 'list.i3': 'жеткізу керек болса — қала',
    'list.btn': 'Тізімді WhatsApp-қа жіберу',
    'cat.tag': 'Каталог', 'cat.title': 'Каталог',
    'cat.intro': 'Негізгі тауар — жиһаз тұтқалары. Қалған ассортиментті, бар-жоғын және бағасын WhatsApp арқылы нақтылаңыз.',
    'c1.name': 'Тұтқалар', 'c1.sub': 'Жиһаз тұтқалары: қара, алтын түсті, күңгірт хром',
    'c2.name': 'Басқа бөлшектер', 'c2.sub': 'Жиһаз бөлшектері — ассортиментін WhatsApp арқылы нақтылаңыз',
    'c3.name': 'Құрал-сайман және шығын материалдары', 'c3.sub': 'Бұрғылар, бұрағыштар, рулеткалар, малярлық таспа',
    'c.ask': 'Бар-жоғын сұрау', 'img.alt': 'Витринадағы жиһаз тұтқалары', 'img.alt2': 'Дүкен витринасындағы құрал-саймандар мен шығын материалдары',
    'terms.tag': 'Шарттар', 'terms.title': 'Шарттар',
    't1': 'Көтерме және бөлшек сауда.',
    't2': 'Бүкіл Қазақстан бойынша жеткізу. Мерзімі мен құнын WhatsApp арқылы нақтылаңыз.',
    't3': 'Төлем: карта, қолма-қол ақша, картадан аудару, QR.',
    't4': 'Өзі алып кету: WhatsApp арқылы нақтылаңыз.',
    't5': 'Бағаларды WhatsApp арқылы нақтылаңыз.',
    't6': 'Тапсырыс — WhatsApp арқылы.',
    'pr.tag': 'Пікірлер', 'pr.title': 'Не үшін мақтайды',
    'pr.rating': '2ГИС-те рейтинг (26 баға, 7 пікір)', 'pr.link': '2ГИС-тегі пікірлерді көру',
    'pr.intro': 'Сатып алушылар пікірлерінде жазады:',
    'pr.1': 'Қызметкерлер сыпайы әрі ширақ, тауар таңдауға және орауға көмектеседі — бұл туралы 7 пікірдің 5-еуінде жазылған.',
    'pr.2': 'Бөлшектердің таңдауы мол — 2 пікір.', 'pr.3': 'Бағалары қолайлы — 1 пікір.',
    'pr.note': 'Баға бар күйінде көрсетілген: сын пікірлер де бар.',
    'ct.tag': 'Байланыс', 'ct.title': 'Байланыс',
    'ct.addr.k': 'Мекенжайы', 'ct.addr.v': 'Алматы, Бәйдібек би көшесі, 54, 1-қабат, Бәйбесік шағынауданы, Алатау ауданы, 050024',
    'ct.hours.k': 'Жұмыс уақыты', 'ct.hours.v': 'Дүйсенбі–сенбі 9:00–19:00, жексенбі — демалыс',
    'ct.phone.k': 'Телефон', 'ct.phone.v': '+7 700 717 07 22',
    'ct.insta': 'Instagram-дағы соңғы жазба — 09.2024, бар-жоғын нақтылаңыз.',
    'foot': 'Демо-концепция. Компанияның ресми сайты емес; деректер 2ГИС пен Instagram-нан алынған, иесінің растауын күтуде.'
  };
  var TICK = {
    ru: ['Ручки', 'Мебельная фурнитура', 'Опт и розница', 'Доставка по КЗ'],
    kk: ['Тұтқалар', 'Жиһаз бөлшектері', 'Көтерме және бөлшек сауда', 'Қазақстан бойынша жеткізу']
  };
  var BADGE = {
    ru: { open: 'Открыто до 19:00', sun: 'Закрыто, откроемся в понедельник в 9:00', off: 'Сейчас закрыто · Пн–Сб 9:00–19:00' },
    kk: { open: '19:00-ге дейін ашық', sun: 'Жабық, дүйсенбі күні 9:00-де ашыламыз', off: 'Қазір жабық · Дс–Сб 9:00–19:00' }
  };
  var RU = {}, lang = 'ru';
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (n) { var k = n.getAttribute('data-i18n'); if (!(k in RU)) RU[k] = n.textContent; });
  var alts = document.querySelectorAll('[data-i18n-alt]');
  alts.forEach(function (n) { n.setAttribute('data-ru-alt', n.getAttribute('alt')); });

  function badgeState() {
    // Алматы = UTC+5
    var d = new Date(Date.now() + 5 * 3600000), day = d.getUTCDay(), h = d.getUTCHours();
    if (day === 0) return 'sun';
    return (h >= 9 && h < 19) ? 'open' : 'off';
  }
  function render() {
    nodes.forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      n.textContent = lang === 'kk' && KK[k] ? KK[k] : RU[k];
    });
    alts.forEach(function (n) { var k = n.getAttribute('data-i18n-alt'); n.setAttribute('alt', lang === 'kk' && KK[k] ? KK[k] : n.getAttribute('data-ru-alt')); });
    document.getElementById('badge').textContent = BADGE[lang][badgeState()];
    var t = TICK[lang], html = '';
    for (var r = 0; r < 4; r++) t.forEach(function (w) { html += '<span class="px-4">' + w + '</span><span aria-hidden="true">✦</span>'; });
    document.getElementById('ticker').innerHTML = html;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'); });
    document.title = lang === 'kk' ? 'Bek Furniture — жиһаз бөлшектері, Алматы (демо)' : 'Bek Furniture — мебельная фурнитура, Алматы (демо)';
  }
  try { var s = localStorage.getItem('bek-lang'); if (s === 'kk' || s === 'ru') lang = s; } catch (e) {}
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.dataset.lang; render();
      try { localStorage.setItem('bek-lang', lang); } catch (e) {}
    });
  });
  var burger = document.getElementById('burger'), menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('hidden') === false;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.add('hidden'); burger.setAttribute('aria-expanded', 'false'); }
  });
  render();
})();
