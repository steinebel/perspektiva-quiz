// Викторина «Перспектива» — банк вопросов
// Типы: "bags" | "order" | "select" | "remove"
// Уровни: 1 = Распределить, 2 = Упорядочить, 3 = Выбрать, 4 = Убрать лишнее

const QUESTIONS = [

  // ══════════════════════════════════════════
  // УРОВЕНЬ 1 — ТИП «bags» (вопросы 1–10)
  // ══════════════════════════════════════════

  {
    id: 1,
    type: "bags",
    level: 1,
    title: "Диагностика I–II vs III–IV стадии НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Диагностика I–II стадии НМРЛ" },
    bagB: { label: "Диагностика III–IV стадии НМРЛ" },
    cards: [
      { id: "c1", text: "КТ органов грудной клетки с контрастированием", correct: "A" },
      { id: "c2", text: "Функция внешнего дыхания / объём форсированного выдоха за 1 сек", correct: "A" },
      { id: "c3", text: "Экспрессия PD-L1", correct: "B" },
      { id: "c4", text: "МРТ головного мозга", correct: "B" },
      { id: "c5", text: "ПЭТ-КТ", correct: "B" },
      { id: "c6", text: "Биопсия опухоли", correct: "B" }
    ]
  },

  {
    id: 2,
    type: "bags",
    level: 1,
    title: "Биомаркеры при II–III стадии НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Обязательные биомаркеры для II–III стадии" },
    bagB: { label: "Возможные биомаркеры для II–III стадии" },
    cards: [
      { id: "c1", text: "Мутация EGFR [делеция в 19-ом экзоне / замена L858R в 21-ом экзоне]", correct: "A" },
      { id: "c2", text: "Транслокация ALK", correct: "A" },
      { id: "c3", text: "Транслокация ROS1", correct: "A" },
      { id: "c4", text: "Экспрессия PD-L1", correct: "A" },
      { id: "c5", text: "Мутация BRAF V600E", correct: "B" },
      { id: "c6", text: "Транслокация RET", correct: "B" },
      { id: "c7", text: "Мутация KRAS", correct: "B" }
    ]
  },

  {
    id: 3,
    type: "bags",
    level: 1,
    title: "Неоадъювантная vs адъювантная терапия НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Неоадъювантная терапия IIIA N2 стадии НМРЛ" },
    bagB: { label: "Адъювантная терапия после операции II стадии НМРЛ" },
    cards: [
      { id: "c1", text: "Ниволумаб + химиотерапия (3 цикла)", correct: "A" },
      { id: "c2", text: "Осимертиниб (при EGFRm)", correct: "B" },
      { id: "c3", text: "Пембролизумаб + химиотерапия", correct: "A" },
      { id: "c4", text: "Атезолизумаб (при PD-L1≥50%)", correct: "B" }
    ]
  },

  {
    id: 4,
    type: "bags",
    level: 1,
    title: "ХЛТ при III стадии НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "ХЛТ при III стадии [ECOG 0–1]" },
    bagB: { label: "ХЛТ при III стадии [ECOG 2]" },
    cards: [
      { id: "c1", text: "Одновременная химиотерапия (цисплатин + этопозид)", correct: "A" },
      { id: "c2", text: "Паклитаксел + карбоплатин", correct: "A" },
      { id: "c3", text: "Лучевая терапия в 60 Грей", correct: "B" },
      { id: "c4", text: "Дурвалумаб", correct: "A" }
    ]
  },

  {
    id: 5,
    type: "select",
    level: 1,
    title: "Оптимальная терапия неоперабельного НМРЛ T1-2N0 [IA3–IIA стадии]",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "ХЛТ", correct: false },
      { id: "o2", text: "Стереотаксическая ЛТ 48–60 Гр / 4–5 фракций", correct: true },
      { id: "o3", text: "Химиотерапия в монорежиме", correct: false }
    ]
  },

  {
    id: 6,
    type: "bags",
    level: 1,
    title: "Поддерживающая vs адъювантная терапия после ХЛТ и хирургии",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Поддерживающая иммунотерапия неоперабельного НМРЛ после ХЛТ" },
    bagB: { label: "Адъювантная терапия после хирургического лечения" },
    cards: [
      { id: "c1", text: "Дурвалумаб (на 1 год)", correct: "A" },
      { id: "c2", text: "Осимертиниб (при EGFRm на 3 года)", correct: "B" },
      { id: "c3", text: "Атезолизумаб (при PD-L1≥50% на 1 год)", correct: "B" }
    ]
  },

  {
    id: 7,
    type: "bags",
    level: 1,
    title: "Диагностические обследования при I vs IV стадии НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Диагностические обследования при I стадии НМРЛ" },
    bagB: { label: "Диагностические обследования при IV стадии НМРЛ" },
    cards: [
      { id: "c1", text: "Рентгенография органов грудной клетки", correct: "A" },
      { id: "c2", text: "УЗИ брюшной полости", correct: "B" },
      { id: "c3", text: "МРТ головного мозга", correct: "B" },
      { id: "c4", text: "ПЭТ-КТ метастазов", correct: "B" }
    ]
  },

  {
    id: 8,
    type: "bags",
    level: 1,
    title: "Режимы химиотерапии при НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Режимы ХТ при плоскоклеточном НМРЛ" },
    bagB: { label: "Режимы ХТ при неплоскоклеточном НМРЛ" },
    cards: [
      { id: "c1", text: "Цисплатин + гемцитабин", correct: "A" },
      { id: "c2", text: "Пеметрексед + цисплатин", correct: "B" },
      { id: "c3", text: "Паклитаксел + карбоплатин", correct: "B" }
    ]
  },

  {
    id: 9,
    type: "bags",
    level: 1,
    title: "Зарегистрированные показания для EGFRm vs EGFRwt НМРЛ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Зарегистрированные показания для EGFRm НМРЛ" },
    bagB: { label: "Зарегистрированные показания для EGFRwt НМРЛ" },
    cards: [
      { id: "c1", text: "Датопотамаб дерукстекан (после ИТК EGFR и пХТ)", correct: "A" },
      { id: "c2", text: "Осимертиниб в адъювантном режиме", correct: "A" },
      { id: "c3", text: "Дурвалумаб при III стадии после ХЛТ", correct: "B" },
      { id: "c4", text: "Осимертиниб при III стадии после ХЛТ", correct: "A" }
    ]
  },

  {
    id: 10,
    type: "bags",
    level: 1,
    title: "Противопоказания vs показания к ХЛТ",
    hint: "Перетаскивайте варианты в корзину А или Б",
    timeLimit: 60,
    bagA: { label: "Противопоказания к ХЛТ" },
    bagB: { label: "Показания к ХЛТ" },
    cards: [
      { id: "c1", text: "ECOG 2", correct: "A" },
      { id: "c2", text: "Инвазия сосудов", correct: "A" },
      { id: "c3", text: "Распад опухоли", correct: "A" },
      { id: "c4", text: "ECOG 0–1", correct: "B" },
      { id: "c5", text: "Неоперабельный НМРЛ III стадии", correct: "B" }
    ]
  },

  // ══════════════════════════════════════════
  // УРОВЕНЬ 2 — ТИП «order» (вопросы 11–15)
  // ══════════════════════════════════════════

  {
    id: 11,
    type: "order",
    level: 2,
    title: "Путь пациента при подозрении на I стадию рака лёгкого",
    hint: "Расставьте шаги в правильном порядке",
    timeLimit: 60,
    items: [
      { id: "i1", text: "Рентгенография органов грудной клетки", correctPosition: 1 },
      { id: "i2", text: "КТ органов грудной клетки с контрастированием", correctPosition: 2 },
      { id: "i3", text: "Фибробронхоскопия", correctPosition: 3 },
      { id: "i4", text: "Оценка функции внешнего дыхания / ФВД за 1 сек", correctPosition: 4 },
      { id: "i5", text: "Биопсия + МГИ на определение мутации EGFR, транслокации ALK", correctPosition: 5 }
    ]
  },

  {
    id: 12,
    type: "order",
    level: 2,
    title: "Путь пациента для неоадъювантной терапии IIIA N2 стадии НМРЛ",
    hint: "Расставьте шаги в правильном порядке",
    timeLimit: 60,
    items: [
      { id: "i1", text: "Подтверждение N2 (эндобронхиальный ультразвук / медиастиноскопия)", correctPosition: 1 },
      { id: "i2", text: "Неоадъювантная ХТ + иммунотерапия (пембролизумаб + ХТ 4 цикла)", correctPosition: 2 },
      { id: "i3", text: "Операция (3–8 недель после)", correctPosition: 3 },
      { id: "i4", text: "Адъювантная иммунотерапия", correctPosition: 4 }
    ]
  },

  {
    id: 13,
    type: "order",
    level: 2,
    title: "Путь пациента для неоперабельного НМРЛ III стадии",
    hint: "Расставьте шаги в правильном порядке",
    timeLimit: 60,
    items: [
      { id: "i1", text: "Одновременная химиотерапия (паклитаксел + карбоплатин)", correctPosition: 1 },
      { id: "i2", text: "Стандартный режим лучевой терапии 60 Грей", correctPosition: 2 },
      { id: "i3", text: "КТ для контроля прогрессирования после ХЛТ", correctPosition: 3 },
      { id: "i4", text: "Поддерживающая терапия дурвалумабом", correctPosition: 4 }
    ]
  },

  {
    id: 14,
    type: "order",
    level: 2,
    title: "Диагностика биомаркеров при IV стадии НМРЛ",
    hint: "Расставьте шаги в правильном порядке",
    timeLimit: 60,
    items: [
      { id: "i1", text: "Биопсия", correctPosition: 1 },
      { id: "i2", text: "EGFR", correctPosition: 2 },
      { id: "i3", text: "ALK / ROS1", correctPosition: 3 },
      { id: "i4", text: "PD-L1", correctPosition: 4 },
      { id: "i5", text: "BRAF V600E", correctPosition: 5 }
    ]
  },

  {
    id: 15,
    type: "order",
    level: 2,
    title: "Адъювантная терапия II стадии EGFRm НМРЛ после R0 резекции",
    hint: "Расставьте шаги в правильном порядке",
    timeLimit: 60,
    items: [
      { id: "i1", text: "Операция R0", correctPosition: 1 },
      { id: "i2", text: "МГИ на определение мутации в гене EGFR", correctPosition: 2 },
      { id: "i3", text: "Осимертиниб 80 мг/сутки на 3 года", correctPosition: 3 }
    ]
  },

  // ══════════════════════════════════════════
  // УРОВЕНЬ 3 — ТИП «select» (вопросы 16–20)
  // ══════════════════════════════════════════

  {
    id: 16,
    type: "select",
    level: 3,
    title: "Оптимальная терапия неоперабельного НМРЛ I стадии [T1N0M0]",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "ХЛТ", correct: false },
      { id: "o2", text: "Стереотаксическая лучевая терапия 20 Грей / 3 фракции", correct: true },
      { id: "o3", text: "Химиотерапия в монорежиме", correct: false }
    ]
  },

  {
    id: 17,
    type: "select",
    level: 3,
    title: "Адъювантная терапия II стадии НМРЛ без активирующих мутаций после R0 резекции",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "Осимертиниб", correct: false },
      { id: "o2", text: "Химиотерапия 4 цикла + атезолизумаб (при PD-L1≥50%)", correct: true },
      { id: "o3", text: "Лучевая терапия", correct: false }
    ]
  },

  {
    id: 18,
    type: "select",
    level: 3,
    title: "Поддерживающая терапия после ХЛТ при неоперабельном EGFRm НМРЛ III стадии",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "Дурвалумаб", correct: false },
      { id: "o2", text: "Осимертиниб", correct: true },
      { id: "o3", text: "Пембролизумаб", correct: false }
    ]
  },

  {
    id: 19,
    type: "select",
    level: 3,
    title: "Показание датопотамаба дерукстекана в раке лёгкого",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "Стадия I", correct: false },
      { id: "o2", text: "EGFRm НМРЛ после исчерпанных опций ИТК EGFR и химиотерапии", correct: true },
      { id: "o3", text: "НМРЛ с экспрессией TROP2", correct: false }
    ]
  },

  {
    id: 20,
    type: "select",
    level: 3,
    title: "Обязательный к определению биомаркер при II стадии НМРЛ",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "Транслокация RET", correct: false },
      { id: "o2", text: "Мутация в гене EGFR и транслокация ALK", correct: true },
      { id: "o3", text: "Транслокация NTRK", correct: false }
    ]
  },

  // MISSING 21-25

  // ══════════════════════════════════════════
  // УРОВЕНЬ 4 — ТИП «remove» / «select» (вопросы 26–32)
  // ══════════════════════════════════════════

  {
    id: 26,
    type: "remove",
    level: 4,
    title: "Объём диагностических обследований при I стадии НМРЛ",
    hint: "Нажмите на лишний элемент",
    timeLimit: 60,
    items: [
      { id: "r1", text: "КТ органов грудной клетки", isWrong: false },
      { id: "r2", text: "Функция внешнего дыхания", isWrong: false },
      { id: "r3", text: "МРТ головного мозга", isWrong: false },
      { id: "r4", text: "Биопсия опухоли", isWrong: false },
      { id: "r5", text: "ПЭТ-КТ", isWrong: true }
    ]
  },

  {
    id: 27,
    type: "select",
    level: 4,
    title: "Обязательное обследование при подозрении на IIIA стадию [T2N2M0], ПЭТ-КТ SUV > 2.5 в медиастинальных л/у",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "EBUS-TBNA или EBUS-EUS для подтверждения", correct: true },
      { id: "o2", text: "Только КТ грудного отдела с контрастированием", correct: false },
      { id: "o3", text: "ПЭТ-КТ без инвазивной верификации", correct: false },
      { id: "o4", text: "МРТ лёгких для оценки T-статуса", correct: false }
    ]
  },

  {
    id: 28,
    type: "remove",
    level: 4,
    title: "Что исключают диагностические рекомендации при центральном расположении опухоли и плевральном выпоте?",
    hint: "Нажмите на лишний элемент",
    timeLimit: 60,
    items: [
      { id: "r1", text: "Торакоцентез + цитология", isWrong: false },
      { id: "r2", text: "Бронхоскопия + биопсия", isWrong: false },
      { id: "r3", text: "Остеосцинтиграфия", isWrong: true },
      { id: "r4", text: "КТ ОГК с контрастированием", isWrong: false }
    ]
  },

  {
    id: 29,
    type: "remove",
    level: 4,
    title: "Лишний шаг при подозрении на поражение N2 при ПЭТ-КТ, но отрицательных результатах EBUS",
    hint: "Нажмите на лишний элемент",
    timeLimit: 60,
    items: [
      { id: "r1", text: "Видео-медиастиноскопия", isWrong: false },
      { id: "r2", text: "Повтор EBUS", isWrong: false },
      { id: "r3", text: "Хирургия без подтверждения", isWrong: true }
    ]
  },

  {
    id: 30,
    type: "select",
    level: 4,
    title: "Где найти информацию от экспертов о ведении пациентов по их конкретному профилю?",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "Онкологический навигатор НООП", correct: false },
      { id: "o2", text: "Официальный сайт RUSSCO", correct: false },
      { id: "o3", text: "Платформа для специалистов здравоохранения PROPAK ЛЁГКОГО", correct: true }
    ]
  },

  {
    id: 31,
    type: "select",
    level: 4,
    title: "Сколько лет серии мероприятий ПЕРСПЕКТИВА?",
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "4 года", correct: false },
      { id: "o2", text: "5 лет", correct: false },
      { id: "o3", text: "6 лет", correct: true }
    ]
  },

  {
    id: 32,
    type: "select",
    level: 4,
    title: 'Почему название серии мероприятий в 2026 году — «ПЕРСПЕКТИВА ВО ВСЁМ»?',
    hint: "Выберите один правильный ответ",
    timeLimit: 60,
    options: [
      { id: "o1", text: "Терапия рака лёгкого охватывает все этапы от диагностики до лечения", correct: false },
      { id: "o2", text: "Портфель AZ предоставляет инновационные опции терапии во всех направлениях рака лёгкого", correct: true }
    ]
  }

];
