import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export async function GET(req, { params: { id } }) {
	try {
		const car = await prisma.car.findUnique({
			where: { id: parseInt(id, 10) }, // Преобразуем id в число
			include: {
				brand: true,
				model: true,
				generation: true,
			},
		});

		if (!car) {
			return new NextResponse("Автомобиль не найден", { status: 404 });
		}

		return NextResponse.json({ car });
	} catch (error) {
		console.error("Ошибка при получении данных об автомобиле:", error);
		return new NextResponse("Ошибка при получении данных об автомобиле", { status: 500 });
	}
}



export async function DELETE(req, { params: { id } }) {
	try {
		// Находим автомобиль и получаем список изображений
		const car = await prisma.car.findUnique({
			where: { id: parseInt(id, 10) },
		});

		if (!car) {
			return new NextResponse("Автомобиль не найден", { status: 404 });
		}

		// Удаление изображений из файловой системы
		const images = JSON.parse(car.images || "[]"); // Парсим JSON, если images — строка
		const uploadPath = path.join(process.cwd(), 'public/uploads');

		for (const { original, thumbnail } of images) {
			try {
				// Удаляем оригинальные и миниатюрные изображения
				await fs.unlink(path.join(uploadPath, original));
				await fs.unlink(path.join(uploadPath, thumbnail));
			} catch (fileError) {
				console.warn(`Не удалось удалить файл: ${fileError.message}`);
			}
		}

		// Удаляем запись об автомобиле из базы данных
		await prisma.car.delete({
			where: { id: parseInt(id, 10) },
		});

		return new NextResponse("Автомобиль успешно удален", { status: 200 });
	} catch (error) {
		console.error("Ошибка при удалении автомобиля:", error);
		return new NextResponse("Ошибка при удалении автомобиля", { status: 500 });
	}
}
