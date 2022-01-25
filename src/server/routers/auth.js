const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


router.post('/register', async (req, res) => {
    console.log('register', req.body.password);

    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            "password"
        ).toString()
    })
    console.log(newUser);
    try {
        savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    console.log('login');
    
    try {
        const user = await User.findOne({
            username: req.body.username,
        })

        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "password"
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        if (originalPassword != inputPassword) {
            res.status(401).json("Wrong Password");
        };
        console.log(user);

        const accessToken = jwt.sign({
            id: user._id,
        }, 'secret Token');

        res.status(200).json({ accessToken,username:user.username });


    } catch (err) {
        res.status(500).json(err);
    }
    
});
module.exports = router;
