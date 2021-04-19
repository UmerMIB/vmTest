const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

require("./mongoose"); // Database
require("./model/post"); // Schema
var model = mongoose.model("ReqData");

app.use(express.json());

app.get("/test", async (req, res) => {
  let data = {
    name: "name",
    persons: 4,
    roomType: "roomType",
    email: "mohammadumer704@gmail.com",
  };
  var saveData = new model(data);
  saveData.save(async (err, mydata) => {
    if (err) {
      console.log(`Error occured while writing on database`, err.message);
      res.send(`Error occured while writing on database`);
    } else {
      console.log(`Data is `, mydata);
      let aaa = await model.find({});
      console.log(aaa);
      res.json(aaa);
    }
  });
});

app.listen(port, () => console.log("server is runing on port", port));
