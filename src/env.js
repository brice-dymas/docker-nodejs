/**
 *
 * @since Jun 19, 2021 @t 16:49:20
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
const PORT = process.env.PORT ?? 3000;
const DB_PORT = process.env.DB_PORT ?? 5432;
const DB_HOST = process.env.DB_HOST ?? 'localhost';
const DB_DATABASE = process.env.DB_DATABASE ?? 'database';
const DB_PASSWORD = process.env.DB_PASSWORD ?? 'password';
const DB_USERNAME = process.env.DB_USERNAME ?? 'username';
const DB_CONNECTION_STRING = `postgresql://${ DB_USERNAME }:${ DB_PASSWORD }@${ DB_HOST }:${ DB_PORT }/${ DB_DATABASE }`;

module.exports = {
    PORT,

    DB_PORT,
    DB_HOST,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_CONNECTION_STRING,
};
