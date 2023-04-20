const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')

router.get('/', ordersCtrl.getAll);
router.delete('/users/:id', ordersCtrl.deleteO);
router.put('/users/:id/date', ordersCtrl.update);
router.post('/:id', ordersCtrl.create);

module.exports = router;