BEGIN;

DROP TABLE IF EXISTS "users" CASCADE;

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
    "fix_phone" INTEGER,
    "cel_phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "SIREN" INTEGER NOT NULL
);


INSERT INTO "users" ("username", "email", "password") VALUES ('yvivant', 'yvivant@gmail.com', 'vivant');

COMMIT;