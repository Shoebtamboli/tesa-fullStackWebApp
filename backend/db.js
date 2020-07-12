const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.POSTGRES_USER || 'postgres',
	password: process.env.POSTGRES_PASSWORD || 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || 5432,
	database: 'campaign'
});

module.exports = pool;
