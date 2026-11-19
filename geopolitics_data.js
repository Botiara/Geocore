(function() {
  const GEO_BLOCKS = [
    { id: 'nato', cat: 'Военный блок', name: 'НАТО', color: '#0284c7', members: 'США, Канада, Великобритания, Франция, Германия, Польша, Турция и др. (32 страны)', desc: 'Военно-политический блок Северной Америки и Европы. Статья 5 — коллективная оборона.', lat: 50, lng: -15, zoom: 3, zones: [[[25,-125],[49,-125],[70,-160],[70,-60],[25,-80]], [[36,-9],[58,-5],[68,28],[40,42],[36,-5]]] },
    { id: 'brics', cat: 'Экономический блок', name: 'БРИКС+', color: '#16a34a', members: 'Россия, Китай, Индия, Бразилия, ЮАР, ОАЭ, Иран, Египет, Эфиопия и др.', desc: 'Объединение крупнейших развивающихся экономик мира (>35% мирового ВВП по ППС).', lat: 28, lng: 75, zoom: 2, zones: [[[45,28],[75,40],[70,175],[45,135]], [[18,75],[50,75],[48,132],[20,115]], [[8,72],[32,76],[24,92],[8,80]], [[-22,16],[-22,32],[-34,26],[-34,18]], [[5,-73],[2,-50],[-33,-53],[-22,-62]]] },
    { id: 'odkb', cat: 'Военный блок', name: 'ОДКБ', color: '#dc2626', members: 'Россия, Беларусь, Казахстан, Киргизия, Таджикистан', desc: 'Евразийский военно-политический союз (ст. 4: агрессия против одного — агрессия против всех).', lat: 54, lng: 68, zoom: 3, zones: [[[45,24],[75,35],[70,175],[42,135],[38,68],[42,50]]] },
    { id: 'eaeu', cat: 'Экономический блок', name: 'ЕАЭС', color: '#d97706', members: 'Россия, Беларусь, Казахстан, Армения, Киргизия', desc: 'Единый таможенный тариф, свобода движения товаров, услуг, капитала и рабочей силы.', lat: 53, lng: 66, zoom: 3, zones: [[[46,24],[75,35],[70,175],[42,135],[41,72],[43,51]]] },
    { id: 'eu', cat: 'Экономико-политический блок', name: 'Европейский союз (ЕС)', color: '#4f46e5', members: '27 стран Европы (Франция, Германия, Италия, Испания, Польша, Швеция и др.)', desc: 'Единый внутренний рынок, Шенгенская зона и общая валюта евро.', lat: 50, lng: 12, zoom: 4, zones: [[[36,-9],[54,-4],[68,26],[42,28],[36,-5]]] },
    { id: 'sco', cat: 'Региональный блок', name: 'ШОС', color: '#9333ea', members: 'Россия, Китай, Индия, Пакистан, Казахстан, Узбекистан, Киргизия, Таджикистан, Иран, Беларусь', desc: 'Крупнейшая евразийская организация безопасности, энергетики и транспорта.', lat: 42, lng: 82, zoom: 2, zones: [[[10,68],[55,25],[75,40],[70,175],[20,122],[26,52]]] }
  ];

  const GEO_COUNTRIES = [
    { name: '🇷🇺 Россия', region: 'Евразия', gov: 'Смешанная республика • Федерация', blocks: 'БРИКС+, ОДКБ, ЕАЭС, ШОС', desc: 'Крупнейшая страна мира (17,1 млн км²), лидер по запасам газа, леса и пресной воды.', lat: 55.75, lng: 37.61 },
    { name: '🇨🇳 Китай', region: 'Азия', gov: 'Социалистическая республика • Унитарное гос-во', blocks: 'БРИКС+, ШОС', desc: 'Первая экономика мира по ППС, «мировая фабрика» и главный торговый партнёр РФ.', lat: 39.90, lng: 116.40 },
    { name: '🇺🇸 США', region: 'Америка', gov: 'Президентская республика • Федерация', blocks: 'НАТО, AUKUS, USMCA', desc: 'Крупнейшая экономика по номинальному ВВП и лидер блока НАТО.', lat: 38.90, lng: -77.03 },
    { name: '🇫🇷 Франция', region: 'Европа', gov: 'Смешанная республика • Унитарное гос-во', blocks: 'ЕС, НАТО', desc: 'Ядерная держава Западной Европы, лидер атомной энергетики ЕС.', lat: 48.85, lng: 2.35 },
    { name: '🇩🇪 Германия', region: 'Европа', gov: 'Парламентская республика • Федерация', blocks: 'ЕС, НАТО', desc: 'Крупнейшая экономика Евросоюза и индустриальный центр Европы.', lat: 52.52, lng: 13.40 },
    { name: '🇮🇳 Индия', region: 'Азия', gov: 'Парламентская республика • Федерация', blocks: 'БРИКС+, ШОС, QUAD', desc: 'Первое место в мире по населению (>1,44 млрд чел.), центр ИТ и фармацевтики.', lat: 28.61, lng: 77.20 },
    { name: '🇩🇿 Алжир', region: 'Африка', gov: 'Президентско-парламентская республика', blocks: 'ОПЕК, ЛАГ, Афросоюз', desc: 'Крупнейшая страна Африки (2,38 млн км²), ключевой поставщик газа в Европу.', lat: 36.75, lng: 3.05 },
    { name: '🇿🇦 ЮАР', region: 'Африка', gov: 'Парламентская республика', blocks: 'БРИКС+, G20, Афросоюз', desc: 'Самая развитая экономика Африки, лидер по добыче платины, хрома и золота.', lat: -25.74, lng: 28.22 },
    { name: '🇪🇬 Египет', region: 'Африка', gov: 'Президентская республика', blocks: 'БРИКС+, ЛАГ, Афросоюз', desc: 'Контролирует стратегический Суэцкий канал между Европой и Азией.', lat: 30.04, lng: 31.23 },
    { name: '🇮🇷 Иран', region: 'Азия', gov: 'Исламская республика', blocks: 'БРИКС+, ШОС, ОПЕК', desc: 'Контролирует Ормузский пролив, крупнейшие запасы нефти и газа.', lat: 35.68, lng: 51.38 },
    { name: '🇹🇷 Турция', region: 'Евразия', gov: 'Президентская республика', blocks: 'НАТО, ОТГ, G20', desc: 'Контролирует черноморские проливы Босфор и Дарданеллы.', lat: 39.93, lng: 32.85 },
    { name: '🇧🇾 Беларусь', region: 'Европа', gov: 'Президентская республика', blocks: 'Союзное гос-во, ОДКБ, ЕАЭС, ШОС', desc: 'Ближайший союзник России, машиностроение и калийные удобрения.', lat: 53.90, lng: 27.56 },
    { name: '🇰🇿 Казахстан', region: 'Азия', gov: 'Президентская республика', blocks: 'ОДКБ, ЕАЭС, ШОС', desc: 'Крупнейшая экономика Центральной Азии и мировой лидер по добыче урана.', lat: 51.16, lng: 71.47 },
    { name: '🇸🇦 Саудовская Аравия', region: 'Азия', gov: 'Абсолютная монархия', blocks: 'ОПЕК+, ЛАГ, G20', desc: 'Ведущий экспортёр нефти в мире и духовный центр ислама.', lat: 24.71, lng: 46.67 },
    { name: '🇯🇵 Япония', region: 'Азия', gov: 'Конституционная монархия', blocks: 'G7, QUAD', desc: 'Технологический лидер Восточной Азии, робототехника и автопром.', lat: 35.67, lng: 139.65 },
    { name: '🇧🇷 Бразилия', region: 'Америка', gov: 'Президентская республика • Федерация', blocks: 'БРИКС+, МЕРКОСУР', desc: 'Крупнейшая страна Южной Америки, мировой гигант агроэкспорта.', lat: -15.79, lng: -47.88 }
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
