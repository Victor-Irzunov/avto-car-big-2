// /components/MainSections/OffersSection.jsx
"use client";

export default function OffersSection() {
  return (
    <section className="sd:py-24 xz:py-16 bg-white">
      <div className="container mx-auto">
        {/* H2 — адаптивный заголовок */}
        <h2 className="font-semibold text-[#0E4D1E] leading-tight mb-8 sd:mb-12">
          {/* Desktop */}
          <span className="sd:block xz:hidden text-[44px]">
            Что мы можем
            <br />
            предложить
          </span>
          {/* Mobile */}
          <span className="sd:hidden xz:block text-[26px]">
            Что мы можем
            <br />
            предложить
          </span>
        </h2>

        <div className="space-y-7 sd:space-y-10">
          {/* === Выкуп === */}
          <article className="pb-5 border-b border-[#D0E3D4]">
            <div className="sd:grid sd:grid-cols-[220px,1fr] sd:gap-10">
              <h3 className="text-[20px] sd:text-[26px] font-medium text-[#202020] mb-2 sd:mb-0">
                Выкуп
              </h3>

              <p className="text-[13px] sd:text-[15px] leading-relaxed text-[#333333]">
                {/* Mobile текст короче */}
                <span className="sd:hidden xz:inline">
                  Выкупим авто в любом состоянии — быстро, выгодно и безопасно.
                </span>
                {/* Desktop подробный текст */}
                <span className="sd:inline xz:hidden">
                  Выкупим авто в любом состоянии — быстро, выгодно и безопасно.
                  Оценим с учётом внешнего и технического состояния, оформим
                  сделку за 30–40 минут с полным юридическим сопровождением.
                </span>
              </p>
            </div>
          </article>

          {/* === Обмен === */}
          <article className="pb-5 border-b border-[#D0E3D4]">
            <div className="sd:grid sd:grid-cols-[220px,1fr] sd:gap-10">
              <h3 className="text-[20px] sd:text-[26px] font-medium text-[#202020] mb-2 sd:mb-0">
                Обмен
              </h3>

              <p className="text-[13px] sd:text-[15px] leading-relaxed text-[#333333]">
                <span className="sd:hidden xz:inline">
                  Оценим авто по рыночной цене и оформим обмен за час.
                </span>
                <span className="sd:inline xz:hidden">
                  Оценим авто по рыночной цене и оформим обмен за час. Возможна
                  доплата или кредит прямо в автосалоне. Большой выбор
                  автомобилей под любой вкус и бюджет.
                </span>
              </p>
            </div>
          </article>

          {/* === Доставка === */}
          <article className="pb-5 border-b border-[#D0E3D4]">
            <div className="sd:grid sd:grid-cols-[220px,1fr] sd:gap-10">
              <h3 className="text-[20px] sd:text-[26px] font-medium text-[#202020] mb-2 sd:mb-0">
                Доставка
              </h3>

              <p className="text-[13px] sd:text-[15px] leading-relaxed text-[#333333]">
                <span className="sd:hidden xz:inline">
                  «на ул.Куйбышева 40» — эксперт по подбору и доставке авто из Европы.
                </span>
                <span className="sd:inline xz:hidden">
                  «на ул.Куйбышева 40» — эксперт по подбору и доставке авто из Европы.
                  Подбираем проверенные машины от дилеров и аукционов.
                  Гарантируем качество, безопасность и прозрачность сделки.
                </span>
              </p>
            </div>
          </article>

          {/* === Комиссия === */}
          <article className="pb-5 border-b border-[#D0E3D4]">
            <div className="sd:grid sd:grid-cols-[220px,1fr] sd:gap-10">
              <h3 className="text-[20px] sd:text-[26px] font-medium text-[#202020] mb-2 sd:mb-0">
                Комиссия
              </h3>

              <p className="text-[13px] sd:text-[15px] leading-relaxed text-[#333333]">
                <span className="sd:hidden xz:inline">
                  Берём на себя все заботы по подготовке и продаже вашего авто.
                </span>
                <span className="sd:inline xz:hidden">
                  Берём на себя все заботы по подготовке и продаже вашего авто.
                  Чистка, реклама, хранение — всё под нашим контролем.
                  Юридическая сохранность и выгодная сделка — быстро и надёжно.
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
