const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CardSchema = require('./cards').model('Card').schema


const ListSchema = new Schema ({
    title: String,
    date: String,
    cards: [CardSchema]
})

module.exports = mongoose.model('List', ListSchema);