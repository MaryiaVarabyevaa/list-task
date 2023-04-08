const citizenService = require('../services/citizenService');

class CitizenController {
  async getAllCitizens(req, res) {
    try {
      const citizens = await citizenService.getAllUsers();
      res.send(citizens);
    } catch (err) {
      console.log(err);
      res.status(200).json({ message: 'Invalid request' });
    }
  }
}

module.exports = new CitizenController();
