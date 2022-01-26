const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../model/userSchema");
const Booking = require("../model/bookingSchema");

router.get("/", (req, res) => {
    res.send(`Hello world from the server router js`);
});


//booking

router.post("/booking", async (req, res) => {
    const { name, lastname, phone, address, city, vehicles, from, to, cost } = req.body;

    if (!name || !lastname || !phone || !address || !city || !vehicles || !from || !to || !cost) {
        return res.status(422).json({ success: false, error: "Plz Fill Out This Field! " });
    };

    try {
        const token = req.cookies.jwtoken
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const bookingData = new Booking({ ...req.body, user_id: verifyToken._id });
        await bookingData.save();
        res.status(200).json({ success: true, message: "Booking Successful." });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error })
    };
});

router.get("/getUserBooking", async (req, res) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const userBooking = await Booking.find({ user_id: verifyToken._id });
        res.status(200).json({ success: true, data: userBooking });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error })
    }
});

//admin

router.get("/getAllUserBookings", async (req, res) => {
    try {
        const AllUserBookings = await Booking.find({});
        res.status(200).json({ success: true, data: AllUserBookings });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error })
    };
});

//delete

router.delete("/deleteUserData/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await Booking.remove({_id: id});
        const AllUserBookings = await Booking.find({});
        res.status(200).json({ success: true, message: "Delete Successful.", data: AllUserBookings });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error })
    }
});


//register

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
            const user = new User({ name, email, password, isadmin: false });

            await user.save();

            res.status(200).json({ success: true, message: "User Register Successfully!" });
        }

    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error })
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

            if (!isMatch) {
                res.status(400).json({ success: false, error: "Invalid Credientials" });
            } else {
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httponly: true
                });

                res.send({ success: true, message: "User Login SuccessFully", isadmin: userLogin.isadmin });
            }
        } else {
            res.status(400).json({ success: false, error: "Invalid Credientials" });
        }

    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error })
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


