const express = require("express");
const bodyParser = require("body-parser");
const requireDir = require("require-dir");
const routes = require("./routes");

const app = express();
app.use(routes);

app.listen(3000);
