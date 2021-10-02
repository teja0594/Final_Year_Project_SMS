const db = require("../../../backend/app/models");
const Student = db.student;

exports.create = (req, res) => {
  if (!req.body.uid) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const student = new Student({
    uid:req.body.uid,
    name:req.body.name,
    gender:req.body.gender,
    age: req.body.age,
    dob:req.body.dob,
    bloodgroup:req.body.bloodgroup,
    uemail:req.body.uemail,
    pemail:req.body.pemail,
    branch:req.body.branch,
    year:req.body.year
  });

  student
    .save(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Student"
      });
    });
};

exports.findAll = (req, res) => {
  const uid = req.query.uid;
  var condition = uid ? { uid: { $regex: new RegExp(uid), $options: "i" } } : {};

  Student.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Student."
      });
    });
};

exports.findOne = (req, res) => {
  const uid = req.params.uid;

  Student.findById(uid)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Student with id " + uid });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Student with id=" + uid });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found!`
        });
      } else res.send({ message: "Student was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Student.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
        });
      } else {
        res.send({
          message: "Student was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Student.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Students were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Students."
      });
    });
};
