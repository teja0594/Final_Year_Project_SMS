module.exports = app => {
  const roles = require("../controllers/role.controller.js");

  var router = require("express").Router();

  router.get("/", roles.findAll);

  app.use('/api/roles', router);
};
