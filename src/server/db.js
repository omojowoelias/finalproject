require("dotenv").config();
const { SQL_USER, SQL_PASSWORD } = process.env; // add a .env file next to the db.js file with your PostgreSQL credentials
const spicedPg = require("spiced-pg");
console.log("SQL: ", SQL_USER, SQL_PASSWORD);
const db = spicedPg(
    `postgres:${SQL_USER}:${SQL_PASSWORD}@127.0.0.1:5432/image-board`
);

const getAllbooks = () => {
    return db.query(`SELECT * FROM books`);
};

const getAllfrmpublisher = () => {
    return db.query(`SELECT * FROM publisher`);
};

module.exports = {
    getAllbooks,
    getAllfrmpublisher,
};
