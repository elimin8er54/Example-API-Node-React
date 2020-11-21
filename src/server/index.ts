import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();

const port = 3001;
process.env.PUBLIC_URL = 'http://localhost';
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("dist"));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.append("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

require("./routes/user.routes")(app);
require("./routes/property.routes")(app);
require("./routes/landlord.routes")(app);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "../../../../dist/", "index.html"));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

