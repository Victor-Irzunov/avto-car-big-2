// my-app/app/catalog/[id]/[title]/page.js
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import phoneNumbers from "@/config/config";
import { prisma } from "@/lib/prisma";
import SimilarCars from "@/components/similarCars/SimilarCars";
import PhoneBottom from "@/components/phoneBotton/PhoneBottom";
import BackToPrev from "@/components/common/BackToPrev";
import BtnComp from "@/components/btn/BtnComp";

// Клиентские виджеты
const GalleryComponent = dynamic(
  () => import("@/components/GalleryComponent/GalleryComponent"),
  { ssr: false }
);
const MapComp = dynamic(() => import("@/components/map/MapComp"), {
  ssr: false,
});

// --- Data layer ---
async function getData(id) {
  const car = await prisma.car.findUnique({
    where: { id: parseInt(id, 10) },
    include: { brand: true, model: true, generation: true },
  });
  if (!car) notFound();
  return car;
}

// Лёгкий запрос только для мета
async function getMeta(id) {
  const car = await prisma.car.findUnique({
    where: { id: parseInt(id, 10) },
    select: { title: true, titleLink: true },
  });
  if (!car) notFound();
  return car;
}

// --- SEO ---
export async function generateMetadata({ params }) {
  try {
    const car = await getMeta(params.id);
    const title = `${car.title} купить в Минске: Лизинг и Кредит | Автосалон «AvtoCar»`;
    const description = `ᐈ ⭐ ${car.title} в прекрасном состоянии. Кредит и лизинг на б/у авто. Звоните!`;
    const canonical = `/catalog/${params.id}/${car.titleLink}`;

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: "website",
        images: ["/fon/fon6.webp"],
      },
    };
  } catch {
    return { title: "Автомобиль не найден", robots: { index: false } };
  }
}

// --- Page ---
export default async function Page({ params, searchParams }) {
  const data = await getData(params.id);

  // Если slug не совпал — редиректим на канонический URL
  if (params.title && params.title !== data.titleLink) {
    redirect(`/catalog/${params.id}/${data.titleLink}`);
  }

  const lite = "lite" in (searchParams || {});

  return (
    <main className="sd:py-20 xz:py-7 min-h-screen sd:mt-0 xz:mt-24 bg-white">
      <section className="relative">
        <div className="container mx-auto">
          <BackToPrev />
          <div className="grid sd:grid-cols-3 xz:grid-cols-1 gap-4">
            {/* Левая (основная) колонка */}
            <div className="sd:col-span-2 xz:col-span-1 bg-white/85 rounded-3xl sd:py-8 xz:py-5 sd:px-10 xz:px-2 text-secondary">
              <GalleryComponent images={JSON.parse(data.images)} title={data.title} />

              {/* Блок цены и кратких хар-к — для мобилы */}
              <article className="sd:hidden xz:block mt-12">
                <div className="text-xs flex justify-end space-x-1.5 mb-1">
                  <div className="text-black flex space-x-1">
                    <Image src="/svg/check.svg" alt="Лизинг" width={15} height={15} />
                    <p>Лизинг</p>
                  </div>
                  <div className="text-black flex space-x-1">
                    <Image src="/svg/check.svg" alt="Кредит" width={15} height={15} />
                    <p>Кредит</p>
                  </div>
                </div>

                <h1 className="text-2xl font-semibold uppercase mt-6">
                  {data.title}, {data.year}
                  <span className="lowercase">г.</span>
                </h1>

                <div className="flex font-semibold text-xl mt-3 font-system uppercase">
                  <p>{data.priceUSD} USD</p>&nbsp; / &nbsp;
                  <p>{data.priceBYN} BYN</p>
                </div>

                {/* ТЕХ. ХАРАКТЕРИСТИКИ — МОБИЛЬНЫЕ */}
                <h2 className="text-xl text-secondary font-semibold mt-5 font-system">
                  Технические характеристики
                </h2>
                <ul className="text-[#333333] text-sm mt-4 space-y-1.5 font-system">
                  <li className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-semibold ">Год</span>
                    <span className="flex-1 border-b border-gray-200 h-2.5" />
                    <span className="text-secondary text-right">{data.year} г</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-semibold ">Пробег</span>
                    <span className="flex-1 border-b border-gray-200 h-2.5" />
                    <span className="text-secondary text-right">{data.mileage}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-semibold ">Тип двигателя</span>
                    <span className="flex-1 border-b border-gray-200 h-2.5" />
                    <span className="text-secondary text-right">{data.engine}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-semibold ">Коробка передач</span>
                    <span className="flex-1 border-b border-gray-200 h-2.5" />
                    <span className="text-secondary text-right">{data.transmission}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-semibold ">Объём двигателя</span>
                    <span className="flex-1 border-b border-gray-200 h-2.5" />
                    <span className="text-secondary text-right">
                      {data.engineCapacity}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="whitespace-nowrap font-semibold ">Привод</span>
                    <span className="flex-1 border-b border-gray-200 h-2.5" />
                    <span className="text-secondary text-right">{data.drive}</span>
                  </li>
                </ul>

                {/* КОМПЛЕКТАЦИЯ — МОБИЛЬНАЯ */}
                <h3 className="text-xl text-secondary font-semibold mt-6 font-system">
                  Комплектация
                </h3>
                <ul className="mt-4 text-sm text-[#333333] space-y-1.5 font-system">
                  {data.salon && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Салон</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.salon.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.safety && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Система безопасности</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.safety.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.airbags && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Подушки</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.airbags.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.assistance && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Ассистенты</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.assistance.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.exterior && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Экстерьер</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.exterior.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.interior && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Интерьер</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.interior.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.lights && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Фары</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.lights.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.climate && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Климат</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.climate.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.heating && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Обогрев</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.heating.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.multimedia && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Мультимедиа</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.multimedia.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                  {data.comfort && (
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Комфорт</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-xs text-secondary/70 text-right">
                        {data.comfort.split(",").join(" | ")}
                      </span>
                    </li>
                  )}
                </ul>
              </article>

              {/* Описание и CTA */}
              <article className="sd:mt-12 xz:mt-7 font-system">
                <h2 className="sd:text-2xl xz:text-lg font-semibold">Описание</h2>
                <div className="space-y-2 mt-3 sd:text-base xz:text-sm">
                  {data.description.split(".").map((s, i) =>
                    s.trim() ? (
                      <p key={i} className="leading-relaxed">
                        {s.trim()}.
                      </p>
                    ) : null
                  )}
                </div>

                <div className="grid sd:grid-cols-3 xz:grid-cols-1 gap-8 mt-8">
                  <p className="text-[10px]">
                    ООО «АнтВентГолд». УНП: 193614538. г. Минск,
                    ул. пер. С. Ковалевской, д.54 к.1 каб.303-106
                  </p>

                  <div className="xz:w-full sd:w-auto flex sd:flex-row xz:flex-col justify-end sd:space-x-4 xz:space-x-0 sd:space-y-0 xz:space-y-3 col-span-2">
                    <div className="dropdown dropdown-top dropdown-end text-white">
                      <button
                        tabIndex={0}
                        className="btn btn-outline btn-secondary px-10 rounded-2xl w-full"
                      >
                        <svg
                          className="w-6 h-6 animate-ringing"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z"></path>
                        </svg>
                        Позвонить
                      </button>
                      <div
                        tabIndex={0}
                        className="dropdown-content bg-[#222222] text-white z-[1] px-6 py-8 shadow-slate-400 w-[300px] text-center rounded-xl"
                      >
                        <div>
                          <Image
                            src="/logo/logo-white.webp"
                            alt="Логотип - продажа авто в кредит и лизинг"
                            width={80}
                            height={80}
                            className="mx-auto"
                          />
                        </div>
                        <p className="text-xl">Мы в Минске</p>
                        <div className="mt-5">
                          <Image
                            src="/svg/location-white.svg"
                            alt="Адрес автосалона"
                            width={30}
                            height={30}
                            className="mx-auto mb-2"
                          />
                          <a
                            href="https://yandex.by/maps/-/CDdkfUlz"
                            target="_blank"
                            className="mt-2 text-sm"
                          >
                            Минск, ул. Куйбышева 40, <br />
                            Паркинг 4 этаж
                          </a>
                        </div>
                        <div className="mt-5">
                          <Image
                            src="/svg/phone-white.svg"
                            alt="Телефон автосалона"
                            width={25}
                            height={25}
                            className="mx-auto mb-2"
                          />
                          <a
                            href={`tel:${phoneNumbers.secondaryPhoneLink}`}
                            className="font-light"
                          >
                            {phoneNumbers.secondaryPhone} МТС
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className=''>
                      <BtnComp title='Оставить заявку' index={111} wFull />
                    </div>

                    {/* <Link
                      href={`/credit/${data.id}/${data.titleLink}`}
                      prefetch
                      className="relative overflow-hidden xz:w-full sd:w-auto btn btn-primary text-white rounded-2xl text-lg"
                    >
                      Заявка на кредит
                      <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/0 transform translate-x-full animate-slide"></span>
                    </Link> */}
                  </div>
                </div>
              </article>
            </div>

            {/* Правая колонка */}
            <article className="bg-white/85 rounded-3xl sd:py-8 xz:py-5 sd:px-1 xz:px-2">
              <div>
                <div className="sd:block xz:hidden">
                  <div className="text-xs flex justify-end space-x-1.5 mb-1">
                    <div className="text-black flex space-x-1">
                      <Image src="/svg/check.svg" alt="Лизинг" width={15} height={15} />
                      <p>Лизинг</p>
                    </div>
                    <div className="text-black flex space-x-1">
                      <Image src="/svg/check.svg" alt="Кредит" width={15} height={15} />
                      <p>Кредит</p>
                    </div>
                  </div>
                  <h1 className="text-3xl font-semibold uppercase mt-6">
                    {data.title}, {data.year}
                    <span className="lowercase">г.</span>
                  </h1>

                  <div className="flex font-semibold text-3xl mt-3 font-system uppercase">
                    <p>{data.priceUSD} USD</p>&nbsp; / &nbsp;
                    <p>{data.priceBYN} BYN</p>
                  </div>

                  <p className="text-gray-400 text-[10px] uppercase mt-3 font-system font-light">
                    Артикль: {data.id}
                  </p>

                  {/* ТЕХ. ХАРАКТЕРИСТИКИ — ДЕСКТОП */}
                  <h2 className="text-xl text-secondary font-semibold mt-12 font-system">
                    Технические характеристики
                  </h2>

                  <ul className="mt-4 text-[#333333] text-sm space-y-1.5 font-system">
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Год</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-secondary text-right">{data.year} г</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Пробег</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-secondary text-right">{data.mileage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Тип двигателя</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-secondary text-right">{data.engine}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Коробка передач</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-secondary text-right">
                        {data.transmission}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Объём двигателя</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-secondary text-right">
                        {data.engineCapacity}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="whitespace-nowrap font-semibold ">Привод</span>
                      <span className="flex-1 border-b border-gray-200 h-2.5" />
                      <span className="text-secondary text-right">{data.drive}</span>
                    </li>
                  </ul>
                </div>

                {/* КОМПЛЕКТАЦИЯ — ДЕСКТОП */}
                <div className="sd:block xz:hidden">
                  <h3 className="text-xl text-secondary font-semibold mt-8 font-system">
                    Комплектация
                  </h3>

                  <ul className="mt-4 text-sm text-[#333333] space-y-1.5 font-system">
                    {data.salon && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Салон</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.salon.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.safety && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold">Система безопасности</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.safety.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.airbags && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Подушки</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.airbags.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.assistance && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Ассистенты</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.assistance.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.exterior && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Экстерьер</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.exterior.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.interior && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Интерьер</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.interior.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.lights && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Фары</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.lights.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.climate && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Климат</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.climate.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.heating && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Обогрев</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.heating.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.multimedia && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Мультимедиа</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.multimedia.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                    {data.comfort && (
                      <li className="flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold ">Комфорт</span>
                        <span className="flex-1 border-b border-gray-200 h-2.5" />
                        <span className="text-xs text-secondary/70 text-right">
                          {data.comfort.split(",").join(" | ")}
                        </span>
                      </li>
                    )}
                  </ul>

                  <div className="py-2 flex flex-col items-center justify-center h-full bg-gray-50 rounded-full mt-3">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/svg/check-green.svg"
                        alt="Проверенный продавец"
                        width={20}
                        height={20}
                      />
                      <p className="text-[#238657] text-sm">Проверенный продавец</p>
                    </div>
                    <p className="text-[9px]">автомобиль юридически чист</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {!lite && (
            <div className="bg-white/85 rounded-3xl sd:py-8 xz:py-5 sd:px-10 xz:px-2 text-secondary mt-14">
              <SimilarCars price={data.priceUSD} id={data.id} year={data.year} />
            </div>
          )}

          {/* <MapComp /> */}
        </div>
      </section>

      <PhoneBottom />
    </main>
  );
}

// ISR/SSG — перевыдача раз в минуту
export const revalidate = 60;
