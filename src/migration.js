/**
 *
 * @since Jun 19, 2021 @t 17:45:24
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
const { query } = require( './database' );

async function migration() {
    // noinspection SqlDialectInspection,SqlNoDataSourceInspection
    await query( `CREATE TABLE IF NOT EXISTS wizards
                  (
                      content JSONB
                  )` );
}

module.exports = {
    migration,
};
