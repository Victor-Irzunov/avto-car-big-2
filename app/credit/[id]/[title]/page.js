// /app/credit/[id]/page.jsx
import CreditArticle from "@/components/Articles/CreditArticle";
import FormCredit from "@/components/Form/FormCredit";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

async function getCarData(id) {
  try {
    const car = await prisma.car.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        brand: true,
        model: true,
        generation: true,
      },
    });
    return car;
  } catch (error) {
    console.error("Ошибка при получении данных об автомобиле:", error);
    return null;
  }
}

export async function generateMetadata({ params: id }) {
  const data = await getCarData(id.id);
  const id1 = id.id;

  let title1;
  let description1;

  if (data) {
    title1 = `${data.title} купить в кредит: выгодный автокредит в Минске`;
    description1 = `ᐈ ⭐ ${data.title} в кредит ⚡ Автокредит на выгодных условиях ⚡ кредит на ${data.title} бу ➤➤➤ До 10 лет. ☎️ (33) 355-88-55 ⚡ Большой выбор автомобилей ⚡ Помощь в выборе авто ⭐ Офомление в день подачи ⭐ Без взоса ✓ Без справок и поручителей. ✓ Звоните прямо сейчас!`;
  }

  return {
    title: title1,
    description: description1,
    keywords: "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/credit/${id1}/${data?.titleLink}`,
    },
    og: {
      title: title1,
      description: description1,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/credit/${id1}/${data?.titleLink}`,
      image: "public/logo/logo.webp",
    },
  };
}

const CreditPage = async ({ params: { id } }) => {
  const carData = await getCarData(id);

  if (!carData) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F3F4F6]">
        <div className="flex items-center gap-3">
          <span className="loading loading-spinner" />
          <p className="text-lg font-semibold text-[#111827]">
            Загрузка данных об автомобиле...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="sd:pt-24 xz:pt-28 pb-24 min-h-screen bg-[#F3F4F6]">
      <section className="relative">
        <div className="container mx-auto sd:px-6 xz:px-4">
          {/* Ссылка «Назад» без onClick */}
          <Link
            href="/catalog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111827]"
          >
            <span className="text-lg">&#8592;</span>
            <span>Назад</span>
          </Link>

          {/* Заголовок страницы */}
          <h1 className="sd:text-4xl xz:text-3xl font-semibold text-[#111827] mb-2">
            Кредитный калькулятор
          </h1>
          <p className="text-sm sd:text-base text-[#6B7280] mb-6">
            Рассчитайте ежемесячный платёж по кредиту на{" "}
            <span className="font-semibold">{carData.title}</span> и отправьте
            онлайн-заявку в автосалон.
          </p>

          {/* Форма + статья */}
          <div className="space-y-10">
            <FormCredit carData={carData} />
            <CreditArticle />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreditPage;
