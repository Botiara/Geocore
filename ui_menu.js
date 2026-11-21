(function() {
  if (window.__geocoreUiMenu335) return;
  window.__geocoreUiMenu335 = true;

  var STYLE_ID = 'gc-snapshot-335-style';
  if (!document.getElementById(STYLE_ID)) {
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '#gc-fab-menu-btn {',
      '  position: fixed;',
      '  right: 16px;',
      '  bottom: 78px;',
      '  width: 54px;',
      '  height: 54px;',
      '  border-radius: 18px;',
      '  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);',
      '  border: 1.5px solid rgba(96, 165, 250, 0.55);',
      '  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.45), 0 0 0 1px rgba(15, 23, 42, 0.6);',
      '  color: #ffffff;',
      '  display: flex;',
      '  flex-direction: column;',
      '  align-items: center;',
      '  justify-content: center;',
      '  gap: 5px;',
      '  cursor: pointer;',
      '  z-index: 9998;',
      '  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;',
      '  -webkit-tap-highlight-color: transparent;',
      '}',
      '#gc-fab-menu-btn:active {',
      '  transform: scale(0.92);',
      '}',
      '#gc-fab-menu-btn .gc-bar {',
      '  width: 22px;',
      '  height: 2.5px;',
      '  background: #ffffff;',
      '  border-radius: 99px;',
      '  transition: transform 0.22s ease, opacity 0.22s ease;',
      '}',
      '#gc-fab-menu-btn.open .gc-bar:nth-child(1) {',
      '  transform: translateY(7.5px) rotate(45deg);',
      '}',
      '#gc-fab-menu-btn.open .gc-bar:nth-child(2) {',
      '  opacity: 0;',
      '}',
      '#gc-fab-menu-btn.open .gc-bar:nth-child(3) {',
      '  transform: translateY(-7.5px) rotate(-45deg);',
      '}',
      '#gc-fab-badge {',
      '  position: absolute;',
      '  top: -5px;',
      '  right: -5px;',
      '  background: #10b981;',
      '  color: #052e16;',
      '  font-size: 10px;',
      '  font-weight: 800;',
      '  padding: 2px 5px;',
      '  border-radius: 99px;',
      '  border: 1.5px solid #0f172a;',
      '  line-height: 1;',
      '}',
      '#gc-drawer-backdrop {',
      '  position: fixed;',
      '  inset: 0;',
      '  background: rgba(2, 6, 23, 0.68);',
      '  backdrop-filter: blur(4px);',
      '  -webkit-backdrop-filter: blur(4px);',
      '  z-index: 9996;',
      '  opacity: 0;',
      '  pointer-events: none;',
      '  transition: opacity 0.22s ease;',
      '}',
      '#gc-drawer-backdrop.open {',
      '  opacity: 1;',
      '  pointer-events: auto;',
      '}',
      '#gc-modes-sheet {',
      '  position: fixed;',
      '  right: 14px;',
      '  left: 14px;',
      '  bottom: 142px;',
      '  max-width: 420px;',
      '  margin-left: auto;',
      '  background: #0f172a;',
      '  border: 1px solid #334155;',
      '  border-radius: 22px;',
      '  padding: 16px;',
      '  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);',
      '  z-index: 9997;',
      '  transform: translateY(18px) scale(0.96);',
      '  opacity: 0;',
      '  pointer-events: none;',
      '  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;',
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
      '}',
      '#gc-modes-sheet.open {',
      '  transform: translateY(0) scale(1);',
      '  opacity: 1;',
      '  pointer-events: auto;',
      '}',
      '.gc-sheet-header {',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  margin-bottom: 12px;',
      '  padding-bottom: 10px;',
      '  border-bottom: 1px solid #1e293b;',
      '}',
      '.gc-sheet-title {',
      '  color: #f8fafc;',
      '  font-size: 15px;',
      '  font-weight: 800;',
      '  letter-spacing: 0.2px;',
      '}',
      '.gc-sheet-ver {',
      '  font-size: 11px;',
      '  font-weight: 700;',
      '  color: #38bdf8;',
      '  background: rgba(56, 189, 248, 0.12);',
      '  border: 1px solid rgba(56, 189, 248, 0.3);',
      '  padding: 3px 8px;',
      '  border-radius: 99px;',
      '}',
      '.gc-modes-grid {',
      '  display: flex;',
      '  flex-direction: column;',
      '  gap: 8px;',
      '}',
      '.gc-mode-card {',
      '  width: 100%;',
      '  display: flex;',
      '  align-items: center;',
      '  gap: 12px;',
      '  padding: 12px 14px;',
      '  border-radius: 15px;',
      '  background: #1e293b;',
      '  border: 1px solid #334155;',
      '  color: #f1f5f9;',
      '  text-align: left;',
      '  cursor: pointer;',
      '  transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;',
      '}',
      '.gc-mode-card:active {',
      '  transform: scale(0.98);',
      '  background: #273549;',
      '  border-color: #60a5fa;',
      '}',
      '.gc-mode-ico {',
      '  width: 38px;',
      '  height: 38px;',
      '  border-radius: 12px;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  font-size: 20px;',
      '  flex-shrink: 0;',
      '}',
      '.gc-mode-info {',
      '  display: flex;',
      '  flex-direction: column;',
      '  gap: 2px;',
      '  flex: 1;',
      '}',
      '.gc-mode-name {',
      '  font-size: 14px;',
      '  font-weight: 700;',
      '  color: #ffffff;',
      '}',
      '.gc-mode-desc {',
      '  font-size: 11.5px;',
      '  color: #94a3b8;',
      '}',
      '.gc-mode-arrow {',
      '  color: #64748b;',
      '  font-size: 16px;',
      '  font-weight: 700;',
      '}',
      '.gc-hidden-nav-clone {',
      '  display: none !important;',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  var MODES_META = [
    {
      key: 'contour',
      match: ['контур', 'popa'],
      icon: '🗺️',
      bg: 'rgba(16, 185, 129, 0.16)',
      title: 'Контурные карты',
      desc: 'Слои на карте мира и проверка без подписей'
    },
    {
      key: 'exam',
      match: ['экзамен', 'пробник', 'огэ'],
      icon: '📝',
      bg: 'rgba(59, 130, 246, 0.18)',
      title: 'Пробник ОГЭ (ФИПИ)',
      desc: 'Варианты прошлых лет с таймером и оценкой 2–5'
    },
    {
      key: 'arena',
      match: ['арена', 'pro', 'игр'],
      icon: '🏆',
      bg: 'rgba(245, 158, 11, 0.18)',
      title: 'Арена PRO',
      desc: 'Цепочка стран по физкарте и поиск подвоха'
    },
    {
      key: 'guides',
      match: ['схем', 'гайд'],
      icon: '📐',
      bg: 'rgba(168, 85, 247, 0.18)',
      title: 'Схемы и гайды',
      desc: 'Циклоны, климатограммы и алгоритмы ОГЭ'
    }
  ];

  var harvestedButtons = {};

  function textMatches(txt, keywords) {
    var low = (txt || '').toLowerCase();
    for (var i = 0; i < keywords.length; i++) {
      if (low.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
  }

  function scanAndDockNavButtons() {
    var candidates = document.querySelectorAll('nav button, .bottom-nav button, #bottomNav button, [class*="nav"] button, [class*="tab"] button, button');
    for (var i = 0; i < candidates.length; i++) {
      var btn = candidates[i];
      if (btn.closest('#gc-modes-sheet') || btn.id === 'gc-fab-menu-btn') continue;
      var rect = btn.getBoundingClientRect();
      var isBottomBar = rect.bottom > window.innerHeight - 110 && rect.height > 20 && rect.height < 95;
      if (!isBottomBar) continue;

      var label = (btn.innerText || btn.textContent || '').trim();
      if (!label) continue;

      for (var m = 0; m < MODES_META.length; m++) {
        var meta = MODES_META[m];
        if (meta.key === 'guides') continue; // оставляем базовые вкладки нетронутыми, убираем доп. режимы
        if (textMatches(label, meta.match)) {
          harvestedButtons[meta.key] = btn;
          btn.classList.add('gc-hidden-nav-clone');
        }
      }
    }
    renderSheetItems();
  }

  var backdrop = document.createElement('div');
  backdrop.id = 'gc-drawer-backdrop';

  var sheet = document.createElement('div');
  sheet.id = 'gc-modes-sheet';
  sheet.innerHTML = [
    '<div class="gc-sheet-header">',
    '  <div class="gc-sheet-title">🧭 Режимы GeoCore</div>',
    '  <div class="gc-sheet-ver">Snapshot 3.35</div>',
    '</div>',
    '<div class="gc-modes-grid" id="gc-modes-list"></div>'
  ].join('');

  var fab = document.createElement('button');
  fab.id = 'gc-fab-menu-btn';
  fab.setAttribute('aria-label', 'Открыть меню режимов');
  fab.innerHTML = [
    '<span class="gc-bar"></span>',
    '<span class="gc-bar"></span>',
    '<span class="gc-bar"></span>',
    '<span id="gc-fab-badge">3</span>'
  ].join('');

  var isOpen = false;
  function setOpen(state) {
    isOpen = state;
    if (isOpen) {
      scanAndDockNavButtons();
      fab.classList.add('open');
      backdrop.classList.add('open');
      sheet.classList.add('open');
    } else {
      fab.classList.remove('open');
      backdrop.classList.remove('open');
      sheet.classList.remove('open');
    }
  }

  fab.addEventListener('click', function(e) {
    e.stopPropagation();
    setOpen(!isOpen);
  });

  backdrop.addEventListener('click', function() {
    setOpen(false);
  });

  function triggerMode(key) {
    setOpen(false);
    var targetBtn = harvestedButtons[key];
    if (targetBtn) {
      targetBtn.classList.remove('gc-hidden-nav-clone');
      targetBtn.click();
      targetBtn.classList.add('gc-hidden-nav-clone');
      return;
    }
    // Резервный поиск по глобальным функциям модулей
    if (key === 'exam' && typeof window.openExamProModal === 'function') {
      window.openExamProModal();
    } else if (key === 'arena' && typeof window.openGamesProModal === 'function') {
      window.openGamesProModal();
    } else if (key === 'contour' && typeof window.openPopaModal === 'function') {
      window.openPopaModal();
    } else {
      // Поиск любой кнопки в DOM с подходящим текстом
      var allBtns = document.querySelectorAll('button, [onclick]');
      var meta = null;
      for (var i = 0; i < MODES_META.length; i++) {
        if (MODES_META[i].key === key) meta = MODES_META[i];
      }
      if (meta) {
        for (var j = 0; j < allBtns.length; j++) {
          if (allBtns[j].closest('#gc-modes-sheet')) continue;
          if (textMatches(allBtns[j].innerText || allBtns[j].textContent, meta.match)) {
            allBtns[j].click();
            return;
          }
        }
      }
    }
  }

  function renderSheetItems() {
    var list = document.getElementById('gc-modes-list');
    if (!list) return;
    var items = [MODES_META[0], MODES_META[1], MODES_META[2]];
    var html = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      html.push(
        '<button type="button" class="gc-mode-card" data-gc-mode="' + item.key + '">' +
          '<div class="gc-mode-ico" style="background:' + item.bg + '">' + item.icon + '</div>' +
          '<div class="gc-mode-info">' +
            '<div class="gc-mode-name">' + item.title + '</div>' +
            '<div class="gc-mode-desc">' + item.desc + '</div>' +
          '</div>' +
          '<div class="gc-mode-arrow">›</div>' +
        '</button>'
      );
    }
    list.innerHTML = html.join('');
    var cards = list.querySelectorAll('.gc-mode-card');
    for (var c = 0; c < cards.length; c++) {
      (function(card) {
        card.addEventListener('click', function() {
          triggerMode(card.getAttribute('data-gc-mode'));
        });
      })(cards[c]);
    }
  }

  function mount() {
    if (!document.body) return;
    document.body.appendChild(backdrop);
    document.body.appendChild(sheet);
    document.body.appendChild(fab);
    renderSheetItems();
    scanAndDockNavButtons();
    setTimeout(scanAndDockNavButtons, 600);
    setTimeout(scanAndDockNavButtons, 1800);
    setTimeout(scanAndDockNavButtons, 3500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
