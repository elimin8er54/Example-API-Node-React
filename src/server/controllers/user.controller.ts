const user = require('../models/users.models');
import { Request, Response } from "express"
exports.signin = (req: Request, res: Response): void => {
  // Validate Request

  if (!req.body) {
    res.status(400).send({ message: 'Could not log in' });
  }

  // Check database and sign in
  user.signin(req.body, (err, data) => {

    if (err) {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    }

    res.json(data);
  });
};


exports.signup = (req: Request, res: Response) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: 'Could not sign up' });
  }

  user.signup(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    } else {
      res.json(data);
    }
  });
};
