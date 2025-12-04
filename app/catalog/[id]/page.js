import { prisma } from '@/lib/prisma';
import { redirect, notFound } from 'next/navigation';

export default async function Page({ params }) {
  const car = await prisma.car.findUnique({
    where: { id: parseInt(params.id, 10) },
    select: { titleLink: true },
  });
  if (!car) notFound();
  redirect(`/catalog/${params.id}/${car.titleLink}`);
}
