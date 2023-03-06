const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
//------------------------------------
// BODY-PARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//--------------

app.use("/", router);
//-------------LISTEN PORT------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
