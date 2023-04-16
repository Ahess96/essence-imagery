const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    package: [Schema.Types.ObjectId],
    examplePic: {type: String},
    user: Schema.Types.ObjectId,
    date: {type: Date, required: true}
}, {
    timestamps: true
})

const packageSchema = new Schema({
    description: {type: String},
    gallery: {type: [String]},
    price: {type: Number}
})

module.exports = mongoose.model('Order', orderSchema)