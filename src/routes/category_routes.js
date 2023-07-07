const CategoryRoutes= require("express").Router();
const CategoryController= require('./../controllers/category_controller');

CategoryRoutes.get("/",CategoryController.fetchAllCategories);
CategoryRoutes.post("/",CategoryController.createCategory);
CategoryRoutes.get("/:id",CategoryController.fetchCategoriesById);
module.exports =CategoryRoutes;