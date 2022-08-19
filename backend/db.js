const Pool = require("pg").Pool;
require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// const pool = new Pool({
//   user: process.env.POSTGRES_USER || "postgres",
//   password: process.env.POSTGRES_PASSWORD || "postgres",
//   host: process.env.DB_HOST || "localhost",
//   port: process.env.DB_PORT || 5432,
//   database: process.env.PG_DATABASE || "campaign",
// });

module.exports = pool;
