-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL IDENTITY(1,1),
  email VARCHAR(255) NOT NULL,
  master_password VARCHAR(255) NOT NULL
);
