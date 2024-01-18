// todoRouter.js

const express = require("express");
const todoController = require("../controllers/todoController.js");
const todoRouter = express.Router();


todoRouter.post("", todoController.createTodo);

todoRouter.get("/:id", todoController.getTodo);

todoRouter.get("",todoController.detailTodo);

todoRouter.put("/:id",todoController.updateTodo);

todoRouter.delete("/:id",todoController.deleteTodo);

module.exports = { todoRouter };
