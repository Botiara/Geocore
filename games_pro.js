(function() {
  const PRO_QUESTIONS = [
    { cat: '7 класс', q: 'Какой материк является самым жарким на Земле?', opts: ['Африка', 'Австралия', 'Южная Америка', 'Евразия'], a: 0, tip: 'Его почти посередине пересекает экватор, а большая часть лежит в тропиках.' },
    { cat: '7 класс', q: 'Какой материк самый сухой и самый маленький по площади?', opts: ['Антарктида', 'Австралия', 'Южная Америка', 'Африка'], a: 1, tip: 'Около половины его территории занимают пустыни и полупустыни.' },
    { cat: '7 класс', q: 'Самая высокая горная вершина мира и материка Евразия:', opts: ['Эльбрус', 'Аконкагуа', 'Джомолунгма (Эверест)', 'Килиманджаро'], a: 2, tip: 'Находится в Гималаях на границе Непала и Китая (8848 м).' },
    { cat: '7 класс', q: 'Какое океаническое течение является самым мощным холодным течением Мирового океана?', opts: ['Гольфстрим', 'Куросио', 'Западных Ветров', 'Перуанское'], a: 2, tip: 'Опоясывает Антарктиду с запада на восток.' },
    { cat: '7 класс', q: 'Самое глубокое озеро планеты и крупнейший резервуар пресной воды:', opts: ['Виктория', 'Байкал', 'Танганьика', 'Верхнее'], a: 1, tip: 'Глубина 1642 м, расположено в Восточной Сибири.' },
    { cat: '7 класс', q: 'Самая полноводная река мира с крупнейшим речным бассейном:', opts: ['Нил', 'Янцзы', 'Амазонка', 'Миссисипи'], a: 2, tip: 'Протекает по Южной Америке в экваториальном поясе.' },
    { cat: '7 класс', q: 'Какой пролив соединяет Тихий и Северный Ледовитый океаны и разделяет Евразию и Северную Америку?', opts: ['Магелланов', 'Дрейка', 'Берингов', 'Гибралтарский'], a: 2, tip: 'Назван в честь мореплавателя Витуса Беринга.' },
    { cat: '7 класс', q: 'Самый большой по площади и самый глубокий океан Земли:', opts: ['Атлантический', 'Индийский', 'Тихий', 'Северный Ледовитый'], a: 2, tip: 'Здесь находится Марианский жёлоб (11 022 м).' },
    { cat: 'Регионы РФ', q: 'Эта область России имеет выход к двум морям разных океанов, граничит с Норвегией и Финляндией, а её столица — крупнейший незамерзающий порт за Полярным кругом.', opts: ['Архангельская область', 'Мурманская область', 'Республика Карелия', 'Ленинградская область'], a: 1, tip: 'Столица — Мурманск, омывается Баренцевым и Белым морями.' },
    { cat: 'Регионы РФ', q: 'Этот субъект РФ расположен на острове и группе островов, омывается Охотским и Японским морями, является единственным островным регионом России.', opts: ['Камчатский край', 'Приморский край', 'Сахалинская область', 'Магаданская область'], a: 2, tip: 'Включает остров Сахалин и Курильские острова.' },
    { cat: 'Регионы РФ', q: 'Эта республика в составе РФ не имеет выхода к морю, граничит с Монголией, здесь берёт начало река Енисей и находится географический центр Азии.', opts: ['Республика Алтай', 'Республика Бурятия', 'Республика Тыва', 'Республика Хакасия'], a: 2, tip: 'Столица — город Кызыл.' },
    { cat: 'Регионы РФ', q: 'Эта область России является полуэксклавом: не имеет сухопутной границы с основной территорией РФ, граничит с Польшей и Литвой и омывается Балтийским морем.', opts: ['Псковская область', 'Калининградская область', 'Смоленская область', 'Ленинградская область'], a: 1, tip: 'Здесь находится крайняя западная точка РФ — Балтийская коса.' },
    { cat: 'Регионы РФ', q: 'Этот автономный округ расположен в Западной Сибири, омывается Карским морем, является главным газодобывающим регионом России (Уренгой, Ямбург).', opts: ['Ханты-Мансийский АО', 'Ямало-Ненецкий АО', 'Ненецкий АО', 'Чукотский АО'], a: 1, tip: 'Столица — Салехард, единственный город мира прямо на Полярном круге.' },
    { cat: 'Регионы РФ', q: 'Эта республика имеет выход к Каспийскому морю, граничит с Грузией и Азербайджаном, здесь расположена крайняя южная точка России.', opts: ['Республика Калмыкия', 'Республика Дагестан', 'Чеченская Республика', 'Кабардино-Балкария'], a: 1, tip: 'Крайняя южная точка — район горы Базардюзю.' },
    { cat: 'Страны и блоки', q: 'Какая страна является мировым лидером по добыче меди и самой длинной страной мира с севера на юг?', opts: ['Перу', 'Чили', 'Бразилия', 'Аргентина'], a: 1, tip: 'Расположена узкой полосой вдоль Тихого океана и Анд.' },
    { cat: 'Страны и блоки', q: 'Какое государство имеет самую короткую сухопутную границу с Россией (около 17–39 км по реке Туманная)?', opts: ['Норвегия', 'КНДР', 'Монголия', 'Литва'], a: 1, tip: 'Расположено на севере Корейского полуострова.' },
    { cat: 'Страны и блоки', q: 'Какая страна вышла из Евросоюза в 2020 году (Brexit), но остаётся в НАТО, G7 и Совбезе ООН?', opts: ['Норвегия', 'Швейцария', 'Великобритания', 'Исландия'], a: 2, tip: 'Островное государство со столицей в Лондоне.' },
    { cat: 'Страны и блоки', q: 'Какая страна Южной Америки входит в БРИКС+, МЕРКОСУР и G20, является крупнейшей на материке и лидером по добыче железной руды и кофе?', opts: ['Аргентина', 'Бразилия', 'Колумбия', 'Венесуэла'], a: 1, tip: 'Столица — Бразилиа, единственный португалоязычный гигант региона.' }
  ];
  let state = {
    xp: parseInt(localStorage.getItem('gc_xp') || '0', 10),
    streak: parseInt(localStorage.getItem('gc_streak') || '0', 10),
    bestStreak: parseInt(localStorage.getItem('gc_best_streak') || '0', 10),
    cat: 'Все',
    idx: 0,
    answered: false
  };
  function getRank(xp) {
    if (xp >= 500) return '👑 Магистр географии';
    if (xp >= 250) return '🧭 Покоритель континентов';
    if (xp >= 100) return '🗺️ Знаток атласа';
    if (xp >= 40) return '🎒 Исследователь 7 класса';
    return '🌱 Новичок экспедиции';
  }
  function saveStats() {
    localStorage.setItem('gc_xp', state.xp);
    localStorage.setItem('gc_streak', state.streak);
    localStorage.setItem('gc_best_streak', state.bestStreak);
  }
  function ensureArenaTab() {
    const allBtns = Array.from(document.querySelectorAll('button, .nav-item, .tab-btn'));
    const refBtn = allBtns.find(b => /Контурные|Схемы|Россия|ОГЭ|Игры/i.test(b.innerText));
    let view = document.getElementById('view-arena-pro');
    if (!view) {
      view = document.createElement('div');
      view.id = 'view-arena-pro';
      view.className = 'view-section';
      view.style.cssText = 'display:none;padding:12px 12px 90px 12px;max-width:720px;margin:0 auto;';
      const host = document.querySelector('#view-geopol')?.parentElement || document.body;
      host.appendChild(view);
    }
    if (refBtn && !document.getElementById('nav-btn-arena')) {
      const btn = refBtn.cloneNode(true);
      btn.id = 'nav-btn-arena';
      btn.classList.remove('active');
      if (btn.children.length >= 2) {
        btn.children[0].textContent = '🏆';
        btn.children[1].textContent = 'Арена PRO';
      } else {
        btn.innerHTML = '🏆 Арена PRO';
      }
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('[id^="view-"]').forEach(v => v.style.display = 'none');
        allBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('#nav-btn-arena').forEach(b => b.classList.add('active'));
        view.style.display = 'block';
        renderArena();
      };
      refBtn.parentElement.appendChild(btn);
      allBtns.forEach(b => {
        if (b.id !== 'nav-btn-arena') {
          b.addEventListener('click', () => {
            view.style.display = 'none';
            btn.classList.remove('active');
          });
        }
      });
    }
  }
  function getPool() {
    return state.cat === 'Все' ? PRO_QUESTIONS : PRO_QUESTIONS.filter(q => q.cat === state.cat);
  }
  window.setArenaCat = function(c) {
    state.cat = c;
    state.idx = 0;
    state.answered = false;
    renderArena();
  };
  window.answerArena = function(choice) {
    if (state.answered) return;
    state.answered = true;
    const pool = getPool();
    const item = pool[state.idx % pool.length];
    const ok = choice === item.a;
    if (ok) {
      state.streak += 1;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      state.xp += 10 + Math.min(state.streak * 2, 20);
    } else {
      state.streak = 0;
    }
    saveStats();
    renderArena(choice);
  };
  window.nextArenaQ = function() {
    state.idx += 1;
    state.answered = false;
    renderArena();
  };
  function renderArena(lastChoice) {
    const view = document.getElementById('view-arena-pro');
    if (!view) return;
    const pool = getPool();
    const item = pool[state.idx % pool.length];
    const cats = ['Все', '7 класс', 'Регионы РФ', 'Страны и блоки'];
    let html = '<div style="background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid #334155;border-radius:14px;padding:12px;margin-bottom:12px;color:#f8fafc;">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><span style="font-weight:700;font-size:15px;color:#38bdf8;">' + getRank(state.xp) + '</span><span style="background:#f59e0b22;color:#fbbf24;padding:3px 9px;border-radius:99px;font-size:12px;font-weight:700;">⚡ ' + state.xp + ' XP</span></div>';
    html += '<div style="display:flex;gap:12px;font-size:12px;color:#94a3b8;"><span>🔥 Серия: <b style="color:#f8fafc;">' + state.streak + '</b></span><span>🏅 Рекорд: <b style="color:#10b981;">' + state.bestStreak + '</b></span><span>📚 Вопрос ' + ((state.idx % pool.length) + 1) + '/' + pool.length + '</span></div></div>';
    html += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">';
    cats.forEach(c => {
      const active = state.cat === c;
      html += '<button onclick="setArenaCat(\'' + c + '\')" style="padding:6px 11px;border-radius:9px;border:1px solid ' + (active ? '#38bdf8' : '#334155') + ';background:' + (active ? '#0284c7' : '#1e293b') + ';color:#f8fafc;font-size:12px;font-weight:600;cursor:pointer;">' + c + '</button>';
    });
    html += '</div><div style="background:#1e293b;border:1px solid #334155;border-radius:14px;padding:14px;color:#f8fafc;">';
    html += '<div style="font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#38bdf8;margin-bottom:6px;">' + item.cat + '</div>';
    html += '<div style="font-size:15px;font-weight:600;line-height:1.4;margin-bottom:12px;">' + item.q + '</div><div style="display:flex;flex-direction:column;gap:8px;">';
    item.opts.forEach((opt, i) => {
      let bg = '#0f172a', border = '#334155';
      if (state.answered) {
        if (i === item.a) { bg = '#065f46'; border = '#10b981'; }
        else if (i === lastChoice) { bg = '#7f1d1d'; border = '#ef4444'; }
      }
      html += '<button onclick="answerArena(' + i + ')" style="text-align:left;padding:11px 12px;border-radius:10px;border:1px solid ' + border + ';background:' + bg + ';color:#f8fafc;font-size:14px;cursor:pointer;">' + opt + '</button>';
    });
    html += '</div>';
    if (state.answered) {
      html += '<div style="margin-top:12px;padding:10px;border-radius:10px;background:#0f172a;border-left:3px solid #38bdf8;font-size:13px;color:#cbd5e1;">💡 <b>Подсказка:</b> ' + item.tip + '</div>';
      html += '<button onclick="nextArenaQ()" style="margin-top:10px;width:100%;padding:11px;border-radius:10px;border:none;background:#10b981;color:#052e16;font-weight:700;font-size:14px;cursor:pointer;">Следующий вопрос ➔</button>';
    }
    html += '</div>';
    view.innerHTML = html;
  }
  setInterval(ensureArenaTab, 1000);
})();
