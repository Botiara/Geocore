(function() {
  let cMap = null;
  let cLayer = null;
  let hideLabels = false;
  let currentMapType = 'Политическая';

  const LAYERS_DATA = {
    'Политическая': [
      { type: 'marker', lat: 55.75, lng: 37.61, color: '#38bdf8', title: '🇷🇺 Россия', info: 'Столица: Москва • 17,1 млн км² • СБ ООН, БРИКС+, ЕАЭС, ШОС' },
      { type: 'marker', lat: 39.90, lng: 116.40, color: '#ef4444', title: '🇨🇳 Китай', info: 'Столица: Пекин • 9,6 млн км² • 1,41 млрд чел. • СБ ООН, БРИКС+, ШОС' },
      { type: 'marker', lat: 38.90, lng: -77.03, color: '#3b82f6', title: '🇺🇸 США', info: 'Столица: Вашингтон • 9,8 млн км² • 335 млн чел. • НАТО, G7, USMCA' },
      { type: 'marker', lat: 28.61, lng: 77.20, color: '#f97316', title: '🇮🇳 Индия', info: 'Столица: Нью-Дели • 3,28 млн км² • 1,43 млрд чел. (№1 в мире) • БРИКС+' },
      { type: 'marker', lat: -15.79, lng: -47.88, color: '#22c55e', title: '🇧🇷 Бразилия', info: 'Столица: Бразилиа • 8,51 млн км² • БРИКС+, МЕРКОСУР • Железная руда, кофе' },
      { type: 'marker', lat: 52.52, lng: 13.40, color: '#eab308', title: '🇩🇪 Германия', info: 'Столица: Берлин • 357 тыс. км² • Крупнейшая экономика ЕС • НАТО, G7' },
      { type: 'marker', lat: 35.68, lng: 139.69, color: '#ec4899', title: '🇯🇵 Япония', info: 'Столица: Токио • 377 тыс. км² • Архипелаг (4 крупных острова) • G7' },
      { type: 'marker', lat: -35.28, lng: 149.13, color: '#14b8a6', title: '🇦🇺 Австралия', info: 'Столица: Канберра • 7,69 млн км² • Целый материк • AUKUS, QUAD' },
      { type: 'marker', lat: 30.04, lng: 31.23, color: '#f59e0b', title: '🇪🇬 Египет', info: 'Столица: Каир • Суэцкий канал • БРИКС+, ЛАГ, Афросоюз' },
      { type: 'marker', lat: -25.74, lng: 28.22, color: '#a855f7', title: '🇿🇦 ЮАР', info: 'Столица: Претория • Золото, платина, алмазы • БРИКС+, G20' },
      { type: 'marker', lat: 45.42, lng: -75.69, color: '#06b6d4', title: '🇨🇦 Канада', info: 'Столица: Оттава • 9,98 млн км² (2-е место в мире) • НАТО, USMCA' },
      { type: 'marker', lat: 19.43, lng: -99.13, color: '#84cc16', title: '🇲🇽 Мексика', info: 'Столица: Мехико • Лидер мира по добыче серебра • USMCA, G20' }
    ],
    'Течения': [
      { type: 'line', coords: [[25, -80], [35, -72], [42, -55]], color: '#ef4444', title: '🔥 Гольфстрим (тёплое)', info: 'Мощное тёплое течение Атлантики. Смягчает климат Европы.' },
      { type: 'line', coords: [[42, -55], [53, -30], [63, -5], [70, 25]], color: '#ef4444', title: '🔥 Северо-Атлантическое (тёплое)', info: 'Продолжение Гольфстрима. Делает порт Мурманск незамерзающим зимой.' },
      { type: 'line', coords: [[22, 125], [32, 136], [40, 152]], color: '#ef4444', title: '🔥 Куросио (тёплое)', info: 'Тёплое течение у берегов Японии в Тихом океане.' },
      { type: 'line', coords: [[-8, -33], [-22, -39], [-35, -50]], color: '#ef4444', title: '🔥 Бразильское (тёплое)', info: 'Тёплое течение у восточного побережья Южной Америки.' },
      { type: 'line', coords: [[-42, -76], [-25, -73], [-8, -81]], color: '#38bdf8', title: '❄️ Перуанское / Гумбольдта (холодное)', info: 'Холодное течение у берегов Чили и Перу. Причина образования пустыни Атакама.' },
      { type: 'line', coords: [[62, -60], [50, -52], [42, -52]], color: '#38bdf8', title: '❄️ Лабрадорское (холодное)', info: 'Холодное течение у берегов Канады. Несёт айсберги и вызывает туманы.' },
      { type: 'line', coords: [[-33, 15], [-20, 11], [-8, 10]], color: '#38bdf8', title: '❄️ Бенгельское (холодное)', info: 'Холодное течение у юго-запада Африки. Причина образования пустыни Намиб.' },
      { type: 'line', coords: [[-55, -70], [-55, 0], [-55, 80], [-55, 160]], color: '#38bdf8', title: '❄️ Течение Западных Ветров (холодное)', info: 'Самое мощное и длинное холодное течение Мирового океана вокруг Антарктиды.' }
    ],
    'Физическая': [
      { type: 'marker', lat: 27.98, lng: 86.92, color: '#f97316', title: '🏔️ Гималаи (г. Джомолунгма)', info: 'Высочайшая горная система Земли — 8848 м. Граница Индостанской и Евразийской плит.' },
      { type: 'marker', lat: -32.65, lng: -70.01, color: '#ef4444', title: '🏔️ Анды (г. Аконкагуа)', info: 'Самая длинная горная цепь суши (9000 км) в Южной Америке. Высшая точка — 6961 м.' },
      { type: 'marker', lat: 63.06, lng: -151.00, color: '#eab308', title: '🏔️ Кордильеры (г. Денали)', info: 'Горная система на западе Северной Америки. Высшая точка — 6190 м.' },
      { type: 'marker', lat: 45.83, lng: 6.86, color: '#a855f7', title: '🏔️ Альпы (г. Монблан)', info: 'Высочайшие горы Западной Европы — 4808 м.' },
      { type: 'marker', lat: 43.35, lng: 42.44, color: '#ec4899', title: '🏔️ Кавказ (г. Эльбрус)', info: 'Высшая точка России и Европы — 5642 м (двуглавый стратовулкан).' },
      { type: 'marker', lat: 65.00, lng: 59.50, color: '#06b6d4', title: '⛰️ Уральские горы (г. Народная)', info: 'Древние складчатые горы — граница между Европой и Азией (1895 м).' },
      { type: 'marker', lat: -3.50, lng: -62.00, color: '#22c55e', title: '🌿 Амазонская низменность', info: 'Крупнейшая низменность мира (>5 млн км²) в бассейне реки Амазонки.' },
      { type: 'marker', lat: 55.00, lng: 40.00, color: '#84cc16', title: '🌾 Восточно-Европейская равнина', info: 'Одна из крупнейших равнин мира. Расположена на древней Русской платформе.' },
      { type: 'marker', lat: 61.00, lng: 73.00, color: '#14b8a6', title: '🛢️ Западно-Сибирская равнина', info: 'Плоская заболоченная равнина на молодой плите. Главная нефтегазовая база РФ.' },
      { type: 'marker', lat: 17.00, lng: 77.00, color: '#f59e0b', title: '🏜️ Плоскогорье Декан', info: 'Крупное плоскогорье в центральной части полуострова Индостан.' }
    ],
    'Россия': [
      { type: 'marker', lat: 81.84, lng: 59.24, color: '#38bdf8', title: '🧭 Мыс Флигели (Крайняя С. островная)', info: 'Остров Рудольфа, Земля Франца-Иосифа (Архангельская область).' },
      { type: 'marker', lat: 77.72, lng: 104.25, color: '#06b6d4', title: '🧭 Мыс Челюскин (Крайняя С. материковая)', info: 'Полуостров Таймыр, Красноярский край.' },
      { type: 'marker', lat: 41.19, lng: 47.78, color: '#ef4444', title: '🧭 Гора Базардюзю (Крайняя Южная)', info: 'Республика Дагестан, граница с Азербайджаном (4466 м).' },
      { type: 'marker', lat: 54.46, lng: 19.63, color: '#eab308', title: '🧭 Балтийская коса (Крайняя Западная)', info: 'Калининградская область, граница с Польшей.' },
      { type: 'marker', lat: 66.08, lng: -169.65, color: '#f97316', title: '🧭 Мыс Дежнёва (Крайняя В. материковая)', info: 'Чукотский автономный округ, Берингов пролив.' },
      { type: 'marker', lat: 53.50, lng: 108.00, color: '#3b82f6', title: '💧 Озеро Байкал', info: 'Самое глубокое озеро планеты (1642 м) и крупнейший резервуар пресной воды.' },
      { type: 'marker', lat: 51.50, lng: 46.00, color: '#22c55e', title: '🌊 Река Волга', info: 'Крупнейшая река Европы (3530 км). Впадает в Каспийское море (бессточный бассейн).' },
      { type: 'marker', lat: 63.00, lng: 129.00, color: '#a855f7', title: '❄️ Река Лена и Полюс холода (Оймякон)', info: 'Крупнейшая река Восточной Сибири. В Якутии зафиксировано −67,7 °C.' },
      { type: 'marker', lat: 56.06, lng: 160.64, color: '#ec4899', title: '🌋 Ключевская Сопка (Камчатка)', info: 'Самый высокий действующий вулкан Евразии (4750 м). Тихоокеанское огненное кольцо.' },
      { type: 'marker', lat: 50.60, lng: 36.60, color: '#84cc16', title: '🧲 КМА (Курская магнитная аномалия)', info: 'Крупнейший в мире железорудный бассейн (Белгородская и Курская области).' }
    ],
    'Климат': [
      { type: 'zone', lat: 0, lng: 20, radius: 1100000, color: '#15803d', title: '🌴 Экваториальный пояс (Влажные леса)', info: 'Круглый год жарко (+26 °C) и влажно (>2000 мм осадков). Красно-жёлтые ферраллитные почвы. Амазония, Конго.' },
      { type: 'zone', lat: 14, lng: 25, radius: 950000, color: '#eab308', title: '🦒 Субэкваториальный пояс (Саванны)', info: 'Два сезона: влажное лето (экваториальный воздух) и сухая зима (тропический воздух). Красно-бурые почвы.' },
      { type: 'zone', lat: 24, lng: 15, radius: 1200000, color: '#f97316', title: '🐪 Тропический пояс (Пустыни Сахара, Аравия)', info: 'Высокое давление, нисходящие потоки воздуха, осадков <100 мм в год. Резкие суточные перепады температур.' },
      { type: 'zone', lat: 38, lng: 15, radius: 850000, color: '#ec4899', title: '🍋 Субтропический пояс (Средиземноморье)', info: 'Летом тропический воздух (жарко и сухо), зимой умеренный (прохладно и влажно). Жестколистные леса и кустарники.' },
      { type: 'zone', lat: 50, lng: 42, radius: 950000, color: '#84cc16', title: '🌾 Умеренный пояс (Степи и чернозёмы)', info: 'Чёткие 4 сезона года. В степях формируются самые плодородные почвы мира — чернозёмы (ЦЧР, Поволжье, Пампа).' },
      { type: 'zone', lat: 60, lng: 85, radius: 1150000, color: '#166534', title: '🌲 Умеренный пояс (Тайга)', info: 'Крупнейшая природная зона России (ель, сосна, лиственница). Подзолистые и мерзлотно-таёжные почвы.' },
      { type: 'zone', lat: 70, lng: 90, radius: 850000, color: '#38bdf8', title: '🦌 Субарктический пояс (Тундра)', info: 'Многолетняя мерзлота, короткое холодное лето (+5…+10 °C), мхи, лишайники, карликовые берёзы. Оленеводство.' },
      { type: 'zone', lat: 80, lng: 60, radius: 750000, color: '#e2e8f0', title: '🧊 Арктический пояс (Арктические пустыни)', info: 'Круглый год отрицательные температуры, ледники, полярная ночь и день. Белые медведи, моржи, птичьи базары.' }
    ]
  };

  function initContourMaps() {
    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-contour')) return;
    nav.style.overflowX = 'auto';

    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = 'nav-contour';
    btn.innerHTML = '<span>🗺️</span>Карты ОГЭ';
    btn.onclick = () => {
      if (localStorage.getItem('geocore_pro') !== '1' && window.openProModal) { openProModal(); return; }
      document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-contour').classList.remove('hidden');

      if (!cMap && window.L) {
        cMap = L.map('contourLeafletMap', { zoomControl: false }).setView([35, 30], 2);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; CARTO',
          maxZoom: 8
        }).addTo(cMap);
        cLayer = L.layerGroup().addTo(cMap);
      }
      setTimeout(() => {
        if (cMap) cMap.invalidateSize();
        renderContourMap(currentMapType);
      }, 150);
    };
    nav.appendChild(btn);

    const view = document.createElement('div');
    view.id = 'view-contour';
    view.className = 'hidden';
    view.style.cssText = 'position:relative;width:100%;height:calc(100vh - 115px);';
    view.innerHTML = `
      <div style="position:absolute;top:10px;left:10px;right:10px;z-index:1000;display:flex;flex-direction:column;gap:6px;pointer-events:none;">
        <div class="filters" id="contourFilters" style="pointer-events:auto;background:rgba(15,23,42,0.88);padding:6px;border-radius:12px;backdrop-filter:blur(6px);"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;pointer-events:auto;">
          <button id="toggleLabelsBtn" onclick="toggleContourLabels()" style="padding:6px 12px;border-radius:8px;border:1px solid #38bdf8;background:#0f172a;color:#38bdf8;font-size:12px;font-weight:700;cursor:pointer;">🙈 Скрыть подписи (Тест)</button>
          <span id="contourHint" style="font-size:11px;color:#e2e8f0;background:rgba(15,23,42,0.88);padding:5px 10px;border-radius:8px;">Нажми на маркер / линию</span>
        </div>
      </div>
      <div id="contourLeafletMap" style="width:100%;height:100%;background:#0b1120;"></div>
    `;
    nav.parentNode.insertBefore(view, nav);
  }

  window.toggleContourLabels = function() {
    hideLabels = !hideLabels;
    const btn = document.getElementById('toggleLabelsBtn');
    if (btn) btn.innerHTML = hideLabels ? '👁️ Показать подписи' : '🙈 Скрыть подписи (Тест)';
    renderContourMap(currentMapType);
  };

  window.renderContourMap = function(type) {
    if (type) currentMapType = type;
    const filters = document.getElementById('contourFilters');
    if (filters) {
      filters.innerHTML = ['Политическая', 'Течения', 'Физическая', 'Россия', 'Климат'].map(t =>
        `<button class="f-btn ${t === currentMapType ? 'active' : ''}" onclick="renderContourMap('${t}')">${t}</button>`
      ).join('');
    }

    if (!cMap || !cLayer) return;
    cLayer.clearLayers();

    if (currentMapType === 'Россия') {
      cMap.setView([62, 95], 3);
    } else if (currentMapType === 'Политическая') {
      cMap.setView([25, 20], 2);
    } else {
      cMap.setView([20, 15], 2);
    }

    const items = LAYERS_DATA[currentMapType] || [];
    items.forEach(item => {
      const popupHtml = `<div style="min-width:170px;"><b>${item.title}</b><div style="font-size:12px;margin-top:4px;color:#334155;">${item.info}</div></div>`;
      if (item.type === 'marker') {
        const m = L.circleMarker([item.lat, item.lng], {
          radius: 8,
          fillColor: item.color,
          color: '#ffffff',
          weight: 2,
          fillOpacity: 0.9
        }).bindPopup(popupHtml);
        if (!hideLabels) {
          m.bindTooltip(item.title, { permanent: true, direction: 'top', offset: [0, -6], className: 'contour-tip' });
        }
        m.addTo(cLayer);
      } else if (item.type === 'line') {
        const line = L.polyline(item.coords, {
          color: item.color,
          weight: 5,
          opacity: 0.85,
          dashArray: item.color === '#38bdf8' ? '8, 6' : null
        }).bindPopup(popupHtml);
        if (!hideLabels) {
          line.bindTooltip(item.title, { permanent: true, direction: 'center' });
        }
        line.addTo(cLayer);
      } else if (item.type === 'zone') {
        const circle = L.circle([item.lat, item.lng], {
          radius: item.radius,
          color: item.color,
          fillColor: item.color,
          fillOpacity: 0.28,
          weight: 2
        }).bindPopup(popupHtml);
        if (!hideLabels) {
          circle.bindTooltip(item.title, { permanent: true, direction: 'center' });
        }
        circle.addTo(cLayer);
      }
    });
  };

  setInterval(initContourMaps, 600);
})();
