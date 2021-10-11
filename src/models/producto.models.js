const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductoSchema = Schema({
    nombre : String,
    cantidad : Float32Array,
    descripcion : String,
    color : String,
    precioUnitario : Float32Array,
})

module.exports = mongoose.model('producto', ProductoSchema)