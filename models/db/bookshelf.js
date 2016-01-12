/**
 * Created by newmac on 1/12/16.
 */
var connectionString = process.env.PG_CONNECTION_STRING ||
        'postgres://localhost:5432/showtell';

var knex = require('knex')({
    client: 'pg',
    connection: connectionString,
    searchPath: 'knex, public'
});

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;
