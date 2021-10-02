module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
          uid:String,
        name: String,
        gender:String,
        age: String,
        dob:String,
        bloodgroup:String,
        uemail:String,
        pemail:String,
        branch:String,
        year:String,
        ser:String,
        courses:Array
      },
    );

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

    const Student = mongoose.model("StudentsDetails", schema);
    return Student;
  };
