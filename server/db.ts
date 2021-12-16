require('dotenv').config();
const Pool = require("pg").Pool;

const pool1 = new Pool(
    {
        user: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        host: "localhost",
        port: process.env.POSTGRES_PORT,
        database: process.env.DATABASE,
    }
);
module.exports = pool1;
