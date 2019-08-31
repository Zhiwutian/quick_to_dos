const mysql = require("mysql2");
const config = require("../config/db_config");

const pool = mysql.createPool(config);

module.exports = pool.promise();
