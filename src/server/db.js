require("dotenv").config();
const { SQL_USER, SQL_PASSWORD } = process.env; // add a .env file next to the db.js file with your PostgreSQL credentials
const spicedPg = require("spiced-pg");
console.log("SQL: ", SQL_USER, SQL_PASSWORD);
const db = spicedPg(
    `postgres:${SQL_USER}:${SQL_PASSWORD}@127.0.0.1:5432/finalproject`
);

const getAllbooks = () => {
    return db.query(`SELECT * FROM books`);
};

const getAllfrmpublisher = () => {
    return db.query(`SELECT * FROM publisher`);
};

const addBooks = (url, title, description) => {
    return db.query(
        `INSERT INTO books (url, title, description) 
    VALUES($1, $2, $3) RETURNING *;`,
        [url, title, description]
    );
};
const addpublisher = (publisher, author, description) => {
    return db.query(
        `INSERT INTO publisher (publisher, author, description)
    VALUES($1, $2, $3)RETURNING *;`,
        [publisher, author, description]
    );
};

const getConnections = () => {
    return db
        .query(
            `
        SELECT p.id, p.username, p.title, p.description, b.url,
        FROM publisher
        JOIN books ON publisher.id = books.publisher_id`
        )
        .then((data) => data.rows)
        .catch((err) =>
            console.log(console.log("connection query error:", err))
        );
};

// const getConnections = (id) => {
//     return db
//         .query(
//             `SELECT p.id, p.username, b.url, b.title, b.description
//     FROM publisher JOIN books ON publisher.id=books.id;`[id]
//         )
//         .then((data) => data.rows)
//         .catch((err) =>
//             console.log(console.log("Conncection query error:", err))
//         );
// };

module.exports = {
    //getAllbooks
    getAllfrmpublisher,
    addpublisher,
    addBooks,
    getAllbooks,
    getConnections,
};
