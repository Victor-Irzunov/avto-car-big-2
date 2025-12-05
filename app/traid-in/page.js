// /app/traid-in/page.js — ПОЛНОСТЬЮ

import React from "react";
import Link from "next/link";
import phoneNumbers from "@/config/config";

const PRIMARY = "#04481F";
const BG_DARK = "#1D1D1D";
const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

/** === SEO / AEO === */
export const metadata = {
  title:
    "Трейд-ин авто в Минске — обмен автомобиля с пробегом в автосалоне на ул.Куйбышева 40",
  description:
    "Трейд-ин авто в Минске в автосалоне на ул.Куйбышева 40. Быстрый обмен автомобиля с пробегом на другое авто с доплатой или без, оформление за 1 день, помощь с кредитом и лизингом. Честная оценка, юридическое сопровождение сделки.",
  alternates: {
    canonical: `${SITE_URL}/traid-in/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/traid-in/`,
    title:
      "Трейд-ин авто в Минске — обмен автомобиля с пробегом в автосалоне на ул.Куйбышева 40",
    description:
      "Обменяйте свой автомобиль по программе трейд-ин в автосалоне на ул.Куйбышева 40: честная оценка, быстрый выкуп, обмен с доплатой, оформление кредита и лизинга на месте.",
    images: [
      {
        url: `${SITE_URL}/fon/traid-in-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Трейд-ин авто в автосалоне на ул.Куйбышева 40 в Минске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Трейд-ин авто в Минске — обмен автомобиля с пробегом в автосалоне на ул.Куйбышева 40",
    description:
      "Программа трейд-ин в автосалоне на ул.Куйбышева 40 в Минске: обмен авто с пробегом на другой автомобиль с доплатой или без, полное юридическое сопровождение сделки.",
    images: [`${SITE_URL}/fon/traid-in-hero.webp`],
  },
  keywords: [
    "трейд-ин авто Минск",
    "обмен авто с пробегом Минск",
    "обмен автомобиля Автосалон на ул.Куйбышева 40",
    "обменять авто с доплатой",
    "трейд-ин автомобиля Минск",
    "обмен старого авто на новое Минск",
  ],
};

// JSON-LD для AEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Трейд-ин авто в Минске — автосалон на ул.Куйбышева 40",
  url: `${SITE_URL}/traid-in/`,
  provider: {
    "@type": "AutoDealer",
    name: "Автосалон на ул.Куйбышева 40",
    telephone: phoneNumbers.mainPhone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BY",
      addressLocality: "Минск",
      streetAddress: "ул. Куйбышева 40, 6 этаж",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Минск и Минская область",
  },
  description:
    "Услуга трейд-ин автомобиля в Минске: обмен авто с пробегом на другой автомобиль с доплатой или без, с юридическим сопровождением и возможностью оформить кредит или лизинг.",
  serviceType: "Трейд-ин автомобиля",
};

const steps = [
  {
    title: "1. Заявка или звонок",
    text: "Вы оставляете заявку на сайте или звоните нам — рассказываете про свой автомобиль и пожелания по обмену.",
  },
  {
    title: "2. Оценка авто",
    text: "Мы оценим ваш автомобиль: осмотр, проверка истории и технического состояния. Предложим честную рыночную цену.",
  },
  {
    title: "3. Подбор авто взамен",
    text: "Выбираете автомобиль из наличия в автосалоне. Возможен обмен с вашей или нашей доплатой.",
  },
  {
    title: "4. Оформление сделки",
    text: "Оформляем договор, все документы и, при необходимости, кредит или лизинг. В один день вы уезжаете на другом авто.",
  },
];

const benefits = [
  {
    title: "Сделка за 1 день",
    text: "Не тратите недели на объявления, показы и торг — обмен и оформление в одном месте.",
  },
  {
    title: "Честная оценка авто",
    text: "Оценка по реальному рынку с учётом технического состояния, комплектации и пробега.",
  },
  {
    title: "Обмен с доплатой",
    text: "Можно выбрать авто дороже с вашей доплатой или дешевле — с доплатой в вашу пользу.",
  },
  {
    title: "Юридическая чистота",
    text: "Полная проверка документов и сопровождение сделки — всё официально и прозрачно.",
  },
  {
    title: "Кредит и лизинг",
    text: "Поможем оформить финансирование прямо в автосалоне, без сложных банковских походов.",
  },
  {
    title: "Большой выбор авто",
    text: "Автомобили с пробегом в наличии — можно осмотреть, проконсультироваться и сразу выбрать замену.",
  },
];

const whoFor = [
  {
    title: "Хотите обновить авто без долгой продажи",
    text: "Трейд-ин подойдёт, если вы не хотите месяцами ждать покупателя и заниматься показами машины.",
  },
  {
    title: "Нужен автомобиль дороже — с доплатой",
    text: "Меняете свой автомобиль на более новый или классом выше, доплачивая разницу.",
  },
  {
    title: "Нужно авто попроще — с доплатой вам",
    text: "Снижаете расходы на содержание, получаете более бюджетный автомобиль и доплату деньгами.",
  },
  {
    title: "Важна безопасность сделки",
    text: "Все операции проходят через автосалон с юридическим оформлением и проверкой документов.",
  },
];

const faqItems = [
  {
    q: "Сколько времени занимает обмен по трейд-ин?",
    a: "Чаще всего — один день. Если автомобиль уже выбран и все документы в порядке, осмотр, оценка и оформление договора занимают от нескольких часов до 1 рабочего дня.",
  },
  {
    q: "Можно ли оформить кредит или лизинг на авто по трейд-ин?",
    a: "Да, мы работаем с банками-партнёрами. Можно оформить кредит или лизинг на автомобиль, который вы выбираете в обмен, прямо в автосалоне.",
  },
  {
    q: "Что нужно взять с собой для трейд-ин?",
    a: "Паспорт, техпаспорт, доверенность (если вы не собственник), сервисные документы и комплект ключей. Этого достаточно для предварительной оценки и начала оформления сделки.",
  },
  {
    q: "Обязательно ли сразу выбирать авто взамен?",
    a: "Нет, вы можете сначала оценить свой автомобиль, понять ориентировочную сумму и уже затем выбрать машину из наличия или подождать подходящий вариант.",
  },
];

const Page = () => {
  const phone = phoneNumbers.mainPhone;
  const phoneLink = phoneNumbers.mainPhoneLink;

  return (
    <main className="bg-[#1D1D1D] text-white sd:pt-20 xz:pt-24 pb-16 min-h-screen">
      {/* HERO */}
      <section className="container mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-[#101010] sd:px-12 xz:px-6 sd:py-16 xz:py-10">
          {/* Фон-градиент */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 0% 0%, rgba(4,72,31,0.55), transparent 55%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.75), #000000)",
            }}
          />

          {/* Блики */}
          <div
            className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(4,72,31,0.55)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -right-24 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(4,72,31,0.35)" }}
            aria-hidden="true"
          />

          {/* Контент */}
          <div className="relative grid gap-10 sd:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
            {/* Левая колонка */}
            <div>
              <div className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 sd:text-[11px] xz:text-[9px] uppercase tracking-[0.16em] text-white/70">
                <span className="w-1.5 h-1.5 rounded-full mr-2 bg-[#00FF7A]" />
                <span>трейд-ин авто в минске</span>
              </div>

              <h1 className="mt-6 sd:mt-7 font-semibold uppercase sd:text-[42px] sd:leading-[1.05] xz:text-[28px] xz:leading-[1.2]">
                <span className="block text-gray-200 text-[13px] sd:text-[15px] font-normal tracking-[0.16em] mb-3">
                  обмен автомобиля с пробегом без лишних хлопот
                </span>
                <span className="block text-white">
                  Трейд-ин авто в{" "}
                  <span style={{ color: PRIMARY }}>автосалоне на ул.Куйбышева 40</span>
                </span>
                <span className="block text-[17px] sd:text-[21px] normal-case mt-4 font-normal text-gray-100">
                  Обменяем ваш автомобиль на другой авто из наличия — с доплатой
                  или в вашу пользу. Оценка, оформление и передача авто в один
                  день.
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${phoneLink}`}
                  className="flex sd:flex-row xz:flex-col sd:items-center xz:items-start w-full justify-center rounded-full px-8 sd:px-10 py-3 text-sm sd:text-base font-semibold text-white shadow-lg transition"
                  style={{
                    background:
                      "linear-gradient(135deg, #04481F, #0BA94B, #04481F)",
                    boxShadow: "0 18px 45px rgba(4,72,31,0.6)",
                  }}
                >
                  Позвонить по трейд-ин: <span className="">{phone}</span>
                </a>
                <Link
                  href="/catalog"
                  className="inline-flex items-center justify-center w-full rounded-full border border-white/40 px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white/90 hover:bg-white/5 transition backdrop-blur-[2px]"
                >
                  Подобрать авто для обмена
                </Link>
              </div>

              <div className="mt-7 grid gap-3 text-xs sd:text-sm text-gray-100">
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00FF7A]" />
                  <p>
                    <strong>Адрес автосалона:</strong> г. Минск, ул. Куйбышева
                    40, 6 этаж — современный автосалон с автомобилями с пробегом
                    в наличии.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00FF7A]" />
                  <p>
                    <strong>Режим работы:</strong> ежедневно с 10:00 до 20:00,
                    без выходных.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00FF7A]" />
                  <p>
                    <strong>Услуга трейд-ин:</strong> обмен авто с пробегом,
                    выкуп, обмен с доплатой, помощь в оформлении кредита и
                    лизинга.
                  </p>
                </div>
              </div>
            </div>

            {/* Правая колонка — карточка преимуществ */}
            <div className="sd:block">
              <div className="rounded-3xl bg-black/70 border border-white/10 backdrop-blur-xl px-6 sd:px-7 py-6 sd:py-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)]">
                <p className="text-xs uppercase tracking-[0.16em] text-gray-400 mb-2">
                  кратко о нашей программе
                </p>
                <h2 className="text-[22px] sd:text-[26px] font-semibold mb-4">
                  Трейд-ин автосалон на ул.Куйбышева 40 — быстро, удобно и безопасно
                </h2>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-[#111111] border border-white/8 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1">
                      сроки
                    </p>
                    <p className="text-lg font-semibold">от 1 дня</p>
                    <p className="mt-1 text-xs text-gray-300">
                      Оценка авто и оформление сделки в максимально короткие
                      сроки.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#111111] border border-white/8 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1">
                      формат обмена
                    </p>
                    <p className="text-lg font-semibold">
                      с доплатой или без
                    </p>
                    <p className="mt-1 text-xs text-gray-300">
                      Обмен на авто дороже или дешевле, с учётом ваших задач.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#111111] border border-white/8 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1">
                      финансовые решения
                    </p>
                    <p className="text-lg font-semibold">кредит / лизинг</p>
                    <p className="mt-1 text-xs text-gray-300">
                      Помогаем оформить кредит или лизинг на выбранный авто.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#111111] border border-white/8 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 mb-1">
                      юридическая чистота
                    </p>
                    <p className="text-lg font-semibold">официально</p>
                    <p className="mt-1 text-xs text-gray-300">
                      Оформление договора, проверка документов и сопровождение
                      сделки.
                    </p>
                  </div>
                </div>

                <div className="mt-5 text-xs sd:text-sm text-gray-300">
                  <p>
                    Оставьте заявку на обмен — менеджер свяжется с вами, расскажет
                    детали программы и предложит варианты автомобилей под ваши
                    задачи.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2.5 text-xs sd:text-sm font-semibold text-white hover:bg-white/20 transition"
                  >
                    Обсудить условия по телефону
                  </a>
                  <a
                    href="https://yandex.by/maps/-/CLgj7NkP"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-xs sd:text-sm font-semibold text-white/80 hover:bg-white/5 transition"
                  >
                    Проложить маршрут в Яндекс.Картах
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕТ ТРЕЙД-ИН */}
      <section className="container mx-auto mt-10 sd:mt-14">
        <div className="flex flex-col sd:flex-row sd:items-end sd:justify-between gap-6 mb-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
              как проходит обмен авто
            </p>
            <h2 className="mt-3 sd:text-3xl xz:text-2xl font-semibold">
              Как работает трейд-ин в автосалоне на ул.Куйбышева 40
            </h2>
            <p className="mt-3 text-sm text-gray-300 sd:max-w-xl">
              Мы постарались сделать процесс обмена автомобиля максимально
              понятным: от первого звонка до момента, когда вы уезжаете на новом
              авто.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sd:grid-cols-4 xz:grid-cols-1">
          {steps.map((item, idx) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl bg-[#181818] border border-white/6 px-5 py-6 sd:px-5 sd:py-6 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#04481F]/25 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-full bg-[#04481F] text-white text-xs font-semibold px-3 py-1 mb-4">
                  Шаг {idx + 1}
                </div>
                <h3 className="text-base sd:text-[17px] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="container mx-auto mt-12 sd:mt-16">
        <div className="grid gap-8 sd:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
              почему клиенты выбирают нас
            </p>
            <h2 className="mt-3 sd:text-3xl xz:text-2xl font-semibold">
              Преимущества трейд-ин в на ул.Куйбышева 40
            </h2>
            <p className="mt-3 text-sm text-gray-300 sd:max-w-xl">
              Мы объединяем честную оценку автомобиля, понятные условия и
              возможность сразу подобрать замену из наличия — без лишней
              бюрократии и скрытых комиссий.
            </p>

            <div className="mt-6 grid gap-4 sd:grid-cols-2 xz:grid-cols-1">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#181818] border border-white/7 px-4 py-4"
                >
                  <h3 className="text-[15px] font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] bg-[#141414] border border-white/7 px-5 py-6 sd:px-6 sd:py-7">
            <h3 className="text-[20px] font-semibold mb-3">
              Кому подходит трейд-ин
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Программа трейд-ин отлично подойдёт, если вы цените своё время и
              хотите обновить автомобиль с минимальными хлопотами.
            </p>

            <div className="space-y-4">
              {whoFor.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00FF7A]" />
                  <div>
                    <p className="text-sm font-semibold mb-1">{item.title}</p>
                    <p className="text-xs text-gray-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/obmen"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Узнать условия обмена
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto mt-12 sd:mt-16">
        <div className="sd:max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
            вопросы по трейд-ин
          </p>
          <h2 className="mt-3 sd:text-3xl xz:text-2xl font-semibold">
            Частые вопросы о трейд-ин в Минске
          </h2>
          <p className="mt-3 text-sm text-gray-300">
            Собрали ответы на самые популярные вопросы о программе трейд-ин в
            нашем автосалоне. Если не нашли нужный — просто позвоните нам.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-[#181818] border border-white/8 px-4 py-3 sd:px-5 sd:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="text-sm sd:text-[15px] font-semibold">
                  {item.q}
                </span>
                <span className="shrink-0 rounded-full border border-white/20 w-6 h-6 flex items-center justify-center text-xs text-white/80 group-open:rotate-180 transition-transform">
                  ▲
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-200">
          <p>Остались вопросы по трейд-ин?</p>
          <a
            href={`tel:${phoneLink}`}
            className="inline-flex items-center justify-center rounded-full bg-[#04481F] px-6 py-2.5 font-semibold text-white hover:bg-[#06622A] transition"
          >
            Позвонить: {phone}
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default Page;
