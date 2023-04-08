const Citizen = require('../models/Citizen');

class CitizenService {
    async getAllUsers() {
        const citizens = await Citizen.find();
        return citizens;

    }
}

module.exports = new CitizenService();