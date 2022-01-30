const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is a required."]},
        description: { type: String, required: [true, "Description is a required."] },
        img: { type: String, required: [true, "Image is a required."] },
        category: { type: String,required: [true, "Category is a required."] },
        size: { type: String,required:[true, "Size is a required."] },
        color: { type: String,required: [true, "Color is a required."] },
        price: { type: Number, required: [true, "Price is a required."] },
        collectionSeason: { type: String, required: [true, "Collection is a required."] },
        ownerId: { type: String},


    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
