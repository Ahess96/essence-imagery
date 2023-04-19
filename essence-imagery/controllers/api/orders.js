const Order = require('../../models/order');


module.exports = {
    create,
    getAll
}

async function getAll(req, res) {
    const orders = await Order.find({user: req.user._id}).exec();
    console.log('THIS IS CTRL', orders);
    res.json(orders);
}

async function create(req, res) {
    try{
        const userID = req.user._id;
        const packageId = await req.params.id;
        const date = await req.body.date;
        if(!packageId) {
            return res.status(400).json({message: 'Package not found'})
        }
        const order = new Order({
            package: packageId,
            user: userID,
            date: date
        });
        console.log('NEW ORDER', order)
        await order.save();
        res.status(201).json({message: 'Order created'})
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'})
    }
}