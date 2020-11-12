const sql = require("./db.js");

// constructor
const Landlord = function (landlord) {
  this.first_name = landlord.first_name;
  this.last_name = landlord.last_name;
  this.company_name = landlord.company_name;
};

Landlord.create = (newLandlord, result) => {
  sql.query(
    "INSERT INTO landlord  (landlord_firstname,landlord_lastname,landlord_company) VALUES (?,?,?)",
    [newLandlord.first_name, newLandlord.last_name, newLandlord.company_name],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      // console.log("created landlord: ", { id: res.insertId, ...newLandlord });
      result(null, { id: res.insertId, ...newLandlord });
    }
  );
};

Landlord.findById = (landlordId, result) => {
  sql.query(
    `SELECT * FROM landlord WHERE landlord_id = ${landlordId}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      // not found Landlord with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Landlord.getAll = (result) => {
  sql.query("SELECT * FROM landlord LIMIT 100", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Landlord.updateById = (id, landlord, result) => {
  sql.query(
    "UPDATE landlord SET landlord_firstname = ?, landlord_lastname = ?, landlord_company = ? WHERE landlord_id = ?",
    [landlord.first_name, landlord.last_name, landlord.company_name, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Landlord with the id
        result({ kind: "not_found" }, null);
        return;
      }

      // console.log("updated property: ", { id: id, ...landlord });
      result(null, { id: id, ...landlord });
    }
  );
};

Landlord.remove = (id, result) => {
  sql.query("DELETE FROM landlord WHERE landlord_id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Property with the id
      result({ kind: "not_found" }, null);
      return;
    }

    // console.log("deleted landlord with id: ", id);
    result(null, res);
  });
};

Landlord.removeAll = (result) => {
  sql.query("DELETE FROM landlord", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    //console.log(`deleted ${res.affectedRows} property`);
    result(null, res);
  });
};

module.exports = Landlord;
