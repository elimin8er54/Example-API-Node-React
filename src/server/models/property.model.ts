const sql = require("./db");
import {MysqlError,OkPacket} from 'mysql';

interface Props {
  price:string;
  unit_number:string;
  street_number:string;
  id?:string;

}

interface Pass {
  //The callback
  ( error: Error | null |  {kind:string}, 
    result: {} | null  ) : void;

}

interface OkPacketExtra extends OkPacket {
  length:number;

}

module.exports = {
  create: <Property extends Props, Result extends Pass>(newProperty: Property, result: Result) => {
    sql.query(
      "INSERT INTO property (property_leaseprice,property_unitnumber,property_streetnumber,property_status) VALUES (?,?,?,0)",
      [newProperty.price, newProperty.unit_number, newProperty.street_number],
      (err: MysqlError, res: OkPacket) => {
        if (err) {
          result(err, null);
          return;
        }

        result(null, { id: res.insertId, ...newProperty });
      }
    );
  },

  findById: <Property extends Props, Result extends Pass>(propertyId: Property, result: Result) => {
    sql.query(
      `SELECT * FROM property WHERE property_id = ${propertyId} LIMIT 1`,
      (err: MysqlError, res: OkPacketExtra) => {
        if (err) {
          result(err, null);
          return;
        }

        if (res.length) {
          result(null, res);
          return;
        }

        // not found Property the id
        result({ kind: "not_found" }, null);
      }
    );

  },

  getAll: <Result extends Pass>(result: Result) => {
    sql.query("SELECT * FROM property LIMIT 100", (err: MysqlError, res: OkPacket) => {
      if (err) {
        result(null, err);
        return;
      }

      result(null, res);

    });
  },

  updateById: <Property extends Props, Result extends Pass>(id: Property,property: Property, result: Result) => {
    sql.query(
      "UPDATE property SET property_leaseprice = ?, property_unitnumber = ?, property_streetnumber = ? WHERE property_id = ?",
      [property.price, property.unit_number, property.street_number, id],
      (err: MysqlError, res:OkPacket) => {
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

  remove: <Property extends Props, Result extends Pass>(id: Property, result: Result) => {
    sql.query("DELETE FROM property WHERE property_id = ?", id, (err: MysqlError, res: { affectedRows: number; }) => {
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

  removeAll:  <Result extends Pass>(result: Result) => {
    sql.query("DELETE FROM property", (err: MysqlError, res: OkPacket) => {
      if (err) {
        result(null, err);
        return;
      }
      result(null, res);
    });
  },

  getAllSearch: <Property extends Props, Result extends Pass> (id: Property, result: Result) => {

    let theQuery = "SELECT property_id,property_streetnumber,street_name,property_unitnumber,property_leaseprice FROM property" +
      " LEFT JOIN street on property_streetid = street_id WHERE 1=1 ";

    if (id) theQuery += " AND property_id LIKE ?"
    theQuery += " LIMIT 100";

    sql.query(theQuery, ['%' + id + '%'], (err: MysqlError, res: OkPacket) => {
      if (err) {
        console.log(err);
        result(err, null);

        return;
      }

      result(null, res);

    });
  }

}
