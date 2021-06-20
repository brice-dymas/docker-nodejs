/**
 *
 * @since Jun 19, 2021 @t 16:43:39
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
const { doShutdown } = require( './shutdown' );
// const { ping, query } = require( './database' );
// const { migration } = require( './migration' );
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const { PORT } = require( './env' );


const app = express();

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

app.use( async ( req, res ) => {
    const content = {
        method: req.method,
        query: req.query,
        body: req.body,
        url: req.url,
    };

    const jsonContent = JSON.stringify( {
        method: req.method,
        query: req.query,
        body: req.body,
        url: req.url,
    } );

    // await query( `INSERT INTO wizards (content)
    //               VALUES ('${ jsonContent }')` );

    return res.json( content );
} );

( async () => {
    // await ping();
    // await migration();
    const server = app.listen( PORT, () =>
        console.log( `Application started on ::${ PORT }` ) );

    await doShutdown( server );

} )().catch( console.error );
