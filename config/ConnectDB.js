const config = require("config");
const mongoose = require("mongoose");
const MONGO_URI = config.get("MONGO_URI");

const ConnectDB = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.error("MOngoose not connected"));
};
module.exports = ConnectDB;
