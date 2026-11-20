(function() {
  const LAYERS_DATA = {
    polit: {
      title: '🌐 Политическая карта (Ключевые страны ОГЭ)',
      items: [
        { name: '🇷🇺 Россия', coords: [61.5, 95.0], info: 'Столица: Москва • 17,1 млн км² (1-е место в мире) • 11 часовых поясов' },
        { name: '🇨🇳 Китай', coords: [35.8, 104.1], info: 'Столица: Пекин • 9,6 млн км² • Лидер по населению, углю, стали и рису' },
        { name: '🇮🇳 Индия', coords: [21.0, 78.9], info: 'Столица: Нью-Дели • 3,3 млн км² • Чай, специи, джут, ИТ-сектор' },
        { name: '🇺🇸 США', coords: [39.8, -98.5], info: 'Столица: Вашингтон • 9,5 млн км² • Федерация (50 штатов), G7, НАТО' },
        { name: '🇧🇷 Бразилия', coords: [-14.2, -51.9], info: 'Столица: Бразилиа • 8,5 млн км² • Кофе, сахарный тростник, железная руда' },
        { name: '🇩🇪 Германия', coords: [51.1, 10.4], info: 'Столица: Берлин • Федерация, локомотив экономики ЕС' },
        { name: '🇯🇵 Япония', coords: [36.2, 138.2], info: 'Столица: Токио • Унитарная монархия, робототехника, дефицит ресурсов' },
        { name: '🇦🇺 Австралия', coords: [-25.2, 133.7], info: 'Столица: Канберра • Страна-материк, железная руда, бокситы, шерсть' },
        { name: '🇪🇬 Египет', coords: [26.8, 30.8], info: 'Столица: Каир • Суэцкий канал, дельта Нила, хлопок' },
        { name: '🇿🇦 ЮАР', coords: [-30.5, 22.9], info: 'Столицы: Претория/Кейптаун • Золото, платина, алмазы, БРИКС+' },
        { name: '🇨🇦 Канада', coords: [56.1, -106.3], info: 'Столица: Оттава • 2-е место по площади, лес, уран, калийные соли' },
        { name: '🇸🇦 Саудовская Аравия', coords: [23.8, 45.0], info: 'Столица: Эр-Рияд • Абсолютная монархия, лидер ОПЕК по экспорту нефти' }
      ]
    },
    currents: {
      title: '🌊 Океанические течения (Красные — тёплые, Синие — холодные)',
      routes: [
        { name: '🔥 Гольфстрим (тёплое)', color: '#ef4444', pts: [[25, -80], [35, -75], [42, -55], [48, -35]], info: 'Мощное тёплое течение в Атлантике, согревает Европу' },
        { name: '🔥 Северо-Атлантическое (тёплое)', color: '#ef4444', pts: [[48, -35], [56, -15], [64, 5], [70, 25]], info: 'Продолжение Гольфстрима: благодаря ему порт Мурманск не замерзает зимой!' },
        { name: '🔥 Куросио (тёплое)', color: '#ef4444', pts: [[22, 123], [32, 135], [40, 150]], info: 'Тёплое течение у берегов Японии в Тихом океане' },
        { name: '🔥 Бразильское (тёплое)', color: '#ef4444', pts: [[-8, -34], [-22, -40], [-35, -52]], info: 'Тёплое течение вдоль восточного берега Южной Америки' },
        { name: '❄️ Перуанское / Гумбольдта (холодное)', color: '#38bdf8', pts: [[-42, -75], [-25, -72], [-8, -81]], info: 'Холодное течение: главная причина образования пустыни Атакама!' },
        { name: '❄️ Лабрадорское (холодное)', color: '#38bdf8', pts: [[62, -60], [52, -52], [43, -50]], info: 'Холодное течение из Арктики, приносит айсберги к берегам Канады' },
        { name: '❄️ Бенгельское (холодное)', color: '#38bdf8', pts: [[-34, 17], [-22, 13], [-10, 12]], info: 'Холодное течение у юго-запада Африки — причина пустыни Намиб' },
        { name: '❄️ Течение Западных Ветров (холодное)', color: '#38bdf8', pts: [[-55, -70], [-55, 0], [-55, 80], [-55, 160]], info: 'Самое мощное холодное течение Земли вокруг Антарктиды' }
      ]
    },
    phys: {
      title: '🏔️ Физическая карта мира (Горы и равнины ОГЭ)',
      items: [
        { name: '🏔️ Гималаи (г. Джомолунгма, 8848 м)', coords: [27.98, 86.92], info: 'Высочайшие горы Земли на стыке Индостанской и Евразийской плит' },
        { name: '🏔️ Анды (г. Аконкагуа, 6961 м)', coords: [-32.65, -70.01], info: 'Самая длинная горная цепь суши (9000 км) вдоль запада Южной Америки' },
        { name: '🏔️ Кордильеры (г. Денали, 6190 м)', coords: [63.06, -151.0], info: 'Горная система вдоль запада Северной Америки' },
        { name: '🏔️ Альпы (г. Монблан, 4808 м)', coords: [45.83, 6.86], info: 'Высочайшие горы Западной Европы' },
        { name: '🏔️ Кавказ (г. Эльбрус, 5642 м)', coords: [43.35, 42.44], info: 'Высочайшая вершина России и Европы (между Чёрным и Каспийским морями)' },
        { name: '🏔️ Уральские горы (г. Народная, 1895 м)', coords: [65.03, 60.11], info: 'Древние складчатые горы — граница между Европой и Азией' },
        { name: '🌿 Амазонская низменность', coords: [-3.5, -62.0], info: 'Крупнейшая низменность мира в экваториальном поясе Южной Америки' },
        { name: '🌿 Восточно-Европейская (Русская) равнина', coords: [54.0, 38.0], info: 'Одна из крупнейших равнин мира на древней Русской платформе' },
        { name: '🌿 Западно-Сибирская равнина', coords: [61.0, 73.0], info: 'Крупнейшая плоская заболоченная равнина мира (главная нефтегазовая база РФ)' },
        { name: '🏜️ Плоскогорье Декан', coords: [17.5, 77.0], info: 'Обширное плоскогорье на полуострове Индостан' }
      ]
    },
    russia: {
      title: '🇷🇺 Контурная карта России (Крайние точки и объекты №21)',
      items: [
        { name: '🧭 Мыс Флигели (81°51′ с.ш.)', coords: [81.85, 59.23], info: 'Крайняя северная островная точка РФ (Земля Франца-Иосифа, Архангельская обл.)' },
        { name: '🧭 Мыс Челюскин (77°43′ с.ш.)', coords: [77.72, 104.28], info: 'Крайняя северная материковая точка РФ (п-ов Таймыр, Красноярский край)' },
        { name: '🧭 Гора Базардюзю (41°11′ с.ш.)', coords: [41.22, 47.85], info: 'Крайняя южная точка РФ (граница Дагестана и Азербайджана)' },
        { name: '🧭 Балтийская коса (19°38′ в.д.)', coords: [54.45, 19.63], info: 'Крайняя западная точка РФ (Калининградская область)' },
        { name: '🧭 Мыс Дежнёва (169°40′ з.д.)', coords: [66.08, -169.65], info: 'Крайняя восточная материковая точка РФ (Чукотский АО, омывается 2 океанами)' },
        { name: '💧 Озеро Байкал (1642 м)', coords: [53.5, 108.2], info: 'Самое глубокое озеро планеты (20% мировых запасов пресной воды)' },
        { name: '🌊 Река Волга (3530 км)', coords: [48.7, 44.5], info: 'Самая длинная река Европы, впадает в Каспийское море (внутренний сток)' },
        { name: '🌋 Вулкан Ключевская Сопка (4750 м)', coords: [56.05, 160.64], info: 'Самый высокий действующий вулкан Евразии (Камчатский край)' },
        { name: '⛏️ Курская магнитная аномалия (КМА)', coords: [51.3, 37.8], info: 'Крупнейший в мире железорудный бассейн (Белгородская и Курская обл.)' },
        { name: '⛽ Самотлор и Уренгой (ХМАО и ЯНАО)', coords: [64.0, 76.5], info: 'Главная нефтегазовая база России в Западной Сибири' }
      ]
    },
    climate: {
      title: '🌲 Климатические пояса и природные зоны мира',
      zones: [
        { name: '❄️ Арктический пояс (Арктические пустыни)', lat: [72, 85], color: '#e2e8f0', info: 'Круглый год холодные воздушные массы, ледники, белые медведи' },
        { name: '🦌 Субарктический пояс (Тундра и лесотундра)', lat: [64, 72], color: '#38bdf8', info: 'Многолетняя мерзлота, мхи, лишайники, карликовая берёза, оленеводство' },
        { name: '🌲 Умеренный пояс (Тайга, смешанные леса, степи)', lat: [42, 64], color: '#22c55e', info: 'Чёткие 4 сезона года. В тайге — подзолистые почвы; в степях — плодородные чернозёмы!' },
        { name: '🍊 Субтропический пояс (Жестколистные леса)', lat: [30, 42], color: '#eab308', info: 'Средиземноморье, ЮБК, Сочи: сухое жаркое лето и влажная мягкая зима (цитрусовые, виноград)' },
        { name: '🏜️ Тропический пояс (Пустыни и полупустыни)', lat: [18, 30], color: '#f97316', info: 'Высокое давление, нисходящие токи воздуха, минимум осадков (Сахара, Аравийская пустыня)' },
        { name: '🦁 Субэкваториальный пояс (Саванны и редколесья)', lat: [6, 18], color: '#84cc16', info: 'Чёткая смена влажного лета (экваториальный воздух) и сухой зимы (тропический воздух)' },
        { name: '🌴 Экваториальный пояс (Влажные экваториальные леса)', lat: [-6, 6], color: '#10b981', info: 'Весь год жарко (+26...+28°C) и ливни каждый день (Амазония, бассейн Конго)' }
      ]
    }
  };

  let activeLayer = 'polit';
  let hideLabels = false;
  let contourMap = null;
  let layerGroup = null;

  function initContourMaps() {
    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-contour')) return;

    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = 'nav-contour';
    btn.innerHTML = '<span>🗺️</span>Контурные';
    btn.onclick = () => {
      if (localStorage.getItem('geocore_pro') !== '1' && window.openProModal) { openProModal(); return; }
      document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-contour').classList.remove('hidden');
      renderContourMap();
    };
    nav.appendChild(btn);

    const view = document.createElement('div');
    view.id = 'view-contour';
    view.className = 'hidden';
    view.style.padding = '12px';
    view.innerHTML = `
      <div class="filters" id="contourTabs" style="margin-bottom:8px;"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;gap:8px;flex-wrap:wrap;">
        <div id="contourTitle" style="font-weight:700;font-size:13px;color:#38bdf8;"></div>
        <button id="toggleLabelsBtn" class="f-btn" style="border-color:#f59e0b;color:#f59e0b;" onclick="toggleContourLabels()">🙈 Скрыть подписи (Тренировка)</button>
      </div>
      <div id="contourLeafletBox" style="width:100%;height:340px;border-radius:12px;overflow:hidden;border:1px solid #334155;background:#0f172a;margin-bottom:10px;"></div>
      <div id="contourLegend"></div>
    `;
    nav.parentNode.insertBefore(view, nav);
  }

  window.toggleContourLabels = function() {
    hideLabels = !hideLabels;
    const btn = document.getElementById('toggleLabelsBtn');
    if (btn) btn.innerText = hideLabels ? '👁️ Показать подписи' : '🙈 Скрыть подписи (Тренировка)';
    renderContourMap();
  };

  window.setContourLayer = function(key) {
    activeLayer = key;
    renderContourMap();
  };

  window.renderContourMap = function() {
    const tabs = document.getElementById('contourTabs');
    if (!tabs) return;

    const tabNames = [
      { key: 'polit', label: '🌐 Политическая' },
      { key: 'currents', label: '🌊 Течения' },
      { key: 'phys', label: '🏔️ Физическая' },
      { key: 'russia', label: '🇷🇺 Россия' },
      { key: 'climate', label: '🌲 Климат. зоны' }
    ];
    tabs.innerHTML = tabNames.map(t =>
      `<button class="f-btn ${t.key === activeLayer ? 'active' : ''}" onclick="setContourLayer('${t.key}')">${t.label}</button>`
    ).join('');

    const data = LAYERS_DATA[activeLayer];
    document.getElementById('contourTitle').innerText = data.title;

    if (!contourMap && window.L) {
      contourMap = L.map('contourLeafletBox', { zoomControl: true, attributionControl: false }).setView([25, 20], 2);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 10
      }).addTo(contourMap);
      layerGroup = L.layerGroup().addTo(contourMap);
    }

    if (contourMap) {
      setTimeout(() => contourMap.invalidateSize(), 120);
      layerGroup.clearLayers();

      if (activeLayer === 'russia') contourMap.setView([62, 95], 2);
      else contourMap.setView([25, 20], 2);

      if (data.items) {
        data.items.forEach((it, idx) => {
          const marker = L.circleMarker(it.coords, {
            radius: 8,
            fillColor: activeLayer === 'phys' ? '#f59e0b' : (activeLayer === 'russia' ? '#ef4444' : '#38bdf8'),
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.9
          }).addTo(layerGroup);

          const labelText = hideLabels ? ('❓ Объект №' + (idx + 1)) : it.name;
          marker.bindTooltip(labelText, { permanent: true, direction: 'top', className: 'geo-tip' });
          marker.bindPopup(`<b>${it.name}</b><br><span style="font-size:12px;">${it.info}</span>`);
        });
      }

      if (data.routes) {
        data.routes.forEach((rt, idx) => {
          const line = L.polyline(rt.pts, { color: rt.color, weight: 4, opacity: 0.85 }).addTo(layerGroup);
          const mid = rt.pts[Math.floor(rt.pts.length / 2)];
          const marker = L.circleMarker(mid, { radius: 6, fillColor: rt.color, color: '#fff', weight: 1.5, fillOpacity: 1 }).addTo(layerGroup);
          marker.bindTooltip(hideLabels ? ('❓ Течение №' + (idx + 1)) : rt.name, { permanent: true, direction: 'top' });
          line.bindPopup(`<b>${rt.name}</b><br>${rt.info}`);
          marker.bindPopup(`<b>${rt.name}</b><br>${rt.info}`);
        });
      }

      if (data.zones) {
        data.zones.forEach((zn) => {
          const rect = L.rectangle([[zn.lat[0], -180], [zn.lat[1], 180]], {
            color: zn.color,
            weight: 1,
            fillColor: zn.color,
            fillOpacity: 0.28
          }).addTo(layerGroup);
          rect.bindPopup(`<b>${zn.name}</b><br>${zn.info}`);
          if (zn.lat[0] > 0) {
            const rectS = L.rectangle([[-zn.lat[1], -180], [-zn.lat[0], 180]], {
              color: zn.color,
              weight: 1,
              fillColor: zn.color,
              fillOpacity: 0.28
            }).addTo(layerGroup);
            rectS.bindPopup(`<b>${zn.name} (Южное полушарие)</b><br>${zn.info}`);
          }
        });
      }
    }

    const list = data.items || data.routes || data.zones || [];
    document.getElementById('contourLegend').innerHTML = list.map((x, idx) => `
      <div class="guide-card" style="padding:10px;margin-bottom:8px;border-left:4px solid ${x.color || '#38bdf8'};">
        <div class="guide-title" style="font-size:14px;">${hideLabels ? ('❓ Объект №' + (idx + 1) + ' — нажми на точку на карте для проверки') : x.name}</div>
        <div class="guide-rule" style="font-size:12px;margin-top:4px;">${x.info}</div>
      </div>
    `).join('');
  };

  setInterval(initContourMaps, 1000);
})();
