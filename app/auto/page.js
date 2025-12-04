"use client";
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import FormPodborAvto from "@/components/Form/FormPodborAvto";

// Импортируем динамически компонент, который использует `useSearchParams`
const FilteredCarsComponent = dynamic(() => import('../../components/Comp/FilteredCarsComponent'), {
  ssr: false, // Отключаем серверный рендеринг
});

function Page() {
  const params = useParams();
  const { brand, model } = params;

  return (
    <main className='sd:py-16 xz:py-8 min-h-svh'>
      <div className='w-full bg-cover fon bg-center' />
      <section className='relative'>
        <div className='container mx-auto'>
          <div className='mb-5'>
            <h1 className='sd:text-5xl xz:text-3xl font-semibold capitalize'>
              Каталог {brand ? brand.replace(/-/g, ' ') : ''} {model ? model.replace(/-/g, ' ') : ''}
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


           
            <FilteredCarsComponent brand={brand} model={model} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
