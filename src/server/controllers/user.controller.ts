const User = require('../models/users.models.ts');

exports.signin = (req: any, res: any) => {
  // Validate Request

  if (!req.body) {
    res.status(400).send({ message: 'Could not log in' });
  }



  // Check database and sign in
  User.signin(req.body, (err, data) => {

    if (err) {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    }

    res.json(data);
  });
};


exports.signup = (req: any, res: any) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: 'Could not sign up' });
  }

  User.signup(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    } else {
      res.json(data);
    }
  });
};
