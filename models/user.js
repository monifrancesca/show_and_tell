/**
 * Created by newmac on 1/12/16.
 */
var Bookshelf = require('./db/bookshelf');

var User = Bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = User;
