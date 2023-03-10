-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_favorites" (
    "userId" INTEGER NOT NULL,
    "carId" INTEGER,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "favorites_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_favorites" ("carId", "id", "userId") SELECT "carId", "id", "userId" FROM "favorites";
DROP TABLE "favorites";
ALTER TABLE "new_favorites" RENAME TO "favorites";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
