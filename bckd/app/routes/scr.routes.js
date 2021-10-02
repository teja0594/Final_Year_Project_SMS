module.exports = app => {
  const scr = require("../controllers/scr.controller.js");

  var router = require("express").Router();


  router.get("/", scr.findAll);

  router.get("/:id", scr.findOne);

  router.put("/:id", scr.update);

  app.use('/api/stocks', router);
};
