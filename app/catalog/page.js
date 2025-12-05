// my-app/app/catalog/page.js
import prisma from "@/lib/prisma";
import PageComponent from "@/components/Comp/PageComponent";
import { unstable_noStore as noStore } from "next/cache";
import phoneNumbers from "@/config/config";

// Гарантируем Node.js среду (Prisma не работает на Edge)
export const runtime = "nodejs";

// Полностью отключаем кэш RSC/ISR для этой страницы,
// чтобы при переходах данные всегда приходили с БД
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

async function getData() {
  // Отключаем кэш конкретно для этого запроса данных
  noStore();
  try {
    const data = await prisma.car.findMany({
      include: { brand: true, model: true, generation: true },
      orderBy: [{ vip: 'desc' }, { createdAt: 'desc' }],
    });
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Ошибки при запросе:", error);
    return [];
  }
}

export const metadata = {
  title: "Авто c пробегом в Минске | Лизинг и Кредит | Каталог автосалона «AvtoCar»",
  description:
    `⭐ Автомобили б/у в самом крупном автосалоне Минска ⚡ Кредит и лизинг на авто с пробегом ➤➤➤ До 10 лет. ☎️ ${phoneNumbers.mainPhone} Автосалон «АвтоКар» ⚡ Большой выбор автомобилей ⚡ Помощь в выборе авто ⭐ Только проверенные авто ⭐ Без взоса ✓ Без справок и поручителей ✓ Звоните прямо сейчас!`,
  alternates: { canonical: "/catalog/" },
  openGraph: {
    title: "Купить авто c пробегом в Минске | Лизинг и Кредит | Каталог автосалона «AvtoCar»",
    description: "ᐈ ⭐ Автомобили с пробегом в самом крупном автосалоне Минска ⚡ Кредит и лизинг на б/у авто ➤➤➤ До 10 лет.",
    type: "website",
    images: ["/fon/fon6.webp"],
  },
};

// Не генерируем статические параметры — страница всегда динамическая
export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  const data = await getData();
  return <PageComponent data={data} />;
}
