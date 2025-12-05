// /components/similarCars/CauruselSimilar.js
"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import phoneNumbers from "@/config/config";

const CauruselSimilar = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => (
    <div className="carousel-button-group gap-4 flex justify-center items-center w-full relative mt-6">
      <button
        type="button"
        className="block p-3 bg-white/70 rounded-xl shadow"
        onClick={previous}
        aria-label="Предыдущие автомобили"
      >
        <Image src="/svg/arrow-left.svg" alt="" width={32} height={32} />
      </button>
      <button
        type="button"
        className="block p-3 bg-white/70 rounded-xl shadow"
        onClick={next}
        aria-label="Следующие автомобили"
      >
        <Image src="/svg/arrow-right.svg" alt="" width={32} height={32} />
      </button>
    </div>
  );

  return (
    <div>
      {/* === Модальное окно с телефонами === */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative" style={{ background: "transparent" }}>
            <button
              type="button"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
              aria-label="Закрыть"
            >
              ✕
            </button>
            <div className="bg-[#222222] px-6 py-8 text-center rounded-xl text-white">
              <Image
                src="/logo/logo.webp"
                alt="на ул.Куйбышева 40 — продажа авто в кредит и лизинг"
                width={120}
                height={120}
                className="mx-auto"
              />
              <p className="text-xl mt-3">Мы в Минске</p>

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
                  rel="noreferrer"
                  className="mt-2 text-sm block"
                >
                  Минск, ул. Куйбышева 40,
                  <br />
                  Паркинг 4 этаж
                </a>
              </div>

              <div className="mt-5 space-y-2">
                <Image
                  src="/svg/phone-white.svg"
                  alt="Телефон автосалона"
                  width={25}
                  height={25}
                  className="mx-auto mb-2"
                />
                <a
                  href={`tel:${phoneNumbers.secondaryPhoneLink}`}
                  className="font-light block"
                >
                  {phoneNumbers.secondaryPhone} МТС
                </a>
                <a
                  href={`tel:${phoneNumbers.mainPhoneLink}`}
                  className="font-light block"
                >
                  {phoneNumbers.mainPhone} A1
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Карусель похожих авто === */}
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay
        infinite
        autoPlaySpeed={7000}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        itemClass="px-1 sd:px-2"
      >
        {data &&
          data.length > 0 &&
          data.map((car) => {
            // --- безопасный парсинг изображений из JSON поля ---
            let imagesArr = [];
            try {
              if (Array.isArray(car.images)) {
                imagesArr = car.images;
              } else if (typeof car.images === "string") {
                imagesArr = JSON.parse(car.images || "[]");
              }
            } catch {
              imagesArr = [];
            }

            const firstImage = imagesArr[0] || null;
            const imageSrc = firstImage
              ? `${process.env.NEXT_PUBLIC_BASE_URL || ""}/uploads/${firstImage.original || firstImage.thumbnail
              }`
              : "/img/no-car.webp";

            return (
              <article
                key={car.id}
                className="bg-white rounded-3xl overflow-hidden flex flex-col h-full font-system"
              >
                {/* Крупное фото как на макете */}
                <figure className="relative w-full sd:h-[260px] xz:h-[210px]">
                  <Image
                    src={imageSrc}
                    alt={car.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover rounded-2xl"
                  />
                </figure>

                {/* Тело карточки */}
                <div className="sd:p-6 xz:p-4 flex flex-col flex-1">
                  {/* Название + цена (как на скринах) */}
                  <div className="flex items-baseline justify-between gap-2 mb-4">
                    <h4 className="font-semibold sd:text-xl xz:text-base text-secondary truncate">
                      {car.title}
                    </h4>
                    <p className="font-semibold sd:text-xl xz:text-sm text-secondary whitespace-nowrap">
                      {car.priceUSD} USD
                    </p>
                  </div>

                  {/* Характеристики с линиями */}
                  <ul className="text-gray-500 sd:text-sm xz:text-[11px] space-y-1 flex-1">
                    <li className="flex justify-between gap-2 border-b border-gray-200 pb-1">
                      <span>Год</span>
                      <span className="text-secondary">{car.year} г</span>
                    </li>
                    <li className="flex justify-between gap-2 border-b border-gray-200 pb-1">
                      <span>Пробег</span>
                      <span className="text-secondary">{car.mileage}</span>
                    </li>
                    <li className="flex justify-between gap-2 border-b border-gray-200 pb-1">
                      <span>Тип двигателя</span>
                      <span className="text-secondary">{car.engine}</span>
                    </li>
                    <li className="flex justify-between gap-2 border-b border-gray-200 pb-1">
                      <span>Коробка передач</span>
                      <span className="text-secondary">{car.transmission}</span>
                    </li>
                    <li className="flex justify-between gap-2 border-b border-gray-200 pb-1">
                      <span>Объём двигателя</span>
                      <span className="text-secondary">
                        {car.engineCapacity || "-"}
                      </span>
                    </li>
                    <li className="flex justify-between gap-2 border-b border-gray-200 pb-1">
                      <span>Привод</span>
                      <span className="text-secondary">{car.drive || "-"}</span>
                    </li>
                  </ul>

                  {/* Кнопки внизу карточки */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="btn btn-circle sd:btn-md xz:btn-sm btn-outline "
                      aria-label="Позвонить в автосалон"
                    >
                      <Image
                        src="/svg/phone1.svg"
                        alt="Телефон"
                        width={22}
                        height={22}
                        className="sd:w-6 xz:w-5"
                      />
                    </button>

                    <Link
                      href={`/catalog/${car.id}/${car.titleLink}`}
                      prefetch
                      className="btn sd:btn-md xz:btn-sm btn-primary rounded-full sd:px-8 xz:px-4 sd:text-base xz:text-xs"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
      </Carousel>
    </div>
  );
};

export default CauruselSimilar;
