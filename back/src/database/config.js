require('dotenv/config');

module.exports = {
        host: process.env.BD_ENV_HOST,
        port: process.env.BD_ENV_PORT,
        username: process.env.BD_ENV_USER,
        password: process.env.BD_ENV_PASSWORD,
        database: process.env.BD_ENV_DB,
        dialect: 'mysql',
}

