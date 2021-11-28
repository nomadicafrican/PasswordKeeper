-- CREATE TABLE passwords (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
--   url VARCHAR(255) NOT NULL,
--   category VARCHAR(255) NOT NULL,
--   password_text VARCHAR(255) NOT NULL
-- );

INSERT INTO passwords (user_id, orgnization_id, category, url, password_text)
VALUES (1, 1,  )
