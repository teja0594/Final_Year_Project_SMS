const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url=dbConfig.url;

db.user = require("./user.model");
db.role = require("./role.model");
db.student=require("./student.model.js")(mongoose);
db.course=require("./course.model.js")(mongoose);
db.upload=require("./upload.model.js")(mongoose);
db.theme=require("./theme.model.js")(mongoose);
db.scr=require("./scr.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;







