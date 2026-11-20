(function() {
  const MAPS = [
    {
      id: 'polit',
      title: '🌐 Политическая карта мира',
      badge: '12 главных стран ОГЭ',
      hint: 'Нажимай на маркеры или переключи режим проверки без подписей, чтобы запомнить положение ключевых стран.',
      legend: [
        { color: '#ef4444', text: 'Крупнейшие по площади (РФ, Канада, Китай, США, Бразилия, Австралия)' },
        { color: '#38bdf8', text: 'Ключевые экономики и лидеры (Индия, Япония, Германия, Франция, ЮАР, Египет)' }
      ],
      svg: function(hideLabels) {
        const pts = [
          { x: 255, y: 52, n: 'Россия', c: '#ef4444' },
          { x: 78, y: 58, n: 'Канада', c: '#ef4444' },
          { x: 82, y: 84, n: 'США', c: '#ef4444' },
          { x: 122, y: 145, n: 'Бразилия', c: '#ef4444' },
          { x: 268, y: 88, n: 'Китай', c: '#ef4444' },
          { x: 312, y: 162, n: 'Австралия', c: '#ef4444' },
          { x: 248, y: 108, n: 'Индия', c: '#38bdf8' },
          { x: 315, y: 86, n: 'Япония', c: '#38bdf8' },
          { x: 185, y: 68, n: 'Германия', c: '#38bdf8' },
          { x: 175, y: 74, n: 'Франция', c: '#38bdf8' },
          { x: 198, y: 105, n: 'Египет', c: '#38bdf8' },
          { x: 198, y: 168, n: 'ЮАР', c: '#38bdf8' }
        ];
        return `<svg viewBox="0 0 360 200" style="width:100%;border-radius:10px;background:#0f172a;border:1px solid #334155;">
          <path d="M40,45 L110,42 L115,95 L88,108 L55,95 Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <path d="M100,118 L138,125 L132,182 L110,186 L98,145 Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <path d="M165,50 L210,48 L205,82 L168,80 Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <path d="M170,88 L215,92 L212,175 L188,176 L172,130 Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <path d="M212,38 L315,40 L310,108 L235,115 L212,82 Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <path d="M288,145 L335,145 L332,178 L285,176 Z" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          ${pts.map(p => `
            <circle cx="${p.x}" cy="${p.y}" r="4.5" fill="${p.c}" stroke="#fff" stroke-width="1"/>
            <text x="${p.x}" y="${p.y - 7}" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">${hideLabels ? '?' : p.n}</text>
          `).join('')}
        </svg>`;
      }
    },
    {
      id: 'currents',
      title: '🌊 Карта океанических течений',
      badge: 'Задание №14 и №24',
      hint: 'Тёплые течения (красные) несут влагу и смягчают климат; холодные (синие) образуют береговые пустыни (Атакама, Намиб).',
      legend: [
        { color: '#ef4444', text: 'Тёплые течения: Гольфстрим, Северо-Атлантическое, Куросио, Бразильское' },
        { color: '#38bdf8', text: 'Холодные течения: Перуанское, Бенгельское, Лабрадорское, Западных Ветров' }
      ],
      svg: function(hideLabels) {
        const cur = [
          { x1: 105, y1: 92, x2: 145, y2: 65, c: '#ef4444', n: 'Гольфстрим' },
          { x1: 145, y1: 65, x2: 175, y2: 50, c: '#ef4444', n: 'Сев.-Атлантическое' },
          { x1: 112, y1: 50, x2: 118, y2: 75, c: '#38bdf8', n: 'Лабрадорское' },
          { x1: 95, y1: 168, x2: 96, y2: 128, c: '#38bdf8', n: 'Перуанское' },
          { x1: 138, y1: 128, x2: 136, y2: 165, c: '#ef4444', n: 'Бразильское' },
          { x1: 182, y1: 168, x2: 176, y2: 132, c: '#38bdf8', n: 'Бенгельское' },
          { x1: 300, y1: 95, x2: 325, y2: 72, c: '#ef4444', n: 'Куросио' },
          { x1: 40, y1: 188, x2: 330, y2: 188, c: '#38bdf8', n: 'Течение Западных Ветров' }
        ];
        return `<svg viewBox="0 0 360 200" style="width:100%;border-radius:10px;background:#0c192c;border:1px solid #334155;">
          <path d="M40,45 L105,42 L108,92 L85,105 L55,95 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M100,118 L135,125 L130,178 L110,180 L98,145 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M168,50 L210,48 L205,82 L168,80 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M172,88 L215,92 L212,172 L188,174 L175,130 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M212,38 L310,40 L305,108 L235,115 L212,82 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M288,145 L335,145 L332,176 L285,174 Z" fill="#1e293b" stroke="#475569"/>
          ${cur.map(a => `
            <line x1="${a.x1}" y1="${a.y1}" x2="${a.x2}" y2="${a.y2}" stroke="${a.c}" stroke-width="2.5" stroke-dasharray="5,2"/>
            <circle cx="${a.x2}" cy="${a.y2}" r="3" fill="${a.c}"/>
            <text x="${(a.x1+a.x2)/2}" y="${(a.y1+a.y2)/2 - 4}" fill="${a.c}" font-size="7.5" font-weight="bold" text-anchor="middle">${hideLabels ? '?' : a.n}</text>
          `).join('')}
        </svg>`;
      }
    },
    {
      id: 'phys',
      title: '🏔️ Физическая карта мира',
      badge: 'Горы, равнины и рекорды',
      hint: 'Запомни главные складчатые пояса (Кордильеры, Анды, Альпы, Кавказ, Гималаи) и крупнейшие равнины.',
      legend: [
        { color: '#d97706', text: 'Крупнейшие горы: Гималаи (Джомолунгма 8848 м), Анды, Кордильеры, Альпы, Урал' },
        { color: '#10b981', text: 'Равнины и низменности: Амазонская, Восточно-Европейская, Западно-Сибирская' }
      ],
      svg: function(hideLabels) {
        const objs = [
          { x: 64, y: 74, n: 'Кордильеры', t: 'm' },
          { x: 105, y: 150, n: 'Анды', t: 'm' },
          { x: 122, y: 132, n: 'Амазонская низм.', t: 'p' },
          { x: 182, y: 68, n: 'Альпы', t: 'm' },
          { x: 205, y: 60, n: 'Вост.-Европ. равн.', t: 'p' },
          { x: 226, y: 58, n: 'Урал', t: 'm' },
          { x: 248, y: 56, n: 'Зап.-Сибирская равн.', t: 'p' },
          { x: 266, y: 95, n: 'Гималаи (8848 м)', t: 'm' },
          { x: 185, y: 105, n: 'Сахара', t: 'p' }
        ];
        return `<svg viewBox="0 0 360 200" style="width:100%;border-radius:10px;background:#0f172a;border:1px solid #334155;">
          <path d="M40,45 L110,42 L115,95 L88,108 L55,95 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M100,118 L138,125 L132,182 L110,186 L98,145 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M165,50 L210,48 L205,82 L168,80 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M170,88 L215,92 L212,175 L188,176 L172,130 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M212,38 L315,40 L310,108 L235,115 L212,82 Z" fill="#1e293b" stroke="#475569"/>
          <path d="M288,145 L335,145 L332,178 L285,176 Z" fill="#1e293b" stroke="#475569"/>
          ${objs.map(o => `
            ${o.t === 'm'
              ? `<polygon points="${o.x},${o.y-6} ${o.x-5},${o.y+4} ${o.x+5},${o.y+4}" fill="#f59e0b"/>`
              : `<rect x="${o.x-5}" y="${o.y-3}" width="10" height="6" rx="2" fill="#10b981"/>`}
            <text x="${o.x}" y="${o.y - 8}" fill="${o.t === 'm' ? '#fbbf24' : '#34d399'}" font-size="8" font-weight="bold" text-anchor="middle">${hideLabels ? '?' : o.n}</text>
          `).join('')}
        </svg>`;
      }
    },
    {
      id: 'russia',
      title: '🇷🇺 Контурная карта России',
      badge: 'Крайние точки и моря ОГЭ',
      hint: 'Проверь себя по крайним точкам РФ (Задание №21) и главным рекам/морям.',
      legend: [
        { color: '#ef4444', text: 'Крайние точки: м. Челюскин (С), г. Базардюзю (Ю), Балтийская коса (З), м. Дежнёва (В)' },
        { color: '#38bdf8', text: 'Реки и бассейны: Волга (Каспий), Обь, Енисей, Лена (СЛО), Амур (Тихий океан)' }
      ],
      svg: function(hideLabels) {
        const ruPts = [
          { x: 32, y: 82, n: 'Балтийская коса (З)', c: '#ef4444' },
          { x: 58, y: 142, n: 'г. Базардюзю (Ю)', c: '#ef4444' },
          { x: 185, y: 34, n: 'м. Челюскин (С)', c: '#ef4444' },
          { x: 336, y: 58, n: 'м. Дежнёва (В)', c: '#ef4444' },
          { x: 68, y: 105, n: 'р. Волга', c: '#38bdf8' },
          { x: 132, y: 92, n: 'р. Обь', c: '#38bdf8' },
          { x: 182, y: 95, n: 'р. Енисей', c: '#38bdf8' },
          { x: 235, y: 82, n: 'р. Лена', c: '#38bdf8' },
          { x: 288, y: 128, n: 'р. Амур', c: '#38bdf8' }
        ];
        return `<svg viewBox="0 0 360 180" style="width:100%;border-radius:10px;background:#0f172a;border:1px solid #334155;">
          <path d="M28,78 L75,55 L135,58 L185,32 L255,48 L338,56 L325,95 L292,135 L235,125 L175,132 L115,128 L60,145 L42,108 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          ${ruPts.map(p => `
            <circle cx="${p.x}" cy="${p.y}" r="4" fill="${p.c}" stroke="#fff" stroke-width="1"/>
            <text x="${p.x}" y="${p.y - 6}" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">${hideLabels ? '?' : p.n}</text>
          `).join('')}
        </svg>`;
      }
    },
    {
      id: 'zones',
      title: '🌲 Карта природных зон и климата',
      badge: 'Широтная зональность (№14)',
      hint: 'Природные зоны сменяются от полюсов к экватору в зависимости от соотношения тепла и влаги.',
      legend: [
        { color: '#cbd5e1', text: 'Арктические пустыни и Тундра (мхи, лишайники, многолетняя мерзлота)' },
        { color: '#15803d', text: 'Тайга и Смешанные леса (хвойные породы, подзолистые и дерново-подзолистые почвы)' },
        { color: '#eab308', text: 'Степи и Пустыни (чернозёмы в степях; серозёмы и бурые почвы в пустынях)' },
        { color: '#10b981', text: 'Саванны и Влажные экваториальные леса (красно-жёлтые ферраллитные почвы)' }
      ],
      svg: function(hideLabels) {
        const bands = [
          { y: 12, h: 22, c: '#475569', n: 'Арктические пустыни и Тундра (субарктический пояс)' },
          { y: 34, h: 26, c: '#166534', n: 'Тайга и Смешанные леса (умеренный пояс)' },
          { y: 60, h: 24, c: '#a16207', n: 'Степи и Лесостепи (чернозёмы — главные житницы)' },
          { y: 84, h: 26, c: '#d97706', n: 'Тропические пустыни и Полупустыни (Сахара, Аравия)' },
          { y: 110, h: 24, c: '#65a30d', n: 'Саванны и Редколесья (субэкваториальный пояс)' },
          { y: 134, h: 28, c: '#059669', n: 'Влажные экваториальные леса (гилея, Амазония, Конго)' }
        ];
        return `<svg viewBox="0 0 360 175" style="width:100%;border-radius:10px;background:#0f172a;border:1px solid #334155;">
          ${bands.map(b => `
            <rect x="12" y="${b.y}" width="336" height="${b.h}" rx="4" fill="${b.c}" opacity="0.85"/>
            <text x="180" y="${b.y + b.h/2 + 3}" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">${hideLabels ? '??? (Режим самопроверки)' : b.n}</text>
          `).join('')}
        </svg>`;
      }
    }
  ];

  let activeMap = 'polit';
  let hideLabels = false;

  function initContourMaps() {
    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-contour')) return;
    nav.style.overflowX = 'auto';

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
    view.innerHTML = '<div class="filters" id="contourFilters" style="margin-bottom:10px;flex-wrap:wrap;gap:6px;"></div><div id="contourBox"></div>';
    nav.parentNode.insertBefore(view, nav);
  }

  window.setContourMap = function(id) {
    activeMap = id;
    renderContourMap();
  };

  window.toggleContourLabels = function() {
    hideLabels = !hideLabels;
    renderContourMap();
  };

  window.renderContourMap = function() {
    const f = document.getElementById('contourFilters');
    const box = document.getElementById('contourBox');
    if (!f || !box) return;

    const names = {
      polit: '🌐 Политическая',
      currents: '🌊 Течения',
      phys: '🏔️ Физическая',
      russia: '🇷🇺 Россия',
      zones: '🌲 Климат и зоны'
    };

    f.innerHTML = MAPS.map(m =>
      `<button class="f-btn ${m.id === activeMap ? 'active' : ''}" onclick="setContourMap('${m.id}')">${names[m.id]}</button>`
    ).join('');

    const cur = MAPS.find(m => m.id === activeMap) || MAPS[0];
    box.innerHTML = `
      <div class="guide-card" style="border-left:4px solid #38bdf8;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;">
          <div>
            <div class="guide-cat" style="color:#38bdf8;">${cur.badge}</div>
            <div class="guide-title">${cur.title}</div>
          </div>
          <button class="f-btn ${hideLabels ? 'active' : ''}" onclick="toggleContourLabels()" style="white-space:nowrap;">
            ${hideLabels ? '👁️ Показать подписи' : '🙈 Скрыть подписи'}
          </button>
        </div>
        <div style="margin:8px 0;">${cur.svg(hideLabels)}</div>
        <div class="guide-trap" style="margin:8px 0;"><b>Как учить:</b> ${cur.hint}</div>
        <div style="display:flex;flex-direction:column;gap:5px;margin-top:8px;">
          ${cur.legend.map(l => `
            <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:#e2e8f0;">
              <span style="width:12px;height:12px;border-radius:3px;background:${l.color};flex-shrink:0;"></span>
              <span>${l.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  };

  setInterval(initContourMaps, 900);
})();
