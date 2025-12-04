// /app/api/new-cars/route.js

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const DEFAULT_DAYS = 10; // по умолчанию берём авто за последние 10 дней

// Только GET — новинки по createdAt
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const daysParam = searchParams.get("days");

    let days = DEFAULT_DAYS;
    if (daysParam) {
      const parsed = parseInt(daysParam, 10);
      if (!Number.isNaN(parsed) && parsed > 0) {
        days = parsed;
      }
    }

    const now = new Date();
    const fromDate = new Date(now);
    fromDate.setDate(now.getDate() - days);

    const cars = await prisma.car.findMany({
      where: {
        createdAt: {
          gte: fromDate, // только авто не старше N дней
        },
      },
      include: {
        brand: true,
        model: true,
        generation: true,
      },
      orderBy: [
        { vip: "desc" },      // сначала VIP
        { createdAt: "desc" } // затем самые новые
      ],
    });

    return NextResponse.json({ cars });
  } catch (error) {
    console.error("Ошибка при получении новинок:", error);
    return new NextResponse("Ошибка при получении новинок", { status: 500 });
  }
}

// Гарантируем Node.js среду для Prisma
export const runtime = "nodejs";
