(function() {
  const PRO_KEY = 'geocore_pro_unlocked_v1';
  const VALID_CODES = ['VITAGOROD', 'CONSUL2026', 'BOTIARA'];

  function isPro() {
    try {
      return localStorage.getItem(PRO_KEY) === 'true';
    } catch (e) {
      return window.__GEOCORE_PRO__ === true;
    }
  }

  function setPro(val) {
    window.__GEOCORE_PRO__ = val;
    try {
      if (val) localStorage.setItem(PRO_KEY, 'true');
      else localStorage.removeItem(PRO_KEY);
    } catch (e) {}
  }

  const style = document.createElement('style');
  style.textContent = `
    .pro-badge-nav {
      display: inline-block;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #0b1120;
      font-size: 9px;
      font-weight: 800;
      padding: 1px 5px;
      border-radius: 6px;
      margin-left: 4px;
      vertical-align: middle;
      letter-spacing: 0.4px;
    }
    #proPaywallOverlay {
      position: fixed;
      inset: 0;
      background: rgba(8, 13, 25, 0.94);
      backdrop-filter: blur(10px);
      z-index: 9999;
      display: none;
      overflow-y: auto;
      padding: 18px 14px 36px;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    #proPaywallOverlay.open {
      display: block;
    }
    .pro-modal-box {
      max-width: 440px;
      margin: 0 auto;
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 20px;
      padding: 20px 16px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    }
    .pro-close-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .pro-pill {
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.35);
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 999px;
    }
    .pro-close-btn {
      background: #1f2937;
      border: none;
      color: #9ca3af;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
    }
    .pro-title {
      font-size: 22px;
      font-weight: 800;
      margin: 6px 0 6px;
      line-height: 1.25;
    }
    .pro-sub {
      font-size: 13px;
      color: #94a3b8;
      margin-bottom: 16px;
      line-height: 1.45;
    }
    .pro-perks {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 12px 14px;
      margin-bottom: 16px;
    }
    .pro-perk-item {
      font-size: 13px;
      color: #e2e8f0;
      margin: 6px 0;
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
    .pro-plans {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 16px;
    }
    .pro-plan-card {
      background: #0f172a;
      border: 1.5px solid #1e293b;
      border-radius: 14px;
      padding: 12px 14px;
      cursor: pointer;
      transition: all 0.18s ease;
      position: relative;
    }
    .pro-plan-card.selected {
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.08);
    }
    .pro-plan-card.featured {
      border-color: #f59e0b;
    }
    .pro-plan-card.featured.selected {
      border-color: #10b981;
      box-shadow: 0 0 0 1px #10b981;
    }
    .pro-tag {
      position: absolute;
      top: -9px;
      right: 12px;
      background: #f59e0b;
      color: #0b1120;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 999px;
    }
    .pro-tag.bundle {
      background: #8b5cf6;
      color: #ffffff;
    }
    .pro-plan-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .pro-plan-name {
      font-size: 15px;
      font-weight: 700;
      color: #f8fafc;
    }
    .pro-plan-price {
      font-size: 17px;
      font-weight: 800;
      color: #10b981;
    }
    .pro-plan-desc {
      font-size: 12px;
      color: #94a3b8;
    }
    .pro-buy-btn {
      width: 100%;
      background: linear-gradient(135deg, #10b981, #059669);
      color: #ffffff;
      border: none;
      border-radius: 14px;
      padding: 14px;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      margin-bottom: 14px;
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
    }
    .pro-promo-box {
      border-top: 1px solid #1e293b;
      padding-top: 12px;
    }
    .pro-promo-label {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 6px;
    }
    .pro-promo-row {
      display: flex;
      gap: 8px;
    }
    .pro-promo-input {
      flex: 1;
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 9px 12px;
      color: #f8fafc;
      font-size: 13px;
      outline: none;
    }
    .pro-promo-btn {
      background: #1e293b;
      color: #e2e8f0;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 9px 14px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
    .pro-msg {
      font-size: 12px;
      margin-top: 8px;
      min-height: 16px;
    }
  `;
  document.head.appendChild(style);

  let selectedPlan = 'forever_199';

  function createModal() {
    if (document.getElementById('proPaywallOverlay')) return;
    const div = document.createElement('div');
    div.id = 'proPaywallOverlay';
    div.innerHTML = `
      <div class="pro-modal-box">
        <div class="pro-close-row">
          <span class="pro-pill">GEOCORE PRO</span>
          <button class="pro-close-btn" id="proCloseBtn">✕</button>
        </div>
        <div class="pro-title">Открой полную подготовку к ОГЭ</div>
        <div class="pro-sub">Карта и справочник доступны бесплатно, а интерактивные тренажёры, варианты ОГЭ и геополитика входят в PRO.</div>
        <div class="pro-perks">
          <div class="pro-perk-item"><span>🎯</span><span><b>Гео-Снайпер</b> — тренировка всех 99 объектов карты на точность в км</span></div>
          <div class="pro-perk-item"><span>⚡</span><span><b>Блиц-Тест ОГЭ</b> — быстрая проверка знаний по кодификатору</span></div>
          <div class="pro-perk-item"><span>📑</span><span><b>Варианты ОГЭ 2022–2025</b> с разборами и <b>Геополитика</b> (в следующих апдейтах)</span></div>
        </div>
        <div class="pro-plans">
          <div class="pro-plan-card" data-plan="month_99">
            <div class="pro-plan-top">
              <span class="pro-plan-name">Подписка на 1 месяц</span>
              <span class="pro-plan-price">99 ₽</span>
            </div>
            <div class="pro-plan-desc">Доступ ко всем тренажёрам GeoCore на 30 дней</div>
          </div>
          <div class="pro-plan-card featured selected" data-plan="forever_199">
            <span class="pro-tag">ХИТ ВЫБОРА</span>
            <div class="pro-plan-top">
              <span class="pro-plan-name">GeoCore Навсегда</span>
              <span class="pro-plan-price">199 ₽</span>
            </div>
            <div class="pro-plan-desc">Один платёж — вечный доступ ко всем тренажёрам и будущим апдейтам географии</div>
          </div>
          <div class="pro-plan-card" data-plan="bundle_299">
            <span class="pro-tag bundle">ВЫГОДА 50%</span>
            <div class="pro-plan-top">
              <span class="pro-plan-name">Пак «3 в 1» Навсегда</span>
              <span class="pro-plan-price">299 ₽</span>
            </div>
            <div class="pro-plan-desc">География (GeoCore) + История (HistCore) + Обществознание (SocCore) навсегда</div>
          </div>
        </div>
        <button class="pro-buy-btn" id="proBuyActionBtn">Оформить за 199 ₽ навсегда</button>
        <div class="pro-promo-box">
          <div class="pro-promo-label">Есть промокод или ключ доступа?</div>
          <div class="pro-promo-row">
            <input type="text" class="pro-promo-input" id="proPromoInput" placeholder="Введите код..." />
            <button class="pro-promo-btn" id="proPromoApplyBtn">Активировать</button>
          </div>
          <div class="pro-msg" id="proStatusMsg"></div>
        </div>
      </div>
    `;
    document.body.appendChild(div);

    const planLabels = {
      month_99: 'Оформить на 1 месяц за 99 ₽',
      forever_199: 'Оформить за 199 ₽ навсегда',
      bundle_299: 'Оформить Пак «3 в 1» за 299 ₽'
    };

    div.querySelectorAll('.pro-plan-card').forEach(card => {
      card.addEventListener('click', () => {
        div.querySelectorAll('.pro-plan-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedPlan = card.getAttribute('data-plan');
        document.getElementById('proBuyActionBtn').textContent = planLabels[selectedPlan];
      });
    });

    document.getElementById('proCloseBtn').addEventListener('click', () => {
      div.classList.remove('open');
    });

    document.getElementById('proBuyActionBtn').addEventListener('click', () => {
      const msg = document.getElementById('proStatusMsg');
      if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.sendData) {
        try {
          window.Telegram.WebApp.sendData(JSON.stringify({ action: 'buy_pro', plan: selectedPlan }));
        } catch (e) {}
      }
      msg.style.color = '#fbbf24';
      msg.textContent = 'Оплата через бота скоро откроется к релизу! Сейчас доступен вход по коду доступа.';
    });

    document.getElementById('proPromoApplyBtn').addEventListener('click', () => {
      const input = document.getElementById('proPromoInput');
      const msg = document.getElementById('proStatusMsg');
      const code = (input.value || '').trim().toUpperCase();
      if (VALID_CODES.includes(code)) {
        setPro(true);
        msg.style.color = '#10b981';
        msg.textContent = 'PRO-доступ активирован навсегда! Открываю раздел...';
        updateNavLock();
        setTimeout(() => {
          div.classList.remove('open');
          const playBtn = findPlayNavBtn();
          if (playBtn) playBtn.click();
        }, 650);
      } else {
        msg.style.color = '#f87171';
        msg.textContent = 'Неверный код доступа. Проверь раскладку и попробуй снова.';
      }
    });
  }

  function findPlayNavBtn() {
    const buttons = Array.from(document.querySelectorAll('button, .nav-item, .tab-btn'));
    return buttons.find(b => (b.textContent || '').includes('Играть'));
  }

  function updateNavLock() {
    const playBtn = findPlayNavBtn();
    if (!playBtn) return;
    let badge = playBtn.querySelector('.pro-badge-nav');
    if (isPro()) {
      if (badge) badge.remove();
    } else {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'pro-badge-nav';
        badge.textContent = 'PRO';
        playBtn.appendChild(badge);
      }
    }
  }

  function bindGuard() {
    createModal();
    updateNavLock();
    document.addEventListener('click', function(e) {
      const target = e.target.closest('button, .nav-item, .tab-btn');
      if (!target) return;
      if ((target.textContent || '').includes('Играть') && !isPro()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        document.getElementById('proPaywallOverlay').classList.add('open');
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindGuard);
  } else {
    bindGuard();
  }
})();
