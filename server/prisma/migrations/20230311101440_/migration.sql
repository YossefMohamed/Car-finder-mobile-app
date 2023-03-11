/*
  Warnings:

  - You are about to drop the `CarImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `profileImage` on the `users` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CarImage";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Image" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "carId" TEXT,
    "userId" TEXT,
    CONSTRAINT "Image_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user'
);
INSERT INTO "new_users" ("createdAt", "email", "firstName", "id", "lastName", "password", "phoneNumber", "role", "updatedAt") SELECT "createdAt", "email", "firstName", "id", "lastName", "password", "phoneNumber", "role", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE INDEX "users_email_idx" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");
