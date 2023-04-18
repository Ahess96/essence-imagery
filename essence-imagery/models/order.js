const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const orderSchema = new Schema({
    package: {
        type: Schema.Types.ObjectId,
        ref: 'Package'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {type: Date, required: true}
}, {
    timestamps: true
})

// orderSchema.statics.getOrder = function(userId) {
//     return this.findOneAndUpdate(
//         {user: userId},
//         {user: userId},
//         {upsert: true, new: true}
//     )
// }

// orderSchema.methods.addToOrder = async function(itemId) {
//     const order = this;
//     const package = order.package.find(pack => pack._id.equals(itemId));
//     if(package) return;
//     else {
//         const pack = await mongoose.model('Package').findById(itemId);
//         order.package.push({pack})
//     }
//     return order.save();
// }

module.exports = mongoose.model('Order', orderSchema)
