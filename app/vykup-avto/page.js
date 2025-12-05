// my-app/app/vykup-avto/page.js

import Image from "next/image";
import phoneNumbers from "@/config/config";
import VykupArticle from "@/components/Articles/VykupArticle";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

const keywords = [
  "купим авто",
  "выкуп авто минск",
  "выкуп авто",
  "срочный выкуп авто",
  "срочный выкуп автомобилей",
  "выкуп аварийных авто",
  "продать авто быстро",
  "скупка авто минск",
  "выкуп авто в минске",
  "автовыкуп в минске",
  "выкуп авто после дтп",
  "выкуп авто в любом состоянии",
  "срочный выкуп авто в минске",
  "автовыкуп минск",
  "срочный выкуп авто минск",
  "выкуп авто с выездом",
  "выкуп авто срочно",
  "срочно продать автомобиль",
  "выкуп б у авто",
  "автовыкуп",
  "продать авто срочно",
  "авто на выкуп минск",
  "скупка авто",
];

export const metadata = {
  title: "Срочный выкуп авто в Минске и Минской области | Автосалон «на ул.Куйбышева 40»",
  description:
    "Купим авто в Минске и Минской области срочно и по рыночной стоимости. Выкуп авто в любом состоянии, после ДТП, с пробегом. Бесплатный выезд оценщика, оформление за 30 минут и оплата на месте.",
  keywords,
  alternates: {
    canonical: `${SITE_URL}/vykup-avto/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/vykup-avto/`,
    title:
      "Срочный выкуп авто в Минске и области — купим ваш автомобиль за 1 визит | на ул.Куйбышева 40",
    description:
      "Срочный выкуп автомобилей в Минске: купим авто в любом состоянии, после ДТП, на ходу и без. Выезд оценщика, честная оценка, оформление и оплата за один день.",
    images: [
      {
        url: `${SITE_URL}/fon/vykup-hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Срочный выкуп авто в Минске — автосалон на ул.Куйбышева 40, крытая парковка с автомобилями",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Срочный выкуп авто в Минске — купим авто быстро и по рыночной цене | на ул.Куйбышева 40",
    description:
      "Хотите срочно продать автомобиль? Автовыкуп в Минске от на ул.Куйбышева 40: выезд оценщика, честная цена, оформление договора и оплата на месте.",
    images: [`${SITE_URL}/fon/vykup-hero-desktop.webp`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Автосалон на ул.Куйбышева 40 — выкуп авто в Минске",
  url: `${SITE_URL}/vykup-avto/`,
  image: `${SITE_URL}/fon/vykup-hero-desktop.webp`,
  telephone: phoneNumbers.mainPhone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BY",
    addressLocality: "Минск",
    streetAddress: "ул. Куйбышева 40, паркинг 4 этаж",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Минск",
    },
    {
      "@type": "AdministrativeArea",
      name: "Минская область",
    },
  ],
  makesOffer: {
    "@type": "Offer",
    name: "Срочный выкуп авто в Минске",
    description:
      "Купим авто в любом состоянии: целые, после ДТП, с проблемными документами, кредитные. Срочный автовыкуп с выездом оценщика и оплатой на месте.",
  },
};

// ===== СЕКЦИЯ: как проходит выкуп авто =====

const VykupStepsSection = () => {
  const phone = phoneNumbers.mainPhone;
  const phoneLink = phoneNumbers.mainPhoneLink;

  return (
    <section className="container mx-auto mt-12 sd:mt-16">
      <div className="grid gap-8 sd:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-stretch">
        <article className="bg-white/95 text-[#222222] rounded-[28px] px-5 sd:px-8 py-8 sd:py-10 shadow-[0_22px_60px_rgba(0,0,0,0.55)]">
          <h2 className="text-[24px] sd:text-[30px] font-semibold mb-4">
            Как проходит выкуп авто в Минске
          </h2>
          <p className="text-sm sd:text-base text-[#444444] mb-5">
            Мы сделали процесс автовыкупа максимально простым. Вам не нужно
            заниматься продажей самостоятельно, размещать объявления и
            встречаться с незнакомыми покупателями. Всё, что требуется — связаться
            с нами и договориться о выезде оценщика или визите в автосалон.
          </p>

          <div className="space-y-5">
            <div className="flex gap-3">
              <div className="mt-1 max-h-10 min-w-10 rounded-2xl bg-[#03481E] text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="text-base sd:text-lg font-semibold">
                  Заявка: звонок или онлайн-обращение
                </h3>
                <p className="text-sm text-[#555555] mt-1">
                  Вы оставляете заявку на выкуп авто по телефону{" "}
                  <a
                    href={`tel:${phoneLink}`}
                    className="font-semibold text-[#03481E]"
                  >
                    {phone}
                  </a>{" "}
                  или приезжаете в наш автосалон в Минске. Менеджер задаёт
                  несколько вопросов: марка, год, пробег, состояние, есть ли
                  ДТП.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 max-h-10 min-w-10 rounded-2xl bg-[#03481E] text-white flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="text-base sd:text-lg font-semibold">
                  Предварительная оценка по телефону
                </h3>
                <p className="text-sm text-[#555555] mt-1">
                  На основе информации о вашем автомобиле мы озвучиваем
                  предварительный диапазон выкупной цены и согласовываем
                  удобное время осмотра — в автосалоне или с выездом оценщика.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 max-h-10 min-w-10 rounded-2xl bg-[#03481E] text-white flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="text-base sd:text-lg font-semibold">
                  Осмотр авто и финальная стоимость
                </h3>
                <p className="text-sm text-[#555555] mt-1">
                  Специалист проводит осмотр кузова, салона, технического
                  состояния и документов. Осмотр занимает примерно 30 минут,
                  после чего мы называем итоговую цену выкупа авто.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 max-h-10 min-w-10 rounded-2xl bg-[#03481E] text-white flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <div>
                <h3 className="text-base sd:text-lg font-semibold">
                  Оформление договора купли-продажи
                </h3>
                <p className="text-sm text-[#555555] mt-1">
                  При согласии с ценой мы готовим договор купли-продажи и
                  необходимые документы. Юридическое сопровождение полностью на
                  нас — вы получаете готовый пакет бумаг без очередей и
                  поездок по инстанциям.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 max-h-10 min-w-10 rounded-2xl bg-[#03481E] text-white flex items-center justify-center text-sm font-semibold">
                5
              </div>
              <div>
                <h3 className="text-base sd:text-lg font-semibold">
                  Мгновенная оплата и передача авто
                </h3>
                <p className="text-sm text-[#555555] mt-1">
                  Деньги вы получаете сразу после подписания договора — наличными
                  или переводом на банковский счёт. Автомобиль остаётся у нас,
                  вы свободны от забот и рисков, связанных с самостоятельной
                  продажей.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 max-h-10 min-w-10 rounded-2xl bg-[#03481E] text-white flex items-center justify-center text-sm font-semibold">
                6
              </div>
              <div>
                <h3 className="text-base sd:text-lg font-semibold">
                  Выезд, эвакуатор и выкуп проблемных авто
                </h3>
                <p className="text-sm text-[#555555] mt-1">
                  При необходимости организуем эвакуатор, выкупим автомобиль
                  после ДТП или в неисправном состоянии. Вы не тратите время на
                  ремонт, поиск покупателей и оформление.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${phoneLink}`}
              className="inline-flex items-center justify-center rounded-full bg-[#03481E] px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white shadow-lg shadow-[#03481E]/40 hover:bg-[#046828] transition"
            >
              Оценить авто по телефону
            </a>
            <a
              href={`${SITE_URL}/obmen/`}
              className="inline-flex items-center justify-center rounded-full border border-[#03481E]/30 px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-[#03481E] hover:bg-[#03481E]/5 transition"
            >
              Рассмотреть обмен авто
            </a>
          </div>
        </article>

        <div className="relative h-[260px] sd:h-auto">
          <div className="absolute inset-0 rounded-[28px] bg-[#050809] overflow-hidden border border-white/8 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-[url('/fon/vykup-parking.webp')]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 p-5 sd:p-7 flex flex-col justify-end h-full">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-300 mb-2">
                avto<span className="text-[#00ff5a]">car</span> • выкуп авто
              </p>
              <h3 className="text-[20px] sd:text-[24px] font-semibold mb-2">
                Крытая площадка с десятками проданных и выкупленных авто
              </h3>
              <p className="text-sm text-gray-200">
                Вы можете лично убедиться, что мы действительно покупаем
                автомобили каждый день — посетите наш автосалон и посмотрите
                автомобили на площадке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== СЕКЦИЯ: FAQ по выкупу авто =====

const VykupFaqSection = () => {
  const faqs = [
    {
      q: "Как быстро вы можете выкупить мой автомобиль?",
      a: "В большинстве случаев сделка по выкупу авто в Минске проходит в день обращения. Осмотр занимает 20–30 минут, оформление договора и оплата — ещё 20–30 минут.",
    },
    {
      q: "Какие автомобили вы выкупаете?",
      a: "Мы выкупаем легковые авто и кроссоверы с пробегом: в хорошем состоянии, после ДТП, с неисправностями, кредитные и с просроченными платежами — каждую ситуацию обсуждаем отдельно.",
    },
    {
      q: "Возможен ли выкуп аварийных авто после ДТП?",
      a: "Да, мы занимаемся выкупом аварийных авто после ДТП. Оценка проводится с учётом повреждений, возможна эвакуация автомобиля с места стоянки или СТО.",
    },
    {
      q: "Вы выкупаете авто в любом состоянии?",
      a: "Практически да: выкупаем автомобили на ходу и без, с проблемными агрегатами, ржавчиной, повреждённым салоном. Главное — чтобы автомобиль имел юридически чистые документы.",
    },
    {
      q: "Нужно ли предварительно готовить и мыть машину?",
      a: "Нет, обязательной подготовки нет. Но чистый автомобиль визуально оценивается быстрее, а мелкие дефекты проще заметить — это помогает быстрее согласовать цену.",
    },
    {
      q: "Какие документы нужны для срочного выкупа авто?",
      a: "Паспорт владельца (или доверенность), техпаспорт автомобиля, при наличии — сервисная книжка и договор купли-продажи. Если авто в кредите, потребуются дополнительные документы по кредиту.",
    },
    {
      q: "Могу ли я продать авто срочно, если оно в кредите или лизинге?",
      a: "Да, мы работаем с кредитными и лизинговыми авто. Наши специалисты помогут закрыть обязательства перед банком или лизинговой компанией и правильно оформить сделку.",
    },
    {
      q: "Сколько стоит выезд оценщика по Минску и области?",
      a: "Выезд оценщика по Минску и ближайшей Минской области для выкупа авто — бесплатный. Условия выезда в удалённые районы оговариваются индивидуально.",
    },
    {
      q: "Как формируется цена выкупа автомобиля?",
      a: "Мы ориентируемся на реальную рыночную стоимость аналогичных авто с учётом состояния кузова, салона, технической части, комплектации и истории эксплуатации.",
    },
    {
      q: "Выкупаете ли вы авто без техосмотра или страховки?",
      a: "Да, отсутствие техосмотра или страховки не является препятствием. Это учитывается только при оценке стоимости, а выезд на эвакуаторе мы можем организовать сами.",
    },
    {
      q: "Как происходит оплата при срочном выкупе авто?",
      a: "Оплата производится сразу после подписания договора купли-продажи: наличными в кассе или переводом на банковский счёт — как вам удобнее.",
    },
    {
      q: "Можно ли сначала узнать ориентировочную цену по телефону или в мессенджере?",
      a: "Конечно. Сообщите нам марку, модель, год выпуска, пробег и несколько фото — мы назовём ориентировочный диапазон выкупной цены ещё до осмотра.",
    },
    {
      q: "Чем автовыкуп отличается от продажи авто по объявлению?",
      a: "При автовыкупе вы получаете деньги сразу и не тратите время на звонки, торг, оформление и риски с неизвестными покупателями. Вся ответственность и оформление лежат на автосалоне.",
    },
    {
      q: "Могу ли я отказаться от сделки после оценки?",
      a: "Да, оценка носит предварительный характер. Если условия выкупа вас не устроят, вы можете отказаться — это ни к чему вас не обязывает.",
    },
    {
      q: "Работаете ли вы только в Минске или по всей области?",
      a: "Основной офис и площадка находятся в Минске, но мы выезжаем в города Минской области для оценки и выкупа авто по договорённости.",
    },
  ];

  return (
    <section className="container mx-auto mt-12 sd:mt-16 mb-4">
      <div className="rounded-[28px] bg-[#1a1a1a] border border-[#333333] px-5 sd:px-8 py-8 sd:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        <div className="max-w-3xl">
          <h2 className="text-[24px] sd:text-[30px] font-semibold mb-3">
            Частые вопросы про срочный выкуп авто
          </h2>
          <h3 className="text-sm sd:text-base text-gray-300 mb-6">
            Собрали ответы на самые популярные вопросы о выкупе авто в Минске,
            чтобы вам было проще принять решение и подготовить машину к продаже.
          </h3>
        </div>

        <div className="mt-4 space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="collapse collapse-arrow bg-[#222222] border border-[#333333] rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-sm sd:text-base font-semibold bg-[#222222] text-gray-100 peer-checked:bg-[#03481E] peer-checked:text-white">
                {item.q}
              </div>
              <div className="collapse-content bg-[#1a1a1a] text-gray-200 peer-checked:bg-[#111111] peer-checked:text-gray-100 text-sm sd:text-[15px]">
                <p className="pt-3 pb-4">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const page = () => {
  const phoneLink = phoneNumbers.mainPhoneLink;
  const phone = phoneNumbers.mainPhone;

  return (
    <main className="bg-[#222222] text-white sd:pt-16 xz:pt-28 pb-12 min-h-screen">
      {/* HERO: срочный выкуп авто */}
      <section className="container mx-auto font-system">
        <div className="relative overflow-hidden rounded-[32px] bg-[#050809] sd:px-12 xz:px-6 sd:py-16 xz:py-10">
          {/* Фоновое изображение: мобильное / десктоп */}
          <div
            className="absolute inset-0 bg-cover bg-center sd:bg-[length:115%] bg-[url('/fon/vykup-hero-mobile.webp')] sd:bg-[url('/fon/vykup-hero-desktop.webp')]"
            aria-hidden="true"
          />
          {/* Затемнение + блики */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,90,0.3),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.4),#020405)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full bg-[#03481E]/45 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#00ff5a]/18 blur-3xl"
            aria-hidden="true"
          />

          {/* Контент */}
          <div className="relative grid gap-10 sd:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-start">
            {/* Левая колонка */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/logo.webp"
                  alt="Логотип на ул.Куйбышева 40"
                  width={80}
                  height={80}
                  className="w-16 h-16 sd:w-20 sd:h-20"
                />
                <div className="text-xs sd:text-sm uppercase tracking-[0.2em] text-gray-300">
                  <span className="block">автосалон с пробегом</span>
                  <span className="block text-[#00ff5a]">
                    срочный выкуп авто • Минск
                  </span>
                </div>
              </div>

              <h1 className="mt-7 sd:mt-8 font-semibold uppercase sd:text-[50px] sd:leading-[1.04] xz:text-[32px] xz:leading-[1.22] drop-shadow-[0_12px_32px_rgba(0,0,0,0.9)]">
                <span className="block text-gray-200 text-[13px] sd:text-[15px] font-normal tracking-[0.16em] mb-3">
                  купим авто быстро, безопасно и по рыночной цене
                </span>
                <span className="block text-white">
                  Срочный выкуп{" "}
                  <span className="text-[#00ff5a]">авто в Минске</span>
                </span>
                <span className="block text-[19px] sd:text-[23px] normal-case mt-4 font-normal text-gray-100">
                  Выкуп автомобилей в любом состоянии — от целых машин до авто
                  после ДТП. Оценка, оформление и{" "}
                  <strong>оплата за один визит</strong>.
                </span>
              </h1>

              <div className="mt-7 grid gap-3 text-xs sd:text-sm text-gray-100">
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    <strong>Купим авто</strong> в Минске и Минской области:
                    легковые, кроссоверы, семейные автомобили, корпоративный
                    транспорт.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    <strong>Выкуп авто в любом состоянии</strong>: на ходу и
                    без, после ДТП, с неисправностями и небольшими проблемами по
                    кузову.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    <strong>Срочный выкуп авто с выездом оценщика</strong> —
                    бесплатно при заключении сделки, без скрытых комиссий и
                    навязанных услуг.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${phoneLink}`}
                  className="flex sd:flex-row xz:flex-col sd:items-center xz:items-start justify-center rounded-full bg-[#03481E] px-8 sd:px-10 py-3 text-sm sd:text-base font-semibold text-white shadow-lg shadow-[#03481E]/60 hover:bg-[#046828] transition"
                >
                  Позвонить и продать авто: <span className="sd:inline-block xz:block">{phone}</span>
                </a>
                <a
                  href="#vykup-steps"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white/90 hover:bg-white/5 transition backdrop-blur-[2px]"
                >
                  Посмотреть, как проходит выкуп
                </a>
                <a
                  href={`${SITE_URL}/catalog/`}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2.5 text-xs sd:text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                  Авто, которые мы уже выкупили
                </a>
              </div>
            </div>

            {/* Правая колонка: карточка преимуществ выкупа */}
            <div className="sd:block">
              <div className="rounded-[28px] bg-black/70 border border-white/10 backdrop-blur-xl px-6 sd:px-7 py-6 sd:py-7 shadow-[0_24px_70px_rgba(0,0,0,0.95)]">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
                  условия срочного выкупа
                </p>
                <h2 className="text-[22px] sd:text-[26px] font-semibold mb-4">
                  Быстрый автовыкуп без риска и потери времени
                </h2>

                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                    <p>
                      <strong>30–60 минут</strong> на весь процесс: осмотр,
                      договор, оплата.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                    <p>
                      Выкуп аварийных авто, машин после ДТП и неисправных
                      автомобилей.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                    <p>
                      Работаем официально: только прозрачные договоры
                      купли-продажи и юридически чистые сделки.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                    <p>
                      Возможен выкуп авто с кредитом или лизингом — помогаем
                      закрыть обязательства перед банком.
                    </p>
                  </li>
                </ul>

                <div className="mt-6">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
                  >
                    Получить предварительную оценку по телефону
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОСНОВНАЯ СТАТЬЯ (существующий компонент) */}
      <section id="vykup-steps">
        <div className="container mx-auto">
          <VykupArticle />
        </div>
      </section>

      {/* ЭТАПЫ ВЫКУПА АВТО */}
      <section id="vykup-process">
        <VykupStepsSection />
      </section>

      {/* FAQ */}
      <VykupFaqSection />

      {/* JSON-LD для AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default page;
