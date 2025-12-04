// /components/Comp/PageComponent.js
"use client";

import { Catalog } from "@/components/catalog/Catalog";
import FormPodborAvto from "@/components/Form/FormPodborAvto";
import { DataCar } from "@/constans/CarData";
import { MyContext } from "@/contexts/MyContextProvider";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { transliterate } from "@/transliterate/transliterate";
import { useContext, useState } from "react";
import PhoneBottom from "../phoneBotton/PhoneBottom";

const titleLink = (brandName) =>
  transliterate(brandName).replace(/\s+/g, "-").toLowerCase();

const PageComponent = observer(({ data }) => {
  const { user } = useContext(MyContext);
  const [showAll, setShowAll] = useState(false);

  const filteredCars = DataCar.filter((brand) =>
    ["A", "B", "C"].includes(brand.brand[0].toUpperCase())
  );
  const toggleShowAll = () => setShowAll((prev) => !prev);
  const displayedCars = showAll ? DataCar : filteredCars;

  return (
    <main className="min-h-svh bg-[#F5F5F5] sd:py-12 xz:py-8 sd:mt-0 xz:mt-24">
      <section className="relative">
        <div className="container mx-auto sd:px-4 xz:px-3">
          {/* Заголовок страницы */}
          <div className="mb-6">
            <h1 className="text-[#111827] font-semibold sd:text-4xl xz:text-2xl">
              Быстрый подбор авто
            </h1>
          </div>

          {/* Блок фильтра как на макете */}
          <div className="bg-white rounded-3xl shadow-sm sd:py-8 xz:py-5 sd:px-10 xz:px-3">
            <FormPodborAvto />
          </div>

          {/* Сетка брендов под фильтром */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#111827]">
                Каталог авто по маркам
              </h2>

              <div className="sd:flex xz:hidden items-center">
                <div className="rounded-full bg-[#F3F4F6] px-4 py-2 flex items-center gap-3">
                  <Image
                    src="/logo/logo-black.webp"
                    alt="Логотип автосалона"
                    width={120}
                    height={120}
                    className="h-10 w-auto"
                  />
                  <span className="text-xs text-gray-500">
                    Авто в кредит и лизинг
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid sd:grid-cols-8 xz:grid-cols-3 gap-2">
                {displayedCars.map((brand) => (
                  <div key={brand.id}>
                    <Link
                      href={`/${titleLink(brand.brand)}/`}
                      prefetch
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-3 py-2 text-[10px] sd:text-sm font-medium text-[#111827] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] hover:bg-[#F3F4F6]"
                    >
                      {brand.brand}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                {!showAll ? (
                  <button
                    type="button"
                    onClick={toggleShowAll}
                    className="text-sm font-medium text-[#14532D] hover:underline"
                  >
                    Показать все марки
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={toggleShowAll}
                    className="text-sm font-medium text-[#14532D] hover:underline"
                  >
                    Скрыть марки
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Количество авто */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-[#4B5563]">
              Количество авто в автосалоне:{" "}
              <span className="font-semibold text-[#111827]">
                {data.length} шт.
              </span>
            </p>
          </div>

          {/* Каталог карточек */}
          <div className="mt-6">
            <Catalog data={data} isAdmin={user.userData?.isAdmin} />
          </div>
        </div>
      </section>

      <PhoneBottom />
    </main>
  );
});

export default PageComponent;
