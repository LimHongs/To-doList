const express = require("express");
const { todoRouter } = require("./todoRouter");

const routes = express.Router();

routes.use("/todo", todoRouter);
routes.use("/todolist",todoRouter);

module.exports = { routes };

