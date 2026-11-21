(function() {
  var CHAINS = [
    {
      title: 'Маршрут 1: Из Испании в Польшу',
      start: '🇪🇸 Испания',
      end: '🇵🇱 Польша',
      hint: 'Физическая карта Европы: от Пиренейского полуострова на северо-восток через Пиренеи, реку Рейн и Среднеевропейскую равнину.',
      steps: [
        { q: 'Шаг 1. Из Испании на северо-восток через Пиренеи:', opts: ['🇫🇷 Франция', '🇮🇹 Италия', '🇩🇪 Германия'], ans: 0 },
        { q: 'Шаг 2. Из Франции на восток через реку Рейн:', opts: ['🇩🇪 Германия', '🇵🇱 Польша', '🇦🇹 Австрия'], ans: 0 },
        { q: 'Шаг 3. Из Германии дальше на восток через реку Одер:', opts: ['🇵🇱 Польша', '🇭🇺 Венгрия', '🇷🇴 Румыния'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 2: Из Норвегии в Италию',
      start: '🇳🇴 Норвегия',
      end: '🇮🇹 Италия',
      hint: 'От Скандинавских гор через Ютландию, Северо-Германскую низменность и Альпы к Апеннинскому полуострову.',
      steps: [
        { q: 'Шаг 1. Из Норвегии на восток через Скандинавские горы:', opts: ['🇸🇪 Швеция', '🇫🇮 Финляндия', '🇩🇰 Дания'], ans: 0 },
        { q: 'Шаг 2. Из Швеции по мосту через пролив Эресунн на полуостров Ютландия:', opts: ['🇩🇰 Дания', '🇳🇱 Нидерланды', '🇵🇱 Польша'], ans: 0 },
        { q: 'Шаг 3. Из Дании на юг на Северо-Германскую низменность:', opts: ['🇩🇪 Германия', '🇨🇿 Чехия', '🇧🇪 Бельгия'], ans: 0 },
        { q: 'Шаг 4. Из Германии на юг к Восточным Альпам:', opts: ['🇦🇹 Австрия', '🇭🇺 Венгрия', '🇸🇰 Словакия'], ans: 0 },
        { q: 'Шаг 5. Из Австрии на юг через Альпы к Апеннинам:', opts: ['🇮🇹 Италия', '🇬🇷 Греция', '🇪🇸 Испания'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 3: Из Франции в Турцию по суше',
      start: '🇫🇷 Франция',
      end: '🇹🇷 Турция',
      hint: 'От Западных Альп через Среднедунайскую низменность и реку Дунай к проливу Босфор.',
      steps: [
        { q: 'Шаг 1. Из Франции на юго-восток через Альпы:', opts: ['🇮🇹 Италия', '🇪🇸 Испания', '🇵🇱 Польша'], ans: 0 },
        { q: 'Шаг 2. Из Италии на восток к Динарскому нагорью (выход к Адриатике):', opts: ['🇸🇮 Словения', '🇬🇷 Греция', '🇷🇴 Румыния'], ans: 0 },
        { q: 'Шаг 3. Из Словении на северо-восток на Среднедунайскую низменность:', opts: ['🇭🇺 Венгрия', '🇧🇬 Болгария', '🇨🇿 Чехия'], ans: 0 },
        { q: 'Шаг 4. Из Венгрии на юго-восток к Карпатам и устью Дуная:', opts: ['🇷🇴 Румыния', '🇦🇹 Австрия', '🇵🇱 Польша'], ans: 0 },
        { q: 'Шаг 5. Из Румынии на юг через Дунай и Балканские горы:', opts: ['🇧🇬 Болгария', '🇺🇦 Украина', '🇸🇰 Словакия'], ans: 0 },
        { q: 'Шаг 6. Из Болгарии на юго-восток к проливу Босфор:', opts: ['🇹🇷 Турция', '🇬🇪 Грузия', '🇮🇷 Иран'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 4: Из России в Индию по суше',
      start: '🇷🇺 Россия',
      end: '🇮🇳 Индия',
      hint: 'От Алтая и Саян через Тибетское нагорье и Гималаи к полуострову Индостан.',
      steps: [
        { q: 'Шаг 1. Из России на юг через реку Амур или горы Алтай к крупнейшей стране Восточной Азии:', opts: ['🇨🇳 Китай', '🇲🇳 Монголия', '🇰🇿 Казахстан'], ans: 0 },
        { q: 'Шаг 2. Из Китая на юго-запад через Гималаи к Индо-Гангской низменности:', opts: ['🇮🇳 Индия', '🇵🇰 Пакистан', '🇹🇭 Таиланд'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 5: Из Казахстана во Вьетнам',
      start: '🇰🇿 Казахстан',
      end: '🇻🇳 Вьетнам',
      hint: 'От Прикаспийской низменности и Тянь-Шаня на юго-восток к полуострову Индокитай.',
      steps: [
        { q: 'Шаг 1. Из Казахстана на восток через горы Тянь-Шань:', opts: ['🇨🇳 Китай', '🇺🇿 Узбекистан', '🇲🇳 Монголия'], ans: 0 },
        { q: 'Шаг 2. Из Китая на юг к восточному побережью полуострова Индокитай:', opts: ['🇻🇳 Вьетнам', '🇹🇭 Таиланд', '🇰🇭 Камбоджа'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 6: Из Египта в ЮАР по востоку Африки',
      start: '🇪🇬 Египет',
      end: '🇿🇦 ЮАР',
      hint: 'Вверх по реке Нил, вдоль Восточно-Африканского плоскогорья, озера Ньяса и реки Замбези к Драконовым горам.',
      steps: [
        { q: 'Шаг 1. Из Египта на юг вверх по долине Нила:', opts: ['🇸🇩 Судан', '🇱🇾 Ливия', '🇹🇩 Чад'], ans: 0 },
        { q: 'Шаг 2. Из Судана на юг к истокам Белого Нила:', opts: ['🇸🇸 Южный Судан', '🇪🇹 Эфиопия', '🇪🇷 Эритрея'], ans: 0 },
        { q: 'Шаг 3. Из Южного Судана на юг к северному берегу озера Виктория:', opts: ['🇺🇬 Уганда', '🇸🇴 Сомали', '🇳🇬 Нигерия'], ans: 0 },
        { q: 'Шаг 4. Из Уганды на юг между озёрами Виктория и Танганьика:', opts: ['🇹🇿 Танзания', '🇰🇪 Кения', '🇬🇭 Гана'], ans: 0 },
        { q: 'Шаг 5. Из Танзании на юг через реку Рувума вдоль побережья Индийского океана:', opts: ['🇲🇿 Мозамбик', '🇦🇴 Ангола', '🇳🇦 Намибия'], ans: 0 },
        { q: 'Шаг 6. Из Мозамбика на юг к реке Лимпопо и Драконовым горам:', opts: ['🇿🇦 ЮАР', '🇧🇼 Ботсвана', '🇿🇼 Зимбабве'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 7: Из Марокко в Нигерию через Сахару',
      start: '🇲🇦 Марокко',
      end: '🇳🇬 Нигерия',
      hint: 'От Атласских гор через пустыню Сахара и реку Нигер к Гвинейскому заливу.',
      steps: [
        { q: 'Шаг 1. Из Марокко на восток вдоль Атласских гор:', opts: ['🇩🇿 Алжир', '🇹🇳 Тунис', '🇱🇾 Ливия'], ans: 0 },
        { q: 'Шаг 2. Из Алжира на юг через нагорье Ахаггар в пустыне Сахара:', opts: ['🇳🇪 Нигер', '🇲🇱 Мали', '🇹🇩 Чад'], ans: 0 },
        { q: 'Шаг 3. Из Нигера на юг к низовьям реки Нигер и Гвинейскому заливу:', opts: ['🇳🇬 Нигерия', '🇨🇲 Камерун', '🇬🇭 Гана'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 8: Из Канады в Колумбию',
      start: '🇨🇦 Канада',
      end: '🇨🇴 Колумбия',
      hint: 'От Великих озёр через Мексиканское нагорье и узкий перешеек Центральной Америки в Южную Америку.',
      steps: [
        { q: 'Шаг 1. Из Канады на юг через Великие озёра:', opts: ['🇺🇸 США', '🇲🇽 Мексика', '🇨🇺 Куба'], ans: 0 },
        { q: 'Шаг 2. Из США на юг через реку Рио-Гранде:', opts: ['🇲🇽 Мексика', '🇬🇹 Гватемала', '🇧🇿 Белиз'], ans: 0 },
        { q: 'Шаг 3. Из Мексики на юго-восток к полуострову Юкатан:', opts: ['🇬🇹 Гватемала', '🇵🇦 Панама', '🇨🇷 Коста-Рика'], ans: 0 },
        { q: 'Шаг 4. Из Гватемалы на восток вдоль Карибского моря:', opts: ['🇭🇳 Гондурас', '🇳🇮 Никарагуа', '🇸🇻 Сальвадор'], ans: 0 },
        { q: 'Шаг 5. Из Гондураса на юг к озеру Никарагуа:', opts: ['🇳🇮 Никарагуа', '🇵🇦 Панама', '🇧🇿 Белиз'], ans: 0 },
        { q: 'Шаг 6. Из Никарагуа на юг к вулканам Кордильер:', opts: ['🇨🇷 Коста-Рика', '🇬🇹 Гватемала', '🇸🇻 Сальвадор'], ans: 0 },
        { q: 'Шаг 7. Из Коста-Рики на восток к перешейку с судоходным каналом:', opts: ['🇵🇦 Панама', '🇪🇨 Эквадор', '🇻🇪 Венесуэла'], ans: 0 },
        { q: 'Шаг 8. Из Панамы на юго-восток через Дарьенский пробел в Южную Америку:', opts: ['🇨🇴 Колумбия', '🇵🇪 Перу', '🇧🇷 Бразилия'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 9: Из Бразилии в Чили через Анды',
      start: '🇧🇷 Бразилия',
      end: '🇨🇱 Чили',
      hint: 'От Амазонской низменности и Бразильского плоскогорья через Ла-Платскую низменность и высокие Анды к Тихому океану.',
      steps: [
        { q: 'Шаг 1. Из Бразилии на юго-запад к бассейну реки Парана:', opts: ['🇦🇷 Аргентина', '🇨🇱 Чили', '🇪🇨 Эквадор'], ans: 0 },
        { q: 'Шаг 2. Из Аргентины на запад через хребты Анд к побережью Тихого океана:', opts: ['🇨🇱 Чили', '🇵🇪 Перу', '🇺🇾 Уругвай'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 10: Из Турции в Пакистан',
      start: '🇹🇷 Турция',
      end: '🇵🇰 Пакистан',
      hint: 'От Армянского нагорья через Иранское нагорье к долине реки Инд.',
      steps: [
        { q: 'Шаг 1. Из Турции на восток через хребты Загрос:', opts: ['🇮🇷 Иран', '🇸🇾 Сирия', '🇬🇪 Грузия'], ans: 0 },
        { q: 'Шаг 2. Из Ирана на восток через пустыню Деште-Лут к реке Инд:', opts: ['🇵🇰 Пакистан', '🇮🇳 Индия', '🇳🇵 Непал'], ans: 0 }
      ]
    }
  ];

  var BUG_MAPS = [
    {
      title: 'Аномалия #1: Странная река',
      center: [2.0, 22.0],
      zoom: 3,
      type: 'line',
      coords: [[-2.0, 12.0], [1.0, 18.0], [3.5, 25.0], [0.5, 31.0]],
      label: 'Река Амазонка (длина ~7000 км)',
      q: 'Посмотри на карту: какая грубая географическая ошибка здесь допущена?',
      opts: [
        'Амазонка нарисована в Африке (на месте реки Конго), а она течёт в Южной Америке',
        'Амазонка впадает в Индийский океан, а на карте она течёт на запад',
        'Амазонка протекает через пустыню Сахара'
      ],
      ans: 0,
      explain: 'На карте выделена Центральная Африка (бассейн реки Конго), а величайшая по полноводности река мира Амазонка течёт по Амазонской низменности в Южной Америке.'
    },
    {
      title: 'Аномалия #2: Водоём с подвохом',
      center: [41.5, 50.5],
      zoom: 5,
      type: 'marker',
      coords: [41.5, 50.5],
      label: 'КАСПИЙСКИЙ ОКЕАН (самый глубокий океан мира)',
      q: 'Что не так с этим объектом на карте Евразии?',
      opts: [
        'Каспийское море — это бессточное солёное озеро, а не океан',
        'Это Аральское море, и оно находится в Сибири',
        'Этот водоём полностью пресный и соединён с Чёрным морем проливом'
      ],
      ans: 0,
      explain: 'Каспийское море не имеет связи с Мировым океаном, поэтому с точки зрения географии это крупнейшее в мире бессточное солёное озеро.'
    },
    {
      title: 'Аномалия #3: Граница двух гигантов',
      center: [48.5, 135.0],
      zoom: 5,
      type: 'marker',
      coords: [48.5, 135.0],
      label: 'Ниагарский водопад (граница РФ и КНР)',
      q: 'Какая ошибка спрятана в этой метке на Дальнем Востоке?',
      opts: [
        'Ниагарский водопад находится в Северной Америке (между США и Канадой), а здесь течёт река Амур',
        'Ниагарский водопад расположен на границе России и Монголии на Байкале',
        'Здесь находится водопад Анхель'
      ],
      ans: 0,
      explain: 'На границе России и Китая протекает река Амур, а знаменитый Ниагарский водопад расположен между озёрами Эри и Онтарио на границе США и Канады.'
    },
    {
      title: 'Аномалия #4: Морской поток не в том месте',
      center: [-15.0, 75.0],
      zoom: 3,
      type: 'line',
      coords: [[-28.0, 55.0], [-18.0, 68.0], [-8.0, 82.0], [2.0, 92.0]],
      label: 'Тёплое течение Гольфстрим',
      q: 'В чём ошибка этого океанического течения на карте?',
      opts: [
        'Гольфстрим течёт в Атлантическом океане вдоль берегов Северной Америки, а не в Индийском океане',
        'Гольфстрим — это холодное течение у берегов Антарктиды',
        'Гольфстрим течёт внутри Средиземного моря'
      ],
      ans: 0,
      explain: 'Мощное тёплое течение Гольфстрим зарождается в Мексиканском заливе и идёт на северо-восток через Атлантический океан, переходя в Северо-Атлантическое течение.'
    },
    {
      title: 'Аномалия #5: Хребет не на своём материке',
      center: [-25.0, 134.0],
      zoom: 4,
      type: 'line',
      coords: [[-18.0, 128.0], [-24.0, 133.0], [-31.0, 138.0]],
      label: 'Горная система Анды (высота до 6961 м)',
      q: 'Найди ошибку на физической карте этого материка:',
      opts: [
        'Анды находятся в Южной Америке, а в Австралии вдоль восточного берега тянется Большой Водораздельный хребет',
        'Анды — это самые высокие горы Африки',
        'В центре Австралии находятся Гималаи'
      ],
      ans: 0,
      explain: 'На карте показана Австралия — самый низкий и плоский материк Земли, где нет гор высотой 6961 м. Анды тянутся вдоль западного края Южной Америки.'
    },
    {
      title: 'Аномалия #6: Пески в джунглях',
      center: [-6.0, -60.0],
      zoom: 4,
      type: 'marker',
      coords: [-6.0, -60.0],
      label: 'Великая пустыня Сахара (8,6 млн км²)',
      q: 'Почему эта подпись на карте абсолютно неверна?',
      opts: [
        'Сахара — крупнейшая жаркая пустыня в Северной Африке, а здесь находится влажная Амазонская низменность (сельва)',
        'Сахара находится на Аравийском полуострове',
        'Здесь расположена ледяная пустыня Антарктиды'
      ],
      ans: 0,
      explain: 'Точка стоит в экваториальном поясе Южной Америки (влажные экваториальные леса Амазонии), тогда как пустыня Сахара занимает север Африки.'
    },
    {
      title: 'Аномалия #7: Самое солёное озеро',
      center: [31.5, 35.5],
      zoom: 7,
      type: 'marker',
      coords: [31.5, 35.5],
      label: 'Мёртвое море — крупнейший пресный водоём планеты',
      q: 'В чём главный географический подвох в описании этого водоёма?',
      opts: [
        'Мёртвое море — один из самых солёных водоёмов мира (~300–350 ‰), пить эту воду нельзя',
        'Мёртвое море расположено на вершине Гималаев на высоте 5000 м',
        'Мёртвое море находится в Южной Америке'
      ],
      ans: 0,
      explain: 'Мёртвое море лежит в тектонической впадине Гхор (самая низкая точка суши, около −430 м) и обладает экстремальной солёностью выше 300 ‰.'
    },
    {
      title: 'Аномалия #8: Глубочайшее озеро мира',
      center: [56.0, -106.0],
      zoom: 4,
      type: 'marker',
      coords: [56.0, -106.0],
      label: 'Озеро Байкал (глубина 1642 м)',
      q: 'Какая ошибка допущена на этой карте?',
      opts: [
        'Озеро Байкал находится в Восточной Сибири (Россия), а метка стоит в Канаде',
        'Байкал — это самое мелкое озеро мира глубиной 5 метров',
        'Байкал находится в центре Африки'
      ],
      ans: 0,
      explain: 'Самое глубокое озеро планеты (1642 м) и крупнейший резервуар пресной воды Байкал находится на юге Восточной Сибири в России (между Иркутской областью и Бурятией).'
    }
  ];

  var state = {
    xp: parseInt(localStorage.getItem('gc_xp') || '0', 10),
    streak: 0,
    best: parseInt(localStorage.getItem('gc_best') || '0', 10),
    mode: 'chain',
    chainIdx: 0,
    chainStep: 0,
    chainDone: false,
    bugIdx: 0,
    bugAnswered: false
  };

  var bugMapInstance = null;

  function getRank(xp) {
    if (xp >= 500) return '👑 Магистр географии';
    if (xp >= 250) return '🧭 Покоритель карт';
    if (xp >= 120) return '🎒 Исследователь 7 класса';
    if (xp >= 40) return '🗺️ Следопыт ОГЭ';
    return '🌱 Новичок экспедиции';
  }

  function saveStats() {
    localStorage.setItem('gc_xp', String(state.xp));
    if (state.streak > state.best) {
      state.best = state.streak;
      localStorage.setItem('gc_best', String(state.best));
    }
  }

  function renderBugMap(bug) {
    var mapDiv = document.getElementById('gcBugMapCanvas');
    if (!mapDiv || typeof L === 'undefined') return;

    if (bugMapInstance) {
      try { bugMapInstance.remove(); } catch (e) {}
      bugMapInstance = null;
    }

    bugMapInstance = L.map('gcBugMapCanvas', {
      zoomControl: true,
      attributionControl: false
    }).setView(bug.center, bug.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12
    }).addTo(bugMapInstance);

    if (bug.type === 'line') {
      var poly = L.polyline(bug.coords, { color: '#ef4444', weight: 5, dashArray: '8, 6' }).addTo(bugMapInstance);
      poly.bindTooltip(bug.label, { permanent: true, direction: 'top' }).openTooltip();
    } else {
      var marker = L.circleMarker(bug.coords, {
        radius: 11,
        color: '#ef4444',
        fillColor: '#f59e0b',
        fillOpacity: 0.85,
        weight: 3
      }).addTo(bugMapInstance);
      marker.bindTooltip(bug.label, { permanent: true, direction: 'top' }).openTooltip();
    }

    setTimeout(function() {
      if (bugMapInstance) bugMapInstance.invalidateSize();
    }, 150);
  }

  function renderArena() {
    var box = document.getElementById('gcArenaRoot');
    if (!box) return;

    var headerHtml =
      '<div style="background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid #334155;border-radius:14px;padding:12px;margin-bottom:12px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
          '<div style="font-weight:700;font-size:15px;color:#f8fafc;">' + getRank(state.xp) + '</div>' +
          '<div style="font-size:12px;color:#38bdf8;font-weight:700;">⚡ ' + state.xp + ' XP</div>' +
        '</div>' +
        '<div style="display:flex;gap:12px;font-size:12px;color:#94a3b8;margin-bottom:10px;">' +
          '<span>🔥 Серия: <b style="color:#f59e0b;">' + state.streak + '</b></span>' +
          '<span>🏆 Рекорд: <b style="color:#10b981;">' + state.best + '</b></span>' +
        '</div>' +
        '<div style="display:flex;gap:6px;">' +
          '<button id="gcModeChain" style="flex:1;padding:9px 6px;border-radius:9px;border:none;font-weight:700;font-size:12px;cursor:pointer;background:' + (state.mode === 'chain' ? '#10b981' : '#334155') + ';color:#fff;">🧭 Цепочка стран (10)</button>' +
          '<button id="gcModeBug" style="flex:1;padding:9px 6px;border-radius:9px;border:none;font-weight:700;font-size:12px;cursor:pointer;background:' + (state.mode === 'bug' ? '#e11d48' : '#334155') + ';color:#fff;">🕵️ Подвох на карте (8)</button>' +
        '</div>' +
      '</div>';

    if (state.mode === 'chain') {
      var ch = CHAINS[state.chainIdx % CHAINS.length];
      var progressHtml = ch.steps.map(function(s, idx) {
        var col = (idx < state.chainStep || state.chainDone) ? '#10b981' : (idx === state.chainStep ? '#38bdf8' : '#334155');
        return '<div style="flex:1;height:6px;border-radius:4px;background:' + col + ';"></div>';
      }).join('');

      var bodyHtml = '';
      if (state.chainDone) {
        bodyHtml =
          '<div style="text-align:center;padding:12px 4px;">' +
            '<div style="font-size:28px;margin-bottom:6px;">🏁</div>' +
            '<div style="font-size:16px;font-weight:700;color:#10b981;margin-bottom:6px;">Цепочка замкнута! (+35 XP)</div>' +
            '<div style="font-size:13px;color:#cbd5e1;margin-bottom:12px;">Ты прошёл каждую границу от <b>' + ch.start + '</b> до <b>' + ch.end + '</b>!</div>' +
            '<button id="gcNextChainBtn" style="width:100%;padding:11px;border-radius:10px;border:none;background:#10b981;color:#fff;font-weight:700;font-size:14px;cursor:pointer;">Следующий маршрут ➔</button>' +
          '</div>';
      } else {
        var st = ch.steps[state.chainStep];
        var optsHtml = st.opts.map(function(o, idx) {
          return '<button class="gc-chain-opt" data-idx="' + idx + '" style="width:100%;text-align:left;padding:11px 12px;margin-bottom:8px;border-radius:10px;border:1px solid #334155;background:#1e293b;color:#f8fafc;font-size:14px;cursor:pointer;">' + o + '</button>';
        }).join('');

        bodyHtml =
          '<div style="font-size:13px;font-weight:600;color:#f8fafc;margin-bottom:10px;">' + st.q + '</div>' +
          optsHtml +
          '<div id="gcChainErr" style="font-size:12px;color:#f87171;margin-top:4px;"></div>';
      }

      box.innerHTML = headerHtml +
        '<div style="background:#0f172a;border:1px solid #334155;border-radius:14px;padding:14px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
            '<span style="font-size:11px;color:#94a3b8;">Маршрут ' + ((state.chainIdx % CHAINS.length) + 1) + ' из ' + CHAINS.length + '</span>' +
            '<span style="font-size:12px;font-weight:700;color:#38bdf8;">' + ch.start + ' ➔ ' + ch.end + '</span>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:700;color:#f8fafc;margin-bottom:8px;">' + ch.title + '</div>' +
          '<div style="background:#1e293b;border-left:3px solid #f59e0b;padding:8px 10px;border-radius:8px;font-size:12px;color:#fde68a;margin-bottom:10px;">🗺️ <b>Физическая карта:</b> ' + ch.hint + '</div>' +
          '<div style="display:flex;gap:5px;margin-bottom:12px;">' + progressHtml + '</div>' +
          bodyHtml +
        '</div>';

      if (state.chainDone) {
        document.getElementById('gcNextChainBtn').onclick = function() {
          state.chainIdx += 1;
          state.chainStep = 0;
          state.chainDone = false;
          renderArena();
        };
      } else {
        var cBtns = box.querySelectorAll('.gc-chain-opt');
        for (var i = 0; i < cBtns.length; i++) {
          cBtns[i].onclick = function() {
            var picked = parseInt(this.getAttribute('data-idx'), 10);
            var cur = ch.steps[state.chainStep];
            if (picked === cur.ans) {
              state.streak += 1;
              state.xp += 10;
              if (state.chainStep + 1 >= ch.steps.length) {
                state.chainDone = true;
                state.xp += 25;
              } else {
                state.chainStep += 1;
              }
              saveStats();
              renderArena();
            } else {
              state.streak = 0;
              saveStats();
              this.style.background = '#7f1d1d';
              this.style.borderColor = '#ef4444';
              var errDiv = document.getElementById('gcChainErr');
              if (errDiv) errDiv.textContent = '❌ Нет общей границы! Проверь соседей по физической карте и попробуй ещё.';
            }
          };
        }
      }
    } else {
      var bug = BUG_MAPS[state.bugIdx % BUG_MAPS.length];
      var bugOptsHtml = bug.opts.map(function(o, idx) {
        return '<button class="gc-bug-opt" data-idx="' + idx + '" style="width:100%;text-align:left;padding:10px 12px;margin-bottom:8px;border-radius:10px;border:1px solid #334155;background:#1e293b;color:#f8fafc;font-size:13px;line-height:1.35;cursor:pointer;">' + o + '</button>';
      }).join('');

      box.innerHTML = headerHtml +
        '<div style="background:#0f172a;border:1px solid #334155;border-radius:14px;padding:12px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
            '<span style="font-size:11px;color:#fb7185;font-weight:700;">РАУНД ' + ((state.bugIdx % BUG_MAPS.length) + 1) + ' ИЗ ' + BUG_MAPS.length + '</span>' +
            '<span style="font-size:11px;color:#94a3b8;">Режим: Карта с ошибкой</span>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:700;color:#f8fafc;margin-bottom:8px;">' + bug.title + '</div>' +
          '<div id="gcBugMapCanvas" style="width:100%;height:210px;border-radius:10px;border:1px solid #475569;margin-bottom:10px;z-index:1;"></div>' +
          '<div style="font-size:14px;font-weight:600;color:#f8fafc;margin-bottom:10px;">' + bug.q + '</div>' +
          '<div id="gcBugOptsWrap">' + bugOptsHtml + '</div>' +
          '<div id="gcBugFeedback" style="display:none;margin-top:8px;padding:10px;border-radius:10px;background:#1e293b;font-size:13px;color:#e2e8f0;"></div>' +
          '<button id="gcNextBugBtn" style="display:none;width:100%;margin-top:10px;padding:10px;border-radius:10px;border:none;background:#e11d48;color:#fff;font-weight:700;font-size:14px;cursor:pointer;">Следующая карта ➔</button>' +
        '</div>';

      renderBugMap(bug);

      var bBtns = box.querySelectorAll('.gc-bug-opt');
      for (var j = 0; j < bBtns.length; j++) {
        bBtns[j].onclick = function() {
          if (state.bugAnswered) return;
          state.bugAnswered = true;
          var picked = parseInt(this.getAttribute('data-idx'), 10);
          var isOk = picked === bug.ans;
          if (isOk) {
            state.streak += 1;
            state.xp += 20;
          } else {
            state.streak = 0;
          }
          saveStats();

          var allB = box.querySelectorAll('.gc-bug-opt');
          for (var k = 0; k < allB.length; k++) {
            var idx = parseInt(allB[k].getAttribute('data-idx'), 10);
            if (idx === bug.ans) {
              allB[k].style.background = '#065f46';
              allB[k].style.borderColor = '#10b981';
            } else if (idx === picked && !isOk) {
              allB[k].style.background = '#7f1d1d';
              allB[k].style.borderColor = '#ef4444';
            }
          }

          var fb = document.getElementById('gcBugFeedback');
          fb.style.display = 'block';
          fb.innerHTML = (isOk ? '<b style="color:#10b981;">✅ Подвох раскрыт! (+20 XP)</b> ' : '<b style="color:#f87171;">❌ Мимо!</b> ') + bug.explain;
          document.getElementById('gcNextBugBtn').style.display = 'block';
        };
      }

      document.getElementById('gcNextBugBtn').onclick = function() {
        state.bugIdx += 1;
        state.bugAnswered = false;
        renderArena();
      };
    }

    document.getElementById('gcModeChain').onclick = function() {
      state.mode = 'chain';
      renderArena();
    };
    document.getElementById('gcModeBug').onclick = function() {
      state.mode = 'bug';
      state.bugAnswered = false;
      renderArena();
    };
  }

  function injectArenaTab() {
    if (document.getElementById('view-arena-pro')) return;

    var container = document.querySelector('.container') || document.querySelector('main') || document.body;
    var view = document.createElement('div');
    view.id = 'view-arena-pro';
    view.className = 'view';
    view.style.display = 'none';
    view.style.padding = '12px';
    view.style.paddingBottom = '85px';
    view.innerHTML = '<div id="gcArenaRoot"></div>';
    container.appendChild(view);

    var nav = document.querySelector('nav') || document.querySelector('.bottom-nav') || document.querySelector('.nav-bar');
    if (!nav) {
      var anyBtn = document.querySelector('button[onclick*="showView"], button[onclick*="switchTab"], .nav-item, .tab-btn');
      if (anyBtn) nav = anyBtn.parentElement;
    }

    if (nav) {
      var btn = document.createElement('button');
      btn.id = 'btn-arena-pro';
      btn.className = nav.firstElementChild ? nav.firstElementChild.className : '';
      btn.innerHTML = '🏆<br><span style="font-size:10px;">Арена</span>';
      btn.onclick = function() {
        var allViews = document.querySelectorAll('.view, [id^="view-"]');
        for (var i = 0; i < allViews.length; i++) {
          allViews[i].style.display = 'none';
        }
        var allBtns = nav.querySelectorAll('button');
        for (var j = 0; j < allBtns.length; j++) {
          allBtns[j].classList.remove('active');
        }
        btn.classList.add('active');
        view.style.display = 'block';
        renderArena();
      };
      nav.appendChild(btn);
    }
  }

  setInterval(injectArenaTab, 800);
})();
