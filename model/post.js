const mongoose = require("mongoose");
const path = "mongodb://localhost:27017/test";
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.Promise = global.Promise;

console.log(path);
mongoose.connect(path).catch((err) => {
  console.log("Error occured", err);
});

mongoose.connection.on("error", (err) => {
  console.log("Error occured while connecting with database", err);
  process.exit(1);
});

mongoose.connection.on("Connected", () => {
  console.log("DB connected");
});
