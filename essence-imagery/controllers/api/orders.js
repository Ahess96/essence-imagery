const Order = require('../../models/order');


module.exports = {
    create,
    getAll,
    deleteO,
    update
}

async function getAll(req, res) {
    const orders = await Order.find({user: req.user._id}).populate('package').exec();
    res.json(orders);
}

async function deleteO(req, res) {
    await Order.findByIdAndDelete(req.body._id);
    res.status(200).json('File deleted.');
}

async function update(req, res) {
    await Order.findByIdAndUpdate(req.body._id, {date: req.body.date}); 
    res.status(200).json('File update.');
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
        await order.save();
        res.status(201).json({message: 'Order created'})
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'})
    }
}