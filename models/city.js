const sql = require("./dbContext.js");

//constructor 
const city = function(city){
    this.Name = city.Name;
    this.CountryCode = city.CountryCode;
    this.District = city.District;
    this.Population = city.Population;
};

city.create = (newcity, result) => {
    sql.query("INSERT INTO city SET ?", newcity, (err, res) => {
        if(err){
            console.log("error while create: ", err);
            result(err, null);
            return;
        }
        console.log("create success: ", {id: res.insertId, ...newcity});
        result(null, {id: res.insertId, ...newcity});
    });
};

city.getById = (cityId, result) => {
    sql.query(`SELECT * FROM city WHERE id=${cityId}`, (err, res) => {
        if(err){
            console.log("error while find by id: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found city: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found city with the id
        result({ kind: "not_found" }, null);
    });
};

city.getAll = (limit, result) => {
    sql.query("call filterCity(?)", limit, (err, res) => {
      if (err) {
        console.log("error while get All ", err);
        result(null, err);
        return;
      }

      console.log("city: ", res);
      result(null, res);
    });
    // sql.query("SELECT * FROM city", (err, res) => {
    //   if (err) {
    //     console.log("error while get All ", err);
    //     result(null, err);
    //     return;
    //   }
  
    //   console.log("city: ", res);
    //   result(null, res);
    // });
};

city.updateById = (id, city, result) => {
    sql.query(
      "UPDATE city SET Name = ?, CountryCode = ?, District = ?, Population = ? WHERE ID = ?",
      [city.Name, city.CountryCode, city.District, city.Population, id],
      (err, res) => {
        if (err) {
          console.log("error while update by id ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found city with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated city: ", { id: id, ...city });
        result(null, { id: id, ...city });
      }
    );
};

city.delete = (id, result) => {
    sql.query("DELETE FROM city WHERE ID = ?", id, (err, res) => {
      if (err) {
        console.log("error while delete ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found city with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted city with id: ", id);
      result(null, res);
    });
};

city.deleteAll = result => {
    sql.query("DELETE FROM city WHERE ID = 5000", (err, res) => {
        if (err) {
          console.log("error while deleteAll ", err);
          result(null, err);
          return;
        }
    
        if (res.affectedRows == 0) {
          // not found city with the id
          result({ kind: "not_found" }, null);
          return;
        }
    
        console.log("deleted city with id: 5000");
        result(null, res);
    });

    // sql.query("DELETE FROM city", (err, res) => {
    //   if (err) {
    //     console.log("error while deleteAll ", err);
    //     result(null, err);
    //     return;
    //   }
  
    //   console.log(`deleted ${res.affectedRows} cities`);
    //   result(null, res);
    // });
};

module.exports = city;