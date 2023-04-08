const Router = require('express');
const router = new Router();
const cityRouter = require('./cityRouter');
const citizenRouter = require('./citizenRouter');

router.use('/city', cityRouter)
router.use('/citizen', citizenRouter)

module.exports = router;