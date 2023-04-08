
class CitizenController {
    async getAllCitizens(req, res) {
        try {
            res.send('hello');
        } catch (err) {

        }
    }
}

module.exports = new CitizenController();