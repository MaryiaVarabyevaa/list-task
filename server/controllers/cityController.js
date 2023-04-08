
class CityController {
    async getAllCities(req, res) {
        try {
            res.send('/city');
        } catch (err) {
            console.log(err);
            res.status(200).json({message: "Invalid request"})
        }
    }
}

module.exports = new CityController();