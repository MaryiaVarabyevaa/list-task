const { Schema, model } = require('mongoose');

const City = new Schema({
    city_id: { type: Number, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    data: { type: Number, required: true }
})

module.exports = model('City', City);