const sql = require("./db.ts");


module.exports = {
  create: (newProperty: any, result: any) => {
    sql.query(
      "INSERT INTO property (property_leaseprice,property_unitnumber,property_streetnumber,property_status) VALUES (?,?,?,0)",
      [newProperty.price, newProperty.unit_number, newProperty.street_number],
      (err, res) => {
        if (err) {
          result(err, null);
          return;
        }

        result(null, { id: res.insertId, ...newProperty });
      }
    );
  },

  findById: (propertyId: any, result: any) => {
    sql.query(
      `SELECT * FROM property WHERE property_id = ${propertyId}`,
      (err, res) => {
        if (err) {
          result(err, null);
          return;
        }

        if (res.length) {
          result(null, res[0]);
          return;
        }

        // not found Property the id
        result({ kind: "not_found" }, null);
      }
    );

  },

  getAll: (result: any) => {
    sql.query("SELECT * FROM property LIMIT 100", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      result(null, res);

    });
  },

  updateById: (id: any, property: any, result: any) => {
    sql.query(
      "UPDATE property SET property_leaseprice = ?, property_unitnumber = ?, property_streetnumber = ? WHERE property_id = ?",
      [property.price, property.unit_number, property.street_number, id],
      (err, res) => {
        if (err) {
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found Property with the id
          result({ kind: "not_found" }, null);
          return;
        }

        result(null, { id: id, ...property });
      }
    );
  },

  remove: (id: any, result: any) => {
    sql.query("DELETE FROM property WHERE property_id = ?", id, (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Property with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, res);
    });
  },

  removeAll: (result: any) => {
    sql.query("DELETE FROM property", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      result(null, res);
    });
  },

  getAllSearch: (id, result) => {

    let theQuery = "SELECT property_id,property_streetnumber,street_name,property_unitnumber,property_leaseprice FROM property" +
      " LEFT JOIN street on property_streetid = street_id WHERE 1=1 ";

    if (id) theQuery += " AND property_id LIKE ?"
    theQuery += " LIMIT 100";

    sql.query(theQuery, ['%' + id + '%'], (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);

        return;
      }

      result(null, res);

    });
  }

}