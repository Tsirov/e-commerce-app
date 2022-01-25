const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routers/auth");
const cartRoute = require("./routes/cart");



const app = express();

console.log('index JSSSSSS');

mongoose
  .connect("mongodb+srv://anton:demo123@cluster0.tgaue.mongodb.net/MyShop?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use("/api/carts", cartRoute);


app.listen(5000, () => {
    console.log("Backend server is running!");
  });