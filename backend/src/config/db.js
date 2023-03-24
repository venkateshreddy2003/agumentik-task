const mongoose = require("mongoose");

const connect = async () => {
  return await mongoose.connect(
    "mongodb+srv://venkatesh:N1mvHO3FOpxgiAXz@cluster0.mmjfc3k.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
