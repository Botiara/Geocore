(function() {
  const LAYERS = {
    polit: {
      title: '🌐 Политическая карта (12 стран ОГЭ)',
      hint: 'Нажимай на маркер страны, чтобы открыть столицу и блок. Нажми «Скрыть подписи» для самопроверки.',
      items: [
        { name: '🇷🇺 Россия', lat: 55.75, lng: 37.62, info: 'Москва • 17,1 млн км² • ЕАЭС, ОДКБ, БРИКС+, ШОС' },
        { name: '🇨🇳 Китай', lat: 39.90, lng: 116.40, info: 'Пекин • 9,6 млн км² • БРИКС+, ШОС, СБ ООН' },
        { name: '🇮🇳 Индия', lat: 28.61, lng: 77.20, info: 'Нью-Дели • 3,28 млн км² • БРИКС+, ШОС, G20' },
        { name: '🇺🇸 США', lat: 38.90, lng: -77.03, info: 'Вашингтон • 9,8 млн км² • НАТО, USMCA, G7, СБ ООН' },
        { name: '🇧🇷 Бразилия', lat: -15.79, lng: -47.88, info: 'Бразилиа • 8,5 млн км² • БРИКС+, МЕРКОСУР, G20' },
        { name: '🇩🇪 Германия', lat: 52.52, lng: 13.40, info: 'Берлин • 357 тыс. км² • ЕС, НАТО, G7' },
        { name: '🇫🇷 Франция', lat: 48.85, lng: 2.35, info: 'Париж • 551 тыс. км² • ЕС, НАТО, G7, СБ ООН' },
        { name: '🇬🇧 Великобритания', lat: 51.50, lng: -0.12, info: 'Лондон • 243 тыс. км² • НАТО, AUKUS, G7, СБ ООН' },
        { name: '🇯🇵 Япония', lat: 35.68, lng: 139.69, info: 'Токио • 377 тыс. км² • G7, АТЭС' },
        { name: '🇰🇿 Казахстан', lat: 51.16, lng: 71.47, info: 'Астана • 2,72 млн км² • ЕАЭС, ОДКБ, СНГ, ШОС' },
        { name: '🇧🇾 Беларусь', lat: 53.90, lng: 27.56, info: 'Минск • 207 тыс. км² • Союзное гос-во, ЕАЭС, ОДКБ' },
        { name: '🇦🇺 Австралия', lat: -35.28, lng: 149.13, info: 'Канберра • 7,69 млн км² • AUKUS, QUAD, АТЭС' }
      ]
    },
    currents: {
      title: '🌊 Океанические течения (ОГЭ)',
      hint: 'Красные линии — тёплые течения (смягчают климат), синие — холодные (вызывают береговые пустыни).',
      lines: [
        { name: '🔥 Гольфстрим (тёплое)', color: '#ef4444', coords: [[25, -80], [35, -73], [42, -55]] },
        { name: '🔥 Северо-Атлантическое (тёплое)', color: '#ef4444', coords: [[42, -55], [55, -25], [68, 12], [70, 33]] },
        { name: '🔥 Куросио (тёплое)', color: '#ef4444', coords: [[22, 123], [33, 136], [40, 150]] },
        { name: '🔥 Бразильское (тёплое)', color: '#ef4444', coords: [[-8, -34], [-23, -41], [-36, -53]] },
        { name: '❄️ Перуанское / Гумбольдта (холодное)', color: '#38bdf8', coords: [[-42, -75], [-20, -72], [-5, -82]] },
        { name: '❄️ Лабрадорское (холодное)', color: '#38bdf8', coords: [[62, -62], [52, -53], [43, -50]] },
        { name: '❄️ Бенгельское (холодное)', color: '#38bdf8', coords: [[-34, 17], [-22, 13], [-10, 12]] },
        { name: '❄️ Течение Западных Ветров (холодное)', color: '#38bdf8', coords: [[-55, -70], [-55, 0], [-55, 80], [-55, 160]] }
      ]
    },
    phys: {
      title: '🏔️ Физическая карта мира (Рельеф ОГЭ)',
      hint: 'Ключевые горы и равнины планеты для заданий №2, 8 и 24.',
      items: [
        { name: '🏔️ Гималаи (г. Джомолунгма, 8848 м)', lat: 27.98, lng: 86.92, info: 'Высочайшие горы мира на стыке Индостанской и Евразийской плит' },
        { name: '🏔️ Анды (г. Аконкагуа, 6961 м)', lat: -32.65, lng: -70.01, info: 'Самая длинная горная цепь суши (Южная Америка)' },
        { name: '🏔️ Кордильеры (г. Денали, 6190 м)', lat: 63.06, lng: -151.00, info: 'Мощная горная система вдоль запада Северной Америки' },
        { name: '🏔️ Альпы (г. Монблан, 4808 м)', lat: 45.83, lng: 6.86, info: 'Высочайшие горы Западной Европы' },
        { name: '🏔️ Кавказ (г. Эльбрус, 5642 м)', lat: 43.35, lng: 42.44, info: 'Высочайшая вершина России и Европы' },
        { name: '🏔️ Уральские горы (г. Народная, 1895 м)', lat: 65.03, lng: 60.12, info: 'Граница между Европой и Азией, богатейший рудный пояс РФ' },
        { name: '🌿 Амазонская низменность', lat: -3.46, lng: -62.21, info: 'Крупнейшая низменность мира в бассейне реки Амазонки' },
        { name: '🌿 Восточно-Европейская равнина', lat: 54.00, lng: 38.00, info: 'Одна из крупнейших равнин мира (Русская равнина)' },
        { name: '🏜️ Пустыня Сахара', lat: 23.41, lng: 13.00, info: 'Крупнейшая жаркая пустыня мира в Северной Африке' },
        { name: '⛰️ Плоскогорье Декан', lat: 17.00, lng: 77.00, info: 'Древнее плоскогорье на полуострове Индостан' }
      ]
    },
    russia: {
      title: '🇷🇺 Контурная карта России (ОГЭ №2, 21)',
      hint: 'Крайние точки РФ и главные географические объекты.',
      items: [
        { name: '🧭 Мыс Флигели (Крайняя северная островная)', lat: 81.84, lng: 59.24, info: 'Земля Франца-Иосифа, Архангельская область' },
        { name: '🧭 Мыс Челюскин (Крайняя северная материковая)', lat: 77.72, lng: 104.28, info: 'Полуостров Таймыр, Красноярский край' },
        { name: '🧭 Гора Базардюзю (Крайняя южная точка РФ)', lat: 41.22, lng: 47.85, info: 'Республика Дагестан, граница с Азербайджаном' },
        { name: '🧭 Балтийская коса (Крайняя западная точка РФ)', lat: 54.46, lng: 19.64, info: 'Калининградская область, граница с Польшей' },
        { name: '🧭 Мыс Дежнёва (Крайняя восточная материковая)', lat: 66.08, lng: -169.65, info: 'Чукотский автономный округ, Берингов пролив' },
        { name: '💧 Озеро Байкал (1642 м)', lat: 53.55, lng: 108.16, info: 'Самое глубокое озеро мира, 20% мировых запасов пресной воды' },
        { name: '🌋 Вулкан Ключевская Сопка (4750 м)', lat: 56.05, lng: 160.64, info: 'Самый высокий действующий вулкан Евразии (Камчатка)' },
        { name: '🌊 Река Волга', lat: 48.70, lng: 44.51, info: 'Самая длинная река Европы (3530 км), впадает в Каспийское море' },
        { name: '🌊 Река Лена и Енисей', lat: 62.03, lng: 129.73, info: 'Великие сибирские реки бассейна Северного Ледовитого океана' }
      ]
    },
    zones: {
      title: '🌲 Природные зоны и климат (ОГЭ №14, 24)',
      hint: 'Нажимай на зону, чтобы повторить почвы, увлажнение и типичных обитателей.',
      items: [
        { name: '🧊 Арктические пустыни', lat: 79.0, lng: 75.0, info: 'Многолетняя мерзлота, ледники, белые медведи, моржи' },
        { name: '🦌 Тундра', lat: 68.5, lng: 70.0, info: 'Тундрово-глеевые почвы, мхи и лишайники, северные олени, избыток влаги' },
        { name: '🌲 Тайга (Хвойные леса)', lat: 60.0, lng: 95.0, info: 'Подзолистые почвы, ель/сосна/лиственница, крупнейшая природная зона РФ' },
        { name: '🌾 Степи', lat: 50.5, lng: 38.0, info: 'Самые плодородные почвы — чернозёмы, главная житница (пшеница, подсолнечник)' },
        { name: '🐪 Пустыни и полупустыни', lat: 46.5, lng: 47.0, info: 'Бурые полупустынные почвы, резкий дефицит влаги, пастбищное овцеводство' },
        { name: '🦁 Саванны и редколесья', lat: 10.0, lng: 25.0, info: 'Субэкваториальный пояс, красно-бурые почвы, чёткая смена сухого и влажного сезонов' },
        { name: '🌴 Влажные экваториальные леса', lat: -1.5, lng: 20.0, info: 'Красно-жёлтые ферраллитные почвы, жарко и влажно круглый год' }
      ]
    }
  };

  let cMap = null;
  let cGroup = null;
  let activeKey = 'polit';
  let hideLabels = false;

  function makeFreeTiles() {
    return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    });
  }

  function scrubBadTiles(mapObj) {
    if (!mapObj || !mapObj.eachLayer) return;
    mapObj.eachLayer(function(l) {
      if (l && l._url && (l._url.includes('thunderforest') || l._url.includes('stamen') || l._url.includes('mapbox'))) {
        mapObj.removeLayer(l);
        makeFreeTiles().addTo(mapObj);
      }
    });
  }

  function initContourMaps() {
    if (window.map) scrubBadTiles(window.map);

    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-contour')) return;
    nav.style.overflowX = 'auto';

    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = 'nav-contour';
    btn.innerHTML = '<span>🗺️</span>Контурные';
    btn.onclick = () => {
      document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-contour').classList.remove('hidden');
      setTimeout(() => {
        ensureMap();
        renderContourLayer(activeKey);
      }, 150);
    };
    nav.appendChild(btn);

    const view = document.createElement('div');
    view.id = 'view-contour';
    view.className = 'hidden';
    view.style.padding = '12px';
    view.innerHTML = `
      <div class="filters" id="contourFilters" style="margin-bottom:8px;"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
        <div id="contourTitle" style="font-weight:700;font-size:14px;color:#38bdf8;"></div>
        <button id="toggleLabelsBtn" class="f-btn" style="white-space:nowrap;border-color:#f59e0b;color:#fbbf24;">🙈 Скрыть подписи</button>
      </div>
      <div id="contourHint" style="font-size:12px;color:#94a3b8;margin-bottom:8px;"></div>
      <div id="contourLeafletBox" style="width:100%;height:340px;border-radius:12px;overflow:hidden;border:1px solid #334155;background:#0f172a;"></div>
      <div id="contourLegend" style="margin-top:10px;"></div>
    `;
    nav.parentNode.insertBefore(view, nav);

    document.getElementById('toggleLabelsBtn').onclick = () => {
      hideLabels = !hideLabels;
      document.getElementById('toggleLabelsBtn').innerHTML = hideLabels ? '👁️ Показать подписи' : '🙈 Скрыть подписи';
      renderContourLayer(activeKey);
    };
  }

  function ensureMap() {
    if (!window.L) return;
    if (!cMap) {
      cMap = L.map('contourLeafletBox', { zoomControl: true }).setView([30, 35], 2);
      makeFreeTiles().addTo(cMap);
      cGroup = L.layerGroup().addTo(cMap);
    }
    cMap.invalidateSize();
  }

  window.renderContourLayer = function(key) {
    activeKey = key;
    const tabs = [
      { k: 'polit', t: '🌐 Политическая' },
      { k: 'currents', t: '🌊 Течения' },
      { k: 'phys', t: '🏔️ Физическая' },
      { k: 'russia', t: '🇷🇺 Россия' },
      { k: 'zones', t: '🌲 Климат и зоны' }
    ];
    document.getElementById('contourFilters').innerHTML = tabs.map(x =>
      `<button class="f-btn ${x.k === activeKey ? 'active' : ''}" onclick="renderContourLayer('${x.k}')">${x.t}</button>`
    ).join('');

    const data = LAYERS[activeKey];
    document.getElementById('contourTitle').innerText = data.title;
    document.getElementById('contourHint').innerText = data.hint;

    if (!cMap || !cGroup) return;
    cGroup.clearLayers();

    if (activeKey === 'russia') {
      cMap.setView([62, 95], 2);
    } else {
      cMap.setView([25, 25], 2);
    }

    if (data.lines) {
      data.lines.forEach(line => {
        const poly = L.polyline(line.coords, { color: line.color, weight: 4, opacity: 0.9 }).addTo(cGroup);
        poly.bindPopup(`<b>${line.name}</b>`);
        if (!hideLabels) {
          const mid = line.coords[Math.floor(line.coords.length / 2)];
          L.marker(mid, {
            icon: L.divIcon({
              className: '',
              html: `<div style="background:rgba(15,23,42,0.88);color:${line.color};border:1px solid ${line.color};padding:2px 6px;border-radius:6px;font-size:11px;font-weight:700;white-space:nowrap;">${line.name}</div>`
            })
          }).addTo(cGroup);
        }
      });
      document.getElementById('contourLegend').innerHTML = data.lines.map(l =>
        `<div class="guide-card" style="padding:8px 10px;border-left:4px solid ${l.color};"><b>${hideLabels ? '❓ Течение скрыто (нажми на линию на карте)' : l.name}</b></div>`
      ).join('');
      return;
    }

    data.items.forEach(item => {
      const marker = L.circleMarker([item.lat, item.lng], {
        radius: 7,
        color: '#38bdf8',
        fillColor: '#0284c7',
        fillOpacity: 0.9,
        weight: 2
      }).addTo(cGroup);
      marker.bindPopup(`<b>${item.name}</b><br><span style="font-size:12px;">${item.info}</span>`);

      if (!hideLabels) {
        L.marker([item.lat, item.lng], {
          icon: L.divIcon({
            className: '',
            html: `<div style="background:rgba(15,23,42,0.88);color:#f8fafc;border:1px solid #38bdf8;padding:2px 6px;border-radius:6px;font-size:11px;font-weight:600;white-space:nowrap;transform:translate(10px,-10px);">${item.name}</div>`
          })
        }).addTo(cGroup);
      }
    });

    document.getElementById('contourLegend').innerHTML = data.items.map(it => `
      <div class="guide-card" style="padding:8px 10px;" onclick="if(window._cJump)window._cJump(${it.lat},${it.lng})">
        <div style="font-weight:700;color:#38bdf8;">${hideLabels ? '❓ Название скрыто (нажми, чтобы показать на карте)' : it.name}</div>
        <div style="font-size:12px;color:#cbd5e1;margin-top:2px;">${it.info}</div>
      </div>
    `).join('');

    window._cJump = function(lat, lng) {
      if (cMap) cMap.setView([lat, lng], 4);
    };
  };

  setInterval(initContourMaps, 900);
})();
