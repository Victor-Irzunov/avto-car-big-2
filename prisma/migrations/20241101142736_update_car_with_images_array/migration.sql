/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Car` ADD COLUMN `images` JSON NULL;

-- DropTable
DROP TABLE `Image`;
