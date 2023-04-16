const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    description: {type: String},
    gallery: {type: [String]},
    price: {type: Number},
    name: {type: String}
})

module.exports = mongoose.model('Package', packageSchema)