// /app/komissionnaya-prodazha/page.jsx

import Image from "next/image";
import phoneNumbers from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";
import KomissionnayaProdazhaArticle from "@/components/Articles/KomissionnayaProdazhaArticle";
import PartnersSection2 from "@/components/MainSections/PartnersSection2";

const canonical = `${process.env.NEXT_PUBLIC_BASE_URL}/komissionnaya-prodazha`;

const keywords = [
	"комиссионная продажа авто",
	"авто на комиссию",
	"комиссионная продажа авто минск",
	"комиссионная продажа машин",
	"комиссионная площадка авто",
	"комиссионная продажа",
	"комиссионный автосалон",
	"покупка авто с комиссионной площадки",
	"поставить авто на комиссию",
	"постановка авто на комиссию",
	"прием авто на комиссию",
	"продажа авто на комиссию",
	"продажа авто по комиссии",
	"продажа комиссионных автомобилей",
	"сдать авто на комиссию",
];

export const metadata = {
	title:
		"Комиссионная продажа авто в Минске — авто на комиссию в автосалоне на ул.Куйбышева 40",
	description:
		"Комиссионная продажа авто в Минске в автосалоне на ул.Куйбышева 40. Поможем сдать авто на комиссию и выгодно продать машину: оценка, подготовка, реклама и прием авто на комиссию под ключ. Комиссионный автосалон с крытой площадкой и быстрой выплатой денег.",
	keywords,
	alternates: {
		canonical,
	},
	// оставляю старые поля, если где-то используются
	ogTitle:
		"Комиссионная продажа авто в Минске — авто на комиссию в автосалоне на ул.Куйбышева 40",
	ogDescription:
		"Комиссионная продажа автомобиля в Минске. Поставить авто на комиссию, подготовка и продажа комиссионных автомобилей под ключ в автосалоне на ул.Куйбышева 40.",
	twitterTitle:
		"Комиссионная продажа авто в Минске — авто на комиссию | на ул.Куйбышева 40",
	twitterDescription:
		"Сдать авто на комиссию в Минске: оценка, подготовка, реклама и продажа авто по комиссии в автосалоне на ул.Куйбышева 40.",
	twitterImage: "public/logo/logo.webp",
	ogType: "website",
	ogUrl: canonical,
	twitterCard: "public/logo/logo.webp",
	openGraph: {
		type: "website",
		url: canonical,
		title:
			"Комиссионная продажа авто в Минске — авто на комиссию в автосалоне на ул.Куйбышева 40",
		description:
			"Авто на комиссию в Минске: оценка, подготовка, реклама и продажа комиссионных автомобилей на крытой площадке на ул.Куйбышева 40.",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/komissiya/komissionnaya-prodazha-hero-desktop.webp`,
				width: 1200,
				height: 630,
				alt: "Комиссионная продажа авто в Минске — авто на комиссию в автосалоне на ул.Куйбышева 40",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Комиссионная продажа авто в Минске — авто на комиссию | Автосалон на ул.Куйбышева 40",
		description:
			"Поставить авто на комиссию и выгодно продать машину в Минске. Комиссионный автосалон на ул.Куйбышева 40: прием авто на комиссию и продажа под ключ.",
		images: [
			`${process.env.NEXT_PUBLIC_BASE_URL}/komissiya/komissionnaya-prodazha-hero-desktop.webp`,
		],
	},
};

const Page = () => {
	const phone = phoneNumbers.mainPhone;
	const phoneLink = phoneNumbers.mainPhoneLink;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "AutoDealer",
		name: "Автосалон на ул.Куйбышева 40",
		url: canonical,
		telephone: phone,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Минск",
			streetAddress: "ул. Куйбышева 40, паркинг 4 этаж",
			addressCountry: "BY",
		},
		image: `${process.env.NEXT_PUBLIC_BASE_URL}/komissiya/komissionnaya-prodazha-hero-desktop.webp`,
		makesOffer: {
			"@type": "Offer",
			name: "Комиссионная продажа авто в Минске",
			description:
				"Прием авто на комиссию, подготовка, реклама и продажа комиссионных автомобилей в автосалоне на ул.Куйбышева 40.",
			areaServed: {
				"@type": "City",
				name: "Минск",
			},
		},
	};

	return (
		<main className="bg-[#222222] text-white sd:pt-20 xz:pt-28 pb-16 min-h-screen">
			{/* HERO: комиссионная продажа авто / авто на комиссию */}
			<section className="container mx-auto">
				<div className="relative overflow-hidden rounded-[32px] bg-[#050809] sd:px-14 xz:px-6 sd:py-16 xz:py-10">
					{/* Фон: мобильный / десктоп */}
					<div
						className="absolute inset-0 bg-cover bg-center sd:bg-[length:133%] bg-[url('/komissiya/komissionnaya-prodazha-mobile.webp')] sd:bg-[url('/komissiya/komissionnaya-prodazha.webp')]"
						aria-hidden="true"
					/>
					{/* Тёмный градиент + зелёные блики */}
					<div
						className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(3,72,30,0.38),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.7),#020405)]"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#03481E]/45 blur-3xl"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#00ff7b]/14 blur-3xl"
						aria-hidden="true"
					/>

					{/* Контент поверх фона */}
					<div className="relative">
						{/* Лого */}
						<div className="flex items-center gap-4 sd:gap-6">
							<Image
								src="/logo/logo.webp"
								alt="Логотип автосалона на ул.Куйбышева 40"
								width={180}
								height={60}
								className="h-10 w-auto sd:h-12"
								priority
							/>
							<div className="hidden sd:flex flex-col text-xs text-gray-200/80 uppercase tracking-[0.18em]">
								<span>комиссионный автосалон в минске</span>
								<span className="text-[#9af79e]">
									авто на комиссию • продажа комиссионных автомобилей
								</span>
							</div>
						</div>

						<div className="mt-8 grid sd:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 items-center">
							{/* Левая колонка: текст и CTA */}
							<div>
								<div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-[8px] sd:text-[10px] uppercase tracking-[0.16em] text-gray-200 border border-white/10 backdrop-blur">
									<span className="h-2 min-w-2 rounded-full bg-[#00ff7b]" />
									комиссионная продажа авто • прием авто на комиссию
								</div>

								<h1 className="mt-6 font-semibold uppercase sd:text-[46px] sd:leading-[1.05] xz:text-[30px] xz:leading-[1.2] drop-shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
									<span className="block text-gray-300 text-[13px] sd:text-[16px] font-normal tracking-[0.12em] mb-2">
										хотите продать автомобиль быстро и безопасно?
									</span>
									<span className="block text-white">
										Комиссионная продажа авто
									</span>
									<span className="block text-[#9af79e] text-[22px] sd:text-[26px] normal-case mt-3 font-semibold">
										авто на комиссию в Минске в автосалоне на ул.Куйбышева 40
									</span>
								</h1>

								<p className="mt-6 max-w-xl text-sm sd:text-base text-gray-100/90">
									Сдайте авто на комиссию: мы оценим машину, подготовим к
									продаже, разместим объявление на всех площадках и найдем
									покупателя.{" "}
									<strong>
										Продажа авто по комиссии — без риска, без торга во дворах и
										без потери времени.
									</strong>
								</p>

								<div className="mt-8 flex flex-wrap items-center gap-4">
									{/* Позвонить */}
									<div className="dropdown w-full dropdown-top sd:dropdown-end text-white">
										<button
											tabIndex={0}
											className="btn border-none w-full rounded-2xl bg-[#03481E] text-sm sd:text-base font-semibold text-white shadow-lg shadow-[#03481E]/60 hover:bg-[#046828] transition"
										>
											Позвонить
										</button>
										<div
											tabIndex={0}
											className="dropdown-content bg-[#111826] z-30 px-6 py-6 shadow-2xl shadow-black/70 w-[290px] text-center rounded-2xl border border-white/10"
										>
											<p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-3">
												комиссионный автосалон на ул.Куйбышева 40
											</p>
											<p className="text-base font-semibold mb-2">
												Мы в Минске
											</p>
											<div className="text-sm text-gray-200 mb-4">
												Минск, ул. Куйбышева 40,
												<br />
												паркинг 4 этаж
											</div>
											<a
												href="https://yandex.by/maps/-/CDdkfUlz"
												target="_blank"
												className="text-xs text-[#9af79e] underline underline-offset-4"
											>
												Открыть на карте
											</a>
											<div className="mt-5 border-t border-white/10 pt-4">
												<p className="text-xs text-gray-400 mb-1">
													Прием авто на комиссию:
												</p>
												<a
													href={`tel:${phoneNumbers.secondaryPhoneLink}`}
													className="text-lg font-semibold"
												>
													{phoneNumbers.secondaryPhone}
												</a>
											</div>
										</div>
									</div>



									{/* Каталог комиссионных авто */}
									<a
										href="/catalog"
										className="inline-flex items-center w-full justify-center rounded-2xl border border-white/35 px-7 sd:px-9 py-3 text-sm sd:text-base font-semibold text-white/90 hover:bg-white/5 transition backdrop-blur-[2px]"
									>
										Посмотреть авто
									</a>

									<div className='w-full'>
										<BtnComp
											title="Сдать авто на комиссию"
											index={501}
											wFull
										/>
									</div>
								</div>

								<div className="mt-6 grid gap-3 text-xs sd:text-sm text-gray-100">
									<div className="flex items-start gap-2">
										<span className="mt-1 h-1.5 min-w-1.5 rounded-full bg-[#00ff7b]" />
										<p>
											Прием авто на комиссию{" "}
											<strong>любых марок и годов выпуска</strong> — от
											бюджетных до премиальных машин.
										</p>
									</div>
									<div className="flex items-start gap-2">
										<span className="mt-1 h-1.5 min-w-1.5 rounded-full bg-[#00ff7b]" />
										<p>
											Подготовка, реклама и хранение авто на крытой
											<strong> комиссионной площадке</strong> уже включены в
											комиссию.
										</p>
									</div>
									<div className="flex items-start gap-2">
										<span className="mt-1 h-1.5 min-w-1.5 rounded-full bg-[#00ff7b]" />
										<p>
											<strong>Быстрая выплата денег</strong> после продажи авто
											по комиссии удобным для вас способом.
										</p>
									</div>
								</div>
							</div>

							{/* Правая колонка — просто фон, без лишних элементов */}
							<div className="hidden sd:block" />
						</div>
					</div>
				</div>
			</section>

			{/* Статья: как проходит комиссионная продажа */}
			<section className="sd:container mx-auto">
				<KomissionnayaProdazhaArticle />
			</section>

			{/* Этапы приема авто на комиссию */}
			<section className="container mx-auto mt-10">
				<div className="relative rounded-3xl bg-gradient-to-br from-[#0c1013] via-[#121820] to-[#050608] border border-white/10 px-4 sd:px-8 py-12 shadow-[0_30px_90px_rgba(0,0,0,0.65)] overflow-hidden">
					<div
						className="pointer-events-none absolute -top-20 -right-24 h-56 w-56 rounded-full bg-[#03481E]/35 blur-3xl"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#00ff7b]/10 blur-3xl"
						aria-hidden="true"
					/>

					<div className="relative">
						<h3 className="sd:text-5xl xz:text-3xl font-semibold text-white mb-6">
							Этапы приема авто на комиссию
						</h3>
						<p className="text-sm sd:text-base text-gray-300 max-w-2xl mb-8">
							Комиссионная продажа авто в Автосалоне на ул.Куйбышева 40 — понятный и
							прозрачный процесс. Ниже — пошаговая схема, как мы принимаем и
							реализуем автомобиль на комиссию.
						</p>

						<div className="grid sd:grid-cols-3 xz:grid-cols-1 gap-0 sd:gap-4">
							{/* 1–6 шаги (оставил твою структуру, только стилизовал под тёмную тему) */}
							<div className="border border-[#2c323c] border-dashed rounded-2xl p-4 bg-white/5">
								<div className="flex items-center justify-between">
									<div className="bg-[#03481E] rounded-2xl p-2 flex justify-center items-center">
										<Image
											src="/svg/phone-white.svg"
											alt="Звоните или приезжаете"
											width={28}
											height={28}
										/>
									</div>
									<p className="text-4xl font-bold text-white/90">01</p>
								</div>
								<p className="sd:text-xl xz:text-xl text-white mt-3 font-semibold">
									Звоните или оставляете заявку
								</p>
								<p className="text-gray-300 mt-2 text-sm">
									Менеджер объяснит, как{" "}
									<strong>поставить авто на комиссию</strong>, сориентирует по
									цене и необходимым документам.
								</p>
							</div>

							<div className="border border-[#2c323c] border-dashed rounded-2xl p-4 bg-white/5">
								<div className="flex items-center justify-between">
									<div className="bg-[#03481E] rounded-2xl p-2 flex justify-center items-center">
										<Image
											src="/svg/car.svg"
											alt="Приезжаете на авто"
											width={28}
											height={28}
										/>
									</div>
									<p className="text-4xl font-extrabold text-white/90">02</p>
								</div>
								<p className="sd:text-xl xz:text-xl text-white mt-3 font-semibold">
									Привозите авто на площадку
								</p>
								<p className="text-gray-300 mt-2 text-sm">
									Автомобиль приезжает на{" "}
									<strong>комиссионную площадку авто</strong> на ул.Куйбышева 40 в Минске,
									где мы начинаем осмотр.
								</p>
							</div>

							<div className="border border-[#2c323c] border-dashed rounded-2xl p-4 bg-white/5">
								<div className="flex items-center justify-between">
									<div className="bg-[#03481E] rounded-2xl p-2 flex justify-center items-center">
										<Image
											src="/svg/pricePrice.svg"
											alt="Оцениваем стоимость авто"
											width={28}
											height={28}
										/>
									</div>
									<p className="text-4xl font-extrabold text-white/90">03</p>
								</div>
								<p className="text-xl text-white mt-3 font-semibold">
									Оценка и согласование цены
								</p>
								<p className="text-gray-300 mt-2 text-sm">
									Оцениваем техническое состояние, анализируем рынок и
									предлагаем <strong>реальную стоимость</strong> для быстрой
									продажи авто по комиссии.
								</p>
							</div>

							<div className="border border-[#2c323c] border-dashed rounded-2xl p-4 bg-white/5 mt-4 sd:mt-6">
								<div className="flex items-center justify-between">
									<div className="bg-[#03481E] rounded-2xl p-2 flex justify-center items-center">
										<Image
											src="/svg/dogovor.svg"
											alt="Заключаем договор"
											width={28}
											height={28}
										/>
									</div>
									<p className="text-4xl font-extrabold text-white/90">04</p>
								</div>
								<p className="text-xl text-white mt-3 font-semibold">
									Договор комиссии
								</p>
								<p className="text-gray-300 mt-2 text-sm">
									Оформляем договор{" "}
									<strong>комиссионной продажи автомобиля</strong>. Процедура
									занимает 20–30 минут, нужны владелец и документы на авто.
								</p>
							</div>

							<div className="border border-[#2c323c] border-dashed rounded-2xl p-4 bg-white/5 mt-4 sd:mt-6">
								<div className="flex items-center justify-between">
									<div className="bg-[#03481E] rounded-2xl p-2 flex justify-center items-center">
										<Image
											src="/svg/carSales.svg"
											alt="Продаем авто"
											width={28}
											height={28}
										/>
									</div>
									<p className="text-4xl font-extrabold text-white/90">05</p>
								</div>
								<p className="text-xl text-white mt-3 font-semibold">
									Продажа авто на комиссии
								</p>
								<p className="text-gray-300 mt-2 text-sm">
									Запускаем рекламу, показы, тест-драйвы. Покупатель оформляет
									сделку через наш <strong>комиссионный автосалон</strong>.
								</p>
							</div>

							<div className="border border-[#2c323c] border-dashed rounded-2xl p-4 bg-white/5 mt-4 sd:mt-6">
								<div className="flex items-center justify-between">
									<div className="bg-[#03481E] rounded-2xl p-2 flex justify-center items-center">
										<Image
											src="/svg/payment.svg"
											alt="Выплачиваем деньги за продажу авто"
											width={28}
											height={28}
										/>
									</div>
									<p className="text-4xl font-extrabold text-white/90">06</p>
								</div>
								<p className="text-xl text-white mt-3 font-semibold">
									Выплата денег владельцу
								</p>
								<p className="text-gray-300 mt-2 text-sm">
									После продажи{" "}
									<strong>комиссионного автомобиля</strong> переводим деньги на
									ваш счет или выдаем наличными по договору.
								</p>
							</div>
						</div>

						<div className="mt-8">
							<BtnComp title="Узнать подробнее" index={358} red />
						</div>
					</div>
				</div>
			</section>

			{/* Документы и подготовка авто */}
			<section className="container mx-auto mt-10">
				<div className="bg-white rounded-3xl py-16 px-4 sd:px-8 text-secondary shadow-[0_26px_80px_rgba(0,0,0,0.48)]">
					<div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-8">
						<div>
							<h4 className="sd:text-4xl xz:text-3xl font-semibold">
								Необходимые документы
							</h4>
							<p className="mt-4 text-sm sd:text-base text-gray-700">
								Чтобы <strong>сдать авто на комиссию</strong> и оформить
								договор, понадобятся:
							</p>
							<div className="mt-6 space-y-4">
								<div className="flex items-center">
									<Image
										src="/svg/passport.svg"
										alt="Паспорт"
										width={50}
										height={50}
									/>
									<p className="ml-3">
										Паспорт гражданина или вид на жительство владельца авто
									</p>
								</div>
								<div className="flex items-center">
									<Image
										src="/svg/techPassport.svg"
										alt="Техпаспорт транспортного средства"
										width={50}
										height={50}
									/>
									<p className="ml-3">Техпаспорт транспортного средства</p>
								</div>
								<div className="flex items-center">
									<Image
										src="/svg/attention.svg"
										alt="Автомобиль должен быть снят с учета ГАИ"
										width={50}
										height={50}
									/>
									<p className="ml-3">
										<span className="font-semibold text-[#03481E]">
											Важно:
										</span>{" "}
										автомобиль должен быть снят с учета ГАИ либо с возможностью
										переоформления по договору купли-продажи.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h5 className="sd:text-4xl xz:text-3xl font-semibold">
								Подготовка авто
							</h5>
							<p className="mt-4 text-sm sd:text-base text-gray-700">
								Мы самостоятельно проводим{" "}
								<strong>предпродажную подготовку</strong>, но несколько простых
								шагов ускорят продажу.
							</p>
							<div className="mt-6 space-y-4">
								<div className="flex items-center">
									<Image
										src="/svg/fuel.svg"
										alt="Заправить минимум полбака топлива"
										width={50}
										height={50}
									/>
									<p className="ml-3">
										Желательно иметь запас топлива — так покупатель сможет
										спокойно провести тест-драйв.
									</p>
								</div>
								<div className="flex items-center">
									<Image
										src="/svg/jewelry.svg"
										alt="Достать все ценные вещи из автомобиля"
										width={50}
										height={50}
									/>
									<p className="ml-3">
										Уберите личные и ценные вещи из салона и багажника перед
										постановкой авто на комиссию.
									</p>
								</div>
								<div className="flex items-center">
									<Image
										src="/svg/car_repair2-gray.svg"
										alt="Возможен небольшой согласованный ремонт"
										width={50}
										height={50}
									/>
									<p className="ml-3">
										По согласованию можем выполнить{" "}
										<strong>небольшой ремонт</strong>, чтобы повысить стоимость
										и ликвидность машины.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ — Вопрос–ответ по комиссионной продаже авто */}
			<section className="container mx-auto mt-10">
				<div className="relative rounded-3xl bg-[#15171b] border border-[#32373f] px-4 sd:px-8 py-14 shadow-[0_28px_90px_rgba(0,0,0,0.7)] overflow-hidden">
					<div
						className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#03481E]/35 blur-3xl"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#00ff7b]/10 blur-3xl"
						aria-hidden="true"
					/>

					<div className="relative">
						<h2 className="sd:text-4xl xz:text-3xl font-semibold mb-6">
							Вопрос–ответ про комиссионную продажу авто
						</h2>
						<p className="text-sm sd:text-base text-gray-300 mb-8 max-w-3xl">
							Собрали популярные вопросы про{" "}
							<strong>комиссионную продажу авто в Минске</strong>, постановку
							автомобиля на комиссию и покупку машин с комиссионной площадки.
						</p>

						<div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4">
							{[
								{
									q: "Что такое комиссионная продажа авто?",
									a: "Это продажа автомобиля через комиссионный автосалон. Машина стоит на нашей площадке, мы занимаемся показами, переговорами и оформлением, а вы получаете деньги после сделки.",
								},
								{
									q: "Сколько стоит поставить авто на комиссию в на ул.Куйбышева 40?",
									a: "Прием авто на комиссию бесплатный. Мы зарабатываем на комиссии с продажи, которая заранее прописана в договоре и зависит от стоимости автомобиля.",
								},
								{
									q: "Какая комиссия берется при продаже авто по комиссии?",
									a: "Размер комиссии обсуждается индивидуально, обычно это фиксированный процент от цены продажи. Учитываем состояние авто, ликвидность и срок экспозиции.",
								},
								{
									q: "Сколько времени занимает продажа авто на комиссионной площадке?",
									a: "В среднем от нескольких дней до пары недель. Многое зависит от цены, состояния и спроса. Мы активно продвигаем комиссионные автомобили на всех площадках.",
								},
								{
									q: "Где находится ваша комиссионная площадка авто в Минске?",
									a: "Наш комиссионный автосалон на ул.Куйбышева 40 расположен по адресу: Минск, ул. Куйбышева 40, паркинг 4 этаж.",
								},
								{
									q: "Какие документы нужны, чтобы сдать авто на комиссию?",
									a: "Паспорт владельца или вид на жительство, техпаспорт авто и, при необходимости, доверенность, если собственник не может присутствовать лично.",
								},
								{
									q: "Нужно ли снимать машину с учета для комиссионной продажи?",
									a: "Чаще всего да, автомобиль снимается с учета ГАИ перед продажей или переоформляется по договоренности. Точный вариант подскажем при осмотре.",
								},
								{
									q: "Можно ли продать кредитное или лизинговое авто по комиссии?",
									a: "Такие случаи рассматриваем индивидуально. Важно согласовать условия с банком или лизинговой компанией. Позвоните нам для консультации.",
								},
								{
									q: "Кто показывает авто и проводит тест-драйв с покупателями?",
									a: "Все показы, переговоры и тест-драйвы проводит наш менеджер. Вам не нужно приезжать каждый раз на площадку.",
								},
								{
									q: "Безопасно ли покупать авто с комиссионной площадки?",
									a: "Да, мы проверяем документы, фиксируем пробег и состояние, оформляем договор купли-продажи и передаем всю информацию покупателю.",
								},
								{
									q: "Могу ли я забрать автомобиль с комиссии, если передумал продавать?",
									a: "Да, вы можете снять авто с продажи. Условия прописываются в договоре комиссии, обычно достаточно предупредить менеджера заранее.",
								},
								{
									q: "Можно ли задать свою минимальную цену продажи?",
									a: "Да, мы обсуждаем ожидаемую цену с владельцем и фиксируем её в договоре. При переговорах с покупателями будем ориентироваться на этот диапазон.",
								},
								{
									q: "Кто отвечает за безопасность автомобиля на площадке?",
									a: "Авто хранится на охраняемой крытой парковке с видеонаблюдением. Ответственность и условия хранения также прописаны в договоре.",
								},
								{
									q: "Как происходит выплата денег за проданный комиссионный автомобиль?",
									a: "После продажи мы связываемся с вами и переводим деньги на банковский счет или выдаем наличными согласно договору комиссии.",
								},
								{
									q: "Можно ли сразу купить другое авто вместо проданного?",
									a: "Да, вы можете выбрать машину на нашей площадке и использовать средства от комиссионной продажи как оплату или часть первого взноса.",
								},
							].map((item, idx) => (
								<div
									key={idx}
									className="bg-[#181b20] border border-[#2e333c] rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.6)] overflow-hidden"
								>
									<div className="collapse collapse-plus">
										<input type="checkbox" className="peer" />
										<div className="collapse-title text-sm sd:text-base font-semibold bg-transparent text-white peer-checked:bg-[#03481E] peer-checked:text-white">
											{item.q}
										</div>
										<div className="collapse-content bg-[#181b20] text-gray-200 peer-checked:bg-[#111518] peer-checked:text-gray-100 text-sm sd:text-base border-t border-[#2e333c]">
											<p className="pt-3">{item.a}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Партнёры по кредиту и лизингу */}
			<section className="container mx-auto mt-10">
				<PartnersSection2 />
			</section>

			{/* JSON-LD для AEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</main>
	);
};

export default Page;
