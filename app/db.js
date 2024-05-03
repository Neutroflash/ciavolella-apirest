const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "34.29.62.6",
    database: "postgres",
    password: "1234",
    port: 5432
})

module.exports = pool