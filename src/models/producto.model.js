const mongoose = require('mongoose')
const {schima} = mongoose

const productoSchema = new mongoose.Schema({
    nombre : String,
    cantidad : Float32Array,
    descripcion : String,
    color : String,
    precioUnitario : Float32Array,
})

module.exports = mongoose.model('producto', productoSchema)