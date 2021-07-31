const Calorie = require('./schema')

createData = (req, res) => {
        const weight = req.body.weight;
        const body_fat = req.body.body_fat/100;
        const activity_levels = req.body.activity_levels;
        const BMR=21.6*(weight-(body_fat*weight))+370
        const TDEE=BMR*activity_levels
        const body = {...req.body,TDEE:TDEE,BMR:BMR}
        console.log(BMR,TDEE,activity_levels)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Data',
        })
    }

    const cal = new Calorie(body)
    if (!cal) {
        return res.status(400).json({ success: false, error: err })
    }

    cal
        .save()
        .then(() => {
            // return res.status(201).json({
            //     success: true,
            //     id: cal._id,
            //     message: 'Data created!',
            // })
            return res.status(200).json({ TDEE:TDEE,BMR:BMR});
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Data not created!',
            })
        })
}

getData = async (req, res) => {
    await Calorie.find({}, (err, calories) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!calories.length) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: calories })
    }).catch(err => console.log(err))
}
module.exports = {
    createData,
    // updateMovie,
    // deleteMovie,
    getData,
    // getMovieById,

}