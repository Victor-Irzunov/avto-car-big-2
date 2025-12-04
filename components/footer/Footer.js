// /components/footer/Footer.jsx — ПОЛНОСТЬЮ
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CookiePopup from "@/components/Cookie/CookiePopup";
import phoneNumbers from "@/config/config";

const navLinks = [
	{ href: "/credit", label: "Кредит" },
	{ href: "/lizing", label: "Лизинг" },
	{ href: "/komissionnaya-prodazha", label: "Комиссионная продажа" },
	{ href: "/vykup-avto", label: "Выкуп" },
	{ href: "/obmen", label: "Обмен" },
];

const Footer = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => setDrawerOpen((prev) => !prev);
	const closeDrawer = () => setDrawerOpen(false);

	return (
		<footer
			className="relative bg-[#222222] text-white pt-10 pb-12"
			id="contacts"
		>
			{/* ===== MOBILE FOOTER ===== */}
			<div className="container mx-auto xz:block sd:hidden">
				{/* Top row: logo + burger */}
				<div className="flex items-center justify-between mb-8">
					<Image
						src="/logo/logo-white.webp"
						alt="AvtoCar логотип"
						width={80}
						height={80}
						className="h-16 w-auto"
					/>

					{/* Мобильное меню (бургер + drawer) */}
					<div>
						<button onClick={toggleDrawer} aria-label="Toggle menu">
							<Image
								src="/svg/menu.svg"
								alt="Кнопка меню"
								width={35}
								height={35}
							/>
						</button>

						{/* Drawer Menu */}
						<div
							className={`
                fixed top-0 right-0 w-80 z-50 text-secondary bg-[#222222] h-full transform
                ${drawerOpen ? "translate-x-0" : "translate-x-full"}
                transition-transform duration-300 ease-in-out
              `}
						>
							<ul className="menu p-3 relative text-white text-xl font-semibold">
								<li className="mb-4">
									<div className="text-white flex flex-col items-center text-xl leading-none uppercase absolute right-3">
										<p className="mb-0 pb-0 h-3">avto</p>
										<span className="font-bold text-2xl pt-0 mt-0 h-0">
											car
										</span>
									</div>
								</li>

								<li className="pt-20 mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/catalog/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Автомобили
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""
											}/vykup-avto/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Выкуп авто
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""
											}/komissionnaya-prodazha/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Комиссионная продажа
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/credit/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Кредит
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/lizing/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Лизинг
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/obmen/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Обмен
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href={`${process.env.NEXT_PUBLIC_BASE_URL || ""
											}/prigon-iz-es/`}
										className="hover:text-primary"
										onClick={closeDrawer}
									>
										Пригон из ЕС
									</Link>
								</li>
							</ul>

							<div className="absolute bottom-10 left-5 text-white mt-4">
								<div className="flex items-center space-x-1">
									<Image
										src="/svg/location-white.svg"
										alt="Адрес автосалона"
										width={40}
										height={40}
									/>
									<a
										href="https://yandex.by/maps/-/CDd7nHZo"
										target="_blank"
										rel="noreferrer"
										className="font-semibold"
									>
										Минск, ул. Куйбышева, 40, Паркинг 4 этаж
									</a>
								</div>
								<div className="flex items-center space-x-2 mt-4 pl-1">
									<Image
										src="/svg/phone-white.svg"
										alt="Телефон автосалона"
										width={25}
										height={25}
									/>
									<div>
										<a
											href={`tel:${phoneNumbers.mainPhoneLink}`}
											className="font-semibold block"
										>
											{phoneNumbers.mainPhone}
										</a>
									</div>
								</div>
							</div>

							<button
								onClick={closeDrawer}
								className="absolute top-4 left-4 text-4xl text-white"
								aria-label="Закрыть меню"
							>
								&times;
							</button>
						</div>
					</div>
				</div>

				{/* Контакты */}
				<div className="text-sm space-y-6 mb-8">
					<div>
						<h3 className="font-semibold text-base mb-2">Где мы находимся</h3>
						<p className="leading-snug">
							г. Минск, ул. Куйбышева 40,
							<br />
							паркинг 4 этаж
						</p>
					</div>

					<div>
						<h3 className="font-semibold text-base mb-1">Телефон</h3>
						<a
							href={`tel:${phoneNumbers.mainPhoneLink}`}
							className="block hover:text-gray-200"
						>
							{phoneNumbers.mainPhone}
						</a>
					</div>

					<div>
						<h3 className="font-semibold text-base mb-1">Часы работы</h3>
						<p className="leading-snug">
							10:00–20:00
							<br />
							без выходных
						</p>
					</div>

					<div className="flex items-center gap-4 pt-2">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
						>
							<Image
								src="/svg/instagram-white.svg"
								alt="Instagram"
								width={28}
								height={28}
							/>
						</a>
						<a
							href="https://t.me"
							target="_blank"
							rel="noreferrer"
							aria-label="Telegram"
						>
							<Image
								src="/svg/telegram-white.svg"
								alt="Telegram"
								width={28}
								height={28}
							/>
						</a>
					</div>
				</div>

				{/* Юр. информация */}
				<div className="border-t border-[#3D3D3D] pt-4 mt-2 text-[11px] text-gray-300 space-y-1">
					<p>
						ООО «АВТОКАРГРУПП» УНП 193846922, г. Минск, ул. пер. С.Ковалевской,
						д. 54 к. 1, каб. 303–127
					</p>
					<p>
						Банк: ЗАО «Альфа-Банк», г. Минск, ул. Сурганова, 43–47, БИК банка:
						ALFABY2X, р/с: BY40 ALFA 3012 2G50 3400 1027 0000
					</p>
				</div>

				<div className="mt-4 text-[11px] text-gray-400 space-y-1">
					<p>
						<Link href='/politika'>
							Политика конфиденциальности
						</Link>
					</p>
					<p>
						<Link href='/cookie-policy'>
							Обработка персональных данных
						</Link>
					</p>

					<p>Дизайн сайта — glb_aa</p>
				</div>
			</div>

			{/* ===== DESKTOP FOOTER ===== */}
			<div className="container mx-auto hidden sd:block">
				{/* Верхняя строка: контакты + навигация + соцсети */}
				<div className="flex items-start justify-between gap-12">
					{/* Контакты слева */}
					<div className="text-sm max-w-xs">
						<h3 className="text-[18px] font-semibold mb-4">
							Где мы находимся
						</h3>
						<p className="mb-4 leading-snug">
							г. Минск, ул. Куйбышева 40,
							<br />
							паркинг 4 этаж
						</p>

						<h4 className="mt-4 font-semibold">Телефон</h4>
						<a
							href={`tel:${phoneNumbers.mainPhoneLink}`}
							className="block mb-4 hover:text-gray-200"
						>
							{phoneNumbers.mainPhone}
						</a>

						<h4 className="mt-2 font-semibold">Часы работы</h4>
						<p className="leading-snug">
							10:00–20:00
							<br />
							без выходных
						</p>
					</div>

					{/* Навигация по услугам по центру */}
					<nav className="flex-1 flex items-start justify-center">
						<ul className="flex gap-12 text-sm">
							{navLinks.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="hover:text-gray-300">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Соцсети справа */}
					<div className="flex items-start gap-4">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="inline-flex"
						>
							<Image
								src="/svg/instagram-white.svg"
								alt="Instagram"
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://t.me"
							target="_blank"
							rel="noreferrer"
							aria-label="Telegram"
							className="inline-flex"
						>
							<Image
								src="/svg/telegram-white.svg"
								alt="Telegram"
								width={30}
								height={30}
							/>
						</a>
					</div>
				</div>

				{/* Нижняя зона: линия + логотип + юр. блоки */}
				<div className="mt-10 border-t border-[#3D3D3D] pt-8 relative mb-10">
					<div className="absolute -top-11 left-1/2 -translate-x-1/2  bg-[#222222] border-8 border-[#222222]">
						<Image
							src="/logo/logo-white.webp"
							alt="AvtoCar логотип"
							width={50}
							height={50}
							className="min-h-20 min-w-20 w-auto"
						/>
					</div>

					<div className='flex items-center justify-between mt-20'>

						{/* Левый текст */}
						<div className="text-[11px] text-gray-400 max-w-xl space-y-1 ">
							<p>
								<Link href='/politika'>
									Политика конфиденциальности
								</Link>
							</p>
							<p>
								<Link href='/cookie-policy'>
									Обработка персональных данных
								</Link>
							</p>
							<p>Дизайн сайта — glb_aa</p>
						</div>

						{/* Правый юр. блок */}
						<div className="text-[11px] text-gray-400 max-w-sm text-right space-y-1">
							<p>
								ООО «АВТОКАРГРУПП» УНП 193846922, г. Минск, ул. пер. С.Ковалевской,
								д. 54 к. 1, каб. 303–127
							</p>
							<p>
								Банк: ЗАО «Альфа-Банк», г. Минск, ул. Сурганова, 43–47, БИК
								банка: ALFABY2X, р/с: BY40 ALFA 3012 2G50 3400 1027 0000
							</p>
						</div>

					</div>
				</div>
			</div>



			{/* Нижняя полоса с копирайтом (общая для всех) */}
			<aside className="border-t border-[#3D3D3D] pt-2 mt-6">
				<div className="container mx-auto text-center">
					<p className="text-[10px] text-gray-400">
						Copyright © 2025 | Разработка и Продвижение{" "}
						<a
							href="https://vi-tech.by"
							target="_blank"
							rel="noreferrer"
							className="underline-offset-2 hover:underline"
						>
							VI:TECH
						</a>
						. Информация на сайте не является публичной офертой и
						предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>

			<CookiePopup />
		</footer>
	);
};

export default Footer;
