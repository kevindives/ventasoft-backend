const mongoose =require('mongoose')
const {Schema} = mongoose

const UsuarioSchema = Schema({
    nombre:String,
    correo:String,
    contrasena:String,
    rol:{type: String, enum:['administrador','vendedor']},
    estado: {type: String, enum:['activo','inactivo']}
})

module.exports=mongoose.model('usuario',UsuarioSchema)