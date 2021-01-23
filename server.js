const express = require("express");
const app = express();

//connect database with server
const connectDB = require("./config/ConnectDB");
connectDB();

//parse data
app.use(express.json());
app.use("/person", require("./routes/PersonRoute"));

var port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err ? console.error(err) : console.log("this app is listening on port", port);
});
