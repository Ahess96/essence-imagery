const Package = require('../../models/package');
const Order = require('../../models/order');

module.exports = {
    index,
    // show,
    addToOrder
}

async function index(req, res) {
    const packages = await Package.find({}).exec();
    res.json(packages);
}

// async function show(req, res) {
//     const package = await Package.findById(req.params.id);
//     res.json(package);
// }

async function addToOrder(req, res) {
    try{
        const userID = req.user._id;
        console.log('USER IN CTRL', userID)
        const package = await Package.findById(req.params._id);
        (console.log('SPECIFIC PACKAGE IN CTR', package))
        if(!package) {
            return res.status(400).json({message: 'Package not found'})
        }
        const order = new Order({
            package: package,
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