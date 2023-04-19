const Order = require('../../models/order');


module.exports = {
    create,
    getAll,
    deleteO
}

async function getAll(req, res) {
    const orders = await Order.find({user: req.user._id}).populate('package').exec();
    // console.log('THIS IS CTRL', orders);
    res.json(orders);
}

async function deleteO(req, res) {
    console.log(req.params)
    await Order.findByIdAndDelete(req.body._id);
    console.log('DELETE', req.body._id)
}

// async function packInOrder(req, res) {
//     const packs = await Package.find({package: req.body}).exec();
//     console.log('THIS IS PACKS in CTRL', packs);
//     res.json(packs);
// }

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