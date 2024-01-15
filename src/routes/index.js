const express = require("express");
const { todoRouter } = require("./todoRouter");

const routes = express.Router();

routes.use("/todo", todoRouter);

module.exports = { routes };

