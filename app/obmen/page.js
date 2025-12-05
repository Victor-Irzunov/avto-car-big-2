// /app/obmen/page.jsx

import phoneNumbers from "@/config/config";
import ObmenArticle from "@/components/Articles/ObmenArticle";
import PartnersSection2 from "@/components/MainSections/PartnersSection2";

const canonical = `${process.env.NEXT_PUBLIC_BASE_URL}/obmen`;

const keywords = [
  "трейд ин авто",
  "обмен авто",
  "трейд ин авто с пробегом",
  "авто в трейд ин",
  "авто которые предлагают на обмен авто",
  "машина в трейд ин",
  "обмен авто на авто",
  "обмен авто минск",
  "авто на авто",
  "авто авто",
  "авто обмен",
  "trade in авто",
  "трейд ин на авто с пробегом",
  "trade in авто с пробегом",
  "trade in машины",
];

export const metadata = {
  title: "Трейд-ин авто в Минске — обмен авто на авто за 1 час | AvtoCar",
  description:
    "Трейд-ин авто в Минске в автосалоне «AvtoCar». Обмен авто на авто с пробегом за ~1 час: честная оценка, возможность доплаты или кредита, большой выбор машин в трейд-ин. Приезжайте в Минск, ул. Куйбышева 40, паркинг 4 этаж.",
  keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    type: "website",
    url: canonical,
    title: "Трейд-ин авто в Минске — обмен авто на авто за 1 час | AvtoCar",
    description:
      "Обмен авто в Минске по системе trade-in в автосалоне «AvtoCar». Оценим машину по рыночной стоимости и подберём авто на обмен из большого ассортимента.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/trade-in/tradein-hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Трейд-ин авто в Минске — обмен авто на авто в автосалоне AvtoCar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Трейд-ин авто в Минске — обмен авто на авто за 1 час | AvtoCar",
    description:
      "Обмен авто на авто в Минске по системе trade-in. Быстрая оценка, честная цена и оформление сделки за один визит.",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/trade-in/tradein-hero-desktop.webp`,
    ],
  },
};

const Page = () => {
  const phone = phoneNumbers.mainPhone;
  const phoneLink = phoneNumbers.mainPhoneLink;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Автосалон AvtoCar",
    url: canonical,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Минск",
      streetAddress: "ул. Куйбышева 40, паркинг 4 этаж",
      addressCountry: "BY",
    },
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/trade-in/tradein-hero-desktop.webp`,
    makesOffer: {
      "@type": "Offer",
      name: "Трейд-ин авто с пробегом в Минске",
      description:
        "Обмен авто на авто (trade-in) в автосалоне AvtoCar: оценка автомобиля, подбор машины на обмен, оформление сделки и кредита в один визит.",
      areaServed: {
        "@type": "City",
        name: "Минск",
      },
    },
    sameAs: [],
  };

  return (
    <main className="bg-[#222222] text-white sd:pt-24 xz:pt-28 pb-20 min-h-screen">
      {/* HERO: трейд-ин авто / обмен авто на авто */}
      <section className="container mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-[#050809] sd:px-14 xz:px-6 sd:py-16 xz:py-10">
          {/* Фоновое изображение: мобильное / десктоп */}
          <div
            className="absolute inset-0 bg-cover bg-center sd:bg-[length:120%] bg-[url('/trade-in/obmen-avto-na-avto.webp')] sd:bg-[url('/trade-in/tradein-hero-desktop.webp')]"
            aria-hidden="true"
          />

          {/* Тёмный градиент поверх фона, чтобы текст читался */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,90,0.1),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.3),#020405)]"
            aria-hidden="true"
          />

          {/* Дополнительные мягкие блики */}
          <div
            className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#03481E]/40 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#00ff5a]/15 blur-3xl"
            aria-hidden="true"
          />

          {/* Контент поверх фона */}
          <div className="relative grid sd:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] gap-10 items-center">
            {/* Левая колонка: текст и CTA */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-[9px] sd:text-sm uppercase tracking-[0.16em] text-gray-200 border border-white/10 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00ff5a]" />
                трейд-ин авто с пробегом • Минск
              </div>

              <h1 className="mt-6 font-semibold font-system uppercase sd:text-[50px] sd:leading-[1.05] xz:text-[36px] xz:leading-[1.2] drop-shadow-[0_8px_26px_rgba(0,0,0,0.7)]">
                <span className="block text-gray-300 text-[12px] sd:text-[16px] font-normal tracking-[0.12em] mb-2">
                  обмен авто на авто за один визит
                </span>
                <span className="block text-white">
                  Трейд-ин авто
                  Avto<span className="text-[#00ff5a]">Car</span>
                </span>
                <span className="block text-[20px] sd:text-[24px] normal-case mt-4 font-normal text-gray-200">
                  Обмен старого авто на машину в трейд-ин за ~1 час
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm sd:text-base text-gray-100/90">
                Привозите автомобиль в автосалон, мы бесплатно оценим его по
                рыночной стоимости, предложим{" "}
                <strong>авто в трейд-ин</strong> на обмен и при необходимости
                оформим кредит или лизинг на недостающую сумму.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${phoneLink}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#03481E] px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white shadow-lg shadow-[#03481E]/60 hover:bg-[#046828] transition w-full"
                >
                  Позвонить и оценить авто
                </a>

                <a
                  href="#tradein-form"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white/90 hover:bg-white/5 transition backdrop-blur-[2px] w-full"
                >
                  Оставить заявку на обмен
                </a>
                <a
                  href="/catalog"
                  className="inline-flex items-center justify-center rounded-full bg-[#03481E] px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white shadow-lg shadow-[#03481E]/60 hover:bg-[#046828] transition w-full"
                >
                  Посмотреть авто
                </a>
              </div>

              <div className="mt-6 grid gap-3 text-xs sd:text-sm text-gray-100">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    Трейд-ин авто с пробегом любой марки — от бюджетных до
                    премиальных.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>
                    Возможен{" "}
                    <strong className="font-semibold">
                      обмен авто на авто с доплатой или без доплаты
                    </strong>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 min-w-1.5 rounded-full bg-[#00ff5a]" />
                  <p>Оформление кредита и страховки прямо в салоне.</p>
                </div>
              </div>
            </div>

            {/* Правая колонка — просто место под фон, без лишних элементов */}
            <div className="hidden sd:block" />
          </div>
        </div>
      </section>

      {/* Основной контент про трейд-ин авто */}
      <section className="sd:container mx-auto">
        <ObmenArticle />
      </section>

      {/* Партнёры по кредиту и лизингу */}
      <section className="sd:container mx-auto">
        <PartnersSection2 />
      </section>

      {/* JSON-LD для AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};

export default Page;
