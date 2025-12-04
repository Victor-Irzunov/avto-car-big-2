"use client"
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import FormPodborAvto from "@/components/Form/FormPodborAvto";
import { getAllFilterCars } from '@/http/adminAPI';
import { Catalog } from '@/components/catalog/Catalog';
import phoneNumbers from '@/config/config';

function Page() {
  const params = useParams();
  const searchParams = useSearchParams();

  const { brand, model } = params;
  const [filteredCars, setFilteredCars] = useState([]);


  useEffect(() => {
    console.log("searchParams", searchParams);
    const fetchFilteredCars = async () => {
      const queryParams = {
        brand: brand || null,
        model: model || null,
        generation: searchParams.get('generation') || null,
        yearFrom: searchParams.get('yearFrom') || null,
        yearTo: searchParams.get('yearTo') || null,
        priceFrom: searchParams.get('priceFrom') || null,
        priceTo: searchParams.get('priceTo') || null,
        currency: searchParams.get('currency') || null,
        engine: searchParams.get('engine') || null,
        transmission: searchParams.get('transmission') || null,
        bodyType: searchParams.get('bodyType') || null,
        drive: searchParams.get('drive') || null,
      };
  
      console.log("queryParams", queryParams); // Отладка
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
              {
                filteredCars.length
                  ?
                  <Catalog data={filteredCars} />
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
    </main >
  );
}

export default Page;
