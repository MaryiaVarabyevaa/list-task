const { Schema, model } = require('mongoose');

const Citizen = new Schema({
  name: { type: String, unique: true, required: true },
  district: { type: String, required: true },
  street: { type: String, required: true },
  city_id: { type: Number, ref: 'City' },
});

module.exports = model('Citizen', Citizen);
