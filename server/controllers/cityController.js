
class CityController {
    async getAllCities(req, res) {
        try {
            res.send('/city');
        } catch (err) {

        }
    }
}

module.exports = new CityController();