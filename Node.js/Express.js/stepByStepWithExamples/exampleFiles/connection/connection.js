let { Pool } = require("pg");
let credentials = new Pool({
  user: "postgres",
  password: "Seamus@14",
  host: "localhost",
  port: 5432,
  database: "postgres",
  ssl: false
});

module.exports = credentials;
