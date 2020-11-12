const User = require('../models/users.models.js');

exports.signin = (req, res) => {
  // Validate Request
 
  if (!req.body) {
    res.status(400).send({ message: 'Could not log in' });
  }

  

  // Check database and sign in
  User.signin(new User(req.body), (err, data) => {
    
    if (err) {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    }

    res.json(data);
  });
};

exports.signup = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: 'Could not sign up' });
  }

  User.signup(new User(req.body), (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    } else {
      res.json(data);
    }
  });
};
