const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    description: {type: String},
    price: {type: Number},
    name: {type: String},
    gallery: {type: [String]}
}, {
    timestamps: true
});

module.exports = mongoose.model('Package', packageSchema)