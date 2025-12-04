// /lib/prisma.js — hybrid export (совместим со старыми импортами)
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

// Используем один экземпляр в dev/HMR
const prisma =
  globalForPrisma.__prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__prisma = prisma;
}

export default prisma; // для: import prisma from '@/lib/prisma'
export { prisma };     // для: import { prisma } from '@/lib/prisma'
