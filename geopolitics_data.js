(function() {
  const RAW_POLY = {
    RUS: '45,38;52,32;60,30;69,33;72,70;75,110;66,170;52,158;43,132;50,127;50,85;55,60;51,46',
    CHN: '22,100;23,116;31,121;40,124;52,121;48,87;36,76;28,88',
    USA: '25,-81;30,-97;32,-117;49,-124;49,-67;40,-74',
    CAN: '49,-124;60,-139;70,-140;72,-80;52,-56;45,-67;49,-95',
    FRA: '42.5,-1.5;48.5,-4.5;51,2.5;49,8;43.5,7;42.5,3',
    DEU: '47.5,7.5;53.5,7;54.5,9;54,14;50,14.5;47.5,12.5',
    GBR: '50,-5.5;55,-5;58.5,-5;58.5,-2;53,0.5;51,1.3',
    POL: '49.5,14.5;54,14.5;54.5,23.5;50,23.5',
    TUR: '36.5,26.5;41.5,26.5;41.5,44;37,44',
    FIN: '60,21;66,24;69.5,29;60.5,28',
    SWE: '56,13;68.5,18;66,24;59,18',
    IND: '8,77;22,69;34,76;28,96;21,88',
    BRA: '4,-60;-5,-35;-22,-41;-33,-53;-18,-58;-8,-72',
    ZAF: '-22,17;-22,31;-29,31;-34,25;-34,18',
    DZA: '19,-8;28,-8;36.5,-1;36.5,8.5;24,11;19,5',
    EGY: '22,25;31.5,25;31.5,34;22,35',
    IRN: '26,57;34,46;39,44.5;38,59;26,61',
    BLR: '51.5,23.5;55.5,26.5;55.5,32;51.5,31',
    KAZ: '42,52;51,51;54,75;49,86;42,70',
    SAU: '17,43;29,36;31,47;24,55;17,52',
    JPN: '31,130;35,135;43,144;41,140;34,132'
  };
  const POLY = Object.fromEntries(Object.entries(RAW_POLY).map(([k, v]) => [k, v.split(';').map(p => p.split(',').map(Number))]));

  const BLOCKS = [
    { id: 'nato', cat: 'Военный блок', name: 'НАТО', color: '#0284c7', keys: ['USA','CAN','GBR','FRA','DEU','POL','TUR','FIN','SWE'], members: '32 страны (США, Канада, Британия, Франция, Германия, Польша, Турция, Финляндия, Швеция и др.)', desc: 'Военно-политический блок Северной Америки и Европы. Статья 5 — коллективная оборона.', lat: 48, lng: -15, zoom: 2 },
    { id: 'brics', cat: 'Экономический блок', name: 'БРИКС+', color: '#16a34a', keys: ['RUS','CHN','IND','BRA','ZAF','IRN','EGY'], members: 'Россия, Китай, Индия, Бразилия, ЮАР, ОАЭ, Иран, Египет, Эфиопия, Индонезия', desc: 'Крупнейшие развивающиеся экономики мира (>35% мирового ВВП по ППС), расчёты в нацвалютах.', lat: 22, lng: 65, zoom: 2 },
    { id: 'odkb', cat: 'Военный блок', name: 'ОДКБ', color: '#dc2626', keys: ['RUS','BLR','KAZ'], members: 'Россия, Беларусь, Казахстан, Киргизия, Таджикистан', desc: 'Евразийский военно-политический союз (ст. 4: агрессия против одного — агрессия против всех).', lat: 55, lng: 75, zoom: 3 },
    { id: 'eaeu', cat: 'Экономический блок', name: 'ЕАЭС', color: '#d97706', keys: ['RUS','BLR','KAZ'], members: 'Россия, Беларусь, Казахстан, Армения, Киргизия', desc: 'Единый таможенный тариф, свобода движения товаров, услуг, капитала и рабочей силы.', lat: 55, lng: 75, zoom: 3 },
    { id: 'eu', cat: 'Экономико-политический блок', name: 'Европейский союз (ЕС)', color: '#4f46e5', keys: ['FRA','DEU','POL','FIN','SWE'], members: '27 государств Европы', desc: 'Единый внутренний рынок, Шенгенская зона и общая валюта евро.', lat: 52, lng: 12, zoom: 4 },
    { id: 'sco', cat: 'Региональный блок', name: 'ШОС', color: '#9333ea', keys: ['RUS','CHN','IND','KAZ','IRN','BLR'], members: 'Россия, Китай, Индия, Пакистан, Казахстан, Узбекистан, Киргизия, Таджикистан, Иран, Беларусь', desc: 'Крупнейшая евразийская организация безопасности, энергетики и транспорта.', lat: 40, lng: 80, zoom: 2 }
  ];

  const COUNTRIES = [
    { key: 'RUS', name: '🇷🇺 Россия', region: 'Евразия', gov: 'Смешанная республика • Федерация', blocks: 'БРИКС+, ОДКБ, ЕАЭС, ШОС, СБ ООН', desc: 'Крупнейшая страна мира (17,1 млн км²), лидер по запасам газа, леса и пресной воды.', lat: 60, lng: 90, zoom: 2 },
    { key: 'CHN', name: '🇨🇳 Китай', region: 'Азия', gov: 'Социалистическая республика • Унитарное гос-во', blocks: 'БРИКС+, ШОС, СБ ООН', desc: 'Первая экономика мира по ППС, «мировая фабрика» и главный торговый партнёр РФ.', lat: 35, lng: 103, zoom: 3 },
    { key: 'USA', name: '🇺🇸 США', region: 'Америка', gov: 'Президентская республика • Федерация', blocks: 'НАТО, AUKUS, USMCA, СБ ООН', desc: 'Крупнейшая экономика по номинальному ВВП, эмитент доллара и лидер НАТО.', lat: 39, lng: -98, zoom: 3 },
    { key: 'FRA', name: '🇫🇷 Франция', region: 'Европа', gov: 'Смешанная республика • Унитарное гос-во', blocks: 'ЕС, НАТО, СБ ООН', desc: 'Ядерная держава Западной Европы, лидер атомной энергетики ЕС.', lat: 46.5, lng: 2.5, zoom: 5 },
    { key: 'DEU', name: '🇩🇪 Германия', region: 'Европа', gov: 'Парламентская республика • Федерация', blocks: 'ЕС, НАТО', desc: 'Крупнейшая экономика Евросоюза и главный индустриальный центр Европы.', lat: 51, lng: 10, zoom: 5 },
    { key: 'IND', name: '🇮🇳 Индия', region: 'Азия', gov: 'Парламентская республика • Федерация', blocks: 'БРИКС+, ШОС, QUAD', desc: 'Первое место в мире по населению (>1,44 млрд чел.), центр ИТ и фармацевтики.', lat: 22, lng: 79, zoom: 4 },
    { key: 'DZA', name: '🇩🇿 Алжир', region: 'Африка', gov: 'Президентско-парламентская республика', blocks: 'ОПЕК, ЛАГ, Афросоюз', desc: 'Крупнейшая страна Африки (2,38 млн км²), ключевой поставщик газа в Европу.', lat: 28, lng: 2.5, zoom: 4 },
    { key: 'ZAF', name: '🇿🇦 ЮАР', region: 'Африка', gov: 'Парламентская республика', blocks: 'БРИКС+, G20, Афросоюз', desc: 'Самая развитая экономика Африки, лидер по добыче платины, хрома и золота.', lat: -29, lng: 24, zoom: 4 },
    { key: 'EGY', name: '🇪🇬 Египет', region: 'Африка', gov: 'Президентская республика', blocks: 'БРИКС+, ЛАГ, Афросоюз', desc: 'Контролирует стратегический Суэцкий канал между Европой и Азией.', lat: 26.5, lng: 30, zoom: 5 },
    { key: 'IRN', name: '🇮🇷 Иран', region: 'Азия', gov: 'Исламская республика', blocks: 'БРИКС+, ШОС, ОПЕК', desc: 'Контролирует Ормузский пролив, крупнейшие запасы нефти и газа.', lat: 32, lng: 53, zoom: 4 },
    { key: 'TUR', name: '🇹🇷 Турция', region: 'Евразия', gov: 'Президентская республика', blocks: 'НАТО, ОТГ, G20', desc: 'Контролирует черноморские проливы Босфор и Дарданеллы.', lat: 39, lng: 35, zoom: 5 },
    { key: 'BLR', name: '🇧🇾 Беларусь', region: 'Европа', gov: 'Президентская республика', blocks: 'Союзное гос-во, ОДКБ, ЕАЭС, ШОС', desc: 'Ближайший союзник России, машиностроение и калийные удобрения.', lat: 53.5, lng: 28, zoom: 5 },
    { key: 'KAZ', name: '🇰🇿 Казахстан', region: 'Азия', gov: 'Президентская республика', blocks: 'ОДКБ, ЕАЭС, ШОС', desc: 'Крупнейшая экономика Центральной Азии и мировой лидер по добыче урана.', lat: 48, lng: 67, zoom: 4 },
    { key: 'SAU', name: '🇸🇦 Саудовская Аравия', region: 'Азия', gov: 'Абсолютная монархия', blocks: 'ОПЕК+, ЛАГ, G20', desc: 'Ведущий экспортёр нефти в мире и духовный центр ислама.', lat: 24, lng: 45, zoom: 4 },
    { key: 'JPN', name: '🇯🇵 Япония', region: 'Азия', gov: 'Конституционная монархия', blocks: 'G7, QUAD', desc: 'Технологический лидер Восточной Азии, робототехника и автопром.', lat: 36, lng: 138, zoom: 4 },
    { key: 'BRA', name: '🇧🇷 Бразилия', region: 'Америка', gov: 'Президентская республика • Федерация', blocks: 'БРИКС+, МЕРКОСУР', desc: 'Крупнейшая страна Южной Америки, мировой гигант агроэкспорта.', lat: -10, lng: -52, zoom: 3 }
  ];

  let activeGroup = null;
  function getM() { return (typeof studyMap !== 'undefined' && studyMap) || window.studyMap || window.map || null; }
  function goMap() {
    const b = document.querySelector('.nav-btn'); if (b) b.click();
    const m = getM(); if (m && m.invalidateSize) setTimeout(() => m.invalidateSize(), 120);
    return m;
  }
  function clearG(m) { if (activeGroup && m) m.removeLayer(activeGroup); activeGroup = L.layerGroup().addTo(m); }

  window.paintBlock = function(id) {
    const b = BLOCKS.find(x => x.id === id), m = goMap();
    if (!b || !m || !window.L) return;
    clearG(m);
    b.keys.forEach(k => { if (POLY[k]) L.polygon(POLY[k], { color: b.color, weight: 2, fillColor: b.color, fillOpacity: 0.38 }).addTo(activeGroup).bindPopup(`<b>${b.name}</b><br><small>${b.members}</small>`); });
    m.setView(new L.LatLng(b.lat, b.lng), b.zoom);
    L.popup().setLatLng(new L.LatLng(b.lat, b.lng)).setContent(`<b>${b.name}</b><br><small>${b.desc}</small>`).openOn(m);
  };

  window.paintCountry = function(idx) {
    const c = COUNTRIES[idx], m = goMap();
    if (!c || !m || !window.L) return;
    clearG(m);
    if (POLY[c.key]) L.polygon(POLY[c.key], { color: '#0284c7', weight: 2.5, fillColor: '#0284c7', fillOpacity: 0.42 }).addTo(activeGroup).bindPopup(`<b>${c.name}</b><br><i>${c.gov}</i><br><b>Блоки:</b> ${c.blocks}<br><small>${c.desc}</small>`);
    m.setView(new L.LatLng(c.lat, c.lng), c.zoom);
    L.popup().setLatLng(new L.LatLng(c.lat, c.lng)).setContent(`<b>${c.name}</b><br><i>${c.gov}</i><br><b>Блоки:</b> ${c.blocks}<br><small>${c.desc}</small>`).openOn(m);
  };

  window.paintAll = function() {
    const m = goMap(); if (!m || !window.L) return;
    clearG(m);
    COUNTRIES.forEach(c => { if (POLY[c.key]) L.polygon(POLY[c.key], { color: '#0ea5e9', weight: 1.5, fillColor: '#0ea5e9', fillOpacity: 0.35 }).addTo(activeGroup).bindPopup(`<b>${c.name}</b><br><i>${c.gov}</i><br><b>Блоки:</b> ${c.blocks}<br><small>${c.desc}</small>`); });
    m.setView(new L.LatLng(20, 0), 2);
  };

  function init() {
    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-geopol')) return;
    nav.style.overflowX = 'auto';
    const btn = document.createElement('button');
    btn.className = 'nav-btn'; btn.id = 'nav-geopol'; btn.innerHTML = '<span>🌐</span>Геополитика';
    btn.onclick = () => {
      if (localStorage.getItem('geocore_pro') !== '1' && window.openProModal) { openProModal(); return; }
      document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-geopol').classList.remove('hidden');
      renderGeopol('Блоки');
    };
    nav.appendChild(btn);

    const view = document.createElement('div'); view.id = 'view-geopol'; view.className = 'hidden'; view.style.padding = '12px';
    view.innerHTML = '<div class="filters" id="geopolFilters" style="margin-bottom:10px;"></div><div id="geopolList"></div>';
    nav.parentNode.insertBefore(view, nav);
  }

  window.renderGeopol = function(tab) {
    document.getElementById('geopolFilters').innerHTML = ['Блоки', 'Страны (16)', 'Все 16 на карте'].map(t =>
      `<button class="f-btn ${t === tab ? 'active' : ''}" onclick="${t === 'Все 16 на карте' ? 'paintAll()' : `renderGeopol('${t}')`}">${t}</button>`
    ).join('');

    document.getElementById('geopolList').innerHTML = tab === 'Блоки'
      ? BLOCKS.map(b => `<div class="guide-card" style="border-left:4px solid ${b.color};"><div class="guide-cat" style="color:${b.color};">${b.cat}</div><div class="guide-title">${b.name}</div><div class="guide-trap" style="margin:6px 0;"><b>Состав:</b> ${b.members}</div><div class="guide-rule">${b.desc}</div><button class="f-btn active" style="margin-top:8px;width:100%;background:${b.color};border-color:${b.color};" onclick="paintBlock('${b.id}')">🎨 Закрасить территорию блока</button></div>`).join('')
      : COUNTRIES.map((c, idx) => `<div class="guide-card"><div class="guide-cat">${c.region} • ${c.blocks}</div><div class="guide-title">${c.name}</div><div class="guide-trap" style="margin:6px 0;"><b>Устройство:</b> ${c.gov}</div><div class="guide-rule">${c.desc}</div><button class="f-btn active" style="margin-top:8px;width:100%;" onclick="paintCountry(${idx})">📍 Показать территорию и справку</button></div>`).join('');
  };

  setTimeout(init, 400);
})();
