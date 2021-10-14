const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductoSchema = Schema({
    id: String,
    nombre : String,
    cantidad : String,
    descripcion : String,
    color : String,
    precio : String,
})

module.exports = mongoose.model('producto', ProductoSchema)