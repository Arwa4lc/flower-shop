const express = require("express");
const flower = require("../routes/flowerRoutes");
const { errorHandler, serverErrorHandler } = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/flowers", flower);
  app.use(errorHandler);
  app.use(serverErrorHandler);
};
