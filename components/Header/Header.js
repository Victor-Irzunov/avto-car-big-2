// /components/Header/Header.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import phoneNumbers from "@/config/config";
import RunningText from "../RunningText/RunningText";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Кнопка-бургер с анимацией в аккуратный крестик
  const BurgerButton = ({ onClick }) => (
    <button
      onClick={onClick}
      aria-label="Переключить меню"
      className="relative w-8 h-8 flex items-center justify-center"
    >
      {/* Верхняя линия */}
      <span
        className={`block absolute h-[2px] w-7 bg-white transition-all duration-300 origin-center ${drawerOpen
            ? "rotate-45 translate-y-0"
            : "-translate-y-[6px] rotate-0"
          }`}
      />
      {/* Средняя линия */}
      <span
        className={`block absolute h-[2px] w-7 bg-white transition-all duration-300 origin-center ${drawerOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
          }`}
      />
      {/* Нижняя линия */}
      <span
        className={`block absolute h-[2px] w-7 bg-white transition-all duration-300 origin-center ${drawerOpen
            ? "-rotate-45 translate-y-0"
            : "translate-y-[6px] rotate-0"
          }`}
      />
    </button>
  );

  return (
    <header className="z-40 w-full xz:fixed sd:relative top-0 bg-[#222222]">
      <RunningText />

      <div className="sd:pt-8 xz:pt-5">
        <div className="sd:container mx-auto">
          <div className="sd:py-3 xz:py-1">
            {/* DESKTOP */}
            <div className="sd:flex xz:hidden justify-between items-center">
              <nav className="flex justify-between items-center w-full">
                <Link
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
                  className="cursor-pointer hover:text-primary"
                >
                  <Image
                    src="/logo/logo.webp"
                    alt="Логотип"
                    width={130}
                    height={130}
                  />
                </Link>
                {pathname !== "/thank-you/" && pathname !== "/politika/" && (
                  <ul className="flex items-center justify-center space-x-5 w-full text-lg p-0 tracking-wider text-white">
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/catalog/`}
                        className="cursor-pointer hover:text-primary"
                      >
                        Автомобили
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/credit/`}
                        className="cursor-pointer hover:text-primary"
                      >
                        Кредит
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/lizing/`}
                        className="cursor-pointer hover:text-primary"
                      >
                        Лизинг
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/obmen/`}
                        className="cursor-pointer hover:text-primary"
                      >
                        Обмен
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/komissionnaya-prodazha/`}
                        className="cursor-pointer hover:text-primary"
                        onClick={closeDrawer}
                      >
                        Комиссионная продажа
                      </Link>
                    </li>
                   
                  </ul>
                )}
                <Link
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty/`}
                  className="cursor-pointer hover:text-primary text-white tracking-wider text-lg"
                >
                  Контакты
                </Link>
              </nav>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`} className="">
                <div className="sd:hidden xz:inline-flex">
                  <div className="text-secondary items-center text-xl leading-none uppercase">
                    <p className="mb-0 pb-0 h-3">avto</p>
                    <span className="font-bold text-2xl pt-0 mt-0 h-0">
                      car
                    </span>
                  </div>
                </div>
              </Link>

              <div className="sd:hidden xz:block">
                <a
                  href={`tel:${phoneNumbers.thirdPhoneLink}`}
                  className="text-base text-secondary"
                >
                  {phoneNumbers.thirdPhone}
                </a>
              </div>
            </div>

            {/* MOBILE */}
            <div className="sd:hidden xz:block pt-1">
              {/* Верхняя тёмная полоса */}
              <div className="w-full bg-[#222222]">
                <div className="container mx-auto flex justify-between items-center py-3 px-2">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
                    className="flex items-center"
                  >
                    <Image
                      src="/logo/logo.webp"
                      alt="Логотип"
                      width={60}
                      height={60}
                    />
                  </Link>

                  <div className="flex items-center space-x-4">
                    <a
                      href={`tel:${phoneNumbers.thirdPhoneLink}`}
                      className="text-xs text-white"
                    >
                      {phoneNumbers.thirdPhone}
                    </a>

                    <BurgerButton onClick={toggleDrawer} />
                  </div>
                </div>
              </div>

              {/* Фуллскрин-меню */}
              <div
                className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                {/* Верхняя чёрная полоса внутри меню */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#222222]">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
                    onClick={closeDrawer}
                    className="flex items-center"
                  >
                    <Image
                      src="/logo/logo.webp"
                      alt="Логотип"
                      width={60}
                      height={60}
                    />
                  </Link>

                  <BurgerButton onClick={toggleDrawer} />
                </div>

                <div className="relative h-[calc(100%-56px)]">
                  {/* Пункты меню */}
                  <nav className="px-6 pt-8 space-y-4 text-lg text-[#111827]">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/credit/`}
                      className="block hover:text-[#14532D]"
                      onClick={closeDrawer}
                    >
                      Кредит
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/lizing/`}
                      className="block hover:text-[#14532D]"
                      onClick={closeDrawer}
                    >
                      Лизинг
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/komissionnaya-prodazha/`}
                      className="block hover:text-[#14532D]"
                      onClick={closeDrawer}
                    >
                      Комиссионная продажа
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/vykup-avto/`}
                      className="block hover:text-[#14532D]"
                      onClick={closeDrawer}
                    >
                      Выкуп
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/obmen/`}
                      className="block hover:text-[#14532D]"
                      onClick={closeDrawer}
                    >
                      Обмен
                    </Link>
                   
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty/`}
                      className="block hover:text-[#14532D]"
                      onClick={closeDrawer}
                    >
                      Контакты
                    </Link>
                  </nav>

                  {/* Телефон */}
                  <div className="px-6 mt-10 text-sm text-[#4B5563]">
                    <p className="mb-1">Звоните по любым вопросам:</p>
                    <a
                      href={`tel:${phoneNumbers.mainPhoneLink}`}
                      className="text-[#14532D] font-semibold"
                    >
                      {phoneNumbers.mainPhone}
                    </a>
                  </div>

                  {/* Картинка авто снизу */}
                  <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                    <Image
                      src="/img/main-car-mobile.webp"
                      alt="Автомобиль в лизинг"
                      width={600}
                      height={260}
                      className="w-full h-auto opacity-70"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* END MOBILE */}
          </div>
        </div>
      </div>
    </header>
  );
}
