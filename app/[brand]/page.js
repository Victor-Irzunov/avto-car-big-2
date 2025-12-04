import { Catalog } from "@/components/catalog/Catalog";
import FormPodborAvto from "@/components/Form/FormPodborAvto";
import phoneNumbers from "@/config/config";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCarsByBrandName(brandName) {
	try {
		const cars = await prisma.car.findMany({
			where: {
				brand: { name: brandName },
			},
			include: {
				brand: true,
				model: true,
				generation: true,
			},
		});

		if (!cars || cars.length === 0) {
			console.log("Автомобили не найдены для данного бренда");
			return [];
		}

		return cars;
	} catch (error) {
		console.error("Ошибка при получении автомобилей с данными бренда:", error);
		throw error;
	}
}

function formatBrandName(input) {
	return input
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export async function generateMetadata({ params: brand }) {
	const brandName = formatBrandName(brand.brand);
	const data = await getCarsByBrandName(brandName);
	if (!data || data.length === 0) {
		console.warn("Данные автомобиля не найдены для бренда:", brandName);
		return {
			title: "Автомобиль не найден",
			description: "Информация об автомобиле не найдена",
		};
	}
	const dataCars = data[0];
	const title1 = `${dataCars.brand.name} купить в Минске: автосалон автомобилей с пробегом`;
	const description1 = `${dataCars.brand.name} купить в Минске: автосалон автомобилей с пробегом. ${dataCars.brand.name} купить в Лизинг или Кредит на выгодных услговиях. `;
	const ogImage = dataCars.images?.[0]?.original ? `/uploads/${dataCars.images[0].original}` : '';
	return {
		title: title1,
		description: description1,
		keywords: ``,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${dataCars.brand.name.toLowerCase()}`,
		},
		og: {
			title: title1,
			description: description1,
			type: 'website',
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${dataCars.brand.name.toLowerCase()}`,
			image: ogImage,
		},
	};
}



export default async function page({ params: brand }) {
	const brandName = formatBrandName(brand.brand);
	const data = await getCarsByBrandName(brandName);

	if (!data) {
		return (
			<button className="btn">
				<span className="loading loading-spinner"></span>
				loading
			</button>
		)
	}

	return (
		<main className='sd:py-16 xz:py-8 min-h-svh'>
			<div className='w-full bg-cover fon bg-center' />
			<section className='relative'>
				<div className='container mx-auto'>
					<div className='mb-5'>
						<h1 className='sd:text-5xl xz:text-3xl font-semibold'>
							Каталог {data[0]?.brand.name || 'авто'}
						</h1>
					</div>
					<div className='bg-white/85 rounded-3xl sd:py-8 xz:py-5 sd:px-10 xz:px-2'>
						<div className=''>
							<div className='bg-[#1B1464] rounded-3xl sd:px-7 xz:px-4 py-9'>
								<h2 className='sd:block xz:hidden sd:text-5xl xz:text-3xl font-semibold text-white'>
									Быстрый подбор авто
								</h2>
								<h2 className='sd:hidden xz:block sd:text-5xl xz:text-3xl font-semibold text-white'>
									Подбор авто
								</h2>

								<div className='mt-6'>
									<FormPodborAvto />
								</div>
							</div>
						</div>

						<div className=''>
							{
								data.length
									?
									<Catalog data={data} />
									:
									<div className='mt-14 text-center'>
										<p className='sd:text-5xl xz:text-2xl'>
											ничего не найдено
										</p>
										<div className='mt-10'>
											<p className=''>
												Если вы не нашли то, что искали, позвоните нам — мы обязательно вам поможем!
											</p>

											<a href={`tel:${phoneNumbers.mainPhoneLink}`} className="sd:text-3xl xz:text-xl">
												{phoneNumbers.mainPhone}
											</a>
										</div>
									</div>
							}

						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

