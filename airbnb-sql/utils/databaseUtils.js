import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "airbnb",
  // port: 3306,
  password: "root",
});

export default pool;
