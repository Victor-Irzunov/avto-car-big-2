"use client";

import Image from "next/image";

const PARTNERS = [
  {
    id: "vtb",
    name: "ВТБ",
    src: "/images/vtb.webp",
  },
  {
    id: "paritet",
    name: "Paritetbank",
    src: "/images/paritet-bank.webp",
  },
  {
    id: "alfin",
    name: "Алфин Лизинг",
    src: "/images/alfin-lizing.webp",
  },
  {
    id: "priorbank",
    name: "Приорбанк",
    src: "/images/prior-bank.webp",
  },
  {
    id: "aktiv",
    name: "Активлизинг",
    src: "/images/aktivlizing.webp",
  },
  {
    id: "mikro",
    name: "МикроЛизинг",
    src: "/images/mikro-lizing.webp",
  },
  {
    id: "mogo",
    name: "Mogo",
    src: "/images/mogo.webp",
    fullWidthOnMobile: true, // последняя карточка на мобильном на всю ширину
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-16 sd:py-24">
      <div className="container mx-auto">
        <div className="grid gap-10 sd:gap-16 sd:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* ЛЕВАЯ ЧАСТЬ — H2 */}
          <div>
            <h2 className="text-[#145227] font-semibold leading-tight text-[30px] xz:text-[32px] sd:text-[52px] sd:leading-[1.05]">
              Сотрудничаем
              <br />
              с проверенными
              <br />
              партнёрами
            </h2>
          </div>

          {/* ПРАВАЯ ЧАСТЬ — СЕТКА ПАРТНЁРОВ */}
          <div>
            <div className="grid grid-cols-2 gap-4 sd:grid-cols-3 sd:gap-6">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className={`flex items-center justify-center rounded-[24px] border border-[#145227] bg-white px-4 py-6 sd:px-8 sd:py-10 ${
                    partner.fullWidthOnMobile ? "col-span-2 sd:col-span-1" : ""
                  }`}
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={260}
                    height={120}
                    className="h-10 w-auto sd:h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
