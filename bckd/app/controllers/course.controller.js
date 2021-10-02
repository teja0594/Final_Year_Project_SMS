const db = require("../../../backend/app/models");
const Course = db.course;

exports.create = (req, res) => {
  if (!req.body.coursecode) {
    res.status(400).send({ message: "Course can not be empty!" });
    return;
  }

  const course = new Course({
    coursecode:req.body.coursecode,
    coursename:req.body.coursename,
  });

  course
    .save(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Course"
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Course.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Course with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Course with id =" + id });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  Course.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Course."
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

  Course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Course with id=${id}. Maybe Course was not found!`
        });
      } else res.send({ message: "Course was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Course with id=" + id
      });
    });
};
