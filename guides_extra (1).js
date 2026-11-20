(function() {
  const SCHEMES = [
    {
      badge: 'Синоптика • Задания №5–6',
      title: 'Циклон (Н) и Антициклон (В)',
      svg: `<svg viewBox="0 0 320 110" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <circle cx="80" cy="55" r="36" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="80" y="62" fill="#38bdf8" font-size="22" font-weight="bold" text-anchor="middle">Н</text>
        <path d="M80 12 L80 28 M75 23 L80 28 L85 23" stroke="#38bdf8" stroke-width="2" fill="none"/>
        <path d="M80 98 L80 82 M75 87 L80 82 L85 87" stroke="#38bdf8" stroke-width="2" fill="none"/>
        <path d="M36 55 L52 55 M47 50 L52 55 L47 60" stroke="#38bdf8" stroke-width="2" fill="none"/>
        <path d="M124 55 L108 55 M113 50 L108 55 L113 60" stroke="#38bdf8" stroke-width="2" fill="none"/>
        <text x="80" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">Ветер ВНУТРЬ • Облачно, осадки</text>
        <circle cx="240" cy="55" r="36" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="240" y="62" fill="#f59e0b" font-size="22" font-weight="bold" text-anchor="middle">В</text>
        <path d="M240 28 L240 12 M235 17 L240 12 L245 17" stroke="#f59e0b" stroke-width="2" fill="none"/>
        <path d="M240 82 L240 98 M235 93 L240 98 L245 93" stroke="#f59e0b" stroke-width="2" fill="none"/>
        <path d="M212 55 L196 55 M201 50 L196 55 L201 60" stroke="#f59e0b" stroke-width="2" fill="none"/>
        <path d="M268 55 L284 55 M279 50 L284 55 L279 60" stroke="#f59e0b" stroke-width="2" fill="none"/>
        <text x="240" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">Ветер НАРУЖУ • Ясно, сухо</text>
      </svg>`,
      rule: `• <b>Циклон (Н — низкое давление):</b> воздух сходится к центру и поднимается вверх → пасмурно, дождь/снег, летом прохладно, зимой оттепель.<br>• <b>Антициклон (В — высокое давление):</b> воздух опускается вниз и растекается от центра → безоблачно, без осадков, летом жара, зимой мороз.<br>• <b>Тёплый фронт (полукруги):</b> потепление и затяжные дожди.<br>• <b>Холодный фронт (треугольники):</b> резкое похолодание, ливни, грозы и шквалистый ветер.`
    },
    {
      badge: 'Климат • Задание №17',
      title: 'Чтение климатограммы за 10 секунд',
      svg: `<svg viewBox="0 0 320 95" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <path d="M25 65 Q95 15 165 65" stroke="#ef4444" stroke-width="2.5" fill="none"/>
        <text x="95" y="14" fill="#ef4444" font-size="10" text-anchor="middle">Горб вверх (июль) = Северное полушарие</text>
        <text x="95" y="84" fill="#94a3b8" font-size="10" text-anchor="middle">Амплитуда = Tmax − Tmin</text>
        <path d="M185 25 Q245 75 305 25" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
        <text x="245" y="14" fill="#38bdf8" font-size="10" text-anchor="middle">Прогиб вниз (июль) = Южное полушарие</text>
        <text x="245" y="84" fill="#94a3b8" font-size="10" text-anchor="middle">Столбики = осадки по месяцам (мм)</text>
      </svg>`,
      rule: `1. <b>Определи полушарие:</b> если кривая температуры выгибается вверх в июне–августе — это <b>Северное полушарие</b>; если прогибается вниз — <b>Южное</b>.<br>2. <b>Определи пояс по январю и осадкам:</b><br>• Весь год +25...+27 °C и осадков >2000 мм → <b>Экваториальный</b>.<br>• Лето жаркое, зима +15...+20 °C, осадков <200 мм → <b>Тропический (пустыни)</b>.<br>• Январь +5...+10 °C, максимум осадков ЗИМОЙ, лето сухое → <b>Средиземноморский (субтропики)</b>.<br>• Январь −5...−30 °C, июль +15...+20 °C → <b>Умеренный</b>.`
    },
    {
      badge: 'Природа • Задания №14 и №24',
      title: 'Высотная поясность в горах',
      svg: `<svg viewBox="0 0 320 100" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <polygon points="160,12 40,90 280,90" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
        <polygon points="160,12 132,30 188,30" fill="#f8fafc"/>
        <text x="160" y="25" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Ледники</text>
        <text x="160" y="45" fill="#93c5fd" font-size="9" text-anchor="middle">Альпийские луга / Горная тундра</text>
        <text x="160" y="63" fill="#86efac" font-size="9" text-anchor="middle">Хвойные и смешанные леса</text>
        <text x="160" y="82" fill="#fde047" font-size="9" text-anchor="middle">Подножие = природная зона равнины</text>
      </svg>`,
      rule: `• <b>Главное правило ОГЭ:</b> первый пояс у подножия горы всегда совпадает с природной зоной окружающих равнин.<br>• <b>Где больше всего поясов:</b> в самых <b>высоких</b> горах, расположенных <b>ближе к экватору</b> (например, Анды, Гималаи, Кавказ выше и южнее Урала — поэтому на Кавказе поясов больше, чем на Урале).<br>• С подъёмом на каждый 1 км температура падает на <b>6 °C</b>.`
    },
    {
      badge: 'Литосфера • Задания №4 и №14',
      title: 'Литосферные плиты и сейсмические пояса',
      svg: `<svg viewBox="0 0 320 80" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <rect x="20" y="25" width="125" height="32" rx="6" fill="#334155" stroke="#f97316" stroke-width="2"/>
        <text x="82" y="45" fill="#f8fafc" font-size="11" text-anchor="middle">Плита 1 →</text>
        <rect x="175" y="25" width="125" height="32" rx="6" fill="#334155" stroke="#f97316" stroke-width="2"/>
        <text x="237" y="45" fill="#f8fafc" font-size="11" text-anchor="middle">← Плита 2</text>
        <text x="160" y="16" fill="#fb923c" font-size="10" font-weight="bold" text-anchor="middle">Граница плит = горы, вулканы, землетрясения</text>
        <text x="160" y="72" fill="#94a3b8" font-size="10" text-anchor="middle">Центр платформы = равнины, нет землетрясений</text>
      </svg>`,
      rule: `• <b>Главные сейсмические пояса мира:</b> Тихоокеанское огненное кольцо (Камчатка, Курилы, Япония, Индонезия, Анды, Кордильеры) и Альпийско-Гималайский пояс (Кавказ, Альпы, Турция, Иран, Гималаи).<br>• <b>Ловушка ОГЭ:</b> в центре древних платформ (Русская, Западно-Сибирская, Бразильская, Австралийская) сильных землетрясений <b>не бывает</b>.`
    },
    {
      badge: 'Гидросфера • Задания №14 и №20',
      title: 'Тёплые и холодные морские течения',
      svg: `<svg viewBox="0 0 320 80" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <path d="M30 55 L140 25" stroke="#ef4444" stroke-width="3" fill="none"/>
        <text x="85" y="18" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Тёплое (красная стрелка)</text>
        <text x="85" y="70" fill="#94a3b8" font-size="9" text-anchor="middle">Осадки + мягкая зима (Мурманск)</text>
        <path d="M180 25 L290 55" stroke="#38bdf8" stroke-width="3" fill="none"/>
        <text x="235" y="18" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Холодное (синяя стрелка)</text>
        <text x="235" y="70" fill="#94a3b8" font-size="9" text-anchor="middle">Пустыни на берегу (Атакама, Намиб)</text>
      </svg>`,
      rule: `• <b>Тёплые течения</b> (Гольфстрим, Северо-Атлантическое, Куросио, Бразильское) несут влагу и тепло: благодаря Северо-Атлантическому течению порт <b>Мурманск</b> не замерзает зимой.<br>• <b>Холодные течения</b> (Перуанское, Бенгельское, Калифорнийское, Западных Ветров) охлаждают воздух и мешают образованию дождей → на побережье возникают пустыни (Атакама, Намиб).`
    }
  ];

  const GUIDES_EXTRA = [
    {
      cat: 'Топографическая карта • Задания №9–12 (5 баллов!)',
      title: 'Как забрать все 5 баллов на топокарте без ошибок',
      trap: 'Ошибки в переводе масштаба (лишние нули) и отсчёте азимута против часовой стрелки.',
      rule: `1. <b>№9 Расстояние:</b> измерь линейкой в см и умножь на именованный масштаб (если в 1 см 100 м, то 3,4 см = 340 м).<br>2. <b>№10 Азимут:</b> приложи транспортир центром в <b>первую</b> точку (откуда идём), направь 0° строго на <b>Север (вверх)</b> и отсчитай угол по часовой стрелке до второй точки.<br>3. <b>№11 Профиль рельефа:</b> проверь высоты точек А и Б по горизонталям (берштрихи смотрят вниз по склону), найди реку/овраг между ними.<br>4. <b>№12 Выбор участка (2 балла):</b><br>• <b>Фермер (фруктовый сад):</b> южный склон (больше тепла и света) + рядом дорога.<br>• <b>Футбольное поле / волейбол:</b> ровный участок (без горизонталей) + луг (без кустов и ям).<br>• <b>Катание на санках / лыжах:</b> крутой склон (густые горизонтали) + без кустов и камней.`
    },
    {
      cat: 'Координаты и Земля • Задания №7 и №18',
      title: 'Географические координаты и высота Солнца',
      trap: 'Путаница между западной и восточной долготой для России (Чукотка за 180-м меридианом — это западная долгота!).',
      rule: `• <b>№7 Координаты:</b> сначала определяем широту по горизонтальным линиям (в РФ всегда <b>с.ш.</b>), затем долготу по вертикальным (вся Россия в <b>в.д.</b>, кроме самого востока Чукотского АО — там <b>з.д.</b>).<br>• <b>№18 Высота Солнца и длина дня:</b><br>• <b>22 июня</b> — Солнце в зените над Северным тропиком (23,5° с.ш.): чем <b>севернее</b> город, тем <b>длиннее день</b> (на северном полюсе полярный день).<br>• <b>22 декабря</b> — Солнце в зените над Южным тропиком (23,5° ю.ш.): чем <b>южнее</b> город, тем <b>длиннее день</b>.<br>• Чем ближе город к параллели зенита в указанную дату, тем <b>выше Солнце над горизонтом</b> в полдень.`
    },
    {
      cat: 'Демография • Задания №22 и №23',
      title: 'Естественный и миграционный прирост за 15 секунд',
      trap: 'Знак «минус» при убыли населения (отнимать отрицательное число нужно со сменой знака на плюс!).',
      rule: `• <b>Общий прирост</b> = Естественный прирост (ЕП) + Миграционный прирост (МП).<br>• <b>Как найти МП (Задание №23):</b> МП = Общий прирост − ЕП.<br>• <b>Пример с ловушкой:</b> население за год изменилось на −2 тыс. чел., а ЕП составил −5 тыс. чел. Тогда МП = −2 − (−5) = −2 + 5 = <b>+3 тыс. чел.</b><br>• <b>Лайфхак с графиком в №23:</b> на столбчатой диаграмме обычно уже даны два числа «Прибывшие» и «Выбывшие» — просто вычти из прибывших выбывших!`
    },
    {
      cat: 'Вторая часть • Задания №27–29 (Развёрнутый ответ)',
      title: 'Готовые клише ФИПИ для максимальных баллов',
      trap: 'Односложный ответ без указания причины и следствия оценивается в 0 или 1 балл вместо 2.',
      rule: `• <b>Построение ответа (2 элемента):</b> всегда пиши <b>две самостоятельные причины</b> с пояснением.<br>• <b>Клише про размещение заводов:</b><br>— <i>Алюминиевый завод:</i> наличие крупной ГЭС (источника дешёвой электроэнергии, так как производство энергоёмкое).<br>— <i>Целлюлозно-бумажный комбинат (ЦБК):</i> наличие лесных ресурсов и крупной реки (производство водоёмкое и материалоёмкое).<br>— <i>Завод минеральных удобрений:</i> близость к месторождениям сырья (калийных солей / апатитов) или магистральному газопроводу (для азотных удобрений).<br>• <b>Клише про климат:</b> указывай <b>географическую широту</b> (угол падения солнечных лучей), <b>близость к океану / течениям</b> и <b>рельеф (горы как барьер для влажных воздушных масс)</b>.`
    },
    {
      cat: 'Рациональное природопользование • Задание №15',
      title: 'Что хорошо и что плохо для природы в ОГЭ',
      trap: 'Спутанные понятия «террасирование» (хорошо) и «распашка вдоль склона» (плохо).',
      rule: `• <b>Рациональное (ПРАВИЛЬНО):</b> рекультивация терриконов и карьеров, лесополосы в степях, террасирование склонов и распашка <b>поперёк</b> склона, капельное орошение, оборотное водоснабжение, перевод ТЭС с угля на природный газ.<br>• <b>Нерациональное (НЕПРАВИЛЬНО):</b> молевой сплав леса по рекам, распашка <b>вдоль</b> склона (вызывает водную эрозию и рост оврагов), осушение болот в верховьях рек, чрезмерный выпас скота (опустынивание).`
    }
  ];

  let sgTab = 'Схемы';

  function initSchemesGuides() {
    const nav = document.querySelector('.nav-tabs');
    if (!nav || document.getElementById('nav-sg')) return;
    nav.style.overflowX = 'auto';

    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = 'nav-sg';
    btn.innerHTML = '<span>📐</span>Схемы';
    btn.onclick = () => {
      if (localStorage.getItem('geocore_pro') !== '1' && window.openProModal) { openProModal(); return; }
      document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-sg').classList.remove('hidden');
      renderSG(sgTab);
    };
    nav.appendChild(btn);

    const view = document.createElement('div');
    view.id = 'view-sg';
    view.className = 'hidden';
    view.style.padding = '12px';
    view.innerHTML = '<div class="filters" id="sgFilters" style="margin-bottom:10px;"></div><div id="sgList"></div>';
    nav.parentNode.insertBefore(view, nav);
  }

  window.renderSG = function(tab) {
    if (tab) sgTab = tab;
    const filters = document.getElementById('sgFilters');
    const list = document.getElementById('sgList');
    if (!filters || !list) return;

    filters.innerHTML = ['Схемы ОГЭ (5)', 'Гайды 2-й части (5)'].map(t => {
      const k = t.startsWith('Схемы') ? 'Схемы' : 'Гайды';
      return `<button class="f-btn ${k === sgTab ? 'active' : ''}" onclick="renderSG('${k}')">${t}</button>`;
    }).join('');

    if (sgTab === 'Схемы') {
      list.innerHTML = SCHEMES.map(s => `
        <div class="guide-card" style="border-left:4px solid #a855f7;">
          <div class="guide-cat" style="color:#c084fc;">${s.badge}</div>
          <div class="guide-title">${s.title}</div>
          ${s.svg}
          <div class="guide-rule" style="margin-top:6px;">${s.rule}</div>
        </div>
      `).join('');
    } else {
      list.innerHTML = GUIDES_EXTRA.map(g => `
        <div class="guide-card" style="border-left:4px solid #38bdf8;">
          <div class="guide-cat" style="color:#38bdf8;">${g.cat}</div>
          <div class="guide-title">${g.title}</div>
          <div class="guide-trap" style="margin:6px 0;"><b>⚠️ Ловушка ФИПИ:</b> ${g.trap}</div>
          <div class="guide-rule">${g.rule}</div>
        </div>
      `).join('');
    }
  };

  setInterval(initSchemesGuides, 600);
})();
