const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userid: { type: String, required: true },
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('Profile', profileSchema);
