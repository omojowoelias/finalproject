DROP TABLE IF EXISTS publisher;
DROP TABLE IF EXISTS books;

CREATE TABLE publisher(
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT,
    publisher_id INTEGER NOT NULL REFERENCES publisher(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO publisher (url, username, title, description) VALUES (
    'https://m.media-amazon.com/images/I/51cjQIWDy8L._SX331_BO1,204,203,200_.jpg',
    'Geoff Eley',
    'Welcome to Spiced and the Future!',
    'This photo brings back so many great memories.'
);

INSERT INTO publisher (url, username, title, description) VALUES (
    'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL254_SR254,254_.jpg',
    'prince harry',
    'Elvis',
    'We can''t go on together with suspicious minds.'
);

INSERT INTO publisher (url, username, title, description) VALUES (
    'https://images-na.ssl-images-amazon.com/images/I/71XS8x7ykIL._AC_UL381_SR381,381_.jpg',
    'Mikepompeo',
    'To be or not to be',
    'That is the question.'
);
