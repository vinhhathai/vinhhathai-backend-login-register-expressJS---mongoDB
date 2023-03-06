const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Connect completely!");
});

const accountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "account",
  }
);
const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;
