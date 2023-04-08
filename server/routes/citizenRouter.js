const Router = require('express');

const router = new Router();
const citizenController = require('../controllers/citizenController');
// const bodyParser = require('body-parser');
const a = 3;
router.get('/', citizenController.getAllCitizens);

module.exports = router;
