const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.MONGO

const conection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('conexion correcta');
})

mongoose.connection.on('error', () => {
    console.log('error en la conexion');
})

module.exports = conection;