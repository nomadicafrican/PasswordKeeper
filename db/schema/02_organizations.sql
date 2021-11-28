DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  organization_name VARCHAR(255) NOT NULL,
  organization_password VARCHAR(255) NOT NULL
);
