const { Router } = require('express');

const router = Router();

router.use('/health', require('./health'));

// Register additional route modules here:
// router.use('/users',    require('./users'));
// router.use('/products', require('./products'));

module.exports = router;
