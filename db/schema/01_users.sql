-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  admin BOOLEAN DEFAULT false
);
