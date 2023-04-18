const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')

router.post('/:id', ordersCtrl.create);

module.exports = router;