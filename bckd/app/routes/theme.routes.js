module.exports = app => {
  const themes = require("../controllers/theme.controller.js");

  var router = require("express").Router();


  router.get("/", themes.findAll);

  router.get("/:id", themes.findOne);

  router.put("/:id", themes.update);

  app.use('/api/themes', router);
};
