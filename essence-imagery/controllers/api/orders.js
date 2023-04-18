const Order = require('../../models/order');
const Package = require('../../models/package');

module.exports = {
    create,
}

async function create(req, res) {
    try{
        const userID = req.user._id;
        const packageId = await req.params.id;
        if(!packageId) {
            return res.status(400).json({message: 'Package not found'})
        }
        const order = new Order({
            package: packageId,
            user: userID,
            date: new Date()
        });
        console.log('NEW ORDER', order)
        await order.save();
        res.status(201).json({message: 'Order created'})
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'})
    }
}