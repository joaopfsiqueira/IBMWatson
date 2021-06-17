require('dotenv/config');
const config = 
{
    database: {
        host: process.env.BD_ENV_HOST,
        port: process.env.BD_ENV_PORT,
        user: process.env.BD_ENV_USER,
        password: process.env.BD_ENV_PASS,
        database: process.env.BD_ENV_DB
    }
}

module.exports = config;