// /app/kontakty/page.js — ПОЛНОСТЬЮ

import React from "react";
import Image from "next/image";
import phoneNumbers, {
  companyInfo,
  mapLinks,
} from "@/config/config";
import Otzyvy from "@/components/MainSections/Otzyvy";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

// Новый iframe Яндекс-карты (Куйбышева, 40)
const mapEmbedHtml = `
<div style="position:relative;overflow:hidden;width:100%;height:100%;border-radius:18px;">
  <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;left:-9999px;">Минск</a>
  <a href="https://yandex.by/maps/157/minsk/house/Zk4YcwBoSUMDQFtpfXVzcH1iYw==/?ll=27.577695%2C53.920753&utm_medium=mapframe&utm_source=maps&z=16.9" style="color:#eee;font-size:12px;position:absolute;top:14px;left:-9999px;">Улица Куйбышева, 40 — Яндекс Карты</a>
  <iframe src="https://yandex.by/map-widget/v1/?ll=27.577695%2C53.920753&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY4MTk1ORJB0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0LLRg9C70ZbRhtCwINCa0YPQudCx0YvRiNCw0LLQsCwgNDAiCg3en9xBFTmvV0I%2C&z=16.9"
          width="100%"
          height="100%"
          frameborder="1"
          allowfullscreen="true"
          style="position:relative;border:0;border-radius:18px;box-sizing:border-box;">
  </iframe>
</div>
`;

export const metadata = {
  title:
    "Контакты автосалона на ул.Куйбышева 40 | Купить бу авто в Минске | Лизинг и Кредит на авто с пробегом | Покупка, продажа, обмен",
  description: `ᐈ ⭐ Контакты - Автосалон на ул.Куйбышева 40: купить или продать автомобиль быстро ⚡ Кредит и лизинг на б/у авто ⚡ Большой выбор автомобилей ⚡ Помощь в выборе авто ⭐ Оформление в день подачи ⭐ Без взноса ✓ Без справок и поручителей ➤➤➤ До 10 лет ☎️ ${phoneNumbers.mainPhone} Автосалон в Минске ⭐ Нас советуют друзьям 🔥 Звоните прямо сейчас!`,
  alternates: {
    canonical: `${SITE_URL}/kontakty/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/kontakty/`,
    title:
      "Контакты автосалона на ул.Куйбышева 40 — телефон, адрес, схема проезда в Минске",
    description:
      "Свяжитесь с автосалоном на ул.Куйбышева 40 в Минске: телефон, адрес, режим работы, схема проезда и форма обратной связи.",
    images: [
      {
        url: `${SITE_URL}/fon/contacts-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Контакты автосалона на ул.Куйбышева 40 в Минске — парковка и автомобили с пробегом",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Контакты автосалона на ул.Куйбышева 40 — телефон и адрес автосалона бу авто в Минске",
    description:
      "Автосалон «на ул.Куйбышева 40» в Минске: как доехать, по каким телефонам звонить и когда мы работаем.",
    images: [`${SITE_URL}/fon/contacts-hero.webp`],
  },
  keywords: [
    "контакты Автосалон на ул.Куйбышева 40",
    "автосалон на ул.Куйбышева 40 телефон",
    "адрес автосалона бу авто Минск",
    "схема проезда автосалона",
    "как доехать до автосалона Минск",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Автосалон на ул.Куйбышева 40",
  url: `${SITE_URL}/kontakty/`,
  image: `${SITE_URL}/fon/contacts-hero.webp`,
  telephone: phoneNumbers.mainPhone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BY",
    addressLocality: "Минск",
    streetAddress: companyInfo.visitAddress,
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
                  src="/logo/logo.webp"
                  alt="на ул.Куйбышева 40 логотип"
                  width={72}
                  height={72}
                  className="w-16 h-16 sd:w-20 sd:h-20"
                />
                <div className="text-xs sd:text-sm uppercase tracking-[0.2em] text-gray-300">
                  <span className="block">автосалон с пробегом</span>
                  <span className="block text-[#00ff5a]">на ул.Куйбышева 40 • Минск</span>
                </div>
              </div>

              <h1 className="mt-7 sd:mt-8 font-semibold uppercase sd:text-[44px] sd:leading-[1.05] xz:text-[30px] xz:leading-[1.2] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <span className="block text-gray-200 text-[13px] sd:text-[15px] font-normal tracking-[0.16em] mb-3">
                  есть вопросы по покупке, продаже или обмену авто?
                </span>
                <span className="block text-white">
                  Контакты автосалона{" "}
                  <span className="text-[#00ff5a]">на ул.Куйбышева 40</span>
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
                  href={mapLinks.yandexRoute}
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
                    <strong>Адрес:</strong> {companyInfo.visitAddress} — удобный
                    подъезд и комфортный осмотр авто.
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
                    кредит, лизинг, выкуп, обмен, комиссионная продажа, подбор
                    авто.
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
                        адрес для посещения
                      </p>
                      <p className="text-base font-semibold">
                        {companyInfo.visitAddress}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        Удобное расположение и комфортные условия осмотра
                        автомобилей.
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

      {/* Контактные данные и реквизиты — три блока */}
      <section className="container mx-auto mt-10 sd:mt-14">
        <div className="grid gap-6 sd:grid-cols-3">
          {/* Адрес для посещения */}
          <div className="relative overflow-hidden rounded-3xl bg-[#1b1b1b] border border-white/5 px-5 py-6 sd:px-6 sd:py-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-[#03481E]/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-base sd:text-lg font-semibold mb-2">
                Адрес для посещения
              </h2>
              <p className="text-sm text-gray-200 mb-2">
                {companyInfo.visitAddress}
              </p>
              <p className="text-xs text-gray-400">
                Здесь вы можете осмотреть автомобили, обсудить условия покупки,
                кредита, лизинга, обмена и выкупа.
              </p>
            </div>
          </div>

          {/* Юридический адрес */}
          <div className="relative overflow-hidden rounded-3xl bg-[#1b1b1b] border border-white/5 px-5 py-6 sd:px-6 sd:py-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-[#03481E]/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-base sd:text-lg font-semibold mb-2">
                Юридический адрес
              </h2>
              <p className="text-sm text-gray-200">
                {companyInfo.companyName}
              </p>
              <p className="text-sm text-gray-200 mt-1">
                УНП {companyInfo.unp}
              </p>
              <p className="text-sm text-gray-200 mt-1">
                {companyInfo.legalAddress}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Адрес для официальной корреспонденции и юридических документов.
              </p>
            </div>
          </div>

          {/* Банковские реквизиты */}
          <div className="relative overflow-hidden rounded-3xl bg-[#1b1b1b] border border-white/5 px-5 py-6 sd:px-6 sd:py-7 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-[#03481E]/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-base sd:text-lg font-semibold mb-2">
                Банковские реквизиты
              </h2>
              <p className="text-sm text-gray-200">
                Банк: {companyInfo.bankName}
              </p>
              <p className="text-sm text-gray-200 mt-1">
                {companyInfo.bankAddress}
              </p>
              <p className="text-sm text-gray-200 mt-1">
                БИК: {companyInfo.bik}
              </p>
              <p className="text-sm text-gray-200 mt-1 break-all">
                р/с: {companyInfo.account}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Реквизиты для безналичных расчетов и договоров.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Карта и как добраться */}
      <section id="map" className="container mx-auto mt-12 sd:mt-16">
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
                  На автомобиле — ориентируйтесь на адрес{" "}
                  <strong>{companyInfo.visitAddress}</strong>. Удобный подъезд и
                  парковочные места рядом.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                <p>
                  Общественный транспорт — остановка «Куйбышева», далее 3–5
                  минут пешком до бизнес-центра и входа.
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
                href={mapLinks.yandexRoute}
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

      {/* Блок "Почему нас выбирают" + ОТДЕЛЬНО отзывы-карусель */}
      <section className="container mx-auto mt-12 sd:mt-16">
        <div className="rounded-[22px] bg-[#1a1a1a] border border-white/5 px-5 py-6 sd:px-7 sd:py-7">
          <h2 className="text-[22px] sd:text-[26px] font-semibold mb-4">
            Почему нас выбирают
          </h2>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex gap-2">
              <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
              <p>
                Большой выбор автомобилей с пробегом в наличии — можно осмотреть
                несколько вариантов за один визит.
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
                Выкуп, обмен и комиссионная продажа авто — вы выбираете формат,
                мы помогаем с реализацией.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Отзывы — карусель */}
      <Otzyvy />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default Page;
