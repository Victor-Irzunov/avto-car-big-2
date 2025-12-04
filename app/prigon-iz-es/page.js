import Image from "next/image"
import phoneNumbers from "@/config/config"
import ObmenArticle from "@/components/Articles/ObmenArticle"
import Partner from "@/components/Partner/Partner"
import VykupArticle from "@/components/Articles/VykupArticle";
import PrigonIzEsArticle from "@/components/Articles/PrigonIzEsArticle";

export const metadata = {
	title: "Пригнать авто из Европы «под ключ» в Беларусь | Доставка в Минск | Автосалон «АвтоКар»",
	description: "ᐈ ⭐ Подбор и пригон авто из Европы ⚡ Доставка в Минск ⚡ Компания ➤➤➤ AvtoCar является экспертом по подбору и доставке автомобилей, ⭐ новых и с пробегом, ⚡ эксклюзивных или заказнных под ваши параметры из Европы 🔥 ⚡ Поиск, проверка и доставка автомобиля из любого региона Европы ⭐ Процедура очень проста 🔥 Автомобиль вы получаете у нас в автосалоне с полным пакетом документов для постановки ➤➤➤ Звоните прямо сейчас! ☎️ (33) 355-88-55 Автосалон «АвтоКар»",
	keywords: "",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/prigon-iz-es/`
	},
	ogTitle: 'Пригнать авто из Европы «под ключ» в Беларусь | Доставка в Минск',
	ogDescription: 'ᐈ ⭐ Подбор и пригон авто из Европы ⚡ Доставка в Минск ⚡ Компания ➤➤➤ AvtoCar является экспертом по подбору и доставке автомобилей, ⭐ новых и с пробегом, ⚡ эксклюзивных или заказнных под ваши параметры из Европы 🔥 ⚡ Поиск, проверка и доставка автомобиля из любого региона Европы ⭐ Процедура очень проста 🔥 Автомобиль вы получаете у нас в автосалоне с полным пакетом документов для постановки ➤➤➤ Звоните прямо сейчас! ☎️ (33) 355-88-55',
	twitterTitle: 'Пригнать авто из Европы «под ключ» в Беларусь | Доставка в Минск',
	twitterDescription: 'ᐈ ⭐ Подбор и пригон авто из Европы ⚡ Доставка в Минск ⚡ Компания ➤➤➤ AvtoCar является экспертом по подбору и доставке автомобилей, ⭐ новых и с пробегом, ⚡ эксклюзивных или заказнных под ваши параметры из Европы 🔥 ⚡ Поиск, проверка и доставка автомобиля из любого региона Европы ⭐ Процедура очень проста 🔥 Автомобиль вы получаете у нас в автосалоне с полным пакетом документов для постановки ➤➤➤ Звоните прямо сейчас! ☎️ (33) 355-88-55',
	twitterImage: 'public/fon/fon6.webp',
	ogType: 'website',
	ogUrl: '',
	twitterCard: 'public/fon/fon6.webp'
};




const page = () => {
	return (
		<main className='sd:pt-20 xz:pt-14 pb-12 min-h-screen'>
			<div className='w-full bg-cover fon bg-center' />
			<section className="relative -mt-2">
				<div className='container mx-auto'>
					<div className="relative bg-[url('/fon/avto3.webp')] bg-cover bg-center rounded-3xl sd:pt-10 xz:pt-10 sd:pb-32 xz:pb-20 sd:px-8 xz:px-3">

						{/* Затемненный слой */}
						<div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl -z-0"></div>

						{/* Контент на переднем плане */}
						<div className="relative z-10">
							<Image
								src='/logo/logo.webp'
								alt='Логотип - автосалона AvtoCar'
								width={230}
								height={230}
								className="sd:w-56 xz:w-36"
							/>

							<div className='sd:mt-10 xz:mt-6'>
								<h1 className='text-shadow sd:text-7xl xz:text-xl xy:text-3xl font-bold uppercase text-white'>
									<span className="text-primary">Подбор</span>{' '}
									<span className=""> и доставка</span>
									<span className="block xz:mt-1 xy:mt-2 sd:mt-3">автомобилей из Европы</span>
								</h1>

								<div className='sd:mt-16 xz:mt-7 pr-10'>
									<p className='text-shadow sd:text-3xl uppercase xz:text-lg font-semibold text-white xz:mb-8 sd:mb-0 blink-animation'>
										Полный спектр услуг "под ключ"
									</p>
								</div>

								<div className='mt-8'>
									<div className='xz:text-base xy:text-2xl'>
										{[
											{ text: "Подбор автомобиля по ", boldText: "индивидуальным параметрам" },
											{ text: "Гарантированное ", boldText: "качество и проверка" },
											{ text: "Сотрудничество с официальными ", boldText: "дилерами и аукционами" },
											{ text: "Экспертиза в ", boldText: "европейском рынке" },
										].map(({ text, boldText }, index) => (
											<div className='flex mt-3' key={index}>
												<Image src='/svg/check.svg' alt={text} width={25} height={25} />
												<p className='text-white ml-3 font-light'>
													{text.replace(boldText, "")}
													<span className="font-bold uppercase">{boldText}</span>
												</p>
											</div>
										))}
									</div>
								</div>

								<div className='mt-9'>
									<div className="dropdown dropdown-top text-white">
										<button tabIndex={0} className="btn text-lg px-10 w-full rounded-full bg-[#D0D0D2] border-none text-[#636363]">
											Позвонить
										</button>
										<div tabIndex={0} className={`dropdown-content bg-[#2D3192] z-30 px-6 py-8 shadow-slate-400 w-[300px] text-center rounded-xl`}>
											<div className=''>
												<Image src='/logo/logo2.webp' alt='Логотип - продажа авто в кредит и лизинг' width={120} height={120} className="mx-auto" />
											</div>
											<p className='text-xl'>
												Мы в Минске
											</p>
											<div className='mt-5'>
												<Image src='/svg/location-white.svg' alt='Адрес автосалона' width={30} height={30} className="mx-auto mb-2" />
												<a href="https://yandex.by/maps/-/CDdkfUlz" target="_blank" className="mt-2 text-sm">
													Минск, ул. Куйбышева 40, <br />
													Паркинг 4 этаж
												</a>
											</div>
											<div className='mt-5'>
												<Image src='/svg/phone-white.svg' alt='Телефон автосалона' width={25} height={25} className="mx-auto mb-2" />
												<a href={`tel:${phoneNumbers.secondaryPhoneLink}`} className='font-light'>
													{phoneNumbers.secondaryPhone} МТС
												</a>
												{/* <a href={`tel:${phoneNumbers.mainPhoneLink}`} className='font-light mt-2 block'>
													{phoneNumbers.mainPhone} A1
												</a> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container mx-auto'>
					<PrigonIzEsArticle />
				</div>
			</section>
		</main>

	)
}

export default page