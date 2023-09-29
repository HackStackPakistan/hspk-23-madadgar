/*
  Warnings:

  - You are about to drop the column `isVerified` on the `users` table. All the data in the column will be lost.
  - Added the required column `hashed_password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'NGO', 'VOLUNTEER');

-- CreateEnum
CREATE TYPE "DisasterType" AS ENUM ('FLOOD', 'TSUNAMI', 'EARTHQUAKE', 'WILDFIRE', 'HURRICANE', 'TYPHOON');

-- CreateEnum
CREATE TYPE "SeverityIndex" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isVerified",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hashed_password" TEXT NOT NULL,
ADD COLUMN     "is_NGO" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'VOLUNTEER',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "reports" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "disasterType" "DisasterType" NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "authorized_by" TEXT,
    "resources" JSON,
    "mediaUrl" TEXT NOT NULL,
    "severity" "SeverityIndex" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pledges" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "avaliable_resources" JSON,

    CONSTRAINT "pledges_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pledges" ADD CONSTRAINT "pledges_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
