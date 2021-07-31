const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Calorie = new Schema({
    username: { type: String, required: true },
    weight: { type: Number, required: true },
    body_fat: { type: Number, required: true },
    activity_levels: { type: Number, required: true },
    TDEE: { type: Number, required: true },
    BMR: { type: Number, required: true },
}, { timestamps: true }, )

module.exports = mongoose.model('Calorie', Calorie)