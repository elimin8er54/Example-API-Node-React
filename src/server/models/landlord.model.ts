const sql = require("./db.ts");
export { };


module.exports = {

  create: (newLandlord: any, result: any) => {
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
  },

  findById: (landlordId: any, result: any) => {
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
  },

  getAll: (result: any) => {
    sql.query("SELECT * FROM landlord LIMIT 100", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      result(null, res);
    });
  },

  updateById: (id: any, landlord: any, result: any) => {
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
  },

  remove: (id: any, result: any) => {
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
  },

  removeAll: (result: any) => {
    sql.query("DELETE FROM landlord", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      //console.log(`deleted ${res.affectedRows} property`);
      result(null, res);
    });
  }

}
