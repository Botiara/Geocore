(function() {
  const SCHEMES_DATA = [
    {
      cat: 'Атмосфера • Задания №5, 6, 17',
      title: '🌀 Циклон и Антициклон (шпаргалка-схема)',
      svg: `<svg viewBox="0 0 320 115" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <rect x="8" y="8" width="144" height="99" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="80" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ЦИКЛОН (Н)</text>
        <text x="80" y="42" fill="#e2e8f0" font-size="10" text-anchor="middle">В центре: НИЗКОЕ (Н)</text>
        <text x="80" y="57" fill="#94a3b8" font-size="9.5" text-anchor="middle">Ветер: от краёв → к центру</text>
        <text x="80" y="72" fill="#94a3b8" font-size="9.5" text-anchor="middle">Сев. полуш.: ПРОТИВ часовой</text>
        <text x="80" y="90" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">☁️ Пасмурно, осадки, ветер</text>
        <rect x="168" y="8" width="144" height="99" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="240" y="26" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">АНТИЦИКЛОН (В)</text>
        <text x="240" y="42" fill="#e2e8f0" font-size="10" text-anchor="middle">В центре: ВЫСОКОЕ (В)</text>
        <text x="240" y="57" fill="#94a3b8" font-size="9.5" text-anchor="middle">Ветер: от центра → к краям</text>
        <text x="240" y="72" fill="#94a3b8" font-size="9.5" text-anchor="middle">Сев. полуш.: ПО часовой</text>
        <text x="240" y="90" fill="#fcd34d" font-size="10" font-weight="bold" text-anchor="middle">☀️ Ясно, сухо, безветренно</text>
      </svg>`,
      rule: 'Как запомнить за 2 секунды: буква «Н» в центре синоптической карты = Ненастье (Циклон, облачно и дождь/снег). Буква «В» = Вёдро / ясная погода (Антициклон, летом жара, зимой сильный мороз).'
    },
    {
      cat: 'Климат • Задание №17',
      title: '📊 Как читать климатограмму за 10 секунд',
      svg: `<svg viewBox="0 0 320 115" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <rect x="8" y="8" width="96" height="99" rx="6" fill="#1e293b" stroke="#10b981"/>
        <text x="56" y="25" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Экваториальный</text>
        <text x="56" y="44" fill="#e2e8f0" font-size="9.5" text-anchor="middle">t°: ровно +25°..+28°</text>
        <text x="56" y="60" fill="#38bdf8" font-size="9.5" text-anchor="middle">Осадки: >2000 мм</text>
        <text x="56" y="76" fill="#94a3b8" font-size="9" text-anchor="middle">Весь год равномерно</text>
        <text x="56" y="95" fill="#6ee7b7" font-size="9" text-anchor="middle">Амазония, Конго</text>

        <rect x="112" y="8" width="96" height="99" rx="6" fill="#1e293b" stroke="#f43f5e"/>
        <text x="160" y="25" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">Южное полуш.</text>
        <text x="160" y="44" fill="#e2e8f0" font-size="9.5" text-anchor="middle">График t°: ЯМА ∨</text>
        <text x="160" y="60" fill="#38bdf8" font-size="9.5" text-anchor="middle">Июль холоднее янв.</text>
        <text x="160" y="76" fill="#94a3b8" font-size="9" text-anchor="middle">Лето: декабрь–февр.</text>
        <text x="160" y="95" fill="#fda4af" font-size="9" text-anchor="middle">Австралия, Аргентина</text>

        <rect x="216" y="8" width="96" height="99" rx="6" fill="#1e293b" stroke="#a855f7"/>
        <text x="264" y="25" fill="#a855f7" font-size="10" font-weight="bold" text-anchor="middle">Средиземномор.</text>
        <text x="264" y="44" fill="#e2e8f0" font-size="9.5" text-anchor="middle">График t°: ГОРКА ∧</text>
        <text x="264" y="60" fill="#38bdf8" font-size="9.5" text-anchor="middle">Осадки: ЗИМОЙ</text>
        <text x="264" y="76" fill="#94a3b8" font-size="9" text-anchor="middle">Сухое жаркое лето</text>
        <text x="264" y="95" fill="#d8b4fe" font-size="9" text-anchor="middle">Юг Европы, Сочи</text>
      </svg>`,
      rule: '1) Смотри на кривую температуры: если «горка» вверх к июлю — Северное полушарие; если «яма» вниз к июлю — Южное. 2) Если зимой ниже 0°C — это умеренный или субарктический пояс.'
    },
    {
      cat: 'Горы • Задания №18, 25',
      title: '⛰️ Высотная поясность и падение температуры',
      svg: `<svg viewBox="0 0 320 110" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <polygon points="30,100 130,15 230,100" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
        <polygon points="103,38 130,15 157,38" fill="#f8fafc"/>
        <text x="130" y="33" fill="#0f172a" font-size="8.5" font-weight="bold" text-anchor="middle">Ледники</text>
        <text x="130" y="55" fill="#bae6fd" font-size="9" text-anchor="middle">Альпийские луга</text>
        <text x="130" y="73" fill="#86efac" font-size="9" text-anchor="middle">Хвойные и смешанные леса</text>
        <text x="130" y="92" fill="#fde047" font-size="9" text-anchor="middle">Подножие (степи / саванны)</text>
        <rect x="225" y="18" width="88" height="78" rx="6" fill="#1e293b" stroke="#38bdf8"/>
        <text x="269" y="36" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">ФОРМУЛА</text>
        <text x="269" y="53" fill="#f8fafc" font-size="10" text-anchor="middle">-6°C на 1 км</text>
        <text x="269" y="68" fill="#94a3b8" font-size="8.5" text-anchor="middle">(-0,6°C на 100 м)</text>
        <text x="269" y="85" fill="#fbbf24" font-size="8.5" text-anchor="middle">Давление: -10 мм/100м</text>
      </svg>`,
      rule: 'Чем выше горы и ближе они к экватору (например, Анды или Гималаи), тем больше высотных поясов. У подножия всегда та же природная зона, что и на окружающей равнине.'
    },
    {
      cat: 'Литосфера и Океан • Задания №13, 15, 20',
      title: '🌋 Сейсмические пояса и морские течения',
      svg: `<svg viewBox="0 0 320 105" style="width:100%;height:auto;background:#0f172a;border-radius:8px;margin:8px 0;">
        <rect x="8" y="8" width="146" height="89" rx="6" fill="#1e293b" stroke="#ef4444"/>
        <text x="81" y="25" fill="#ef4444" font-size="10.5" font-weight="bold" text-anchor="middle">Землетрясения и вулканы</text>
        <text x="81" y="43" fill="#e2e8f0" font-size="9.5" text-anchor="middle">Строго на СТЫКАХ ПЛИТ</text>
        <text x="81" y="59" fill="#94a3b8" font-size="9" text-anchor="middle">РФ: Камчатка, Курилы, Кавказ</text>
        <text x="81" y="74" fill="#94a3b8" font-size="9" text-anchor="middle">Мир: Тихоокеанское кольцо</text>
        <text x="81" y="89" fill="#fca5a5" font-size="9" text-anchor="middle">На платформах вулканов НЕТ</text>

        <rect x="166" y="8" width="146" height="89" rx="6" fill="#1e293b" stroke="#06b6d4"/>
        <text x="239" y="25" fill="#06b6d4" font-size="10.5" font-weight="bold" text-anchor="middle">Морские течения</text>
        <text x="239" y="43" fill="#fda4af" font-size="9.5" text-anchor="middle">Тёплые → ОСАДКИ + тепло</text>
        <text x="239" y="59" fill="#94a3b8" font-size="9" text-anchor="middle">(Гольфстрим, Северо-Атлант.)</text>
        <text x="239" y="75" fill="#7dd3fc" font-size="9.5" text-anchor="middle">Холодные → ПУСТЫНИ</text>
        <text x="239" y="89" fill="#94a3b8" font-size="9" text-anchor="middle">(Перуанское → Атакама)</text>
      </svg>`,
      rule: 'Холодные течения у берегов тропиков охлаждают воздух и не дают образовываться дождевым облакам — так появились береговые пустыни Атакама, Намиб и Сахара у океана.'
    }
  ];

  const EXTRA_GUIDES = [
    {
      cat: 'Топографическая карта • Задания №9–12 (5 баллов!)',
      title: '🗺️ Алгоритм на 5 баллов по топокарте',
      trap: 'Ловушка №10 (Азимут): измеряй строго по часовой стрелке от направления на СЕВЕР (0°). Если точка строго на юг — 180°, на запад — 270°, на восток — 90°.',
      rule: '• Задание №9 (Расстояние): измерь линейкой см между центрами знаков и умножь на величину масштаба (если «в 1 см 100 м», то 4,3 см = 430 м).
• Задание №11 (Профиль): сверь высоты точек А и Б по горизонталям, проверь, есть ли между ними река (яма вниз) или холм (горка вверх).
• Задание №12 (Выбор участка): Футбол/волейбол → ровный луг без ям и кустов; Санки/лыжи → склон без кустов и ям; Фермер/сад → южный склон (теплее) рядом с дорогой для вывоза урожая.'
    },
    {
      cat: 'Синоптика • Задания №5 и №6',
      title: '🌦️ Погода на карте фронтов (№5–6)',
      trap: 'Ловушка №6 (Похолодание/потепление): смотри, какой фронт НАДВИГАЕТСЯ на город (куда смотрят зубчики или полукруги), а не какой уже прошёл!',
      rule: '• Зубчики (треугольники) = холодный фронт → жди резкое похолодание, ливень, порывистый ветер.
• Полукруги = тёплый фронт → жди потепление и затяжные моросящие осадки.
• В задании №5 «антициклон» ищи город внутри замкнутой изобары с буквой «В», а «циклон» — с буквой «Н».'
    },
    {
      cat: 'Координаты и Солнце • Задания №7 и №18',
      title: '🧭 Координаты и высота Солнца без ошибок',
      trap: 'Ловушка №7: не перепутай широту (с.ш./ю.ш. — по горизонтальным линиям) и долготу (в.д./з.д. — по вертикальным меридианам). Вся Россия — в с.ш., почти вся — в в.д. (кроме крайнего востока Чукотки в з.д.).',
      rule: '• Задание №18 (Где Солнце выше в полдень / где длиннее день):
— 22 июня (лето): Солнце в зените над Северным тропиком → чем СЕВЕРНЕЕ город, тем длиннее световой день.
— 22 декабря (зима): Солнце над Южным тропиком → чем ЮЖНЕЕ город, тем длиннее день и выше Солнце.
— 21 марта и 23 сентября: день равен ночи везде (12 часов), Солнце выше там, кто ближе к экватору.'
    },
    {
      cat: 'Вторая часть • Задания №27, 28, 29',
      title: '✍️ Шаблоны ответов на 2 балла во 2-й части',
      trap: 'Эксперты снимают балл, если написать просто «там хороший климат» без конкретики (температуры, увлажнения или рельефа).',
      rule: '• Размещение АЭС: строят в районах с дефицитом топлива и дешёвой энергии, но с крупными потребителями (Европейская часть РФ).
• Размещение алюминиевых заводов: строго рядом с мощными ГЭС (Братск, Красноярск), так как выплавка алюминия крайне энергоёмка.
• Снежные лавины и сели: главные причины — крутые склоны гор + обильные осадки / быстрое таяние снега + вырубка лесов на склонах.'
    }
  ];

  let gMode = 'Схемы';

  function initSchemesAndGuides() {
    const view = document.getElementById('view-guides');
    if (!view || document.getElementById('guidesExtraBar')) return;

    const bar = document.createElement('div');
    bar.id = 'guidesExtraBar';
    bar.className = 'filters';
    bar.style.marginBottom = '10px';
    bar.innerHTML = `
      <button class="f-btn active" id="gb-schemes" onclick="switchGuidesTab('Схемы')">📊 Схемы ОГЭ (4)</button>
      <button class="f-btn" id="gb-extra" onclick="switchGuidesTab('ТопГайды')">🎯 Гайды 2-й части (4)</button>
      <button class="f-btn" id="gb-base" onclick="switchGuidesTab('База')">📚 Базовые правила</button>
    `;
    view.insertBefore(bar, view.firstChild);

    const extraContainer = document.createElement('div');
    extraContainer.id = 'guidesExtraContainer';
    view.insertBefore(extraContainer, bar.nextSibling);

    window.switchGuidesTab = function(mode) {
      gMode = mode;
      ['gb-schemes', 'gb-extra', 'gb-base'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
      });
      const baseList = document.getElementById('guidesList');
      const baseFilters = document.getElementById('guideFilters');

      if (mode === 'База') {
        document.getElementById('gb-base').classList.add('active');
        extraContainer.innerHTML = '';
        if (baseList) baseList.style.display = '';
        if (baseFilters) baseFilters.style.display = '';
        return;
      }

      if (baseList) baseList.style.display = 'none';
      if (baseFilters) baseFilters.style.display = 'none';

      if (mode === 'Схемы') {
        document.getElementById('gb-schemes').classList.add('active');
        extraContainer.innerHTML = SCHEMES_DATA.map(s => `
          <div class="guide-card" style="border-left:4px solid #38bdf8;">
            <div class="guide-cat" style="color:#38bdf8;">${s.cat}</div>
            <div class="guide-title">${s.title}</div>
            ${s.svg}
            <div class="guide-rule"><b>Запомни:</b> ${s.rule}</div>
          </div>
        `).join('');
      } else {
        document.getElementById('gb-extra').classList.add('active');
        extraContainer.innerHTML = EXTRA_GUIDES.map(g => `
          <div class="guide-card" style="border-left:4px solid #10b981;">
            <div class="guide-cat" style="color:#10b981;">${g.cat}</div>
            <div class="guide-title">${g.title}</div>
            <div class="guide-trap" style="margin:6px 0;"><b>Ловушка:</b> ${g.trap}</div>
            <div class="guide-rule" style="white-space:pre-line;">${g.rule}</div>
          </div>
        `).join('');
      }
    };

    window.switchGuidesTab('Схемы');
  }

  setInterval(initSchemesAndGuides, 600);
})();
