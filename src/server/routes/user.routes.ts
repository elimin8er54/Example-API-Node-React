const { authJwt } = require("../middleware");
const user = require("../controllers/user.controller");
import Express from 'express';
export { };
module.exports = function (app: Express.Application) {
  app.post("/api/signup", user.signup);

  app.post("/api/signin", user.signin);

  app.post("/api/jwtauth", authJwt.verifyToken, authJwt.redirectToLogin);
};

