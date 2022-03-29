const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

dotenv.config({path:"./config.env"});
``
require("./db/conn");
// const User = require("./model/userSchema");
app.use(cookieParser());
app.use(cors({"origin": true, "credentials": true}));
app.use(express.json());

//link the router file
app.use(require("./router/auth"));


// const DB = "mongodb+srv://manoj:<password>@cluster0.kwgod.mongodb.net/projectname?retryWrites=true&w=majority"

// const DB = process.env.DATABASE;

const PORT = process.env.PORT || 5000;
 
app.get("/ping", (req, res) => {
    res.send(`<h3>Pong</h3>`);
});

if (process.env.NODE_ENV == "production") {
    app.use(express.static("./frontend/build"));
    const path = require("path");
    app.get("/*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"), (err) => {
            if(err) res.status(500).send(err);
        });
    });
}

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`)
});