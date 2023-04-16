const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const packageSchema = require('./package')

const orderSchema = new Schema({
    package: [packageSchema],
    examplePic: {type: String},
    user: Schema.Types.ObjectId,
    date: {type: Date, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
