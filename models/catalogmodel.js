const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const catalogSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    anio: {
        type: 'string',
        required: true
    },
    dimension: {
        type: 'string',
        required: true
    },
    foto: {
        type: 'string',
        required: true
    },
    serie: {
        type: 'string',
        required: true
    },
    tecnica: {
        type: 'string',
        required: true
    },
    precio: {
        type: 'number',
        required: true
    }
})

const Catalog = mongoose.model('catalog', catalogSchema)

module.exports = Catalog;