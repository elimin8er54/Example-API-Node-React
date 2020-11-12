const sql = require("./db.js");

// constructor
const Property = function (property) {
  this.street_number = property.street_number;
  this.unit_number = property.unit_number;
  this.price = property.price;
};

Property.create = (newProperty, result) => {
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
};

Property.findById = (propertyId, result) => {
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

};

Property.getAll = (result) => {
  sql.query("SELECT * FROM property LIMIT 100", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);

  });
};

Property.updateById = (id, property, result) => {
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
};

Property.remove = (id, result) => {
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
};

Property.removeAll = (result) => {
  sql.query("DELETE FROM property", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Property.getAllSearch = (id, result) => {

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
};

module.exports = Property;