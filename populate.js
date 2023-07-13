require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/Product");
const jsonProducts = require("./products.json");

const Start = async () => {
  try {
    await connectDB("mongodb://0.0.0.0:27017/store-api");
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

Start();
