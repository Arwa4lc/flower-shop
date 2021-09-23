require("dotenv").config();
const express = require("express");

const app = express();

require("./startup/DB");
require("./startup/routes")(app);

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
