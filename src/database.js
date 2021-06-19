/**
 *
 * @since Jun 19, 2021 @t 17:18:12
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
const { Pool } = require( 'pg' );
const { DB_CONNECTION_STRING } = require( './env' );

let pool;
let close = Function.prototype;

function query( query ) {
    pool = pool ?? ( () => {
        close = () => {
            pool?.end();
            pool = null;
        };

        return new Pool( { connectionString: DB_CONNECTION_STRING } );
    } )();

    return new Promise( ( resolve, reject ) =>
        pool.query( query, ( err, res ) =>
            err ? reject( err ) : resolve( res ) ) );
}

module.exports = {
    ping: () => query( 'SELECT NOW()' ),
    close,
    query,
};
