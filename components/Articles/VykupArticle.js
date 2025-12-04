// /components/Articles/VykupArticle.jsx

import phoneNumbers from "@/config/config";
import Image from "next/image";
import BtnComp from "../btn/BtnComp";

const VykupArticle = () => {
  return (
    <article className="sd:mt-20 xz:mt-10 bg-white text-[#222222] sd:px-8 xz:px-3 py-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto">
        {/* H2 */}
        <header className="max-w-4xl">
          <h2 className="sd:text-5xl xz:text-2xl font-semibold leading-tight">
            Срочный выкуп авто в Минске и Минской области
          </h2>
          <p className="mt-4 sd:text-base xz:text-sm text-[#555555]">
            Нужен <strong>быстрый выкуп авто в Минске</strong>? Автосалон
            «AvtoCar» выкупает автомобили с пробегом, кредитные и после ДТП.
            Без долгих показов, торга и рисков. Оцениваем машину, оформляем
            договор и выплачиваем деньги в день обращения.
          </p>
        </header>

        {/* Преимущества */}
        <section className="mt-10">
          <h3 className="sd:text-3xl xz:text-xl font-semibold">
            Почему выгодно продать авто нам
          </h3>

          <div className="mt-6 grid sd:grid-cols-3 xz:grid-cols-1 gap-5">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-[#E3E3E3] bg-[#F9FAFB] px-5 py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-2xl bg-[#03481E]/10 flex items-center justify-center">
                  <Image
                    src="/svg/icon-clock.svg"
                    alt="Срочный выкуп авто в Минске"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#03481E]">
                  до 1 часа
                </span>
              </div>
              <h4 className="font-semibold mb-2 text-lg">
                Срочный выкуп авто за один визит
              </h4>
              <p className="text-sm text-[#555555]">
                Оценка, оформление и <strong>выплата наличными или на карту</strong>{" "}
                в течение одного визита в салон. Без простоя объявлениями и
                встреч с перекупщиками.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-[#E3E3E3] bg-white px-5 py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-2xl bg-[#03481E]/10 flex items-center justify-center">
                  <Image
                    src="/svg/icon-car-any.svg"
                    alt="Выкуп авто в любом состоянии"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777777]">
                  любое состояние
                </span>
              </div>
              <h4 className="font-semibold mb-2 text-lg">
                Выкуп авто в любом состоянии
              </h4>
              <p className="text-sm text-[#555555]">
                <strong>Выкуп аварийных авто, после ДТП, с неисправностями</strong>{" "}
                и высокими пробегами. Рассматриваем машины как на ходу, так и
                требующие ремонта.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-[#E3E3E3] bg-[#03481E] px-5 py-6 text-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-2xl bg-black/20 flex items-center justify-center">
                  <Image
                    src="/svg/icon-money.svg"
                    alt="Честная оценка и юридическая чистота"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  безопасная сделка
                </span>
              </div>
              <h4 className="font-semibold mb-2 text-lg">
                Честная цена и юридическое сопровождение
              </h4>
              <p className="text-sm text-white/90">
                Оцениваем по рынку Минска с учётом комплектации и истории
                обслуживания. Подготавливаем договор купли-продажи и берём на
                себя все юридические вопросы.
              </p>
            </div>
          </div>
        </section>

        {/* Этапы выкупа */}
        <section className="mt-14">
          <h3 className="sd:text-3xl xz:text-xl font-semibold">
            Как проходит выкуп авто в Минске
          </h3>
          <p className="mt-3 text-sm sd:text-base text-[#555555] max-w-3xl">
            Процедура выкупа авто максимально прозрачная. Ниже — реальные шаги,
            которые вы проходите при обращении к нам в «AvtoCar».
          </p>

          <div className="mt-8 grid sd:grid-cols-4 xz:grid-cols-2 gap-5">
            {[
              {
                step: "01",
                title: "Заявка или звонок",
                text: (
                  <>
                    Оставляете заявку или звоните по номеру{" "}
                    <a
                      href={`tel:${phoneNumbers.mainPhoneLink}`}
                      className="font-semibold text-[#03481E]"
                    >
                      {phoneNumbers.mainPhone}
                    </a>
                    . Обсуждаем марку, год и состояние автомобиля.
                  </>
                ),
              },
              {
                step: "02",
                title: "Осмотр авто",
                text: (
                  <>
                    Приезжаете в салон или мы выезжаем к вам.{" "}
                    <strong>10–20 минут</strong> на проверку кузова, салона и
                    технического состояния.
                  </>
                ),
              },
              {
                step: "03",
                title: "Оценка и договор",
                text: (
                  <>
                    Предлагаем <strong>рыночную цену выкупа</strong>, согласовываем
                    форму расчёта, подготавливаем договор и необходимые документы.
                  </>
                ),
              },
              {
                step: "04",
                title: "Деньги сразу",
                text: (
                  <>
                    Подписываем документы и производим{" "}
                    <strong>моментальный расчёт</strong> наличными или по
                    безналу. Вы уже свободны от забот по продаже авто.
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-[#E5E5E5] bg-[#F9FAFB] px-5 py-6 shadow-sm"
              >
                <span className="absolute -top-4 left-5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#03481E] px-3 text-xs font-semibold tracking-[0.14em] text-white">
                  {item.step}
                </span>
                <h4 className="mt-3 mb-2 font-semibold text-base">
                  {item.title}
                </h4>
                <p className="text-xs sd:text-sm text-[#555555]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Блок с менеджером + CTA */}
        <section className="mt-14 grid sd:grid-cols-[1.2fr_minmax(0,0.9fr)] xz:grid-cols-1 gap-8 items-center">
          {/* Фото */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#03481E]/10 via-transparent to-[#03481E]/5 pointer-events-none" />
            <div className="relative rounded-[28px] overflow-hidden">
              <Image
                src="/vykup/vykup-hero-desktop.webp"
                alt="Срочный выкуп автомобиля в Минске — деньги сразу"
                width={900}
                height={560}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Текст справа */}
          <div className="relative rounded-[28px] border border-[#E5E5E5] bg-[#F9FAFB] px-6 py-7 sd:px-8 sd:py-9">
            <div className="absolute -top-6 left-8 h-10 w-10 rounded-2xl bg-[#03481E] flex items-center justify-center shadow-lg">
              <Image
                src="/svg/icon-manager.svg"
                alt="Менеджер по выкупу авто"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 sd:mt-2 text-xl sd:text-2xl font-semibold">
              Нужна консультация по выкупу авто?
            </h3>
            <p className="mt-3 text-sm text-[#555555]">
              Расскажем, сколько ориентировочно стоит ваш автомобиль на рынке
              Минска, подскажем, как подготовить его к осмотру и{" "}
              <strong>сколько вы сможете получить при срочном выкупе</strong>.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Image
                src="/trade-in/menedzher-po-trejd-in.webp"
                alt="Ваш персональный менеджер по выкупу авто"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Максим, менеджер по выкупу авто</p>
                <a
                  href={`tel:${phoneNumbers.mainPhoneLink}`}
                  className="mt-1 block text-sm font-semibold text-[#03481E]"
                >
                  {phoneNumbers.mainPhone}
                </a>
                <p className="mt-1 text-xs text-[#777777]">
                  Звоните или оставьте заявку — перезвоним в течение рабочего
                  часа.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <BtnComp title="Оставить заявку на выкуп" index={409} wFull />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default VykupArticle;
