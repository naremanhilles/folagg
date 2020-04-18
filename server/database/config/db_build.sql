BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL  PRIMARY KEY,
  imagePath VARCHAR,
  title VARCHAR,
  price INTEGER,
  useMethod VARCHAR,
  content TEXT
);




COMMIT;



