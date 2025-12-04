// /components/MainSections/NewCarsSection.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DAYS_RANGE = 10; // ← сколько дней считать "новинками"

const formatPrice = (value) =>
  new Intl.NumberFormat("ru-RU").format(Number(value || 0));

const calcCredit = (byn) => {
  if (!byn) return 0;
  const termYears = 5; // пример: кредит на 5 лет
  const months = termYears * 12;
  return Math.round(byn / months);
};

const calcLeasing = (byn) => {
  if (!byn) return 0;
  const termYears = 4; // пример: лизинг на 4 года
  const months = termYears * 12;
  return Math.round(byn / months);
};

export default function NewCarsSection() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`/api/new-cars?days=${DAYS_RANGE}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Ошибка загрузки новинок");
        const data = await res.json();
        setCars(data.cars || []);
      } catch (e) {
        console.error(e);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading || !cars.length) return null;

  return (
    <section className="sd:mt-16 xz:mt-10 pt-16 sd:pb-32 xz:pb-4 bg-white">
      <div className="container mx-auto">
        {/* H2 — заголовок секции */}
        <h2 className="sd:text-center xz:text-left text-[32px] sd:text-[44px] font-semibold text-[#0E4D1E] mb-6 sd:mb-10">
          Новинки
        </h2>

        {/* CAROUSEL */}
        <div className="w-full mx-auto">
          <div
            className="
              carousel carousel-center rounded-box w-full
              sd:mx-auto sd:max-w-6xl pb-4 mx-auto
              overflow-x-auto snap-x snap-mandatory
            "
          >
            {cars.map((car) => {
              // --- ПАРСИМ ИЗОБРАЖЕНИЯ ---
              let imagesArr = [];
              try {
                if (Array.isArray(car.images)) {
                  imagesArr = car.images;
                } else if (typeof car.images === "string") {
                  imagesArr = JSON.parse(car.images || "[]");
                }
              } catch (err) {
                console.error("Ошибка парсинга изображений", err);
                imagesArr = [];
              }

              const firstImage = imagesArr[0] || null;
              const imageSrc = firstImage
                ? `/uploads/${firstImage.thumbnail || firstImage.original || ""}`
                : "/logo/logo2.webp";

              const creditMonth = calcCredit(car.priceBYN);
              const leasingMonth = calcLeasing(car.priceBYN);

              return (
                <div
                  key={car.id}
                  className="carousel-item xz:w-[260px] sd:w-[430px] sd:mx-3 xz:mx-1 snap-start"
                >
                  <article className="relative w-full rounded-[22px] shadow-xl overflow-hidden">
                    {/* Вся карточка — высокое фото */}
                    <div className="relative w-full h-[420px] sd:h-[580px]">
                      <img
                        src={imageSrc}
                        alt={car.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />

                      {/* тёмный градиент, чтобы читался текст */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/65" />

                      {/* ВЕРХ — вся информация (название, цена, кредит/лизинг) */}
                      <div className="absolute inset-x-4 top-4 space-y-3">
                        <div>
                          <h3 className="text-white text-lg sd:text-xl font-semibold drop-shadow-md">
                            {car.title}
                          </h3>
                          <p className="mt-1 text-xs sd:text-sm text-white/85 drop-shadow-md">
                            {formatPrice(car.priceUSD)} USD /{" "}
                            {formatPrice(car.priceBYN)} BYN
                          </p>
                        </div>

                        <div className="flex xz:flex-col sd:flex-row gap-3 justify-between">
                          <div className="flex-1">
                            <div className="rounded-full border border-white/80 bg-black/35 px-4 py-2 text-center text-[11px] sd:text-xs text-white shadow-md">
                              <p>Кредит: {formatPrice(creditMonth)} BYN</p>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="rounded-full border border-white/80 bg-black/35 px-4 py-2 text-center text-[11px] sd:text-xs text-white shadow-md">
                              <p>Лизинг: {formatPrice(leasingMonth)} BYN</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* НИЗ — кнопка Подробнее, как на макете (внизу карточки) */}
                      <div className="absolute inset-x-6 bottom-5">
                        <Link
                          href={`/catalog/${car.id}/${car.titleLink}`}
                          prefetch
                          className="btn w-full rounded-full bg-white text-[#115223] border-none text-sm sd:text-base font-semibold shadow-lg"
                        >
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Кнопка "Каталог" снизу */}
        <div className="container mx-auto mt-6 sd:mt-10 mb-4">
          <div className="flex justify-center">
            <Link
              href="/catalog/"
              prefetch
              className="btn rounded-full border-none bg-[#115223] hover:bg-[#0A3514] text-white w-full sd:w-[60%] py-3 text-sm sd:text-base tracking-wide"
            >
              Каталог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
