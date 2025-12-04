import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  const {
    brand,
    model,
    generation,
    yearFrom,
    yearTo,
    priceFrom,
    priceTo,
    currency,
    engine,
    transmission,
    bodyType,
    drive,
  } = await req.json();

  console.log('Данные с клиента:', {
    brand, model, generation, yearFrom, yearTo, priceFrom, priceTo, currency, engine, transmission, bodyType, drive,
  });

  const formattedBrand = brand ? brand.replace(/-/g, ' ') : null;
  const formattedModel = model ? model.replace(/-/g, ' ') : null;
  const priceField = currency === 'USD' ? 'priceUSD' : 'priceBYN';

  const queryConditions = [
    formattedBrand ? { brand: { name: formattedBrand } } : null, // Фильтр по имени бренда
    formattedModel ? { model: { name: formattedModel } } : null, // Фильтр по имени модели
    generation ? { generation: { name: generation } } : null, // Фильтр по поколению
    (yearFrom || yearTo) ? {
      year: {
        ...(yearFrom ? { gte: parseInt(yearFrom, 10) } : {}),
        ...(yearTo ? { lte: parseInt(yearTo, 10) } : {}),
      },
    } : null,
    (priceFrom || priceTo) ? {
      [priceField]: {
        ...(priceFrom ? { gte: parseFloat(priceFrom) } : {}),
        ...(priceTo ? { lte: parseFloat(priceTo) } : {}),
      },
    } : null,
    engine ? { engine } : null,
    transmission ? { transmission } : null,
    bodyType ? { bodyType } : null,
    drive ? { drive } : null,
  ].filter(Boolean);
  
  // Формируем запрос
  const query = {
    where: {
      AND: queryConditions,
    },
  };

  console.log('Построенный запрос для поиска автомобилей:', JSON.stringify(query, null, 2));

  try {
    const cars = await prisma.car.findMany(query);
    return NextResponse.json(cars);
  } catch (error) {
    console.error("Ошибка при фильтрации автомобилей:", error);
    return NextResponse.json({ error: "Ошибка при фильтрации автомобилей" }, { status: 500 });
  }
}
