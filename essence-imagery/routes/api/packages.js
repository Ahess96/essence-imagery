const express = require('express');
const router = express.Router();
const packagesCtrl = require('../../controllers/api/packages');

// GET /api/packages
router.get('/', packagesCtrl.index);
// router.get('/:id', packagesCtrl.show);
router.post('/:id', packagesCtrl.addToOrder);


module.exports = router;