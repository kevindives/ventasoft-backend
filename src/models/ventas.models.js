const mongoose =require('mongoose')
const {Schema} = mongoose

const VentaSchema = Schema({
    fecha:String,  
    clienteId:String,
    nombreCliente:String,
    cantidad:{type: Number , default:1}
})

module.exports=mongoose.model('venta',VentaSchema)