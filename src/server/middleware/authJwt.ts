import jwt from "jsonwebtoken";
const config = require("../config/auth.config");
import { Response, Request, NextFunction } from 'express';


const verifyToken = (req: Request, res: Response, next: NextFunction): any => {
  const header = req.headers["authorization"];
  let token;
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    token = bearer[1];


  } else {
    return res.status(403).send({
      message: "No token provided!",
    });
  }


  jwt.verify(token, config.secret, (err: Error, decoded: jwt) => {
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
const redirectToLogin = (req, res) => {
  res.json({ success: true });
}

const authJwt = {
  verifyToken,
  redirectToLogin
};
module.exports = authJwt;
