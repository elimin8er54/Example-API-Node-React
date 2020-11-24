const sql = require("./db");
export { };

interface Props {
  first_name:string;
  last_name:string;
  company_name:string;
  id?:string;

}

interface Pass {
  //The callback
  ( error: Error | null |  {kind:string}, 
    result: {} | null  ) : void;

}


module.exports = {

  create: <Landlord extends Props,Result extends Pass>(newLandlord: Landlord, result: Result):void =>  {
    sql.query(
      "INSERT INTO landlord  (landlord_firstname,landlord_lastname,landlord_company) VALUES (?,?,?)",
      [newLandlord.first_name, newLandlord.last_name, newLandlord.company_name],
      (err: any, res: { insertId: any; }) => {
        if (err) {
          result(err, null);
          return;
        }

        // console.log("created landlord: ", { id: res.insertId, ...newLandlord });
        result(null, { id: res.insertId, ...newLandlord });
      }
    );
  },

  findById: <Landlord extends Props,Result extends Pass>(landlordId: Landlord, result: Result) => {
    sql.query(
      `SELECT * FROM landlord WHERE landlord_id = ${landlordId}`,
      (err: any, res: string | any[]) => {
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

  getAll:<Result extends Pass>(result: Result):void=> {
    sql.query("SELECT * FROM landlord LIMIT 100", (err: any, res: any) => {
      if (err) {
        result(null, err);
        return;
      }
      result(null, res);
    });
  },

  updateById:<Landlord extends Props, Result extends Pass> (id: Landlord,landlord: Landlord, result: Result):void => {
    sql.query(
      "UPDATE landlord SET landlord_firstname = ?, landlord_lastname = ?, landlord_company = ? WHERE landlord_id = ?",
      [landlord.first_name, landlord.last_name, landlord.company_name, id],
      (err: any, res: { affectedRows: number; }) => {
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

  remove:<Landlord extends Props, Result extends Pass> (id: Landlord, result: Result):void => {
    sql.query("DELETE FROM landlord WHERE landlord_id = ?", id, (err: any, res: { affectedRows: number; }) => {
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

  removeAll: <Result extends Pass>(result: Result):void=> {
    sql.query("DELETE FROM landlord", (err: any, res: any) => {
      if (err) {
        result(null, err);
        return;
      }

      //console.log(`deleted ${res.affectedRows} property`);
      result(null, res);
    });
  }

}

