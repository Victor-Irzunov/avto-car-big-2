// /components/Articles/KomissionnayaProdazhaArticle.jsx

import phoneNumbers from "@/config/config";
import Image from "next/image";
import BtnComp from "../btn/BtnComp";

const KomissionnayaProdazhaArticle = () => {
  return (
    <article className="sd:mt-10 xz:mt-10 bg-white/90 text-secondary sd:px-8 xz:px-3 py-14 rounded-3xl shadow-[0_26px_80px_rgba(0,0,0,0.45)]">
      <div className="container mx-auto">
        <h2 className="sd:text-5xl xz:text-2xl font-semibold">
          Как проходит комиссионная продажа авто в Минске
        </h2>

        <div className="mt-5 space-y-4 sd:text-base xz:text-sm">
          <p>
            <strong>Комиссионная продажа авто</strong> — это удобный способ
            продать автомобиль через комиссионный автосалон, не тратя время на
            показы, переговоры и оформление документов. Автосалон AvtoCar
            берёт на себя весь процесс: от{" "}
            <strong>приема авто на комиссию</strong> до выдачи ключей новому
            владельцу и выплаты денег вам.
          </p>

          <p>
            Наш <strong>комиссионный автосалон</strong> в Минске помогает
            владельцам безопасно и выгодно продать машины с пробегом. Каждый
            месяц через нас проходят десятки сделок, а постоянная{" "}
            <strong>комиссионная площадка авто</strong> с крытой парковкой
            обеспечивает хорошую проходимость и доверие покупателей.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            1. Прием авто на комиссию и первичная консультация
          </h3>
          <p>
            Всё начинается с обращения: вы звоните нам или оставляете заявку на
            сайте. Менеджер объясняет условия{" "}
            <strong>постановки авто на комиссию</strong>, необходимый пакет
            документов и ориентировочный ценовой диапазон. После этого вы
            приезжаете на автомобиле в наш автосалон по адресу: Минск, ул.
            Куйбышева 40, паркинг 4 этаж.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            2. Осмотр, оценка и согласование цены
          </h3>
          <p>
            На площадке специалист проводит визуальный осмотр, проверяет
            комплектацию, пробег и общее состояние. Мы ориентируемся на текущий
            рынок <strong>комиссионной продажи машин</strong> в Минске и
            предлагаем честную цену, которая поможет продать авто быстро и без
            потери стоимости. Итоговая стоимость согласовывается с владельцем и
            фиксируется в договоре.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            3. Договор комиссии и юридическая защита
          </h3>
          <p>
            После согласования цены мы заключаем договор{" "}
            <strong>комиссионной продажи автомобиля</strong>. В документе
            прописаны права и обязанности сторон, размер комиссионного
            вознаграждения, срок экспозиции машины и порядок выплаты денег.
            Владелец получает копию договора и может в любой момент уточнить
            статус продажи.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            4. Предпродажная подготовка и реклама авто
          </h3>
          <p>
            Наши сотрудники выполняют{" "}
            <strong>предпродажную подготовку авто</strong>: моют кузов и салон,
            при необходимости делают косметическую полировку, готовы обсудить
            мелкий ремонт. Далее мы размещаем объявления на популярных
            площадках Беларуси, на сайте автосалона и в социальных сетях, чтобы
            привлечь максимум покупателей.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            5. Показ, тест-драйв и переговоры с покупателем
          </h3>
          <p>
            Все показы автомобиля, общение с клиентами и тест-драйвы проводит
            менеджер AvtoCar. Вам не нужно приезжать на каждую встречу —
            покупатели общаются с нами напрямую. Мы рассказываем историю
            автомобиля, показываем его особенности и сопровождаем осмотр.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            6. Продажа авто по комиссии и оформление сделки
          </h3>
          <p>
            Когда найден покупатель, мы оформляем договор купли-продажи,
            подготавливаем необходимые документы и сопровождаем расчёт. Покупка
            авто с нашей <strong>комиссионной площадки</strong> безопасна:
            покупатель получает прозрачную историю, а владелец — юридически
            корректную сделку.
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            7. Выплата денег владельцу
          </h3>
          <p>
            После завершения сделки мы связываемся с вами и{" "}
            <strong>выплачиваем деньги</strong> за проданное авто удобным
            способом — на банковский счёт или наличными, согласно условиям
            договора. Вы получаете итоговую сумму за вычетом заранее
            оговоренной комиссии автосалона.
          </p>

          <p className="mt-4">
            Если вы хотите{" "}
            <strong>поставить авто на комиссию в Минске</strong> и получить за
            него честную цену без лишних хлопот, просто позвоните нам по
            телефону{" "}
            <a
              href={`tel:${phoneNumbers.mainPhoneLink}`}
              className="text-primary font-semibold"
            >
              {phoneNumbers.mainPhone}
            </a>{" "}
            или оставьте заявку на сайте — менеджер подробно объяснит условия и
            подберёт оптимальный формат продажи.
          </p>
        </div>

        <div className="grid sd:grid-cols-3 xz:grid-cols-1 gap-6 mt-9">
          <div className="sd:col-span-2 xz:col-span-1">
            <Image
              src="/komissiya/komissionnaya-prodazha-avtomobilej-v-minske-na-ploshchadke-avtocar.webp"
              alt="Комиссионная продажа автомобилей в Минске на площадке AvtoCar"
              width={1280}
              height={853}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="bg-gray-200/80 p-3 text-secondary rounded-xl">
            <div className="relative bg-white border rounded-xl p-4 text-left shadow-md">
              <div className="font-semibold">
                Нужна консультация по комиссионной продаже авто?
              </div>
              <p className="text-gray-700">
                Менеджер AvtoCar ответит на вопросы и подскажет, как лучше
                сдать авто на комиссию.
              </p>
              <div className="absolute -bottom-2 left-10 w-4 h-4 bg-white rotate-45"></div>
            </div>
            <div className="flex sd:space-x-6 xz:space-x-3 sd:mt-0 xz:mt-3 sd:p-5 xz:p-3">
              <div>
                <Image
                  src="/trade-in/menedzher-po-trejd-in.webp"
                  alt="Менеджер по комиссионной продаже авто"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold sd:text-base xz:text-xs">
                  Менеджер по комиссионной продаже
                </p>
                <p className="text-gray-700">Максим</p>
                <div>
                  <a
                    href={`tel:${phoneNumbers.mainPhoneLink}`}
                    className="sd:text-base xz:text-sm mt-1 block"
                  >
                    {phoneNumbers.mainPhone}
                  </a>
                </div>
                <div className="mt-5">
                  <BtnComp title="Оставить заявку" index={199} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default KomissionnayaProdazhaArticle;
