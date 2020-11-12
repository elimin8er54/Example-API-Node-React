const express = require("express");
const path = require("path");

const app = express();

const port = 3001;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("dist"));
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

require("./routes/user.routes.js")(app);
require("./routes/property.routes.js")(app);
require("./routes/landlord.routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../dist/", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
