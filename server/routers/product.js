const Product = require("../models/Product");
const { body, validationResult } = require('express-validator');
const {
    verifyToken,
    verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/"/*, verifyTokenAndAuthorization,*/,
    body('img').isURL().withMessage('Please enter correct URL address.'),
    body('price').custom((value, { req }) => {
        const rex = /[0-9]/gm
        if (!rex.test(value)) {
            throw new Error('Price need to be a number!')
        }
        return true;
    }),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                const message = errors.map(e => e.msg);
                res.status(405).json(message);
                return;
            };
            const newProduct = req.body
            const productDB = new Product(newProduct);
            await productDB.save();

        } catch (error) {
            if (error.name === 'ValidationError') {
                let errors = [];
                Object.keys(error.errors).forEach((key) => {
                    errors.push(error.errors[key].message);
                });
                res.status(405).json(errors)
            }
            console.log(err);
            res.status(500).json(err);
        }

    });

//UPDATE
router.put("/:id",
    body('img').isURL().withMessage('Please enter correct URL address.'),
    body('price').custom((value, { req }) => {
        const rex = /[0-9]/gm
        if (!rex.test(value)) {
            throw new Error('Price need to be a number!')
        }
        return true;
    }),

    async (req, res) => {
        console.log('PUT',req.body);
        try {

            const { errors } = validationResult(req);
            if (errors.length > 0) {
                const message = errors.map(e => e.msg);
                console.log('errors',req.params.id,message);
                res.status(405).json(message);
                return;
            };

            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedProduct);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

//DELETE
router.delete("/:id", /*verifyTokenAndAuthorization,*/ async (req, res) => {

    try {
        // let result = await Product.findByIdAndDelete(req.params.id);
        const product = await Product.findById(req.params.id);
        await product.deleteOne();
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    console.log('FIND');
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    console.log('GET request');
    console.log(req.query);
    const qNew = req.query.new;
    const qCategory = req.query.category;
    console.log(qNew, qCategory);
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            if (qCategory == 'dress' || qCategory == 't-shirt' || qCategory == 'jacket') {
                products = await Product.find({
                    category: qCategory,
                });
            } else {
                products = await Product.find({
                    collectionSeason: qCategory,
                });
            }

        } else {
            products = await Product.find({});
            // console.log(products);
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/owner/:id", async (req, res) => {
    console.log('owner');
    try {
        const product = await Product.find({ ownerId: req.params.id });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
