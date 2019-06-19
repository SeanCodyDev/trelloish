const mongoose = require('mongoose')
const ListSchema = require('./lists').model('List').schema
const Schema = mongoose.Schema;

const BoardSchema = new Schema ({
    title: String,
    date: String,
    lists: [ListSchema]
})

module.exports = mongoose.model('Board', BoardSchema);