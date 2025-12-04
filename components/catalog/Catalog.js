// /components/catalog/Catalog.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import phoneNumbers from "@/config/config";

// форматирование суммы
const formatPrice = (value) =>
  new Intl.NumberFormat("ru-RU").format(Number(value || 0));

// примерный расчёт кредита: 5 лет
const calcCredit = (byn) => {
  if (!byn) return 0;
  const termYears = 5;
  const months = termYears * 12;
  return Math.round(Number(byn) / months);
};

// примерный расчёт лизинга: 4 года
const calcLeasing = (byn) => {
  if (!byn) return 0;
  const termYears = 4;
  const months = termYears * 12;
  return Math.round(Number(byn) / months);
};

export const Catalog = ({ data, isAdmin }) => {
  const [visibleCars, setVisibleCars] = useState(6);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();

  const loadMoreCars = () =>
    setVisibleCars((prevVisible) => prevVisible + 6);

  const toggleDropdown = (carId) =>
    setOpenDropdown((prev) => (prev === carId ? null : carId));

  const handleCardClick = (e, car) => {
    if (!e.target.closest(".phone-button")) {
      router.push(`/catalog/${car.id}/${car.titleLink}`);
    }
  };

  return (
    <div className="sd:container mx-auto">
      <div className="grid sd:grid-cols-3 xz:grid-cols-1 sd:gap-8 xz:gap-4 mt-9">
        {data.slice(0, visibleCars).map((car) => {
          let images = [];
          try {
            images = JSON.parse(car.images || "[]");
          } catch {
            images = [];
          }

          const creditMonth = calcCredit(car.priceBYN);
          const leasingMonth = calcLeasing(car.priceBYN);

          return (
            <article
              key={car.id}
              onClick={(e) => handleCardClick(e, car)}
              className="relative bg-white rounded-[32px] shadow-[0_12px_40px_rgba(15,23,42,0.14)] overflow-hidden cursor-pointer"
            >
              {/* Блок с фото и оверлеями */}
              <div className="relative w-full h-[360px] sd:h-[420px]">
                {/* ID для админа */}
                {isAdmin && (
                  <span className="absolute top-3 right-3 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[10px] text-primary shadow">
                    {car.id}
                  </span>
                )}

                {/* Карусель фотографий */}
                <div className="absolute inset-0">
                  <div className="carousel w-full h-full">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="carousel-item w-full mx-0.5"
                      >
                        <Image
                          src={`/uploads/${image.original}`}
                          alt={car.title}
                          className="w-full h-full object-cover"
                          width={800}
                          height={600}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Заголовок авто */}
                <div className="pointer-events-none absolute top-5 left-6 right-32">
                  <h3 className="text-white sd:text-xl xz:text-lg font-semibold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    {car.title}
                  </h3>
                </div>

                {/* Кнопка Подробнее */}
                <div className="absolute top-4 right-4 z-30">
                  <Link
                    href={`/catalog/${car.id}/${car.titleLink}`}
                    prefetch
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center rounded-full bg-white/95 px-5 py-2 text-xs sd:text-sm font-semibold text-[#14532D] shadow-md hover:bg-white"
                  >
                    Подробнее
                  </Link>
                </div>

                {/* Бейджи Диагностика / VIN / Рекомендуем */}
                <div className="absolute bottom-24 left-0 right-0 flex justify-center">
                  <div className="flex gap-2">
                    {car.vip && (
                      <div className="px-3 py-1 rounded-full border border-white/70 bg-black/30 backdrop-blur-sm">
                        <p className="uppercase text-[9px] tracking-wide text-white">
                          рекомендуем
                        </p>
                      </div>
                    )}

                    <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/70 bg-black/30 backdrop-blur-sm">
                      <Image
                        src="/svg/check.svg"
                        alt="Проведена диагностика"
                        width={11}
                        height={11}
                      />
                      <p className="uppercase text-[9px] text-white">
                        диагностика
                      </p>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/70 bg-black/30 backdrop-blur-sm">
                      <Image
                        src="/svg/check.svg"
                        alt="VIN"
                        width={11}
                        height={11}
                      />
                      <p className="uppercase text-[9px] text-white">VIN</p>
                    </div>
                  </div>
                </div>

                {/* Кредит / Лизинг как на макете */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                  <div className="flex gap-4">
                    <div className="rounded-full border border-white/80 bg-black/35 px-4 py-2 text-center text-[11px] sd:text-xs text-white shadow-md">
                      <p>
                        Кредит: {formatPrice(creditMonth)} BYN
                      </p>
                    </div>
                    <div className="rounded-full border border-white/80 bg-black/35 px-4 py-2 text-center text-[11px] sd:text-xs text-white shadow-md">
                      <p>
                        Лизинг: {formatPrice(leasingMonth)} BYN
                      </p>
                    </div>
                  </div>
                </div>

                {/* Цена как на макете */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                  <div className="px-8 py-2 rounded-full border border-white/80 bg-black/30 backdrop-blur-sm text-center">
                    <p className="sd:text-sm xz:text-xs font-medium text-white">
                      {car.priceUSD} USD / {car.priceBYN} BYN
                    </p>
                  </div>
                </div>

                {/* Подсказка свайпа фото */}
                <div className="absolute bottom-3 right-3">
                  <Image
                    src="/svg/left-right.svg"
                    alt="Листайте фото влево и вправо"
                    width={25}
                    height={25}
                  />
                </div>
              </div>

              {/* Нижний блок "Проверенный продавец" */}
              <div className="px-5 pb-4 pt-3 bg-white">
                

                <div className="flex flex-col items-center justify-center bg-[#ECFDF3] rounded-full py-1.5 px-4">
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/svg/check-green.svg"
                      alt="Проверенный продавец"
                      width={15}
                      height={15}
                    />
                    <p className="text-[#238657] text-xs">
                      Проверенный продавец
                    </p>
                  </div>
                  <p className="text-[9px] text-[#6B7280]">
                    автомобиль юридически чист
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {visibleCars < data.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreCars}
            className="btn btn-outline rounded-full px-10 h-12 border-[#14532D] text-[#14532D] hover:bg-[#14532D] hover:text-white"
          >
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
};
