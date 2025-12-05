// /app/cookie-policy/page.jsx
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Политика обработки файлов cookie — ООО АНТВЕНТГОЛД",
  description:
    "Политика обработки файлов cookie для ООО АНТВЕНТГОЛД. Информация о целях использования cookie, типах и способах управления ими.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/cookie-policy` },
  openGraph: {
    title: "Политика обработки файлов cookie — ООО АНТВЕНТГОЛД",
    description:
      "Политика обработки файлов cookie для ООО АНТВЕНТГОЛД. Информация о целях использования cookie, типах и способах управления ими.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cookie-policy`,
    siteName: "ООО АНТВЕНТГОЛД",
    type: "website",
  },
};

const ORG_NAME = 'ООО АНТВЕНТГОЛД';
const ORG_ADDRESS = 'г. Минск, ул. пер. С.Ковалевской, д.54 к.1 каб.303-127';
const ORG_INN = 'УНП 193846922';
const EMAIL = 'Avg30@bk.ru';
const VERSION = 'Положение № 10/11/0-2025';
const UPDATED = '10 ноября 2025';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Политика обработки файлов cookie",
  "url": `${process.env.NEXT_PUBLIC_BASE_URL}/cookie-policy`,
  "datePublished": "2025-10-31",
  "dateModified": "2025-10-31",
  "publisher": {
    "@type": "Organization",
    "name": ORG_NAME,
    "url": process.env.NEXT_PUBLIC_BASE_URL || "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "пер. С.Ковалевской, д.54 к.1 каб.303-127",
      "addressLocality": "Минск",
      "addressCountry": "BY"
    },
    "email": `mailto:${EMAIL}`,
    "legalName": ORG_NAME
  }
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-28 pb-24 bg-transparent">
      {/* JSON-LD for SEO / AEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        {/* Юридическая шапка */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Политика в отношении обработки файлов cookie
          </h1>
         
          <p className="mt-1 text-sm text-gray-300">
            {ORG_NAME} ({ORG_INN}) — {ORG_ADDRESS}
          </p>
        </header>

        <article className="prose prose-neutral max-w-none text-white">
          <section>
            <h2>1. Общие положения</h2>
            <p>
              {ORG_NAME} обязуется защищать персональные данные и соблюдать права субъектов персональных данных.
              Настоящая Политика разъясняет, какие файлы cookie используются на сайте, с какими целями и как Пользователь
              может управлять ими. Политика основана на положениях действующего законодательства Республики Беларусь и
              принципах прозрачности обработки данных.
            </p>
          </section>

          <section>
            <h2>2. Что такое cookies</h2>
            <p>
              Cookie — это небольшие текстовые файлы, которые сохраняются в браузере пользователя при посещении сайта.
              Они помогают запомнить настройки, обеспечить корректную работу функционала, собирать статистику и показывать
              релевантную рекламу.
            </p>
          </section>

          <section>
            <h2>3. Цели обработки cookies</h2>
            <ul>
              <li>Обеспечение работы сайта и его базовой функциональности (аутентификация, сессии, формы);</li>
              <li>Аналитика и улучшение качества сайта (сбор обобщенных статистических данных);</li>
              <li>Маркетинг и персонализация (показы релевантной рекламы, ремаркетинг).</li>
            </ul>
            <p className="text-sm text-gray-400">
              Правовая основа обработки: согласие пользователя (для аналитических и маркетинговых cookies) и необходимые
              технические cookies, обеспечивающие выполнение договора/корректную работу сайта.
            </p>
          </section>

          <section>
            <h2>4. Категории файлов cookie</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 px-3 text-sm text-gray-200">Категория</th>
                    <th className="py-2 px-3 text-sm text-gray-200">Примеры / сервисы</th>
                    <th className="py-2 px-3 text-sm text-gray-200">Цель</th>
                    <th className="py-2 px-3 text-sm text-gray-200">Срок хранения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 align-top text-gray-100">Технические (обязательные)</td>
                    <td className="py-3 px-3 text-gray-100">Сессионные идентификаторы, настройки интерфейса</td>
                    <td className="py-3 px-3 text-gray-100">Обеспечение работы сайта и его функционала</td>
                    <td className="py-3 px-3 text-gray-100">До 1 года / сессионные — пока открыта сессия</td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 align-top text-gray-100">Аналитические</td>
                    <td className="py-3 px-3 text-gray-100">
                      Яндекс.Метрика, Google Analytics
                    </td>
                    <td className="py-3 px-3 text-gray-100">Сбор статистики посещений и поведенческих показателей</td>
                    <td className="py-3 px-3 text-gray-100">Зависит от сервиса (обычно 2 года и более)</td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 align-top text-gray-100">Маркетинговые</td>
                    <td className="py-3 px-3 text-gray-100">
                      Google Ads, рекламные сети, пиксели ретаргетинга
                    </td>
                    <td className="py-3 px-3 text-gray-100">Ремаркетинг и персонализация рекламных показов</td>
                    <td className="py-3 px-3 text-gray-100">Зависит от сторонних сервисов (обычно до 2 лет)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              Примечание: точные имена cookie и сроки хранения зависят от настроек использующихся сервисов.
              Для аналитики и рекламы мы используем внешние сервисы — их политики перечислены ниже.
            </p>
          </section>

          <section>
            <h2>5. Внешние сервисы и ссылки на их политики</h2>
            <ul>
              <li>
                Яндекс.Метрика — политика конфиденциальности:{" "}
                <a className="underline text-primary" href="https://yandex.ru/legal/confidential/" target="_blank" rel="noreferrer">
                  https://yandex.ru/legal/confidential/
                </a>
              </li>
              <li>
                Google — политика конфиденциальности:{" "}
                <a className="underline text-primary" href="https://policies.google.com/privacy?hl=ru" target="_blank" rel="noreferrer">
                  https://policies.google.com/privacy?hl=ru
                </a>
              </li>
              <li>
                Политики браузеров (удаление/блокировка cookie): Firefox, Chrome, Safari, Opera, Edge.
              </li>
            </ul>
            <div className="mt-2">
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>
                  Firefox:{" "}
                  <a className="underline text-primary" href="https://support.mozilla.org/ru/kb/udalenie-kukov-dlya-udaleniya-informacii-kotoruyu-" target="_blank" rel="noreferrer">
                    https://support.mozilla.org/ru/...
                  </a>
                </li>
                <li>
                  Chrome:{" "}
                  <a className="underline text-primary" href="https://support.google.com/chrome/answer/95647?hl=ru" target="_blank" rel="noreferrer">
                    https://support.google.com/chrome/answer/95647?hl=ru
                  </a>
                </li>
                <li>
                  Safari:{" "}
                  <a className="underline text-primary" href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
                    https://support.apple.com/ru-ru/guide/safari/...
                  </a>
                </li>
                <li>
                  Opera:{" "}
                  <a className="underline text-primary" href="https://help.opera.com/ru/latest/web-preferences/#Управление-файлами-cookie" target="_blank" rel="noreferrer">
                    https://help.opera.com/ru/...
                  </a>
                </li>
                <li>
                  Microsoft Edge:{" "}
                  <a className="underline text-primary" href="https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">
                    https://support.microsoft.com/ru-ru/...
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-10">
            <h2>6. Как управлять cookie на сайте</h2>
            <ol>
              <li>
                При первом визите на сайт откроется окно с выбором cookie. Вы можете:
                <ul>
                  <li><b>Принять все</b> — разрешить все категории (аналитика + маркетинг)</li>
                  <li><b>Отказать</b> — оставить только технические (необходимые) cookie</li>
                  <li><b>Настройки</b> — выбрать аналитические и/или маркетинговые отдельно</li>
                </ul>
              </li>
              <li>
                Если вы нажали крестик (закрыли окно), оно не будет показано снова в течение 5 минут.
              </li>
              <li>
                Вы можете в любой момент удалить ранее сохранённые cookie через настройки браузера или очистить cookie сайта.
              </li>
            </ol>
          </section>

          <section className="mt-10">
            <h2>7. Передача и раскрытие данных третьим лицам</h2>
            <p>
              Для реализации аналитики и маркетинга {ORG_NAME} использует сторонние сервисы. При использовании таких сервисов
              часть обезличенных данных может передаваться третьим лицам в соответствии с их политиками конфиденциальности.
            </p>
          </section>

          <section>
            <h2>8. Безопасность хранения</h2>
            <p>
              Мы применяем организационные и технические меры для защиты персональных данных от несанкционированного доступа
              и утраты. Однако абсолютной гарантии безопасности в интернете дать нельзя — мы просим пользователей также
              соблюдать осторожность при передаче личной информации.
            </p>
          </section>

          <section className="mt-10">
            <h2>9. Порядок обращения и контакты</h2>
            <p>
              Вопросы по использованию файлов cookie и обработке персональных данных направляйте на почту:
              <a className="underline text-primary ml-1" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {ORG_NAME} — {ORG_ADDRESS}. {ORG_INN}.
            </p>
          </section>

          <section className="mt-10">
            <h2>10. Изменения в Политике</h2>
            <p>
              Политика может обновляться. Дата последней редакции указана в начале документа. При существенных изменениях
              мы уведомим пользователей на сайте.
            </p>
          </section>

          <section className="mt-12">
            <Link href="/" className="underline text-primary">
              На главную
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
