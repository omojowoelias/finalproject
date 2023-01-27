const path = require("path");
const express = require("express");
const { uploader, fileUpload } = require("./file-uploads");
const {
    getAllfrmpublisher,
    getConnections,
    addpublisher,
    addBooks,
    getAllbooks,
} = require("./db");
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

// app.post("/api/addbooks", (req, res) => {
//     const { url, title, description } = req.body;
//     addBooks(url, username, title, description)
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log(error);
//             res.statusCode = 500;
//             res.json({ success: false });
//         });
// });

//uploader.single("file"),
app.post("/uplaoder", uploader.single("file"), (req, res) => {
    const { url, username, title, description } = req.body;
    const imgurl = req.file.filename;
    addpublisher(imgurl, username, title, description)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
            res.statusCode = 500;
        });
});

// app.get("/api/books_w_publishers", (req, res) => {
//     getConnections(req.params.id)
//         .then((rows) => {
//             res.json({ success: true, data: rows });
//         })
//         .catch(() => {
//             res.statusCode = 500;
//             res.json({ success: false });
//         });
// });
app.get("/books_w_publishers", (req, res) => {
    getConnections()
        .then((rows) => {
            res.json({ success: true, data: rows });
        })
        .catch(() => {
            res.statusCode = 500;
            res.json({ success: false });
        });
});

app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));
