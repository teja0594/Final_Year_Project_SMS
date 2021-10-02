module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        type:String,
        list:Array
    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Scr = mongoose.model("stock_details", schema);
  return Scr;
};
