const bcrypt = require("bcryptjs");
const sql = require("./db.js");
const auth = require("../config/auth.config.js");
const jwt = require("jsonwebtoken");

const User = function (user) {
  this.username = user.username;
  this.password = user.password;
};

User.signin = (newUser, result) => {
  sql.query(
    "SELECT * FROM apiuser WHERE apiuser_username = ? ",
    [newUser.username],
    (err, res) => {
      if (err) {
       
        result(err, null);
        return;
      }

      if (
        res.length &&
        bcrypt.compareSync(newUser.password, res[0].apiuser_password)
      ) {
       
        const token = jwt.sign({ user_id: res[0].apiuser_id }, auth.secret, {
          expiresIn: 60 * 100,
        });

        result(null, { token: token, success: true });
      } else {
        result(null, { success: false });
      }
    }
  );
};

User.signup = (newUser, result) => {
 
  sql.query(
    "SELECT * FROM apiuser WHERE apiuser_username = ?",
    [newUser.username],
    (err, res) => {
      if (err) {
    
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, { success: false });
      } else {
        sql.query(
          "INSERT INTO apiuser (apiuser_username,apiuser_password) VALUES (?,?)",
          [newUser.username, bcrypt.hashSync(newUser.password, 8)],
          (err, res2) => {
            if (err) {
              console.log(err);
              result(err, null);
              return;
            } else {
              const token = jwt.sign({ user_id: res2.insertId }, auth.secret, {
                expiresIn: 60 * 60,
              });

              result(null, { token: token, success: true });
            }
          }
        );
      }
    }
  );
};

module.exports = User;
