/**
 *
 * @since Jun 19, 2021 @t 18:04:12
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
const { close } = require( './database' );

let resolve, handled = false;
const promise = new Promise( res => resolve = res );

function doShutdown( server ) {
    process.on( 'SIGTERM', shutdown );

    return promise;

    function shutdown() {
        if ( handled ) return;

        handled = true;
        server.close();
        close();
        resolve();
    }
}

module.exports = {
    doShutdown,
};
