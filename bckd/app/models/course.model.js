module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      coursecode: String,
        coursename:String,
      coursedetails:Array,
      enrolledStudents:Array
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Course = mongoose.model("CourseDetails", schema);
  return Course;
};
