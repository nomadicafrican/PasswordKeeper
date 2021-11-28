-- DROP TABLE IF EXISTS permissions CASCADE;

-- CREATE TABLE permissions (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER NOT NULL,
--   account_id INTEGER REFERENCES accounts_id ON DELETE CASCADE,
--   rights BOOLEAN NOT NULL DEFAULT TRUE
-- );

INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (1, 1, 1, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (2, 2, 2, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (3, 3, 3, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (4, 4, 4, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (5, 5, 5, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (6, 6, 6, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (7, 7, 7, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (8, 8, 8, 'false');
INSERT INTO permissions (id, user_id, account_id, rights)
VALUES (9, 9, 9, 'false');



