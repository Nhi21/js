const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

//Database Connection mongoDB
mongoose.connect("mongodb+srv://linhnhi:linhnhi21022003@cluster0.mwhudxm.mongodb.net/e-commerce")

//API creation

app.get("/", (req, res) => {
    res.send("Express App is Running")
})

//Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({ storage: storage })

//cr

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port)
    }
    else {
        console.log("Error : " + error)
    }
})