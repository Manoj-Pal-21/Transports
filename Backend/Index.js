const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

dotenv.config({path:"./config.env"});

require("./db/conn");
// const User = require("./model/userSchema");
app.use(cookieParser());
app.use(cors({"origin": "*", "credentials": true}));
app.use(express.json());

//link the router file
app.use(require("./router/auth"));


// const DB = "mongodb+srv://manoj:<password>@cluster0.kwgod.mongodb.net/projectname?retryWrites=true&w=majority"

// const DB = process.env.DATABASE;

const PORT = process.env.PORT || 5000;

//Routing
 
app.get("/Aboutus", (req, res) => {
    res.send(`Hello world about us from the server`);
});

app.get("/Ourservices", (req, res) => {
    res.send(`Hello world our services from the server`);
});

app.get("/Ourclients", (req, res) => {
    res.send(`Hello world our clients from the server`);
});

app.get("/Contactus", (req, res) => {
    res.send(`Hello world contact us from the server`);
});

app.get("/Booking", (req, res) => {
    res.send(`Hello world Booking from the server`);
});

app.get("/Userbooking", (req, res) => {
    res.send(`Hello world userBooking from the server`);
});

app.get("/Signin", (req, res) => {
    res.send(`Hello world login from the server`);
});

app.get("/Signup", (req, res) => {
    res.send(`Hello world signup from the server`);
});

if (process.env.NODE_ENV == "production") {
    app.use(express.static("./client/build"));
    const path = require("path");
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"), (err) => {
            if(err) res.status(500).send(err);
        });
    });
}

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`)
});