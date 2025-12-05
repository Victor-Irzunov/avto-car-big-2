export async function generateMetadata({ params: { brand, model } }) {
	const formattedBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
	const formattedModel = model.charAt(0).toUpperCase() + model.slice(1);

	const title = `${formattedBrand} ${formattedModel} купить в Минске в кредит и лизинг в автосалоне на ул.Куйбышева 40`;
	const metaDescription = `ᐈ ⭐ ${formattedBrand} ${formattedModel} купить в Минске в кредит и лизинг ✫ Автосалон: Кредит и лизинг на б/у авто ➤➤➤ До 10 лет. ☎️ (33) 355-88-55 ⚡ Большой выбор автомобилей ⚡ Помощь в выборе авто ⭐ Офомление в день подачи ⭐ Без взоса ✓ Без справок и поручителей.`;
	const keywords = `${brand} ${model} купить в Минске, кредит на авто, ${brand} ${model} лизинг авто, автосалон, кредит на покупку авто, автокредит, машина в лизинг, купить авто в лизинг, кредит на покупку авто бу, лизинг без первого взноса, кредит на авто бу, автолизинг`;

	// SEO и социальные мета-теги
	const alternates = {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/auto/${brand}/${model}`,
	};
	const ogUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auto/${brand}/${model}`;
	const ogImage = 'public/logo/logo.webp';
	const twitterImage = 'public/logo/logo.webp';

	return {
		title,
		description: metaDescription,
		keywords,
		alternates,
		openGraph: {
			title: title,
			description: metaDescription,
			type: 'website',
			url: ogUrl,
			image: ogImage,
		},
		twitter: {
			card: 'summary_large_image',
			title: title,
			description: metaDescription,
			image: twitterImage,
		},
		ogTitle: title,
		ogDescription: metaDescription,
		ogImage,
		ogType: 'website',
		ogUrl,
		twitterTitle: title,
		twitterDescription: metaDescription,
		twitterImage,
	};
}

export default function Layout({ children }) {
	return (
		<>
			{children}
		</>
	);
}
