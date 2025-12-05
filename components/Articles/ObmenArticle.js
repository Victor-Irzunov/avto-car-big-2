// /components/Articles/ObmenArticle.jsx

import phoneNumbers from "@/config/config";
import Image from "next/image";
import BtnComp from "../btn/BtnComp";

const ObmenArticle = () => {
  return (
    <article className="sd:mt-16 xz:mt-10 bg-white/95 text-[#111111] sd:px-10 xz:px-4 py-12 sd:py-16 rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <div className="max-w-5xl mx-auto">
        {/* H2 главный */}
        <h2 className="sd:text-5xl xz:text-[24px] font-semibold leading-tight">
          Трейд-ин авто в Минске: обмен авто на авто без лишних хлопот
        </h2>

        <p className="mt-5 text-sm sd:text-base text-gray-800">
          <strong>Трейд-ин авто</strong> — это обмен вашего автомобиля на другое
          авто с пробегом или новое, с возможностью доплаты с вашей стороны или
          со стороны автосалона. Вам не нужно заниматься объявлением, показами и
          оформлением сделки: <strong>автообмен</strong> полностью берёт на себя
          автосалон «на ул.Куйбышева 40» в Минске.
        </p>

        {/* Преимущества */}
        <section
          id="advantages"
          className="mt-10 border border-[#e3e3e3] rounded-3xl p-5 sd:p-7 bg-[#f9fafb]"
        >
          <h2 className="text-2xl sd:text-3xl font-semibold">
            Преимущества нашего обмена в Минске
          </h2>
          <p className="mt-3 text-sm sd:text-base text-gray-800">
            Мы работаем каждый день и делаем{" "}
            <strong>обмен авто в Минске</strong> понятным и выгодным:
          </p>

          <div className="mt-6 grid sd:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-[#ebebeb] px-4 py-5">
              <h3 className="font-semibold text-base sd:text-lg">
                Честная оценка
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Оцениваем{" "}
                <strong>машину в трейд-ин</strong> по рыночным ценам с учётом
                состояния и комплектации.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#ebebeb] px-4 py-5">
              <h3 className="font-semibold text-base sd:text-lg">
                От часа до сделки
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                В среднем от приезда до выезда на новом авто проходит около 1
                часа, без лишних этапов.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#ebebeb] px-4 py-5">
              <h3 className="font-semibold text-base sd:text-lg">
                Кредит и лизинг
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                При необходимости оформим кредит или лизинг при{" "}
                <strong>trade in авто с пробегом</strong> прямо в салоне.
              </p>
            </div>
          </div>
        </section>

        {/* Как проходит обмен авто на авто */}
        <section id="how-tradein" className="mt-10">
          <h2 className="text-3xl sd:text-4xl font-semibold">
            Как проходит обмен авто на авто
          </h2>
          <p className="mt-3 text-sm sd:text-base text-gray-800">
            Схема проста: вы приезжаете в салон и уже в этот же день можете
            уехать на другой машине.
          </p>

          <ol className="mt-5 space-y-4 text-sm sd:text-base text-gray-800">
            <li className="flex gap-4">
              <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#03481E] text-white text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold">
                  Звонок или заявка на обмен авто
                </h3>
                <p className="mt-1">
                  Позвоните по телефону{" "}
                  <a
                    href={`tel:${phoneNumbers.mainPhoneLink}`}
                    className="font-semibold text-[#03481E]"
                  >
                    {phoneNumbers.mainPhone}
                  </a>{" "}
                  или оставьте заявку на сайте. Менеджер уточнит марку, год и
                  состояние вашего авто.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#03481E] text-white text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold">
                  Осмотр и оценка автомобиля в салоне
                </h3>
                <p className="mt-1">
                  Приезжаете в Минск, ул. Куйбышева 40, паркинг 4 этаж. Эксперт
                  осматривает машину и предлагает цену{" "}
                  <strong>обмена авто</strong>.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#03481E] text-white text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold">
                  Подбор автомобилей, которые доступны на обмен
                </h3>
                <p className="mt-1">
                  Показ различных вариантов{" "}
                  <strong>авто в трейд-ин</strong>: от бюджетных до премиальных,
                  с возможностью доплаты или получения денег.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#03481E] text-white text-sm font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold">
                  Согласование условий обмена авто на авто
                </h3>
                <p className="mt-1">
                  Обсуждаем все детали: размер вашей доплаты или сумму
                  компенсации, условия кредита или лизинга.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#03481E] text-white text-sm font-semibold">
                5
              </div>
              <div>
                <h3 className="font-semibold">Оформление сделки и выдача авто</h3>
                <p className="mt-1">
                  Подписываем договор, оформляем страховку и кредит (если
                  нужен). Вы уезжаете на обновлённой машине.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Сравнение: обмен vs самостоятельная продажа */}
        <section className="mt-12">
          <h2 className="text-3xl sd:text-4xl font-semibold">
            Почему трейд-ин авто удобнее самостоятельной продажи
          </h2>
          <div className="mt-5 grid sd:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-[#f4f5f7] p-5">
              <h3 className="text-xl font-semibold mb-3">
                Самостоятельная продажа
              </h3>
              <ul className="space-y-2 text-sm sd:text-base text-gray-800 list-disc list-inside">
                <li>Много показов и переговоров с покупателями;</li>
                <li>Риск столкнуться с перекупщиками;</li>
                <li>Длинные сроки ожидания продажи;</li>
                <li>Самостоятельное оформление договора и расчётов;</li>
                <li>Расходы на рекламу и диагностику.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#e6f4ec] p-5 border border-[#03481E]/30">
              <h3 className="text-xl font-semibold mb-3">
                Обмен авто на авто в «на ул.Куйбышева 40»
              </h3>
              <ul className="space-y-2 text-sm sd:text-base text-gray-800 list-disc list-inside">
                <li>
                  Прозрачные условия <strong>обмена авто Минск</strong>;
                </li>
                <li>Полный комплект документов готовим в салоне;</li>
                <li>
                  Можно подобрать{" "}
                  <strong>авто на авто</strong> с меньшим расходом или более
                  свежим годом;
                </li>
                <li>Вы забираете новый автомобиль в день обращения;</li>
                <li>Без переживаний за безопасность сделки и оплату.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Вопрос-ответ */}
        <section id="faq" className="mt-12">
          <h2 className="text-3xl sd:text-4xl font-semibold">
            Вопрос-ответ про trade-in авто
          </h2>
          <div className="mt-5 space-y-5 text-sm sd:text-base text-gray-800">
            <div className="rounded-2xl border border-[#e4e4e4] bg-[#fafafa] p-4">
              <h3 className="font-semibold">
                Берёте ли вы авто в трейд-ин с пробегом?
              </h3>
              <p className="mt-1">
                Да. Основное направление —{" "}
                <strong>трейд-ин на авто с пробегом</strong>. Мы рассматриваем
                автомобили разных годов и комплектаций, в том числе машины в
                кредите или лизинге.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e4e4e4] bg-[#fafafa] p-4">
              <h3 className="font-semibold">
                Можно ли получить доплату при обмене авто на авто?
              </h3>
              <p className="mt-1">
                Да. Если ваш автомобиль дороже выбранного автомобиля в
                <strong> трейд-ин</strong>, автосалон выплачивает вам разницу.
                Если же выбранная машина дороже, вы можете внести доплату или
                оформить кредит на недостающую сумму.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e4e4e4] bg-[#fafafa] p-4">
              <h3 className="font-semibold">
                Сколько времени занимает обмен авто?
              </h3>
              <p className="mt-1">
                В среднем процедура от первичной оценки до выдачи нового авто
                занимает около 1 часа. Всё зависит от количества вопросов и
                оформления кредита/страховки.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e4e4e4] bg-[#fafafa] p-4">
              <h3 className="font-semibold">
                Какие документы нужны для trade-in машины?
              </h3>
              <p className="mt-1">
                Паспорт владельца, ПТС/техпаспорт, свидетельство о регистрации,
                сервисная книжка (если есть), а также документы по действующему
                кредиту или лизингу, если они ещё не закрыты.
              </p>
            </div>
          </div>
        </section>

        {/* Блок с менеджером и CTA */}
        <section
          id="tradein-form"
          className="mt-12 grid sd:grid-cols-2 xz:grid-cols-1 gap-6"
        >
          <div>
            <Image
              src="/trade-in/obmen-avto-na-avto-v-minske.webp"
              alt="Обмен авто на авто в Минске — трейд-ин авто в на ул.Куйбышева 40"
              className="rounded-2xl object-cover w-full h-full"
              width={594}
              height={340}
            />
          </div>

          <div className="bg-[#111111] rounded-2xl p-4 sd:p-6 text-white">
            <div className="relative bg-[#1b1b1b] border border-white/5 rounded-xl p-4 sd:p-5 text-left shadow-lg">
              <div className="font-semibold sd:text-lg">
                Нужна точная оценка вашего авто в трейд-ин?
              </div>
              <p className="mt-1 text-sm sd:text-base text-gray-200">
                Оставьте контакты — менеджер перезвонит, задаст несколько
                вопросов по машине и сориентирует по сумме{" "}
                <strong>обмена авто на авто</strong>.
              </p>
              <div className="absolute -bottom-2 left-10 h-4 w-4 rotate-45 bg-[#1b1b1b]" />
            </div>

            <div className="flex sd:space-x-6 xz:space-x-3 sd:mt-4 xz:mt-4 sd:p-4 xz:p-3 items-center">
              <div>
                <Image
                  src="/trade-in/menedzher-po-trejd-in.webp"
                  alt="Менеджер по трейд-ин авто"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold sd:text-base xz:text-xs">
                  Максим, менеджер по обмену авто
                </p>
                <p className="text-gray-300 text-sm">Консультант по trade-in</p>
                <a
                  href={`tel:${phoneNumbers.mainPhoneLink}`}
                  className="sd:text-base xz:text-sm mt-2 block text-[#00ff5a]"
                >
                  {phoneNumbers.mainPhone}
                </a>
                <div className="mt-5">
                  <BtnComp title="Оставить заявку" index={199} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ObmenArticle;
