const path = require("path");
const express = require("express");
const { getAllbooks, getAllfrmpublisher } = require("./db");
const app = express();
require("dotenv").config();
const { PORT = 8080 } = process.env;

app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});

//get data from the db
app.get("/books_w_publishers", (req, res) => {
    getAllfrmpublisher()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
            res.statusCode = 500;
            res.json({ success: false });
        });
});

app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));
