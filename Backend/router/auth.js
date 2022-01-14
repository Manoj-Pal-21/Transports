const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send(`Hello world from the server router js`);
});

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ success: false, error: "Plz Fill Out This Field! " })
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ success: false, error: "Email Already Exist!" });
        } else {
            const user = new User({ name, email, password });

            await user.save();

            res.status(200).json({ success: true, message: "User Register Successfully!" });
        }

    } catch (err) {
        console.log(err);
    }

});

// Login route

router.post("/signin", async (req, res) => {
    // console.log(req.body);
    // res.json({message: "awesome"});
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Plz Fill Out This Field!" })
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httponly: true
            })

            if (!isMatch) {
                res.status(400).json({ success: false, error: "Invalid Credientials" });
            } else {
                res.json({ success: true, message: "User Login SuccessFully" });
            }
        } else {
            res.status(400).json({ success: false, error: "Invalid Credientials" });
        }

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;



// using promises

// router.post("/register", (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(422).json({ error: "Plz filled the field properly" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" });
//             }

//             const user = new User({ name, email, password });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user register successfully" });
//             }).catch((err) => res.status(500).json({ error: "Failed to register" }));
//         }).catch(err => { console.log(err); });

//     // console.log(email);
//     // console.log(password);
//     // res.json({ message: req.body });
//     // res.send("my register page");

// });


