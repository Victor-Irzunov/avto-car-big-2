// components/similarCars/SimilarCars.js
import { prisma } from '@/lib/prisma';
import CauruselSimilar from './CauruselSimilar';

async function getData(price, id, year) {
  try {
    const minPrice = price * 0.7;
    const maxPrice = price * 1.3;
    const minYear = year - 3;
    const maxYear = year + 3;

    const [carsByPrice, carsByYear] = await Promise.all([
      prisma.car.findMany({
        where: { priceUSD: { gte: minPrice, lte: maxPrice }, NOT: { id } },
        orderBy: { createdAt: 'desc' },
        take: 12, // ВАЖНО: ограничиваем
      }),
      prisma.car.findMany({
        where: { year: { gte: minYear, lte: maxYear }, NOT: { id } },
        orderBy: { createdAt: 'desc' },
        take: 12, // ВАЖНО: ограничиваем
      }),
    ]);

    const seen = new Set();
    const combined = [...carsByPrice, ...carsByYear].filter((c) => (seen.has(c.id) ? false : seen.add(c.id)));

    if (combined.length < 3) {
      return await prisma.car.findMany({
        where: { NOT: { id } },
        orderBy: { createdAt: 'desc' },
        take: 12, // тоже ограничиваем
      });
    }

    return combined.slice(0, 12);
  } catch (error) {
    console.error("Ошибка при получении данных об автомобилях:", error);
    return [];
  }
}

const SimilarCars = async ({ price, id, year }) => {
  const data = await getData(price, id, year);

  if (!data || data.length === 0) {
    return (
      <div className='mt-10'>
        <p className='text-secondary/80 text-xl uppercase'>нет похожих автомобилей</p>
      </div>
    );
  }

  return (
    <section className='mt-8'>
      <div className='container mx-auto overflow-x-hidden'>
        <h3 className='sd:text-3xl xz:text-xl font-semibold font-system mb-8'>Похожие автомобили</h3>
        <CauruselSimilar data={data} />
      </div>
    </section>
  );
};

export default SimilarCars;
