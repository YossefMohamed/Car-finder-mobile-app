/*
  Warnings:

  - Added the required column `price` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "categoryId" INTEGER,
    CONSTRAINT "cars_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_cars" ("categoryId", "createdAt", "description", "id", "title", "updatedAt", "userId") SELECT "categoryId", "createdAt", "description", "id", "title", "updatedAt", "userId" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
CREATE INDEX "cars_categoryId_idx" ON "cars"("categoryId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
