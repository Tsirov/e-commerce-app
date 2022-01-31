const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');

const TOKEN_SECRET = 'Token is secure';
const COOKIE_NAME = 'User';

router.post('/register', body('email', 'Invalid email!').isEmail(),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 2 }).withMessage('Password must be at least 2 characters long'),
    body('repeatPass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords do not match.')
        }
        return true;
    }),

    async (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                const message = errors.map(e => e.msg);
                res.status(405).json(message);
            };

            const emailChecking = await User.findOne({ email: req.body.email });

            if (Boolean(emailChecking)) {
                const message = ['User with this email is already taken.Please enter another email !']
                res.status(405).json(message);
            }

            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: CryptoJS.AES.encrypt(
                    req.body.password,
                    "password"
                ).toString()
            });

            const userData = await newUser.save();
            const token = generateToken(userData);
            res.status(200).json({ userData, token });

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

router.post('/login', body('email').isLength({ min: 1 }).withMessage('Please fill the email section.'),
    body('password').isLength({ min: 1 }).withMessage('Please fill the password section.'),

    async (req, res) => {
        const { errors } = validationResult(req);
        try {
            if (errors.length > 0) {
                const message = errors.map(e => e.msg);
                res.status(405).json(message);
                return;
            };
            const user = await User.findOne({ email: req.body.email });

            if (!user) {
                const err = ["Wrong  email!"];
                res.status(405).json(err);
                return;
            }
            
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                "password"
            );

            console.log('ORIGIN password',hashedPassword.toString(CryptoJS.enc.Utf8));
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

            const inputPassword = req.body.password;

            if (originalPassword != inputPassword) {
                res.status(405).json(["Wrong Password"]);
                return;
            };

            const token = generateToken(user)
            const userData = user;

            res.status(200).json({userData , token });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

    });

function generateToken(userData) {

    return jwt.sign({
        _id: userData._id,
        username: userData.username,
        email: userData.email,
    }, TOKEN_SECRET);
}



module.exports = router;
