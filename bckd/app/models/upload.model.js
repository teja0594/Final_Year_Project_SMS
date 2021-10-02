module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      uid:String,
      name:String,
      cn1:String,
      cc1:String,
      cin1:Number,
      cex1:Number,
      cn2:String,
      cc2:String,
      cin2:Number,
      cex2:Number,
      cn3:String,
      cc3:String,
      cin3:Number,
      cex3:Number,
      cn4:String,
      cc4:String,
      cin4:Number,
      cex4:Number,
      cn5:String,
      cc5:String,
      cin5:Number,
      cex5:Number,
      year:String,
      semester:String

    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Upload = mongoose.model("Results", schema);
  return Upload;
};
