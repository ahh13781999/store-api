require("express-async-errors");
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const productsRouter = require("./routes/products");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/products", productsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// port
const port = process.env.PORT || 3000;

const Start = async () => {
  try {
    await connectDB("mongodb://0.0.0.0:27017/store-api");
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

Start();
