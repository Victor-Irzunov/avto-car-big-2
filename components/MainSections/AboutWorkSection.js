// /components/MainSections/AboutWorkSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutWorkSection() {
  return (
    <section className="sd:py-24 xz:py-16 bg-white min-h-screen">
      <div className="container mx-auto">
        {/* DESKTOP / TABLET */}
        <div className="hidden sd:grid sd:grid-cols-2 sd:gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h2 className="text-[#0E4D1E] font-semibold sd:text-[56px] leading-tight mb-6">
              Как мы работаем
            </h2>

            <p className="text-[#333333] text-base leading-relaxed mb-20">
              Мы — команда профессионалов, объединённых общей страстью
              к автомобилям, специализируемся на комиссионной продаже авто
              и стремимся сделать процесс покупки и продажи максимально
              простым для наших клиентов.
            </p>

            <p className="text-[#333333] text-base leading-relaxed mb-8">
              Наша цель — чтобы покупка или продажа машины была для вас
              не стрессом, а приятным и безопасным опытом.
            </p>

            <Link
              href="/catalog/"
              prefetch
              className="inline-flex items-center justify-center rounded-full bg-[#115223] hover:bg-[#0A3514] text-white px-10 py-3 text-sm font-semibold transition-colors"
            >
              Быстрый подбор авто
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[720px] h-[720px]">
              <Image
                src="/img/about.webp"
                alt="Автомобиль в полумраке"
                fill
                priority
                className="object-cover object-left rounded-[40px]"
              />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="sd:hidden flex flex-col">
          <h2 className="text-[#0E4D1E] font-semibold text-[26px] leading-tight mb-4">
            Как мы работаем
          </h2>

          <p className="text-[#333333] text-sm leading-relaxed mb-4">
            Мы — команда профессионалов, объединённых общей страстью
            к автомобилям, стремимся сделать процесс покупки и продажи
            максимально простым для наших клиентов.
          </p>

          <div className="mt-2 mb-20">
            <div className="relative w-full rounded-[32px] overflow-hidden h-[320px]">
              <Image
                src="/img/about.webp"
                alt="Автомобиль в полумраке"
                fill
                className="object-cover object-left"
              />
            </div>
          </div>

          <p className="text-[#333333] text-sm leading-relaxed mb-6">
            Наша цель — чтобы покупка или продажа машины была для вас
            не стрессом, а приятным и безопасным опытом
          </p>

          <Link
            href="/catalog/"
            prefetch
            className="btn rounded-full border-none bg-[#115223] hover:bg-[#0A3514] text-white w-full py-3 text-sm font-semibold"
          >
            Быстрый подбор авто
          </Link>
        </div>
      </div>
    </section>
  );
}
