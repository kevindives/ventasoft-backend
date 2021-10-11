const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductoSchema = Schema({
    nombre : String,
    cantidad : String,
    descripcion : String,
    color : String,
    precioUnitario : String,
})

module.exports = mongoose.model('producto', ProductoSchema)