module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        themeid:String,
      theme: String,
      image:String,
      color:String,
      register:Object
    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Theme = mongoose.model("Themes", schema);
  return Theme;
};
