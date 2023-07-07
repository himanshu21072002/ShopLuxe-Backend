const CartRoutes= require("express").Router();

const CartController= require("./../controllers/cart_controller");

CartRoutes.post("/", CartController.addToCart);
CartRoutes.get("/:user", CartController.getCartForUser);
CartRoutes.delete("/",CartController.removeFromCart);

module.exports=CartRoutes;