"use client"

import { DataCar } from "@/constans/CarData";
import Link from "next/link";
import { useState } from "react";
import { transliterate } from "@/transliterate/transliterate";

const titleLink = (brandName) => {
	return transliterate(brandName).replace(/\s+/g, '-').toLowerCase();
};

const CarsBrand = () => {
	const [showAll, setShowAll] = useState(false);

	// Фильтруем марки, которые начинаются с букв A, B, C
	const filteredCars = DataCar.filter(
		(brand) => ['A', 'B', 'C'].includes(brand.brand[0].toUpperCase())
	);

	// Обработчик для переключения отображения всех брендов
	const toggleShowAll = () => setShowAll(!showAll);

	// Выбор, какие данные показывать
	const displayedCars = showAll ? DataCar : filteredCars;

	return (
		<div className='mt-6 xz:grid sd:hidden grid-cols-3 gap-1 px-3'>
			{displayedCars.map((brand) => (
				<div key={brand.id}>
					<Link
						href={`${process.env.NEXT_PUBLIC_BASE_URL}/${titleLink(brand.brand)}/`}
						className="sd:text-base xz:text-xs font-medium text-secondary"
					>
						{brand.brand}
					</Link>
				</div>
			))}
			{!showAll && (
				<button
					onClick={toggleShowAll}
					className="col-span-full mt-4 text-blue-500 hover:underline"
				>
					Показать все
				</button>
			)}
			{showAll && (
				<button
					onClick={toggleShowAll}
					className="col-span-full mt-4 text-blue-500 hover:underline"
				>
					Скрыть
				</button>
			)}
		</div>
	)
}

export default CarsBrand