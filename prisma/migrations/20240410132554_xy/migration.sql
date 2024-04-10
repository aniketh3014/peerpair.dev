/*
  Warnings:

  - You are about to drop the column `githuRepo` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "githuRepo",
ADD COLUMN     "githubRepo" TEXT;
