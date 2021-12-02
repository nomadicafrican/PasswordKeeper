DROP TABLE IF EXISTS accounts CASCADE;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  organizations_email VARCHAR(255) NOT NULL,
  organizations_password VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
);
