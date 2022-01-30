const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const authRoute = require("./routers/auth");
const productRoute = require("./routers/product");
const userEmail = require("./routers/email");

const app = express();

mongoose
  .connect("mongodb+srv://anton:demo123@cluster0.tgaue.mongodb.net/MyShop?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use("/api/products", productRoute);
app.use("/api/email", userEmail);


app.listen(5000, () => {
    console.log("Backend server is running!");
  });