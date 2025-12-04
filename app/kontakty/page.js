// my-app/app/kontakty/page.js

import React from "react";
import Image from "next/image";
import phoneNumbers from "@/config/config";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

const mapEmbedHtml = `
<div style="position:relative;overflow:hidden;width:100%;height:100%;border-radius:18px;">
  <a href="https://yandex.by/maps/org/avtokar/122416526987/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0;left:-9999px;">Автокар</a>
  <a href="https://yandex.by/maps/157/minsk/category/car_dealership/184105322/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;left:-9999px;">Автосалон в Минске</a>
  <a href="https://yandex.by/maps/157/minsk/category/sale_of_used_cars/190246757599/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;left:-9999px;">Продажа автомобилей с пробегом в Минске</a>
  <iframe src="https://yandex.by/map-widget/v1/?ll=27.578063%2C53.921117&mode=search&oid=122416526987&ol=biz&tab=gallery&z=16.72"
          width="100%"
          height="100%"
          frameborder="1"
          allowfullscreen="true"
          style="position:relative;border:0;border-radius:18px;box-sizing:border-box;">
  </iframe>
</div>
`;

const reviewsEmbedHtml = `
<div style="width:100%;height:100%;overflow:hidden;position:relative;border-radius:18px;">
  <iframe style="width:100%;height:100%;border:1px solid #2f2f2f;border-radius:18px;box-sizing:border-box"
          src="https://yandex.ru/maps-reviews-widget/122416526987?comments">
  </iframe>
  <a href="https://yandex.by/maps/org/avtokar/122416526987/"
     target="_blank"
     rel="noreferrer"
     style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 16px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;max-height:14px;white-space:nowrap;">
    Автокар на карте Минска — Яндекс Карты
  </a>
</div>
`;

export const metadata = {
  title:
    "Купить бу авто в Минске | Лизинг и Кредит на авто с пробегом | Покупка, продажа, обмен",
  description: `ᐈ ⭐ Автосалон «AvtoCar»: Купить или продать автомобиль быстро ⚡ Кредит и лизинг на б/у авто ⚡ Большой выбор автомобилей ⚡ Помощь в выборе авто ⭐ Офомление в день подачи ⭐ Без взоса ✓ Без справок и поручителей ➤➤➤ До 10 лет ☎️ ${phoneNumbers.mainPhone} Автосалон «АвтоКар» ⭐ Нас советуют друзьям 🔥 Звоните прямо сейчас!`,
  alternates: {
    canonical: `${SITE_URL}/kontakty/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/kontakty/`,
    title:
      "Контакты автосалона AvtoCar — телефон, адрес, схема проезда в Минске",
    description:
      "Свяжитесь с автосалоном «AvtoCar» в Минске: телефон, адрес, режим работы, схема проезда и форма обратной связи.",
    images: [
      {
        url: `${SITE_URL}/fon/contacts-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Контакты автосалона AvtoCar в Минске — парковка и автомобили с пробегом",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Контакты автосалона AvtoCar — телефон и адрес автосалона бу авто в Минске",
    description:
      "Автосалон «AvtoCar» в Минске: как доехать, по каким телефонам звонить и когда мы работаем.",
    images: [`${SITE_URL}/fon/contacts-hero.webp`],
  },
  keywords: [
    "контакты Автосалон AvtoCar",
    "автосалон AvtoCar телефон",
    "адрес автосалона бу авто Минск",
    "схема проезда AvtoCar",
    "как доехать до АвтоКар Минск",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Автосалон AvtoCar",
  url: `${SITE_URL}/kontakty/`,
  image: `${SITE_URL}/fon/contacts-hero.webp`,
  telephone: phoneNumbers.mainPhone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BY",
    addressLocality: "Минск",
    streetAddress: "ул. Куйбышева 40, паркинг 4 этаж",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
};

const Page = () => {
  const phone = phoneNumbers.mainPhone;
  const phoneLink = phoneNumbers.mainPhoneLink;

  return (
    <main className="bg-[#222222] text-white sd:pt-20 xz:pt-24 pb-16 min-h-screen">
      {/* HERO */}
      <section className="container mx-auto ">
        <div className="relative overflow-hidden rounded-[32px] bg-[#050809] sd:px-12 xz:px-6 sd:py-16 xz:py-10">
          {/* Фон */}
          <div
            className="absolute inset-0 bg-cover bg-center sd:bg-[length:115%] bg-[url('/fon/contacts-hero-mobile.webp')] sd:bg-[url('/fon/contacts-hero.webp')]"
            aria-hidden="true"
          />
          {/* Градиент затемнения */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,90,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.65),#020405)]"
            aria-hidden="true"
          />
          {/* Блики */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#03481E]/45 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#00ff5a]/18 blur-3xl"
            aria-hidden="true"
          />

          {/* Контент */}
          <div className="relative grid gap-10 sd:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start font-system">
            {/* Левая колонка */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/logo-white.webp"
                  alt="AvtoCar логотип"
                  width={72}
                  height={72}
                  className="w-16 h-16 sd:w-20 sd:h-20"
                />
                <div className="text-xs sd:text-sm uppercase tracking-[0.2em] text-gray-300">
                  <span className="block">автосалон с пробегом</span>
                  <span className="block text-[#00ff5a]">AvtoCar • Минск</span>
                </div>
              </div>

              <h1 className="mt-7 sd:mt-8 font-semibold uppercase sd:text-[44px] sd:leading-[1.05] xz:text-[30px] xz:leading-[1.2] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <span className="block text-gray-200 text-[13px] sd:text-[15px] font-normal tracking-[0.16em] mb-3">
                  есть вопросы по покупке, продаже или обмену авто?
                </span>
                <span className="block text-white">
                  Контакты автосалона{" "}
                  <span className="text-[#00ff5a]">AvtoCar</span>
                </span>
                <span className="block text-[18px] sd:text-[22px] normal-case mt-4 font-normal text-gray-100">
                  Звоните, пишите или приезжайте — поможем подобрать и оформить
                  авто в кредит, лизинг, трейд-ин или на комиссию.
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${phoneLink}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#03481E] px-8 sd:px-10 py-3 text-sm sd:text-base font-semibold text-white shadow-lg shadow-[#03481E]/60 hover:bg-[#046828] transition"
                >
                  Позвонить: {phone}
                </a>
                <a
                  href="https://yandex.by/maps/-/CLc8ySNB"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white/90 hover:bg-white/5 transition backdrop-blur-[2px]"
                >
                  Проложить маршрут
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs sd:text-sm font-medium text-white hover:bg-white/20 transition"
                >
                  <Image
                    src="/svg/telegram-white.svg"
                    alt="Написать в Telegram"
                    width={18}
                    height={18}
                  />
                  Написать в Telegram
                </a>
              </div>

              <div className="mt-7 grid gap-3 text-xs sd:text-sm text-gray-100">
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    <strong>Адрес:</strong> г. Минск, ул. Куйбышева 40, паркинг
                    4 этаж — тёплая крытая парковка с большим выбором авто.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    <strong>Режим работы:</strong> ежедневно с 10:00 до 20:00,
                    без выходных.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    <strong>Услуги:</strong> продажа и покупка авто с пробегом,
                    кредит, лизинг, выкуп, обмен, комиссионная продажа,
                    подбор авто.
                  </p>
                </div>
              </div>
            </div>

            {/* Правая колонка — карточка контактов */}
            <div className="sd:block">
              <div className="rounded-3xl bg-black/65 border border-white/8 backdrop-blur-xl px-6 sd:px-7 py-6 sd:py-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)]">
                <p className="text-xs uppercase tracking-[0.16em] text-gray-400 mb-2">
                  основные контакты
                </p>
                <h2 className="text-[22px] sd:text-[26px] font-semibold mb-4">
                  Свяжитесь с нами удобным способом
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex gap-3">
                    <div className="mt-1 rounded-2xl max-h-10 min-w-10 bg-[#03481E] p-2 flex items-center justify-center">
                      <Image
                        src="/svg/phone-white.svg"
                        alt="Телефон"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-[0.12em]">
                        телефон
                      </p>
                      <a
                        href={`tel:${phoneLink}`}
                        className="text-base font-semibold hover:text-[#00ff5a]"
                      >
                        {phone}
                      </a>
                      <p className="text-gray-400 text-xs mt-1">
                        Быстрая консультация по покупке, продаже, обмену, кредиту
                        и лизингу.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 rounded-2xl max-h-10 min-w-10 bg-white/5 p-2 flex items-center justify-center">
                      <Image
                        src="/svg/location-white.svg"
                        alt="Адрес"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-[0.12em]">
                        адрес
                      </p>
                      <p className="text-base font-semibold">
                        г. Минск, ул. Куйбышева 40,
                        <br />
                        паркинг 4 этаж
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        Въезд на парковку через шлагбаум, парковочные места для
                        клиентов AvtoCar.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 rounded-2xl max-h-10 min-w-10 bg-white/5 p-2 flex items-center justify-center">
                      <Image
                        src="/svg/time.svg"
                        alt="График работы"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-[0.12em]">
                        режим работы
                      </p>
                      <p className="text-base font-semibold">
                        10:00–20:00, без выходных
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        Приезжайте в удобное время — менеджеры и кредитные
                        специалисты на месте.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`${SITE_URL}/catalog/`}
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2.5 text-xs sd:text-sm font-semibold text-white hover:bg-white/20 transition"
                  >
                    Смотреть автомобили в наличии
                  </a>
                  <a
                    href="#map"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-xs sd:text-sm font-semibold text-white/80 hover:bg-white/5 transition"
                  >
                    Открыть карту
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section className="container mx-auto  mt-10 sd:mt-14">
        <div className="grid gap-6 sd:grid-cols-3">
          {[
            {
              title: "Крытая тёплая парковка",
              text: "Комфортный осмотр авто в любое время года — без дождя и снега.",
              icon: "/svg/parking.svg",
            },
            {
              title: "Все услуги в одном месте",
              text: "Продажа, выкуп, трейд-ин, комиссионная продажа, кредит и лизинг.",
              icon: "/svg/services.svg",
            },
            {
              title: "Честный подход",
              text: "Прозрачные условия, реальные пробеги и полное юридическое сопровождение.",
              icon: "/svg/shield.svg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl bg-[#1b1b1b] border border-white/5 px-5 py-6 sd:px-6 sd:py-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            >
              <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-[#03481E]/20 blur-3xl" />
              <div className="relative flex gap-4">
                <div className="mt-1 rounded-full max-h-10 max-w-10 bg-[#03481E] p-2 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                  />
                </div>
                <div>
                  <h3 className="text-base sd:text-lg font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Карта и как добраться */}
      <section
        id="map"
        className="container mx-auto  mt-12 sd:mt-16"
      >
        <div className="grid gap-8 sd:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div className="h-[320px] sd:h-[420px] bg-[#101010] rounded-[22px] border border-white/5 overflow-hidden">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: mapEmbedHtml }}
            />
          </div>

          <div className="rounded-[22px] bg-[#1a1a1a] border border-white/5 px-5 py-6 sd:px-7 sd:py-7">
            <h2 className="text-[22px] sd:text-[26px] font-semibold mb-4">
              Как добраться до автосалона
            </h2>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  На автомобиле — въезд на крытую парковку по указателям
                  &laquo;AvtoCar&raquo; с ул. Куйбышева. На шлагбауме скажите, что
                  вы в автосалон.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Общественный транспорт — остановка &laquo;Куйбышева&raquo;,
                  далее 3–5 минут пешком до бизнес-центра и въезда на парковку.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Для навигатора введите адрес{" "}
                  <strong>«Минск, Куйбышева 40»</strong> или воспользуйтесь
                  готовым маршрутом в Яндекс.Картах.
                </p>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://yandex.by/maps/-/CLc8ySNB"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#03481E] px-7 py-2.5 text-sm font-semibold text-white hover:bg-[#046828] transition"
              >
                Открыть маршрут в Яндекс.Картах
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы Яндекс */}
      <section className="container mx-auto  mt-12 sd:mt-16">
        <div className="grid gap-8 sd:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-stretch">
          <div className="rounded-[22px] bg-[#1a1a1a] border border-white/5 px-5 py-6 sd:px-7 sd:py-7">
            <h2 className="text-[22px] sd:text-[26px] font-semibold mb-4">
              Почему нас выбирают
            </h2>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Большой выбор автомобилей с пробегом в наличии на крытой
                  площадке — все авто можно осмотреть в один визит.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Помощь в подборе, проверка авто и честное оформление документов
                  без скрытых платежей.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Кредит и лизинг от банков-партнёров — решение по финансированию
                  прямо в салоне.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Выкуп, обмен и комиссионная продажа авто — вы выбираете
                  формат, мы помогаем с реализацией.
                </p>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={`${SITE_URL}/vykup-avto/`}
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Узнать условия выкупа и обмена
              </a>
            </div>
          </div>

          <div className="h-[360px] sd:h-[420px] bg-[#101010] rounded-[22px] border border-white/5 overflow-hidden">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: reviewsEmbedHtml }}
            />
          </div>
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
