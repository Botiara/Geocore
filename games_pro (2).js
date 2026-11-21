(function() {
  var QUESTIONS = [
    { cat: '7 класс', q: 'Какое тёплое течение согревает северо-западное побережье Европы и делает порт Мурманск незамерзающим?', opts: ['Северо-Атлантическое', 'Перуанское', 'Лабрадорское', 'Бенгельское'], ans: 0, hint: 'Продолжение Гольфстрима в Северной Атлантике.' },
    { cat: '7 класс', q: 'Какой материк пересекается экватором почти посередине и является самым жарким на Земле?', opts: ['Африка', 'Южная Америка', 'Австралия', 'Евразия'], ans: 0, hint: 'Через этот материк также проходят оба тропика и нулевой меридиан.' },
    { cat: '7 класс', q: 'Какой пролив соединяет Тихий и Северный Ледовитый океаны и разделяет Евразию и Северную Америку?', opts: ['Берингов', 'Гибралтарский', 'Дрейка', 'Магелланов'], ans: 0, hint: 'Здесь проходит линия перемены дат и граница между Россией и США.' },
    { cat: '7 класс', q: 'Какая самая длинная горная цепь суши тянется вдоль западного побережья Южной Америки?', opts: ['Анды', 'Кордильеры', 'Гималаи', 'Большой Водораздельный хребет'], ans: 0, hint: 'Высшая точка — гора Аконкагуа (6961 м).' },
    { cat: '7 класс', q: 'В каком климатическом поясе весь год жарко (+24...+28 °C) и почти ежедневно идут ливни?', opts: ['Экваториальный', 'Тропический', 'Умеренный', 'Субарктический'], ans: 0, hint: 'Постоянные восходящие токи воздуха и низкое давление.' },
    { cat: 'Регионы РФ', q: 'Эта область России имеет выход к Балтийскому морю, не граничит с другими регионами РФ и богата янтарём.', opts: ['Калининградская область', 'Ленинградская область', 'Псковская область', 'Мурманская область'], ans: 0, hint: 'Полуэксклав РФ между Польшей и Литвой.' },
    { cat: 'Регионы РФ', q: 'Этот край занимает третье место в России по численности населения, омывается двумя морями и является главной житницей страны.', opts: ['Краснодарский край', 'Ставропольский край', 'Приморский край', 'Алтайский край'], ans: 0, hint: 'Выходит к Чёрному и Азовскому морям.' },
    { cat: 'Регионы РФ', q: 'На территории этой республики находится полюс холода Северного полушария (Оймякон) и добывается большая часть алмазов РФ.', opts: ['Республика Саха (Якутия)', 'Республика Коми', 'Республика Бурятия', 'Республика Тыва'], ans: 0, hint: 'Самый большой по площади субъект Российской Федерации.' },
    { cat: 'Регионы РФ', q: 'Этот полуостровной край относится к Тихоокеанскому огненному кольцу и славится действующими вулканами и гейзерами.', opts: ['Камчатский край', 'Хабаровский край', 'Красноярский край', 'Пермский край'], ans: 0, hint: 'Ключевская Сопка — высочайший действующий вулкан Евразии.' },
    { cat: 'Регионы РФ', q: 'Эта область Центрального Черноземья славится мощными запасами железных руд КМА и тучными чернозёмами.', opts: ['Белгородская область', 'Тверская область', 'Ярославская область', 'Костромская область'], ans: 0, hint: 'Лебединский и Стойленский ГОКи, город Старый Оскол.' },
    { cat: 'Страны', q: 'Какое государство занимает целый материк и входит в тройку лидеров по добыче железной руды, бокситов и лития?', opts: ['Австралия', 'Бразилия', 'Канада', 'Индия'], ans: 0, hint: 'Столица — город Канберра.' },
    { cat: 'Страны', q: 'Какая страна Южной Америки является мировым лидером по добыче и экспорту меди?', opts: ['Чили', 'Аргентина', 'Перу', 'Колумбия'], ans: 0, hint: 'Узкая полоса между Андами и Тихим океаном.' },
    { cat: 'Страны', q: 'Какой скандинавский сосед России вступил в НАТО в 2023 году и называется «страной тысячи озёр»?', opts: ['Финляндия', 'Норвегия', 'Швеция', 'Дания'], ans: 0, hint: 'Столица Хельсинки, развита лесная и бумажная промышленность.' },
    { cat: 'Страны', q: 'Какая страна Азии занимает первое место в мире по численности населения (более 1,44 млрд человек)?', opts: ['Индия', 'Китай', 'Индонезия', 'Пакистан'], ans: 0, hint: 'Опередила Китай в 2023 году; столица Нью-Дели.' },
    { cat: 'Страны', q: 'Какая страна Северной Америки является мировым лидером по добыче серебра и крупнейшей испаноязычной страной мира?', opts: ['Мексика', 'Канада', 'Куба', 'Аргентина'], ans: 0, hint: 'Граничит с США на севере, столица Мехико.' }
  ];

  var CHAINS = [
    {
      title: 'Маршрут 1: Из Франции в Китай по суше (3 шага)',
      start: '🇫🇷 Франция',
      end: '🇨🇳 Китай',
      mapHint: 'Смотри на физическую карту Евразии: от Альп через Среднеевропейскую и Восточно-Европейскую равнины к Уралу, Сибири и Алтаю.',
      steps: [
        { prompt: 'Шаг 1. Из Франции на восток через Рейн. Какая страна граничит с Францией?', opts: ['🇩🇪 Германия', '🇵🇱 Польша', '🇮🇹 Италия'], ans: 0 },
        { prompt: 'Шаг 2. Из Германии дальше на восток через Одер по Среднеевропейской равнине:', opts: ['🇵🇱 Польша', '🇷🇴 Румыния', '🇸🇪 Швеция'], ans: 0 },
        { prompt: 'Шаг 3. Из Польши на восток к Калининграду/Беларуси и далее к России, которая граничит с Китаем на Алтае и Амуре:', opts: ['🇷🇺 Россия', '🇺🇦 Украина', '🇰🇿 Казахстан'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 2: От Норвегии до Греции через всю Европу',
      start: '🇳🇴 Норвегия',
      end: '🇬🇷 Греция',
      mapHint: 'На физической карте двигайся от Скандинавских гор на юг через Балтику, Карпаты и Балканский полуостров.',
      steps: [
        { prompt: 'Шаг 1. Из Норвегии на восток через Скандинавские горы:', opts: ['🇸🇪 Швеция', '🇩🇰 Дания', '🇪🇪 Эстония'], ans: 0 },
        { prompt: 'Шаг 2. Через Финляндию и Россию/Прибалтику на юг к Карпатам (сосед Польши и Украины):', opts: ['🇷🇴 Румыния', '🇪🇸 Испания', '🇮🇪 Ирландия'], ans: 0 },
        { prompt: 'Шаг 3. Из Румынии на юг через реку Дунай и Балканские горы к границе с Грецией:', opts: ['🇧🇬 Болгария', '🇭🇺 Венгрия', '🇦🇹 Австрия'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 3: Из Египта в ЮАР вдоль Восточной Африки',
      start: '🇪🇬 Египет',
      end: '🇿🇦 ЮАР',
      mapHint: 'На физической карте Африки иди вверх по течению Нила через Восточно-Африканское плоскогорье и озёра.',
      steps: [
        { prompt: 'Шаг 1. Из Египта строго на юг вверх по долине реки Нил:', opts: ['🇸🇩 Судан', '🇱🇾 Ливия', '🇲🇦 Марокко'], ans: 0 },
        { prompt: 'Шаг 2. Далее на юг через Южный Судан, Уганду и Танзанию к стране вокруг озера Ньяса и реки Замбези:', opts: ['🇲🇿 Мозамбик', '🇳🇬 Нигерия', '🇩🇿 Алжир'], ans: 0 },
        { prompt: 'Шаг 3. Из Мозамбика на юг вдоль побережья Индийского океана к Драконовым горам:', opts: ['🇿🇦 ЮАР', '🇰🇪 Кения', '🇪🇹 Эфиопия'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 4: От Канады до Колумбии через перешеек',
      start: '🇨🇦 Канада',
      end: '🇨🇴 Колумбия',
      mapHint: 'Физическая карта Америк: от Великих озёр через Мексиканское нагорье и узкий Панамский перешеек.',
      steps: [
        { prompt: 'Шаг 1. Из Канады на юг через Великие озёра и реку Святого Лаврентия:', opts: ['🇺🇸 США', '🇲🇽 Мексика', '🇧🇷 Бразилия'], ans: 0 },
        { prompt: 'Шаг 2. Из США на юг через реку Рио-Гранде к Мексиканскому нагорью:', opts: ['🇲🇽 Мексика', '🇨🇺 Куба', '🇵🇪 Перу'], ans: 0 },
        { prompt: 'Шаг 3. Через Центральную Америку (Гватемала -> Гондурас -> Никарагуа -> Коста-Рика) к стране с каналом, граничащей с Колумбией:', opts: ['🇵🇦 Панама', '🇨🇱 Чили', '🇦🇷 Аргентина'], ans: 0 }
      ]
    },
    {
      title: 'Маршрут 5: Из Ирана в Таиланд по югу Азии',
      start: '🇮🇷 Иран',
      end: '🇹🇭 Таиланд',
      mapHint: 'Физическая карта Азии: от Иранского нагорья через долину Инда, Индо-Гангскую низменность к полуострову Индокитай.',
      steps: [
        { prompt: 'Шаг 1. Из Ирана на восток к долине реки Инд:', opts: ['🇵🇰 Пакистан', '🇮🇶 Ирак', '🇹🇷 Турция'], ans: 0 },
        { prompt: 'Шаг 2. Из Пакистана на восток на полуостров Индостан и Индо-Гангскую низменность:', opts: ['🇮🇳 Индия', '🇯🇵 Япония', '🇰🇿 Казахстан'], ans: 0 },
        { prompt: 'Шаг 3. Из Индии на восток к стране между Бенгальским заливом и Таиландом:', opts: ['🇲🇲 Мьянма', '🇲🇳 Монголия', '🇰🇷 Южная Корея'], ans: 0 }
      ]
    }
  ];

  var state = {
    xp: parseInt(localStorage.getItem('gc_xp') || '0', 10),
    streak: 0,
    best: parseInt(localStorage.getItem('gc_best') || '0', 10),
    mode: 'quiz',
    cat: 'Все',
    qIdx: 0,
    answered: false,
    chainIdx: 0,
    chainStep: 0,
    chainDone: false
  };

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

  function getFilteredQuestions() {
    if (state.cat === 'Все') return QUESTIONS;
    return QUESTIONS.filter(function(item) { return item.cat === state.cat; });
  }

  function renderArena() {
    var box = document.getElementById('gcArenaRoot');
    if (!box) return;

    var headerHtml =
      '<div style="background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid #334155;border-radius:14px;padding:12px;margin-bottom:12px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
          '<div style="font-weight:700;font-size:15px;color:#f8fafc;">' + getRank(state.xp) + '</div>' +
          '<div style="font-size:12px;color:#38bdf8;font-weight:700;">⚡ ' + state.xp + ' XP</div>' +
        '</div>' +
        '<div style="display:flex;gap:10px;font-size:12px;color:#94a3b8;margin-bottom:10px;">' +
          '<span>🔥 Серия: <b style="color:#f59e0b;">' + state.streak + '</b></span>' +
          '<span>🏆 Рекорд: <b style="color:#10b981;">' + state.best + '</b></span>' +
        '</div>' +
        '<div style="display:flex;gap:6px;">' +
          '<button id="gcModeQuiz" style="flex:1;padding:8px;border-radius:9px;border:none;font-weight:700;font-size:13px;cursor:pointer;background:' + (state.mode === 'quiz' ? '#2563eb' : '#334155') + ';color:#fff;">🎯 Блиц-арена</button>' +
          '<button id="gcModeChain" style="flex:1;padding:8px;border-radius:9px;border:none;font-weight:700;font-size:13px;cursor:pointer;background:' + (state.mode === 'chain' ? '#10b981' : '#334155') + ';color:#fff;">🧭 Цепочка стран</button>' +
        '</div>' +
      '</div>';

    if (state.mode === 'quiz') {
      var cats = ['Все', '7 класс', 'Регионы РФ', 'Страны'];
      var catBar = '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">' +
        cats.map(function(c) {
          var active = state.cat === c;
          return '<button class="gc-cat-btn" data-cat="' + c + '" style="padding:6px 10px;border-radius:8px;border:1px solid ' + (active ? '#38bdf8' : '#334155') + ';background:' + (active ? '#0284c7' : '#1e293b') + ';color:#f8fafc;font-size:12px;cursor:pointer;">' + c + '</button>';
        }).join('') +
      '</div>';

      var list = getFilteredQuestions();
      var qObj = list[state.qIdx % list.length];

      var optsHtml = qObj.opts.map(function(opt, idx) {
        return '<button class="gc-opt-btn" data-idx="' + idx + '" style="width:100%;text-align:left;padding:11px 12px;margin-bottom:8px;border-radius:10px;border:1px solid #334155;background:#1e293b;color:#f8fafc;font-size:14px;cursor:pointer;">' + opt + '</button>';
      }).join('');

      box.innerHTML = headerHtml + catBar +
        '<div style="background:#0f172a;border:1px solid #334155;border-radius:14px;padding:14px;">' +
          '<div style="font-size:11px;color:#38bdf8;text-transform:uppercase;margin-bottom:6px;">Лига: ' + qObj.cat + ' • Вопрос ' + ((state.qIdx % list.length) + 1) + '/' + list.length + '</div>' +
          '<div style="font-size:15px;font-weight:600;color:#f8fafc;line-height:1.4;margin-bottom:12px;">' + qObj.q + '</div>' +
          '<div id="gcOptsWrap">' + optsHtml + '</div>' +
          '<div id="gcFeedback" style="display:none;margin-top:10px;padding:10px;border-radius:10px;background:#1e293b;font-size:13px;color:#e2e8f0;"></div>' +
          '<button id="gcNextBtn" style="display:none;width:100%;margin-top:10px;padding:10px;border-radius:10px;border:none;background:#2563eb;color:#fff;font-weight:700;font-size:14px;cursor:pointer;">Следующий вопрос ➔</button>' +
        '</div>';

      var catBtns = box.querySelectorAll('.gc-cat-btn');
      for (var i = 0; i < catBtns.length; i++) {
        catBtns[i].onclick = function() {
          state.cat = this.getAttribute('data-cat');
          state.qIdx = 0;
          state.answered = false;
          renderArena();
        };
      }

      var optBtns = box.querySelectorAll('.gc-opt-btn');
      for (var j = 0; j < optBtns.length; j++) {
        optBtns[j].onclick = function() {
          if (state.answered) return;
          state.answered = true;
          var picked = parseInt(this.getAttribute('data-idx'), 10);
          var isOk = picked === qObj.ans;
          if (isOk) {
            state.streak += 1;
            state.xp += 10 + Math.min(state.streak * 2, 20);
          } else {
            state.streak = 0;
          }
          saveStats();

          var allOpts = box.querySelectorAll('.gc-opt-btn');
          for (var k = 0; k < allOpts.length; k++) {
            var idx = parseInt(allOpts[k].getAttribute('data-idx'), 10);
            if (idx === qObj.ans) {
              allOpts[k].style.background = '#065f46';
              allOpts[k].style.borderColor = '#10b981';
            } else if (idx === picked && !isOk) {
              allOpts[k].style.background = '#7f1d1d';
              allOpts[k].style.borderColor = '#ef4444';
            }
          }

          var fb = document.getElementById('gcFeedback');
          fb.style.display = 'block';
          fb.innerHTML = (isOk ? '<b style="color:#10b981;">✅ Верно!</b> ' : '<b style="color:#f87171;">❌ Ошибка!</b> ') + qObj.hint;
          document.getElementById('gcNextBtn').style.display = 'block';
        };
      }

      document.getElementById('gcNextBtn').onclick = function() {
        state.qIdx += 1;
        state.answered = false;
        renderArena();
      };
    } else {
      var ch = CHAINS[state.chainIdx % CHAINS.length];
      var progressDots = ch.steps.map(function(s, idx) {
        var color = idx < state.chainStep || state.chainDone ? '#10b981' : (idx === state.chainStep ? '#38bdf8' : '#334155');
        return '<div style="flex:1;height:6px;border-radius:4px;background:' + color + ';"></div>';
      }).join('');

      var bodyHtml = '';
      if (state.chainDone) {
        bodyHtml =
          '<div style="text-align:center;padding:14px 6px;">' +
            '<div style="font-size:28px;margin-bottom:6px;">🏁</div>' +
            '<div style="font-size:16px;font-weight:700;color:#10b981;margin-bottom:6px;">Маршрут построен! (+30 XP)</div>' +
            '<div style="font-size:13px;color:#cbd5e1;margin-bottom:12px;">Ты прошёл путь от <b>' + ch.start + '</b> до <b>' + ch.end + '</b> по рельефу и границам!</div>' +
            '<button id="gcNextChainBtn" style="width:100%;padding:11px;border-radius:10px;border:none;background:#10b981;color:#fff;font-weight:700;font-size:14px;cursor:pointer;">Следующий маршрут ➔</button>' +
          '</div>';
      } else {
        var st = ch.steps[state.chainStep];
        var stOpts = st.opts.map(function(o, idx) {
          return '<button class="gc-chain-opt" data-idx="' + idx + '" style="width:100%;text-align:left;padding:11px 12px;margin-bottom:8px;border-radius:10px;border:1px solid #334155;background:#1e293b;color:#f8fafc;font-size:14px;cursor:pointer;">' + o + '</button>';
        }).join('');

        bodyHtml =
          '<div style="font-size:13px;font-weight:600;color:#f8fafc;margin-bottom:10px;">' + st.prompt + '</div>' +
          stOpts +
          '<div id="gcChainMsg" style="font-size:12px;color:#f87171;margin-top:4px;"></div>';
      }

      box.innerHTML = headerHtml +
        '<div style="background:#0f172a;border:1px solid #334155;border-radius:14px;padding:14px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
            '<span style="font-size:12px;color:#94a3b8;">Маршрут ' + ((state.chainIdx % CHAINS.length) + 1) + '/' + CHAINS.length + '</span>' +
            '<span style="font-size:12px;font-weight:700;color:#38bdf8;">' + ch.start + ' ➔ ' + ch.end + '</span>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:700;color:#f8fafc;margin-bottom:8px;">' + ch.title + '</div>' +
          '<div style="background:#1e293b;border-left:3px solid #f59e0b;padding:8px 10px;border-radius:8px;font-size:12px;color:#fde68a;margin-bottom:10px;">🗺️ <b>Ориентир по физ. карте:</b> ' + ch.mapHint + '</div>' +
          '<div style="display:flex;gap:6px;margin-bottom:12px;">' + progressDots + '</div>' +
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
        var cOpts = box.querySelectorAll('.gc-chain-opt');
        for (var m = 0; m < cOpts.length; m++) {
          cOpts[m].onclick = function() {
            var picked = parseInt(this.getAttribute('data-idx'), 10);
            var curStep = ch.steps[state.chainStep];
            if (picked === curStep.ans) {
              state.streak += 1;
              state.xp += 10;
              if (state.chainStep + 1 >= ch.steps.length) {
                state.chainDone = true;
                state.xp += 20;
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
              var msg = document.getElementById('gcChainMsg');
              if (msg) msg.textContent = '❌ Не туда свернул! Посмотри на рельеф и соседние границы и попробуй ещё раз.';
            }
          };
        }
      }
    }

    document.getElementById('gcModeQuiz').onclick = function() {
      state.mode = 'quiz';
      renderArena();
    };
    document.getElementById('gcModeChain').onclick = function() {
      state.mode = 'chain';
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
