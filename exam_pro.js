(function() {
  var VARIANTS = [
    {
      title: "Вариант №1 (Реальные задания ОГЭ прошлых лет)",
      questions: [
        {
          num: "№1",
          q: "Какой из перечисленных океанов имеет наибольшую среднюю глубину и наибольшую площадь?",
          opts: ["Атлантический", "Индийский", "Тихий", "Северный Ледовитый"],
          ans: 2,
          exp: "Тихий океан — самый большой по площади и самый глубокий (Марианский жёлоб — 11 022 м)."
        },
        {
          num: "№2",
          q: "С каким из перечисленных государств Россия имеет сухопутную границу?",
          opts: ["Узбекистан", "Монголия", "Таджикистан", "Армения"],
          ans: 1,
          exp: "Россия граничит по суше с Монголией (протяжённость границы около 3485 км). С Узбекистаном, Таджикистаном и Арменией общей границы нет."
        },
        {
          num: "№3",
          q: "Расположите перечисленные города России в порядке увеличения в них естественного плодородия почв (от наименее плодородных к наиболее плодородным): 1) Архангельск, 2) Воронеж, 3) Тверь.",
          opts: ["1, 3, 2", "2, 3, 1", "1, 2, 3", "3, 1, 2"],
          ans: 0,
          exp: "Плодородие почв растёт с севера на юг от тайги к степям: Архангельск (подзолистые) -> Тверь (дерново-подзолистые) -> Воронеж (чернозёмы)."
        },
        {
          num: "№4",
          q: "Какой из перечисленных заповедников был создан для сохранения и восстановления популяции баргузинского соболя на берегах озера Байкал?",
          opts: ["Астраханский", "Баргузинский", "Кандалакшский", "Тебердинский"],
          ans: 1,
          exp: "Баргузинский заповедник — старейший государственный заповедник России (1917 г.), расположен на восточном побережье Байкала."
        },
        {
          num: "№5",
          q: "Для какой из перечисленных областей атмосферного давления характерны нисходящие потоки воздуха и ясная, малооблачная погода?",
          opts: ["Циклон (Н)", "Антициклон (В)", "Тёплый атмосферный фронт", "Холодный атмосферный фронт"],
          ans: 1,
          exp: "В антициклоне (В) воздух опускается вниз и прогревается, облака рассеиваются — устанавливается ясная погода."
        },
        {
          num: "№13",
          q: "Определите температуру воздуха на вершине горы высотой 2500 м, если у её подножия температура составляет +20 °C (температура понижается на 0,6 °C каждые 100 м).",
          opts: ["+5 °C", "+10 °C", "-5 °C", "+15 °C"],
          ans: 0,
          exp: "2500 м / 100 м = 25. 25 * 0,6 °C = 15 °C. +20 °C - 15 °C = +5 °C."
        },
        {
          num: "№13 (2)",
          q: "Средняя солёность поверхностных вод Балтийского моря составляет 8 ‰. Сколько граммов солей растворено в 3 литрах его воды?",
          opts: ["8 г", "16 г", "24 г", "32 г"],
          ans: 2,
          exp: "1 промилле (‰) = 1 г соли на 1 литр воды. В 3 литрах при 8 ‰ содержится 8 * 3 = 24 г солей."
        },
        {
          num: "№14",
          q: "В каком из перечисленных регионов России наиболее велика вероятность возникновения цунами?",
          opts: ["Калининградская область", "Камчатский край", "Астраханская область", "Мурманская область"],
          ans: 1,
          exp: "Камчатский край входит в Тихоокеанское огненное кольцо, где происходят подводные землетрясения, вызывающие цунами."
        },
        {
          num: "№15",
          q: "Какой из перечисленных примеров иллюстрирует РАЦИОНАЛЬНОЕ природопользование?",
          opts: ["Сплав леса по рекам молевым способом", "Террасирование склонов при распашке земель", "Осушение болот в верховьях малых рек", "Захоронение токсичных отходов вблизи городов"],
          ans: 1,
          exp: "Террасирование склонов предотвращает водную эрозию почв и образование оврагов."
        },
        {
          num: "№19",
          q: "Расположите регионы России в той последовательности, в которой их жители встречают Новый год (с востока на запад): 1) Республика Саха (Якутия), 2) Омская область, 3) Смоленская область.",
          opts: ["1, 2, 3", "3, 2, 1", "2, 1, 3", "1, 3, 2"],
          ans: 0,
          exp: "Новый год в России наступает с востока на запад: Якутия (Дальний Восток) -> Омская область (Сибирь) -> Смоленская область (Европейский центр)."
        },
        {
          num: "№20",
          q: "Определите регион России по описанию: «Эта область расположена в европейской части страны, имеет выход к государственной границе. Главная река — Северский Донец. Здесь добывают железные руды КМА и развито высокопродуктивное сельское хозяйство на чернозёмах».",
          opts: ["Белгородская область", "Тверская область", "Вологодская область", "Самарская область"],
          ans: 0,
          exp: "Белгородская область граничит с Украиной, по ней протекает Северский Донец, добываются железные руды КМА."
        },
        {
          num: "№24",
          q: "В каком из перечисленных регионов России средняя плотность населения наибольшая?",
          opts: ["Республика Коми", "Магаданская область", "Московская область", "Республика Карелия"],
          ans: 2,
          exp: "Московская область находится в основной полосе расселения с самой высокой плотностью населения в стране."
        },
        {
          num: "№25",
          q: "Расположите перечисленные города России в порядке увеличения в них численности населения: 1) Псков, 2) Новосибирск, 3) Ярославль.",
          opts: ["1, 3, 2", "2, 3, 1", "3, 1, 2", "1, 2, 3"],
          ans: 0,
          exp: "Псков (~200 тыс. чел.) -> Ярославль (~570 тыс. чел.) -> Новосибирск (более 1,6 млн чел., город-миллионник)."
        },
        {
          num: "№26",
          q: "Какой из перечисленных городов России является крупнейшим центром чёрной металлургии полного цикла?",
          opts: ["Череповец", "Мурманск", "Архангельск", "Калининград"],
          ans: 0,
          exp: "В Череповце (Вологодская область) работает крупнейший комбинат «Северсталь» на пересечении потоков кольской руды и печорского угля."
        },
        {
          num: "№29",
          q: "Почему в пустыне Атакама на тихоокеанском побережье Южной Америки выпадает ничтожно мало осадков?",
          opts: ["Из-за холодного Перуанского течения у берегов", "Из-за тёплого Бразильского течения", "Из-за постоянных циклонов с Тихого океана", "Из-за высокой влажности пассатов"],
          ans: 0,
          exp: "Холодное Перуанское течение охлаждает приземный слой воздуха, препятствуя восходящим потокам и образованию дождевых облаков."
        }
      ]
    },
    {
      title: "Вариант №2 (Реальные задания ОГЭ прошлых лет)",
      questions: [
        {
          num: "№1",
          q: "Кто из перечисленных мореплавателей совершил первое в истории кругосветное плавание?",
          opts: ["Христофор Колумб", "Васко да Гама", "Фернан Магеллан", "Джеймс Кук"],
          ans: 2,
          exp: "Экспедиция Фернана Магеллана (1519–1522 гг.) впервые обогнула Землю и доказала единство Мирового океана."
        },
        {
          num: "№2",
          q: "Какое из перечисленных государств имеет сухопутную границу с Россией?",
          opts: ["Туркменистан", "Казахстан", "Киргизия", "Молдавия"],
          ans: 1,
          exp: "Граница России с Казахстаном — самая длинная непрерывная сухопутная граница в мире (более 7500 км)."
        },
        {
          num: "№3",
          q: "Расположите перечисленные города России в порядке увеличения континентальности климата (с запада на восток): 1) Екатеринбург, 2) Якутск, 3) Смоленск.",
          opts: ["3, 1, 2", "2, 1, 3", "1, 3, 2", "3, 2, 1"],
          ans: 0,
          exp: "В России континентальность климата растёт при движении с запада на восток вглубь материка: Смоленск -> Екатеринбург -> Якутск."
        },
        {
          num: "№4",
          q: "Какой из перечисленных народов России относится к коренным малочисленным народам Севера и Сибири, традиционно занимающимся оленеводством?",
          opts: ["Башкиры", "Ненцы", "Кабардинцы", "Чуваши"],
          ans: 1,
          exp: "Ненцы населяют тундровую зону от Кольского полуострова до Таймыра, их традиционное занятие — кочевое оленеводство."
        },
        {
          num: "№5",
          q: "Какая погода устанавливается при прохождении холодного атмосферного фронта летом?",
          opts: ["Полный штиль и сильная жара", "Резкое похолодание, ливневые дожди, грозы и порывистый ветер", "Затяжные моросящие дожди без ветра", "Ясное небо и повышение давления"],
          ans: 1,
          exp: "Холодный воздух быстро вытесняет тёплый вверх, образуются кучево-дождевые облака, ливни и грозы."
        },
        {
          num: "№13",
          q: "В устье реки Волга солёность воды составляет 2 ‰. Сколько граммов солей содержится в 5 литрах этой воды?",
          opts: ["2 г", "5 г", "10 г", "20 г"],
          ans: 2,
          exp: "2 г/л * 5 л = 10 г растворённых солей."
        },
        {
          num: "№13 (2)",
          q: "Определите температуру воздуха на высоте 3000 м, если у подножия горы она составляет +12 °C.",
          opts: ["0 °C", "-6 °C", "+6 °C", "-18 °C"],
          ans: 1,
          exp: "3000 / 100 = 30. 30 * 0,6 °C = 18 °C. +12 °C - 18 °C = -6 °C."
        },
        {
          num: "№14",
          q: "В каком из перечисленных регионов России наиболее вероятны снежные лавины?",
          opts: ["Кабардино-Балкарская Республика", "Астраханская область", "Республика Калмыкия", "Орловская область"],
          ans: 0,
          exp: "Кабардино-Балкария расположена на крутых склонах Большого Кавказа (здесь находится гора Эльбрус), где высока лавинная опасность."
        },
        {
          num: "№15",
          q: "Какой из перечисленных примеров относится к НЕРАЦИОНАЛЬНОМУ природопользованию?",
          opts: ["Рекультивация земель на месте отработанных карьеров", "Распашка земель вдоль склонов холмов", "Создание лесополос в степной зоне", "Использование оборотного водоснабжения на заводах"],
          ans: 1,
          exp: "Распашка вдоль склонов усиливает сток дождевых и талых вод, что приводит к смыву плодородного слоя и росту оврагов."
        },
        {
          num: "№19",
          q: "Расположите регионы России в порядке встречи Нового года (с востока на запад): 1) Камчатский край, 2) Свердловская область, 3) Республика Карелия.",
          opts: ["1, 2, 3", "3, 2, 1", "1, 3, 2", "2, 1, 3"],
          ans: 0,
          exp: "Камчатский край (самый восток) -> Свердловская область (Урал) -> Республика Карелия (северо-запад)."
        },
        {
          num: "№20",
          q: "Определите регион России по описанию: «Этот край имеет выход к двум морям, граничит с Абхазией и Украиной (по морю). Главная река — Кубань. Лидер России по сбору зерновых, сахарной свёклы и развитию пляжного туризма».",
          opts: ["Краснодарский край", "Приморский край", "Ставропольский край", "Алтайский край"],
          ans: 0,
          exp: "Краснодарский край омывается Чёрным и Азовским морями, по нему протекает река Кубань."
        },
        {
          num: "№24",
          q: "В каком из перечисленных регионов России средняя плотность населения наименьшая?",
          opts: ["Чукотский автономный округ", "Тульская область", "Чувашская Республика", "Белгородская область"],
          ans: 0,
          exp: "Чукотский АО расположен в зоне Крайнего Севера с суровым климатом — плотность населения менее 0,1 чел./км²."
        },
        {
          num: "№25",
          q: "Какой из перечисленных городов России является городом-миллионником?",
          opts: ["Казань", "Тюмень", "Иркутск", "Барнаул"],
          ans: 0,
          exp: "Казань (столица Республики Татарстан) — один из крупнейших городов-миллионников России."
        },
        {
          num: "№26",
          q: "Какой из перечисленных городов России является крупным центром алюминиевой промышленности (благодаря дешёвой энергии ГЭС)?",
          opts: ["Братск", "Курск", "Иваново", "Тула"],
          ans: 0,
          exp: "В Братске (Иркутская область) работает крупнейший алюминиевый завод рядом с мощной Братской ГЭС на реке Ангаре."
        },
        {
          num: "№29",
          q: "Почему на восточных склонах Уральских гор выпадает меньше осадков, чем на западных?",
          opts: ["Западные склоны являются наветренными для влажных воздушных масс с Атлантики", "Восточные склоны ближе к Тихому океану", "На западных склонах дуют сухие пассаты", "Уральские горы выше Гималаев"],
          ans: 0,
          exp: "Западный перенос ветров приносит влагу с Атлантического океана; воздух поднимается по западным склонам Урала и отдаёт осадки."
        }
      ]
    },
    {
      title: "Вариант №3 (Реальные задания ОГЭ прошлых лет)",
      questions: [
        {
          num: "№1",
          q: "Какой из перечисленных проливов соединяет два океана и разделяет два материка?",
          opts: ["Берингов", "Гибралтарский", "Мозамбикский", "Ла-Манш"],
          ans: 0,
          exp: "Берингов пролив соединяет Тихий и Северный Ледовитый океаны, разделяя Евразию и Северную Америку."
        },
        {
          num: "№2",
          q: "Какая крайняя точка России является самой северной материковой точкой страны и всей Евразии?",
          opts: ["Мыс Дежнёва", "Мыс Челюскин", "Мыс Флигели", "Гора Базардюзю"],
          ans: 1,
          exp: "Мыс Челюскин на полуострове Таймыр — крайняя северная материковая точка России. Мыс Флигели — островная."
        },
        {
          num: "№3",
          q: "Расположите перечисленные города России в порядке увеличения продолжительности светового дня 22 июня (с юга на север): 1) Мурманск, 2) Астрахань, 3) Москва.",
          opts: ["2, 3, 1", "1, 3, 2", "3, 2, 1", "2, 1, 3"],
          ans: 0,
          exp: "22 июня (день летнего солнцестояния) продолжительность дня увеличивается с юга на север: Астрахань -> Москва -> Мурманск (полярный день)."
        },
        {
          num: "№4",
          q: "В каком из перечисленных регионов России находится объект Всемирного наследия ЮНЕСКО «Золотые горы Алтая»?",
          opts: ["Республика Алтай", "Республика Бурятия", "Забайкальский край", "Кемеровская область"],
          ans: 0,
          exp: "Природный комплекс «Золотые горы Алтая» (включая Телецкое озеро и гору Белуха) находится в Республике Алтай."
        },
        {
          num: "№5",
          q: "Какой буквой на синоптической карте обозначается центр области низкого атмосферного давления (циклон)?",
          opts: ["В", "Н", "Т", "Х"],
          ans: 1,
          exp: "Буквой «Н» обозначается область низкого давления — циклон, приносящий пасмурную погоду с осадками."
        },
        {
          num: "№13",
          q: "В регионе проживает 2 000 000 человек, из них 1 500 000 — в городах. Определите долю городского населения (в %).",
          opts: ["50 %", "65 %", "75 %", "80 %"],
          ans: 2,
          exp: "(1 500 000 / 2 000 000) * 100 % = 75 %."
        },
        {
          num: "№13 (2)",
          q: "Солёность воды в Красном море составляет 42 ‰. Сколько граммов солей содержится в 2 литрах этой воды?",
          opts: ["42 г", "84 г", "21 г", "63 г"],
          ans: 1,
          exp: "42 г/л * 2 л = 84 г солей (Красное море — самое солёное море Мирового океана)."
        },
        {
          num: "№14",
          q: "Для какого из перечисленных регионов России наиболее характерны частые засухи и суховеи?",
          opts: ["Республика Калмыкия", "Ленинградская область", "Архангельская область", "Приморский край"],
          ans: 0,
          exp: "Республика Калмыкия расположена в зонах сухих степей и полупустынь Прикаспийской низменности."
        },
        {
          num: "№15",
          q: "Какой из перечисленных видов электростанций использует неисчерпаемый источник энергии и не загрязняет атмосферу выбросами?",
          opts: ["Тепловая (ТЭС)", "Приливная (ПЭС)", "Атомная (АЭС)", "Газотурбинная"],
          ans: 1,
          exp: "Приливная электростанция (ПЭС, например Кислогубская в Мурманской области) использует энергию морских приливов."
        },
        {
          num: "№19",
          q: "Расположите регионы России в порядке встречи Нового года (с востока на запад): 1) Приморский край, 2) Красноярский край, 3) Воронежская область.",
          opts: ["1, 2, 3", "3, 2, 1", "2, 1, 3", "1, 3, 2"],
          ans: 0,
          exp: "Приморский край -> Красноярский край -> Воронежская область."
        },
        {
          num: "№20",
          q: "Определите регион России по описанию: «Эта область расположена за Северным полярным кругом, омывается Баренцевым и Белым морями. Здесь находится крупнейший незамерзающий порт Севера и добывают апатито-нефелиновые руды в Хибинах».",
          opts: ["Мурманская область", "Архангельская область", "Республика Карелия", "Магаданская область"],
          ans: 0,
          exp: "Мурманская область расположена на Кольском полуострове (Хибины, порт Мурманск)."
        },
        {
          num: "№24",
          q: "В каком из перечисленных регионов России доля городского населения наибольшая?",
          opts: ["Мурманская область", "Республика Алтай", "Чеченская Республика", "Республика Дагестан"],
          ans: 0,
          exp: "В северных промышленных регионах (Мурманская, Магаданская области) доля городского населения превышает 90 %."
        },
        {
          num: "№25",
          q: "Расположите перечисленные города России в порядке уменьшения численности населения (от самого крупного к самому маленькому): 1) Екатеринбург, 2) Калининград, 3) Анадырь.",
          opts: ["1, 2, 3", "3, 2, 1", "2, 1, 3", "1, 3, 2"],
          ans: 0,
          exp: "Екатеринбург (~1,5 млн) -> Калининград (~490 тыс.) -> Анадырь (~13 тыс.)."
        },
        {
          num: "№26",
          q: "Какой из перечисленных городов России является крупнейшим центром автомобилестроения в Поволжье?",
          opts: ["Тольятти", "Астрахань", "Саратов", "Пенза"],
          ans: 0,
          exp: "В Тольятти (Самарская область) расположен крупнейший в России завод легковых автомобилей АВТОВАЗ."
        },
        {
          num: "№29",
          q: "Почему в районе экватора в течение всего года выпадает большое количество осадков?",
          opts: ["Из-за преобладания восходящих потоков тёплого влажного воздуха и низкого давления", "Из-за холодных океанических течений", "Из-за высокого атмосферного давления", "Из-за близости полярных льдов"],
          ans: 0,
          exp: "На экваторе солнце в зените сильно нагревает поверхность, тёплый воздух поднимается вверх, охлаждается и образует мощные дождевые облака."
        }
      ]
    }
  ];

  var state = {
    variantIdx: 0,
    answers: {},
    submitted: false,
    seconds: 0,
    timerId: null
  };

  function getGrade(score) {
    if (score >= 13) return { grade: "5", label: "Отлично! Настоящий уровень сдачи ОГЭ", color: "#22c55e" };
    if (score >= 10) return { grade: "4", label: "Хорошо! Уверенный результат", color: "#38bdf8" };
    if (score >= 6) return { grade: "3", label: "Удовлетворительно (порог пройден)", color: "#f59e0b" };
    return { grade: "2", label: "Ниже порога — нужно потренировать теорию", color: "#ef4444" };
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function startTimer() {
    if (state.timerId) clearInterval(state.timerId);
    state.seconds = 0;
    state.timerId = setInterval(function() {
      if (state.submitted) {
        clearInterval(state.timerId);
        return;
      }
      state.seconds++;
      var el = document.getElementById("gc-exam-timer");
      if (el) el.textContent = formatTime(state.seconds);
    }, 1000);
  }

  function pickRandomVariant() {
    var next = Math.floor(Math.random() * VARIANTS.length);
    if (VARIANTS.length > 1 && next === state.variantIdx) {
      next = (next + 1) % VARIANTS.length;
    }
    state.variantIdx = next;
    state.answers = {};
    state.submitted = false;
    renderExam();
    startTimer();
  }

  function selectOpt(qIdx, optIdx) {
    if (state.submitted) return;
    state.answers[qIdx] = optIdx;
    renderExam();
  }

  function submitExam() {
    state.submitted = true;
    if (state.timerId) clearInterval(state.timerId);
    renderExam();
    var container = document.getElementById("gc-exam-panel");
    if (container) container.scrollTop = 0;
  }

  function renderExam() {
    var panel = document.getElementById("gc-exam-panel");
    if (!panel) return;
    var variant = VARIANTS[state.variantIdx];
    var total = variant.questions.length;
    var answeredCount = Object.keys(state.answers).length;

    var html = '<div style="padding:16px; max-width:720px; margin:0 auto; color:#f8fafc; font-family:system-ui,-apple-system,sans-serif;">';

    html += '<div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:10px; background:#1e293b; border:1px solid #334155; border-radius:14px; padding:14px 16px; margin-bottom:16px;">';
    html += '<div><div style="font-size:18px; font-weight:700;">📝 ' + variant.title + '</div>';
    html += '<div style="font-size:13px; color:#94a3b8; margin-top:2px;">Реальные задания ФИПИ прошлых лет • ' + total + ' вопросов</div></div>';
    html += '<div style="display:flex; align-items:center; gap:8px;">';
    html += '<span style="background:#0f172a; border:1px solid #334155; padding:6px 10px; border-radius:8px; font-weight:600; font-size:14px;">⏱ <span id="gc-exam-timer">' + formatTime(state.seconds) + '</span></span>';
    html += '<button id="gc-new-variant-btn" style="background:#3b82f6; color:#fff; border:none; padding:8px 12px; border-radius:8px; font-weight:600; cursor:pointer; font-size:13px;">🎲 Другой вариант</button>';
    html += '</div></div>';

    if (state.submitted) {
      var score = 0;
      for (var i = 0; i < total; i++) {
        if (state.answers[i] === variant.questions[i].ans) score++;
      }
      var res = getGrade(score);
      html += '<div style="background:linear-gradient(135deg,#1e293b,#0f172a); border:2px solid ' + res.color + '; border-radius:16px; padding:18px; margin-bottom:18px; text-align:center;">';
      html += '<div style="font-size:14px; color:#94a3b8; text-transform:uppercase; letter-spacing:0.5px;">Результат экзамена</div>';
      html += '<div style="font-size:42px; font-weight:800; color:' + res.color + '; margin:6px 0;">Оценка: ' + res.grade + '</div>';
      html += '<div style="font-size:16px; font-weight:600; margin-bottom:4px;">Верно: ' + score + ' из ' + total + ' баллов • Время: ' + formatTime(state.seconds) + '</div>';
      html += '<div style="font-size:14px; color:#cbd5e1; margin-bottom:14px;">' + res.label + '</div>';
      html += '<button id="gc-retry-variant-btn" style="background:' + res.color + '; color:#0f172a; border:none; padding:10px 18px; border-radius:10px; font-weight:700; cursor:pointer; font-size:14px;">🔄 Пройти новый случайный вариант</button>';
      html += '</div>';
    }

    for (var qIdx = 0; qIdx < total; qIdx++) {
      var item = variant.questions[qIdx];
      var userAns = state.answers[qIdx];
      var cardBorder = "#334155";
      if (state.submitted) {
        cardBorder = (userAns === item.ans) ? "#22c55e" : "#ef4444";
      }

      html += '<div style="background:#1e293b; border:1px solid ' + cardBorder + '; border-radius:14px; padding:14px 16px; margin-bottom:14px;">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">';
      html += '<span style="background:#0f172a; color:#38bdf8; font-weight:700; font-size:12px; padding:4px 8px; border-radius:6px;">Задание ' + item.num + '</span>';
      if (state.submitted) {
        html += (userAns === item.ans)
          ? '<span style="color:#22c55e; font-weight:700; font-size:13px;">✅ +1 балл</span>'
          : '<span style="color:#ef4444; font-weight:700; font-size:13px;">❌ 0 баллов</span>';
      }
      html += '</div>';

      html += '<div style="font-size:15px; line-height:1.45; margin-bottom:12px; font-weight:500;">' + item.q + '</div>';

      for (var oIdx = 0; oIdx < item.opts.length; oIdx++) {
        var bg = "#0f172a";
        var border = "#334155";
        var textColor = "#e2e8f0";

        if (!state.submitted) {
          if (userAns === oIdx) {
            bg = "#1d4ed8";
            border = "#60a5fa";
            textColor = "#ffffff";
          }
        } else {
          if (oIdx === item.ans) {
            bg = "rgba(34,197,94,0.2)";
            border = "#22c55e";
            textColor = "#86efac";
          } else if (userAns === oIdx && userAns !== item.ans) {
            bg = "rgba(239,68,68,0.2)";
            border = "#ef4444";
            textColor = "#fca5a5";
          }
        }

        html += '<div data-q="' + qIdx + '" data-o="' + oIdx + '" class="gc-exam-opt" style="background:' + bg + '; border:1px solid ' + border + '; color:' + textColor + '; border-radius:10px; padding:10px 12px; margin-bottom:8px; cursor:' + (state.submitted ? "default" : "pointer") + '; font-size:14px; transition:0.15s;">';
        html += '<b>' + (oIdx + 1) + ')</b> ' + item.opts[oIdx];
        html += '</div>';
      }

      if (state.submitted) {
        html += '<div style="margin-top:8px; padding:10px 12px; background:#0f172a; border-left:3px solid #38bdf8; border-radius:6px; font-size:13px; color:#cbd5e1;">';
        html += '💡 <b>Разбор:</b> ' + item.exp;
        html += '</div>';
      }

      html += '</div>';
    }

    if (!state.submitted) {
      html += '<div style="position:sticky; bottom:12px; background:#0f172a; border:1px solid #334155; border-radius:14px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 8px 24px rgba(0,0,0,0.5);">';
      html += '<div style="font-size:13px; color:#94a3b8;">Отвечено: <b style="color:#fff;">' + answeredCount + ' / ' + total + '</b></div>';
      html += '<button id="gc-submit-exam-btn" style="background:#22c55e; color:#0f172a; border:none; padding:10px 20px; border-radius:10px; font-weight:800; cursor:pointer; font-size:14px;">✅ Сдать вариант</button>';
      html += '</div>';
    }

    html += '<div style="height:70px;"></div></div>';
    panel.innerHTML = html;

    var optEls = panel.querySelectorAll(".gc-exam-opt");
    for (var k = 0; k < optEls.length; k++) {
      optEls[k].onclick = function() {
        var q = parseInt(this.getAttribute("data-q"), 10);
        var o = parseInt(this.getAttribute("data-o"), 10);
        selectOpt(q, o);
      };
    }

    var newBtn = document.getElementById("gc-new-variant-btn");
    if (newBtn) newBtn.onclick = pickRandomVariant;

    var retryBtn = document.getElementById("gc-retry-variant-btn");
    if (retryBtn) retryBtn.onclick = pickRandomVariant;

    var submitBtn = document.getElementById("gc-submit-exam-btn");
    if (submitBtn) submitBtn.onclick = submitExam;
  }

  function openExamTab() {
    var existing = document.getElementById("gc-exam-overlay");
    if (!existing) {
      existing = document.createElement("div");
      existing.id = "gc-exam-overlay";
      existing.style.cssText = "position:fixed; inset:0; background:#0f172a; z-index:9998; display:flex; flex-direction:column;";

      var topBar = document.createElement("div");
      topBar.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:12px 16px; background:#1e293b; border-bottom:1px solid #334155; color:#fff;";
      topBar.innerHTML = '<span style="font-weight:800; font-size:16px;">📝 GeoCore v3.3 • Пробник ОГЭ</span>';

      var closeBtn = document.createElement("button");
      closeBtn.textContent = "✕ Назад в приложение";
      closeBtn.style.cssText = "background:#334155; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-weight:600; cursor:pointer; font-size:13px;";
      closeBtn.onclick = function() {
        existing.style.display = "none";
      };
      topBar.appendChild(closeBtn);

      var panel = document.createElement("div");
      panel.id = "gc-exam-panel";
      panel.style.cssText = "flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch;";

      existing.appendChild(topBar);
      existing.appendChild(panel);
      document.body.appendChild(existing);

      pickRandomVariant();
    } else {
      existing.style.display = "flex";
    }
  }

  function injectExamButton() {
    if (document.getElementById("gc-nav-exam-btn")) return;

    var nav = document.querySelector("nav, .bottom-nav, #bottomNav, .nav-bar, .tabs");
    if (!nav) {
      var btns = document.querySelectorAll("button");
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].parentElement && btns[i].parentElement.children.length >= 4) {
          nav = btns[i].parentElement;
          break;
        }
      }
    }

    var btn = document.createElement("button");
    btn.id = "gc-nav-exam-btn";
    btn.innerHTML = "📝<br><span style='font-size:10px;'>Экзамен</span>";
    btn.onclick = openExamTab;

    if (nav) {
      btn.style.cssText = "background:transparent; border:none; color:#38bdf8; font-weight:700; cursor:pointer; padding:4px 6px; line-height:1.1; flex:1;";
      nav.appendChild(btn);
    } else {
      btn.innerHTML = "📝 Экзамен ОГЭ";
      btn.style.cssText = "position:fixed; bottom:74px; right:14px; z-index:9990; background:#2563eb; color:#fff; border:none; border-radius:999px; padding:10px 16px; font-weight:700; font-size:13px; box-shadow:0 4px 14px rgba(0,0,0,0.4); cursor:pointer;";
      document.body.appendChild(btn);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectExamButton);
  } else {
    injectExamButton();
  }
  setTimeout(injectExamButton, 800);
})();
