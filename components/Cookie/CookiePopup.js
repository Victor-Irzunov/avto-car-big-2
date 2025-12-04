"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Сохранение/чтение cookie вручную (минимальная зависимость, высокая производительность)
 * Имя cookie: site_cookie_consent
 * Доп. имя cookie: site_cookie_closed_until (timestamp ms) — блокировка повторного показа при закрытии крестиком
 * Значение consent: JSON { necessary: true, analytics: boolean, marketing: boolean, acceptedAt: ISOString }
 * Срок: 365 дней (для consent)
 */

const COOKIE_NAME = "site_cookie_consent";
const CLOSED_UNTIL_COOKIE = "site_cookie_closed_until";
const COOKIE_EXPIRES_DAYS = 365;
const REOPEN_MS = 5 * 60 * 1000; // 5 минут

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Lax`;
}

function setCookieRaw(name, value, expiresUTC) {
  // value should be string already encoded if needed
  document.cookie = `${name}=${value};expires=${expiresUTC};path=/;SameSite=Lax`;
}

function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return matches ? decodeURIComponent(matches[2]) : null;
}

function removeCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`;
}

function dispatchConsentEvent(consent) {
  try {
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: consent })
    );
  } catch (e) {
    // ignore
  }
}

/**
 * Default consent state: necessary always true
 */
const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  acceptedAt: null,
};

export default function CookiePopup() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) If consent saved -> do not show
    const raw = getCookie(COOKIE_NAME);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setConsent(parsed);
        setVisible(false);
        dispatchConsentEvent(parsed);
        return;
      } catch (e) {
        // invalid consent cookie - clear it and continue
        removeCookie(COOKIE_NAME);
      }
    }

    // 2) Check closed-until cookie (from user closing with X)
    const closedUntilRaw = getCookie(CLOSED_UNTIL_COOKIE);
    if (closedUntilRaw) {
      const closedUntil = Number(closedUntilRaw);
      if (!Number.isNaN(closedUntil) && Date.now() < closedUntil) {
        // do not show now
        setVisible(false);
        return;
      } else {
        // expired -> remove and show
        removeCookie(CLOSED_UNTIL_COOKIE);
      }
    }

    // 3) No consent and not temporarily closed -> show popup
    setVisible(true);
  }, []);

  function saveConsent(newConsent) {
    const payload = {
      ...newConsent,
      necessary: true, // always true
      acceptedAt: new Date().toISOString(),
    };
    setCookie(COOKIE_NAME, JSON.stringify(payload), COOKIE_EXPIRES_DAYS);
    // remove any temporary closed-until marker (user made explicit choice)
    removeCookie(CLOSED_UNTIL_COOKIE);
    setConsent(payload);
    setVisible(false);
    dispatchConsentEvent(payload);
  }

  function handleAcceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }

  function handleRejectAll() {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  }

  function handleSaveSettings(e) {
    e.preventDefault();
    const form = e.target;
    const analytics = form.analytics.checked;
    const marketing = form.marketing.checked;
    saveConsent({ necessary: true, analytics, marketing });
  }

  function handleCloseTemporary() {
    // User clicked the cross — do NOT save consent, just hide temporarily.
    // Set a cookie with timestamp when it can be reopened.
    const reopenAt = Date.now() + REOPEN_MS;
    // set cookie to expire in 1 day (value is numeric timestamp)
    const d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    setCookieRaw(CLOSED_UNTIL_COOKIE, String(reopenAt), d.toUTCString());
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-[80]" aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Политика cookie"
        className="fixed left-1/2 -translate-x-1/2 bottom-6 z-[90] w-[95%] max-w-3xl"
      >
        <div className="bg-white rounded-lg border-2 border-violet-500 p-5 shadow-lg relative">
          {/* Close X */}
          <button
            aria-label="Закрыть"
            onClick={handleCloseTemporary}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl leading-none"
          >
            &times;
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <p className="text-gray-900 text-base leading-6">
                Для работы сайта используются технические, аналитические и маркетинговые cookie-файлы.
                Нажимая кнопку <b>«Принять все»</b>, вы даете согласие на обработку всех cookie-файлов.
                <span className="ml-1">
                  <Link href="/cookie-policy" className="underline text-primary" >
                    Подробнее о политике обработки файлов cookie
                  </Link>
                </span>
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col w-full md:w-auto space-y-3">
              <button
                onClick={handleAcceptAll}
                className="w-full md:w-48 py-2 rounded-md border border-violet-500 bg-violet-50 text-violet-800 font-medium"
              >
                Принять все
              </button>

              <button
                onClick={handleRejectAll}
                className="w-full md:w-48 py-2 rounded-md border border-violet-500 bg-white text-violet-800 font-medium"
              >
                Отказать
              </button>

              <button
                onClick={() => setShowSettings((s) => !s)}
                className="w-full md:w-48 py-2 rounded-md border-2 border-dashed border-violet-300 bg-white text-violet-800 font-medium"
                aria-expanded={showSettings}
              >
                Настройки
              </button>
            </div>
          </div>

          {/* Settings */}
          {showSettings && (
            <form onSubmit={handleSaveSettings} className="mt-4 border-t pt-4">
              <p className="text-sm text-gray-700 mb-3">
                Вы можете включить или отключить отдельные категории cookie. Технические cookies необходимы для работы сайта.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 rounded bg-gray-50 border">
                  <p className="font-semibold">Технические (обязательные)</p>
                  <p className="text-xs text-gray-500">Обеспечивают работу сайта. Отключить нельзя.</p>
                  <div className="mt-2">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" checked disabled />
                      <span>Включены</span>
                    </label>
                  </div>
                </div>

                <div className="p-3 rounded bg-gray-50 border">
                  <p className="font-semibold">Аналитические</p>
                  <p className="text-xs text-gray-500">Яндекс.Метрика, Google Analytics — помогают улучшать сайт.</p>
                  <div className="mt-2">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input name="analytics" type="checkbox" defaultChecked={consent.analytics} />
                      <span>Разрешить</span>
                    </label>
                  </div>
                </div>

                <div className="p-3 rounded bg-gray-50 border">
                  <p className="font-semibold">Маркетинговые</p>
                  <p className="text-xs text-gray-500">Ремаркетинг и персонализация рекламы.</p>
                  <div className="mt-2">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input name="marketing" type="checkbox" defaultChecked={consent.marketing} />
                      <span>Разрешить</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="submit"
                  className="py-2 px-4 rounded bg-violet-600 text-white font-medium"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // close settings but keep visible
                    setShowSettings(false);
                  }}
                  className="py-2 px-4 rounded border"
                >
                  Отмена
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
