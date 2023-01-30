const path = require("path");
const express = require("express");
const { uploader, fileUpload } = require("./file-uploads");
const { addpublisher, addBooks, getAllbooks, getBooksById } = require("./db");
const app = express();
require("dotenv").config();
const { PORT = 8080 } = process.env;

// Server

app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "uploads")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});

//get data from the db

app.post("/books_w_publishers", (req, res) => {
    const { publisher, author, description } = req.body;
    console.log(req.body);
    addpublisher(publisher, author, description)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
            res.statusCode = 500;
            res.json({ success: false });
        });
});

app.post("/addbooks", uploader.single("file"), (req, res) => {
    console.log(req.body);
    const { title, publisher_id, description } = req.body;

    const url = req.file.filename;
    console.log(url);
    console.log("req.file ", req.file);
    addBooks(url, title, publisher_id, description)
        .then((data) => {
            console.log("data addbooks", data);
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
            res.statusCode = 500;
            res.json({ success: false });
        });
});

app.get("/imagebook", (req, res) => {
    console.log(req.query);
    getAllbooks()
        .then((data) => {
            console.log("data", data);
            res.json({ data: data.rows, success: true });
        })
        .catch((error) => {
            console.log("error", error);
            res.json({ success: false });
        });
});

app.get("/addbook/:id", (req, res) => {
    console.log(req.query);
    getBooksById()
        .then((data) => {
            console.log("data", data);
            res.json({ data: data.rows, success: true });
        })
        .catch((error) => {
            console.log("error", error);
            res.json({ success: false });
        });
});

//uploader.single("file"),
// app.get("/add-image", uploader.single("file"), (req, res) => {
//     const { title, description } = req.body;
//     const url = "/" + req.file.filename;
//     addBooks(url, title, description) //description
//         .then((rows) => {
//             res.json({ success: true, data: rows });
//         })
//         .catch(() => {
//             res.statusCode = 500;
//             res.json({ success: false });
//         });
// });

app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));
