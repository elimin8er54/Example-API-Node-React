const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];
  let token;
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    token = bearer[1];

    req.token = token;
  } else {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    } else {
    

      next();
    }
  });
};

//Dummy function for redirecting if token is invalid 
redirectToLogin = (req,res) => {
  res.json({success:true});
}

const authJwt = {
  verifyToken,
  redirectToLogin
};
module.exports = authJwt;
