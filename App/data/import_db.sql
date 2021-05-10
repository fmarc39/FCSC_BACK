BEGIN;

DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "clients" (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "commercial_name" TEXT NOT NULL,
    "fix_phone" INTEGER,
    "cel_phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "SIREN" INTEGER NOT NULL
);

COMMIT;