const { authJwt } = require("../middleware");
const user = require("../controllers/user.controller");

module.exports = function (app) {
  app.post("/api/signup", user.signup);

  app.post("/api/signin", user.signin);

  app.post("/api/jwtauth", authJwt.verifyToken, authJwt.redirectToLogin);
};
