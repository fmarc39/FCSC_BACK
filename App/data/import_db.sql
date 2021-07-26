BEGIN;

DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "clients" CASCADE;
DROP TABLE IF EXISTS "comments" CASCADE;
DROP TABLE IF EXISTS "payments" CASCADE;

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "username" varchar(50) NOT NULL,
    "email" varchar(100) NOT NULL,
    "password" varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "clients" (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "commercial_name" TEXT NOT NULL,
    "fix_phone" TEXT,
    "cel_phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "subscription" TEXT,
    "debt" TEXT,
    "sub_price" TEXT
);

CREATE TABLE IF NOT EXISTS "comments" (
    "id" SERIAL PRIMARY KEY,
    "client_id" INTEGER NOT NULL REFERENCES "clients"("id") ON DELETE CASCADE,
    "comment" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "payments" (
    "id" SERIAL PRIMARY KEY,
    "client_id" INTEGER NOT NULL REFERENCES "clients"("id") ON DELETE CASCADE,
    "date" DATE NOT NULL,
    "amount" INTEGER NOT NULL

);


INSERT INTO "users" ("username", "email", "password") VALUES ('yvivant', 'commercial.fcsc@gmail.com', 'serger39');

COMMIT;