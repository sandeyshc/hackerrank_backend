const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./db')
const Router = require('./routes')
const apiPort = process.env.PORT || 3005

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.post('/api/calculate', (req, res) => {
//     try {
//         console.log("entered",req.body,req.body.weight)
//         const weight = req.body.weight;
//         const body_fat = req.body.body_fat/100;
//         const activity_levels = req.body.activity_levels;
//         const BMR=21.6*(weight-(body_fat*weight))+370
//         const TDEE=BMR*activity_levels
//         console.log(BMR,TDEE)
//         res.status(200).json({ TDEE:TDEE,BMR:BMR});
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ err: 'Something went wrong' });
//     }
// });

app.use('/api', Router)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))