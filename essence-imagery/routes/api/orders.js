const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')

router.get('/', ordersCtrl.getAll);
router.post('/users/:id', ordersCtrl.deleteO);
router.post('/:id', ordersCtrl.create);

module.exports = router;