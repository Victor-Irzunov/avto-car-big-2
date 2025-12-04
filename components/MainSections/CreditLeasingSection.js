// /components/MainSections/CreditLeasingSection.jsx
"use client";

import Link from "next/link";

export default function CreditLeasingSection() {
	return (<section className="bg-[#181818] text-white py-14 sd:py-20"> <div className="container mx-auto px-4 sd:px-8">
		{/* SEO-заголовок: виден на мобилке, скрыт визуально на десктопе */} <h2 className="xz:mb-8 xz:text-center xz:text-[26px] xz:font-semibold xz:text-white sd:sr-only">
			Авто в кредит и лизинг </h2>

		{/* ===== МОБИЛЬНАЯ ВЕРСИЯ (как было — не трогаем) ===== */}
		<div className="sd:hidden flex flex-col gap-10">
			{/* Кредит */}
			<article className="rounded-3xl bg-[#181818] border border-white/10 px-5 py-7 shadow-lg">
				<h3 className="text-center text-[22px] font-semibold mb-4">
					Авто в кредит
				</h3>
				<p className="text-center text-[13px] leading-relaxed mb-6 text-white/90">
					Никаких первоначальных взносов, суммы до 40&nbsp;000 BYN и выше,
					гибкие сроки выплат от 1 до 7 лет, досрочное погашение без штрафов.
				</p>
				<div className="flex justify-center">
					<Link
						href="/credit"
						prefetch
						className="btn rounded-2xl border-none bg-white text-[#115223] px-7 py-3 text-[13px] font-semibold"
					>
						Рассчитать стоимость
					</Link>
				</div>
			</article>

			{/* Лизинг */}
			<article className="rounded-3xl bg-[#181818] border border-white/10 px-5 py-7 shadow-lg">
				<h3 className="text-center text-[22px] font-semibold mb-4">
					Авто в лизинг
				</h3>
				<p className="text-center text-[13px] leading-relaxed mb-6 text-white/90">
					Авансовый платёж от 0% на любой автомобиль, возможность оформления
					без трудоустройства в Беларуси, сроки выплат от 1 до 7 лет,
					одобрение всего за 30 минут.
				</p>
				<div className="flex justify-center">
					<Link
						href="/lizing"
						prefetch
						className="btn rounded-2xl border-none bg-white text-[#115223] px-7 py-3 text-[13px] font-semibold"
					>
						Рассчитать стоимость
					</Link>
				</div>
			</article>
		</div>

		{/* ===== ДЕСКТОПНАЯ ВЕРСИЯ (как на макете) ===== */}
		<div className="hidden sd:grid grid-cols-2 grid-rows-2 min-h-[520px] lg:min-h-[600px] gap-x-20 gap-y-16">
			{/* Левый верхний блок — КРЕДИТ */}
			<article className="row-start-1 col-start-1 self-start max-w-xl">
				<h2 className="text-[46px] lg:text-[56px] font-semibold mb-6 leading-tight">
					Авто в кредит
				</h2>
				<p className="text-[16px] lg:text-[18px] leading-relaxed mb-10 text-white/85 max-w-xl">
					Никаких первоначальных взносов, суммы до 40&nbsp;000 BYN и выше,
					гибкие сроки выплат от 1 до 7 лет, досрочное погашение без штрафов.
				</p>
				<Link
					href="/credit"
					prefetch
					className="inline-flex items-center justify-center rounded-2xl bg-white text-[#115223] px-8 py-3 text-[15px] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
				>
					Рассчитать стоимость
				</Link>
			</article>

			{/* Правый нижний блок — ЛИЗИНГ */}
			<article className="row-start-2 col-start-2 self-end max-w-xl justify-self-end">
				<h2 className="text-[46px] lg:text-[56px] font-semibold mb-6 leading-tight text-right sd:text-left lg:text-right">
					Авто в лизинг
				</h2>
				<p className="text-[16px] lg:text-[18px] leading-relaxed mb-10 text-white/85 text-right sd:text-left lg:text-right max-w-xl">
					Авансовый платёж от 0% на любой автомобиль, возможность оформления
					без трудоустройства в Беларуси, сроки выплат от 1 до 7 лет,
					одобрение всего за 30 минут.
				</p>
				<div className="flex justify-end sd:justify-start lg:justify-end">
					<Link
						href="/lizing"
						prefetch
						className="inline-flex items-center justify-center rounded-2xl bg-white text-[#115223] px-8 py-3 text-[15px] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
					>
						Рассчитать стоимость
					</Link>
				</div>
			</article>
		</div>
	</div>
	</section>


	);
}
