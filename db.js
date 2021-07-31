const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://sandy:Bakkodu9595%40@tdee.kqpgk.mongodb.net/TDEE?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(resp => {
        console.log("MongoDB connected")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
// .connect('mongodb+srv://Videos:Bakkodu9595%40@myfirstapp.ufoav.mongodb.net/Myfirstapp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
 