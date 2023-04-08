const Router = require('express');

const router = new Router();
const cityController = require('../controllers/cityController');
// const bodyParser = require('body-parser');

router.get('/', cityController.getAllCities);

module.exports = router;
