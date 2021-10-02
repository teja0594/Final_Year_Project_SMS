const db = require("../../../backend/app/models");
const Upload = db.upload;

exports.create = (req, res) => {
  if (!req.body.uid) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const upload = new Upload({
    uid:req.body.uid,
    name:req.body.name,
     cn1:req.body.cn1,cc1:req.body.cc1,cin1:req.body.cin1,	cex1:req.body.cex1,
     cn2:req.body.cn2,cc2:req.body.cc2,cin2:req.body.cin2,	cex2:req.body.cex2,
     cn3:req.body.cn3,cc3:req.body.cc3,cin3:req.body.cin3,	cex3:req.body.cex3,
     cn4:req.body.cn4,cc4:req.body.cc4,cin4:req.body.cin4,	cex4:req.body.cex4,
     cn5:req.body.cn5,cc5:req.body.cc5,cin5:req.body.cin5,	cex5:req.body.cex5,
     year:req.body.year,semester:req.body.semester,
  });

  upload
    .save(upload)
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
exports.findAll = (req, res) => {
  const uid = req.query.uid;
  var condition = uid ? { uid: { $regex: new RegExp(uid), $options: "i" } } : {};

  Upload.find(condition)
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

  Upload.findById(uid)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Student with id " + uid });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Student with id=" +uid });
    });
};
