DROP TABLE IF EXISTS publisher CASCADE;
DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE publisher(
    id SERIAL PRIMARY KEY,
    publisher VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
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



INSERT INTO publisher (publisher, author, description) VALUES (
    'Jef Bush',
    'Elon Musk',
    'This photo brings back so many great memories.'
);

INSERT INTO publisher (publisher, author, description) VALUES (
    'Hachette Book Group',
    'Rocker Locken',
    'Never say never'.
);

INSERT INTO publisher (publisher, author, description) VALUES (
    'John Wiley & Sons',
    'Bernad Bernad',
    'Lets give hope a chance.'
);

INSERT INTO publisher (publisher, author, description) VALUES (
    'Yap Elemina',
    'Elen John',
    'Thank you for all the rewards.'
);

INSERT INTO publisher (publisher, author, description) VALUES (
    'HarperCollins',
    'harper Collins',
    'This harper collins demo.'
);

INSERT INTO publisher (publisher, author, description) VALUES (
    'Geoff Eley',
    'Elen John',
    'This photo brings back so many great memories.'
);

INSERT INTO publisher (publisher, author, description) VALUES (
    'Springer Nature',
    'Elen John',
    'This photo brings back so many great memories.'
);





INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://m.media-amazon.com/images/I/51cjQIWDy8L._SX331_BO1,204,203,200_.jpg',
    'Geoff Eley',
    1,
    'This photo brings back so many great memories.'
);

INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL254_SR254,254_.jpg',
    'prince harry',
    2,
    'We can''t go on together with suspicious minds.'
);

INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://images-na.ssl-images-amazon.com/images/I/71XS8x7ykIL._AC_UL381_SR381,381_.jpg',
    'Mikepompeo',
    3,
    'But sometimes remembering isn't for yourself; sometimes you do it just to make someone else smileBut sometimes remembering isn't for yourself; sometimes you do it just to make someone else smile.'
);

INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL127_SR127,127_.jpg',
    'Michelle Obama',
    4,
    'Deep, abiding, unconditional love. You want it so much.'
);

INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://m.media-amazon.com/images/I/419FWS5rHzL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    'Jodi Picoult',
    5,
    'That was how I learned that the world changes between heartbeats; that life is never an absolute, but always a wager.'
);
INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://m.media-amazon.com/images/I/41HWwIbhSkL._AC_SF480,480_.jpg',
    'Thibaut Meurisse',
    6,
    'A happier life is possible if you follow the steps.'
);
INSERT INTO books (url, title, publisher_id, description) VALUES (
    'https://m.media-amazon.com/images/I/71iZi2LqK8L._AC_UL320_.jpg',
    'Brinna wWiest',
    7,
    'No matter your goals, this book offers a proven framework for improving--every day.'
);




