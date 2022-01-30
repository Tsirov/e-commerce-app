const router = require("express").Router();
const { body, validationResult } = require('express-validator');

const Email = require('../models/Email');

router.post('/',
    body('email').isEmail().withMessage('Invalid Email.'),

    async (req, res) => {
        const { errors } = validationResult(req);
console.log('EMAIL', req.body.email);
        try {
            if (errors.length > 0) {
                const message = errors.map(e => e.msg);
                res.status(405).json(message);
                return;
            };

            console.log('111');
            const emailChecking = await Email.findOne({ email: req.body.email });

            if (Boolean(emailChecking)) {
                const message = ['You have already signed up for the news!']
                res.status(405).json(message);
                return;
            }

            const newEmail = new Email({
                email: req.body.email,
            });

            const userData = await newEmail.save();
            res.status(200).json({ userData});

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

module.exports = router;

