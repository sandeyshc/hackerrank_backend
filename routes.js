const express = require('express')
const CalorieCtrl = require('./Calorie-ctrl')

const router = express.Router()

router.post('/calculate', CalorieCtrl.createData)
router.post('/getdata', CalorieCtrl.getData)



module.exports = router