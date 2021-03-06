/**
 * Created by Ranran on 2017/6/8.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    email: String,
    firstName: String,
    lastName: String,
    facebook: {
        id:    String,
        token: String
    },
    _websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "webdev_assignment.users"});
module.exports = userSchema;