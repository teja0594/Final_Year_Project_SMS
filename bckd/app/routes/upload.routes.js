module.exports = app => {
  const uploads = require("../controllers/upload.controller.js");

  var router = require("express").Router();


  router.post("/", uploads.create);


  router.get("/", uploads.findAll);

  router.get("/:uid", uploads.findOne);

  app.use('/api/results', router);
};
