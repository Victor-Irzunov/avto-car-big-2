/*
  Warnings:

  - You are about to drop the `CarAirbag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarAssistance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarComfort` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarExterior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarHeating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarInterior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarLight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarMultimedia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarSafety` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Car` ADD COLUMN `airbags` VARCHAR(191) NULL,
    ADD COLUMN `assistance` VARCHAR(191) NULL,
    ADD COLUMN `comfort` VARCHAR(191) NULL,
    ADD COLUMN `exterior` VARCHAR(191) NULL,
    ADD COLUMN `heating` VARCHAR(191) NULL,
    ADD COLUMN `interior` VARCHAR(191) NULL,
    ADD COLUMN `lights` VARCHAR(191) NULL,
    ADD COLUMN `multimedia` VARCHAR(191) NULL,
    ADD COLUMN `safety` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `CarAirbag`;

-- DropTable
DROP TABLE `CarAssistance`;

-- DropTable
DROP TABLE `CarComfort`;

-- DropTable
DROP TABLE `CarExterior`;

-- DropTable
DROP TABLE `CarHeating`;

-- DropTable
DROP TABLE `CarInterior`;

-- DropTable
DROP TABLE `CarLight`;

-- DropTable
DROP TABLE `CarMultimedia`;

-- DropTable
DROP TABLE `CarSafety`;
