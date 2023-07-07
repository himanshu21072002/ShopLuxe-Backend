const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/user_routes");
const CategoryRoutes = require("./routes/category_routes");
const ProductRoutes= require("./routes/product_routes");
const CartRoutes= require("./routes/cart_routes");
const OrderRoutes= require("./routes/order_routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://himanshugangwar2000:himanshu24@e-commerce.puviiib.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(function () {
    app.get("/", function(req, res) {
      res.json({ message: "hello world!!" });
    });

    app.use("/api/user", UserRoutes);
    app.use("/api/category", CategoryRoutes);
    app.use("/api/product", ProductRoutes);
    app.use("/api/cart",CartRoutes); 
    app.use("/api/order", OrderRoutes);

  });

const port = 8000;
app.listen(port, function () {
  console.log(`server started at port ${port} bro`);
});
