import PhoneBottom from "@/components/phoneBotton/PhoneBottom";
import Image from "next/image";
import BtnComp from "@/components/btn/BtnComp";
import NewCarsSection from "@/components/MainSections/NewCarsSection";
import AboutWorkSection from "@/components/MainSections/AboutWorkSection";
import OffersSection from "@/components/MainSections/OffersSection";
import CreditLeasingSection from "@/components/MainSections/CreditLeasingSection";
import PartnersSection from "@/components/MainSections/PartnersSection";

export default function Home() {
  return (
    <main className="min-h-svh xz:pt-20 sd:pt-0 bg-[#222222]">
      <section className="relative pt-6 mb-8">
        <div className="sd:container mx-auto mb-10 xz:px-4 sd:px-0">
          {/* Белая карточка с закруглениями как на макете */}
          <div className="relative xz:pt-4 sd:pt-6 pb-6 sd:pb-8 px-0 sd:px-0 sd:min-h-screen xz:min-h-[60vh] before:absolute before:inset-0 before:bg-white before:rounded-3xl sd:before:rounded-[40px]">
            <div className="relative z-10 px-4 sd:px-8 pt-4 sd:pt-6 pb-4 sd:pb-8">

              <div className="relative w-full xz:h-[70vh] sd:h-[90vh] flex flex-col justify-end">

                <h1 className="visuallyhidden">
                  Авто с пробегом Минск - Авто салон Avto Car
                </h1>


                <p className="absolute left-1/2 -translate-x-1/2 leading-none w-full xz:top-3 sd:top-0 font-semibold uppercase xz:text-[80px] sd:text-[200px] text-[#222222] text-center">
                  AVTO CAR
                </p>


                {/* Мобильное изображение */}
                <div className="absolute left-1/2 -translate-x-1/2 xz:bottom-24 sd:bottom-0 xz:block sd:hidden w-[110%]">
                  <Image
                    src="/img/main-car-mobile.webp"
                    alt="Автомобиль с пробегом в автосалоне AvtoCar"
                    width={800}
                    height={900}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Десктоп изображение */}
                <div className="absolute left-1/2 -translate-x-1/2 xz:hidden sd:block sd:bottom-0 w-[80%] max-w-[900px]">
                  <Image
                    src="/img/main-car.webp"
                    alt="Автомобиль с пробегом в автосалоне AvtoCar"
                    width={1400}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className='flex justify-between z-30'>
                  <p className="text-[11px] sd:text-sm text-[#777777] sd:block xz:hidden">
                    Бери ключи,
                    <br />
                    остальное возьмём на себя
                  </p>

                  {/* Кнопка заявки снизу справа, как на макете */}
                  <div className="xz:w-full sd:w-auto">
                    <BtnComp
                      title="Оставить заявку"
                      index={1}
                      name="Заявка с главного экрана"
                      wFull
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <NewCarsSection />

      <AboutWorkSection />

      <OffersSection />

      <CreditLeasingSection />

      <PartnersSection />


    
      <PhoneBottom />
    </main>
  );
}
