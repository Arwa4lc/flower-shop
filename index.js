require("dotenv").config();
const express = require("express");

const app = express();

require("./startup/DB");

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
