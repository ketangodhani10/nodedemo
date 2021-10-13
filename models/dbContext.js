const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    port: dbConfig.PORT,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
    insecureAuth: true
});

//open MySql connection
connection.connect(error => {
    if(error) throw error;
    console.log("Connection success");
});

// connection.destroy(error => {
//     if(error) throw error;
//     console.log("Connection destroy");
// });

module.exports = connection;