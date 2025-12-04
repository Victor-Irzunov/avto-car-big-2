"use client"
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import FormPodborAvto from "@/components/Form/FormPodborAvto";
import { getAllFilterCars } from '@/http/adminAPI';
import { Catalog } from '@/components/catalog/Catalog';

function Page() {
  const params = useParams();
  const searchParams = useSearchParams();

  const { brand, model } = params;
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchFilteredCars = async () => {
      const queryParams = {
        brand,
        model: model || null,
        generation: searchParams.get('generation'),
        yearFrom: searchParams.get('yearFrom'),
        yearTo: searchParams.get('yearTo'),
        priceFrom: searchParams.get('priceFrom'),
        priceTo: searchParams.get('priceTo'),
        currency: searchParams.get('currency'),
      };

      try {
        const cars = await getAllFilterCars(queryParams);
        setFilteredCars(cars);
      } catch (error) {
        console.error("Ошибка загрузки отфильтрованных автомобилей:", error);
      }
    };

    fetchFilteredCars();
  }, [searchParams, brand, model]);

  return (
    <main className='sd:py-16 xz:py-8 min-h-svh'>
      <div className='w-full bg-cover fon bg-center' />
      <section className='relative'>
        <div className='container mx-auto'>
          <div className='mb-5'>
            <h1 className='sd:text-5xl xz:text-3xl font-semibold capitalize'>
              Каталог {brand.replace(/-/g, ' ') || null} {model.replace(/-/g, ' ') || null}
            </h1>
          </div>
        </div>
        <div className='sd:container mx-auto'>
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

            <div>
              <Catalog data={filteredCars} />
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}

export default Page;
