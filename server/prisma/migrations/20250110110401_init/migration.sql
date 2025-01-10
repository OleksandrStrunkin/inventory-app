/*
  Warnings:

  - The primary key for the `Expenses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expensesId` on the `Expenses` table. All the data in the column will be lost.
  - Added the required column `expenseId` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_pkey",
DROP COLUMN "expensesId",
ADD COLUMN     "expenseId" TEXT NOT NULL,
ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY ("expenseId");
