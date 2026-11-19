(function() {
  if (window.L && !window._mapHooked) {
    window._mapHooked = true;
    const origMap = L.map;
    L.map = function() { const m = origMap.apply(this, arguments); window.map = m; return m; };
  }
  const GEO_BLOCKS = [
    { id: 'nato', cat: 'Военный блок', name: 'НАТО', color: '#0284c7', iso: ['USA','CAN','GBR','FRA','DEU','POL','TUR','FIN','SWE','NOR','ESP','ITA','GRC','ROU','BGR','HUN','CZE','SVK','PRT','NLD','BEL','DNK','EST','LVA','LTU','HRV','ALB','MNE','MKD','SVN'], members: '32 страны (США, Канада, Великобритания, Франция, Германия, Польша, Турция, Финляндия, Швеция и др.)', desc: 'Военно-политический блок Северной Америки и Европы. Статья 5 — коллективная оборона.', lat: 48, lng: -10, zoom: 2 },
    { id: 'brics', cat: 'Экономический блок', name: 'БРИКС+', color: '#16a34a', iso: ['RUS','CHN','IND','BRA','ZAF','ARE','IRN','EGY','ETH','IDN'], members: 'Россия, Китай, Индия, Бразилия, ЮАР, ОАЭ, Иран, Египет, Эфиопия, Индонезия', desc: 'Крупнейшие развивающиеся экономики мира (>35% мирового ВВП по ППС), расчёты в нацвалютах.', lat: 22, lng: 65, zoom: 2 },
    { id: 'odkb', cat: 'Военный блок', name: 'ОДКБ', color: '#dc2626', iso: ['RUS','BLR','KAZ','KGZ','TJK'], members: 'Россия, Беларусь, Казахстан, Киргизия, Таджикистан', desc: 'Евразийский военно-политический союз (ст. 4: агрессия против одного — агрессия против всех).', lat: 55, lng: 75, zoom: 3 },
    { id: 'eaeu', cat: 'Экономический блок', name: 'ЕАЭС', color: '#d97706', iso: ['RUS','BLR','KAZ','ARM','KGZ'], members: 'Россия, Беларусь, Казахстан, Армения, Киргизия', desc: 'Единый таможенный тариф, свобода движения товаров, услуг, капитала и рабочей силы.', lat: 55, lng: 75, zoom: 3 },
    { id: 'eu', cat: 'Экономико-политический блок', name: 'Европейский союз (ЕС)', color: '#4f46e5', iso: ['FRA','DEU','ITA','ESP','POL','ROU','NLD','BEL','GRC','CZE','PRT','SWE','HUN','AUT','BGR','DNK','FIN','SVK','IRL','HRV','LTU','SVN','LVA','EST','CYP','LUX','MLT'], members: '27 государств Европы', desc: 'Единый внутренний рынок, Шенгенская зона и общая валюта евро.', lat: 50, lng: 12, zoom: 4 },
    { id: 'sco', cat: 'Региональный блок', name: 'ШОС', color: '#9333ea', iso: ['RUS','CHN','IND','PAK','KAZ','UZB','KGZ','TJK','IRN','BLR'], members: 'Россия, Китай, Индия, Пакистан, Казахстан, Узбекистан, Киргизия, Таджикистан, Иран, Беларусь', desc: 'Крупнейшая евразийская организация безопасности, энергетики и транспорта.', lat: 40, lng: 80, zoom: 2 }
  ];

  const GEO_COUNTRIES = [
    { iso: 'RUS', name: '🇷🇺 Россия', region: 'Евразия', gov: 'Смешанная республика • Федерация', blocks: 'БРИКС+, ОДКБ, ЕАЭС, ШОС, СБ ООН', desc: 'Крупнейшая страна мира (17,1 млн км²), лидер по запасам газа, леса и пресной воды.', lat: 60, lng: 90, zoom: 2 },
    { iso: 'CHN', name: '🇨🇳 Китай', region: 'Азия', gov: 'Социалистическая республика • Унитарное гос-во', blocks: 'БРИКС+, ШОС, СБ ООН', desc: 'Первая экономика мира по ППС, «мировая фабрика» и главный торговый партнёр РФ.', lat: 35, lng: 103, zoom: 3 },
    { iso: 'USA', name: '🇺🇸 США', region: 'Америка', gov: 'Президентская республика • Федерация', blocks: 'НАТО, AUKUS, USMCA, СБ ООН', desc: 'Крупнейшая экономика по номинальному ВВП, эмитент доллара и лидер НАТО.', lat: 39, lng: -98, zoom: 3 },
    { iso: 'FRA', name: '🇫🇷 Франция', region: 'Европа', gov: 'Смешанная республика • Унитарное гос-во', blocks: 'ЕС, НАТО, СБ ООН', desc: 'Ядерная держава Западной Европы, лидер атомной энергетики ЕС.', lat: 46.5, lng: 2.5, zoom: 5 },
    { iso: 'DEU', name: '🇩🇪 Германия', region: 'Европа', gov: 'Парламентская республика • Федерация', blocks: 'ЕС, НАТО', desc: 'Крупнейшая экономика Евросоюза и главный индустриальный центр Европы.', lat: 51, lng: 10, zoom: 5 },
    { iso: 'IND', name: '🇮🇳 Индия', region: 'Азия', gov: 'Парламентская республика • Федерация', blocks: 'БРИКС+, ШОС, QUAD', desc: 'Первое место в мире по населению (>1,44 млрд чел.), центр ИТ и фармацевтики.', lat: 22, lng: 79, zoom: 4 },
    { iso: 'DZA', name: '🇩🇿 Алжир', region: 'Африка', gov: 'Президентско-парламентская республика', blocks: 'ОПЕК, ЛАГ, Афросоюз', desc: 'Крупнейшая страна Африки (2,38 млн км²), ключевой поставщик газа в Европу.', lat: 28, lng: 2.5, zoom: 4 },
    { iso: 'ZAF', name: '🇿🇦 ЮАР', region: 'Африка', gov: 'Парламентская республика', blocks: 'БРИКС+, G20, Афросоюз', desc: 'Самая развитая экономика Африки, лидер по добыче платины, хрома и золота.', lat: -29, lng: 24, zoom: 4 },
    { iso: 'EGY', name: '🇪🇬 Египет', region: 'Африка', gov: 'Президентская республика', blocks: 'БРИКС+, ЛАГ, Афросоюз', desc: 'Контролирует стратегический Суэцкий канал между Европой и Азией.', lat: 26.5, lng: 30, zoom: 5 },
    { iso: 'IRN', name: '🇮🇷 Иран', region: 'Азия', gov: 'Исламская республика', blocks: 'БРИКС+, ШОС, ОПЕК', desc: 'Контролирует Ормузский пролив, крупнейшие запасы нефти и газа.', lat: 32, lng: 53, zoom: 4 },
    { iso: 'TUR', name: '🇹🇷 Турция', region: 'Евразия', gov: 'Президентская республика', blocks: 'НАТО, ОТГ, G20', desc: 'Контролирует черноморские проливы Босфор и Дарданеллы.', lat: 39, lng: 35, zoom: 5 },
    { iso: 'BLR', name: '🇧🇾 Беларусь', region: 'Европа', gov: 'Президентская республика', blocks: 'Союзное гос-во, ОДКБ, ЕАЭС, ШОС', desc: 'Ближайший союзник России, машиностроение и калийные удобрения.', lat: 53.5, lng: 28, zoom: 5 },
    { iso: 'KAZ', name: '🇰🇿 Казахстан', region: 'Азия', gov: 'Президентская республика', blocks: 'ОДКБ, ЕАЭС, ШОС', desc: 'Крупнейшая экономика Центральной Азии и мировой лидер по добыче урана.', lat: 48, lng: 67, zoom: 4 },
    { iso: 'SAU', name: '🇸🇦 Саудовская Аравия', region: 'Азия', gov: 'Абсолютная монархия', blocks: 'ОПЕК+, ЛАГ, G20', desc: 'Ведущий экспортёр нефти в мире и духовный центр ислама.', lat: 24, lng: 45, zoom: 4 },
    { iso: 'JPN', name: '🇯🇵 Япония', region: 'Азия', gov: 'Конституционная монархия', blocks: 'G7, QUAD', desc: 'Технологический лидер Восточной Азии, робототехника и автопром.', lat: 36, lng: 138, zoom: 4 },
    { iso: 'BRA', name: '🇧🇷 Бразилия', region: 'Америка', gov: 'Президентская республика • Федерация', blocks: 'БРИКС+, МЕРКОСУР', desc: 'Крупнейшая страна Южной Америки, мировой гигант агроэкспорта.', lat: -10, lng: -52, zoom: 3 }
  ]; let geoLayers = [];
  function clearGeoMapLayers() {
    if (!window.map) return;
    geoLayers.forEach(l => window.map.removeLayer(l));
    geoLayers = [];
  }

  window.showBlockOnMap = function(blockId) {
    const block = GEO_BLOCKS.find(b => b.id === blockId);
    if (!block) return;
    const mapBtn = document.querySelector('.nav-btn');
    if (mapBtn) mapBtn.click();
    if (!window.map || !window.L) return;
    clearGeoMapLayers();
    block.zones.forEach(coords => {
      const poly = L.polygon(coords, { color: block.color, weight: 2, fillColor: block.color, fillOpacity: 0.35 }).addTo(window.map);
      poly.bindPopup(`<b>${block.name}</b><br><small>${block.members}</small>`);
      geoLayers.push(poly);
    });
    window.map.setView([block.lat, block.lng], block.zoom || 3);
  };

  window.showAllCountriesOnMap = function() {
    const mapBtn = document.querySelector('.nav-btn');
    if (mapBtn) mapBtn.click();
    if (!window.map || !window.L) return;
    clearGeoMapLayers();
    GEO_COUNTRIES.forEach(c => {
      const m = L.circleMarker([c.lat, c.lng], { radius: 8, color: '#fff', weight: 2, fillColor: '#0ea5e9', fillOpacity: 0.85 }).addTo(window.map);
      m.bindPopup(`<b>${c.name}</b><br><i>${c.gov}</i><br><b>Блоки:</b> ${c.blocks}<br><small>${c.desc}</small>`);
      geoLayers.push(m);
    });
    window.map.setView([25, 30], 2);
  };

  window.flyToGeoCountry = function(idx) {
    const c = GEO_COUNTRIES[idx];
    if (!c) return;
    const mapBtn = document.querySelector('.nav-btn');
    if (mapBtn) mapBtn.click();
    if (!window.map || !window.L) return;
    clearGeoMapLayers();
    const m = L.circleMarker([c.lat, c.lng], { radius: 10, color: '#fff', weight: 2, fillColor: '#0284c7', fillOpacity: 0.9 }).addTo(window.map);
    m.bindPopup(`<b>${c.name}</b><br><i>${c.gov}</i><br><b>Блоки:</b> ${c.blocks}<br><small>${c.desc}</small>`).openPopup();
    geoLayers.push(m);
    window.map.setView([c.lat, c.lng], 4);
  };

  function initGeopolitics() {
    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-geopol')) return;
    nav.style.overflowX = 'auto';
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = 'nav-geopol';
    btn.innerHTML = '<span>🌐</span>Геополитика';
    btn.onclick = () => {
      if (localStorage.getItem('geocore_pro') !== '1' && window.openProModal) { openProModal(); return; }
      document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-geopol').classList.remove('hidden');
      renderGeopol('Блоки');
    };
    nav.appendChild(btn);

    const view = document.createElement('div');
    view.id = 'view-geopol';
    view.className = 'hidden';
    view.style.padding = '12px';
    view.innerHTML = `<div class="filters" id="geopolFilters" style="margin-bottom:10px;"></div><div id="geopolList"></div>`;
    nav.parentNode.insertBefore(view, nav);
  }

  window.renderGeopol = function(tab) {
    const tabs = ['Блоки', 'Страны (16)', 'Нанести все страны'];
    document.getElementById('geopolFilters').innerHTML = tabs.map(t =>
      `<button class="f-btn ${t === tab ? 'active' : ''}" onclick="${t === 'Нанести все страны' ? 'showAllCountriesOnMap()' : `renderGeopol('${t}')`}">${t}</button>`
    ).join('');

    if (tab === 'Блоки') {
      document.getElementById('geopolList').innerHTML = GEO_BLOCKS.map(b => `
        <div class="guide-card" style="border-left:4px solid ${b.color};">
          <div class="guide-cat" style="color:${b.color};">${b.cat}</div>
          <div class="guide-title">${b.name}</div>
          <div class="guide-trap" style="margin:6px 0;"><b>Состав:</b> ${b.members}</div>
          <div class="guide-rule">${b.desc}</div>
          <button class="f-btn active" style="margin-top:8px;width:100%;background:${b.color};border-color:${b.color};" onclick="showBlockOnMap('${b.id}')">🎨 Подсветить на карте</button>
        </div>
      `).join('');
    } else {
      document.getElementById('geopolList').innerHTML = GEO_COUNTRIES.map((c, idx) => `
        <div class="guide-card">
          <div class="guide-cat">${c.region} • ${c.blocks}</div>
          <div class="guide-title">${c.name}</div>
          <div class="guide-trap" style="margin:6px 0;"><b>Устройство:</b> ${c.gov}</div>
          <div class="guide-rule">${c.desc}</div>
          <button class="f-btn active" style="margin-top:8px;width:100%;" onclick="flyToGeoCountry(${idx})">📍 Открыть страну на карте</button>
        </div>
      `).join('');
    }
  };

  setTimeout(initGeopolitics, 400);
})();
