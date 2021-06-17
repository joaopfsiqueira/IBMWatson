const config = require('./config.js');
const mysql = require('mysql2/promise');
require('dotenv/config');
initialize()

async function initialize() {
    // create db if it doesn't already exist
    const {host, port, username: user, password, database} = config
    const connection = await mysql.createConnection({host, port, user, password});
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
}