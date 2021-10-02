const db = require("../../../backend/app/models");
const Theme = db.scr;

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  Theme.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Theme."
      });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Theme.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Theme with id=${id}. Maybe Theme was not found!`
        });
      } else res.send({ message: "Theme was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Theme with id=" + id
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Theme.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Theme with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Theme with id=" + id });
    });
};

