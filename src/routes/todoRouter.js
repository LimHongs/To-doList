// todoRouter.js

const express = require("express");
const todoController = require("../controllers/todoController.js");
const todoRouter = express.Router();


todoRouter.post("/create", todoController.createTodo);
todoRouter.get("/getpost/:postId", todoController.getTodo);

module.exports = { todoRouter };
