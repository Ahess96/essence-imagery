const Package = require('../../models/package');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const packages = await Package.find({}).exec();
    res.json(packages);
}

async function show(req, res) {
    const package = await Package.findById(req.params.id);
    res.json(package);
}