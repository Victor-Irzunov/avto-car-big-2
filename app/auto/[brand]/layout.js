import phoneNumbers from "@/config/config";

export async function generateMetadata({ params: { brand } }) {
	const formattedBrand = brand.charAt(0).toUpperCase() + brand.slice(1);

	const title = `${formattedBrand} купить в Минске в кредит и лизинг в автосалоне на ул.Куйбышева 40`;
	const metaDescription = `⭐ ${formattedBrand} купить в Минске в кредит и лизинг ✫ Автосалон: Кредит и лизинг на б/у авто ➤➤➤ До 10 лет. ☎️ ${phoneNumbers.mainPhone} ⚡ Большой выбор автомобилей ⚡ Помощь в выборе авто ⭐ Офомление в день подачи ⭐ Без взоса ✓ Без справок и поручителей.`;
	const keywords = `${brand} купить в Минске, кредит на авто, ${brand} лизинг авто, автосалон, кредит на покупку авто, автокредит, машина в лизинг, купить авто в лизинг, кредит на покупку авто бу, лизинг без первого взноса, кредит на авто бу, автолизинг`;

	// SEO и социальные мета-теги
	const alternates = {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/auto/${brand}`,
	};
	const ogUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auto/${brand}`;
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
