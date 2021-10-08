const UsuarioCtrl={}
const Usuario=require('../models/usuarios.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


UsuarioCtrl.crearUsuario=async(req,res)=>{
    const{nombre,correo,contrasena,rol,estado}=req.body
    const NuevoUsuario = new Usuario({
        nombre,correo, contrasena,rol,estado
    })
    const correoUsuario= await Usuario.findOne({correo:correo})
    if (correoUsuario){
        res.json({
            mensaje:'el correo ya existe'
        })
    }else{
        NuevoUsuario.contrasena= await bcrypt.hash(contrasena,10)
        const token=jwt.sign({_id:NuevoUsuario._id},'secreta')
        await NuevoUsuario.save()
        res.json({
            mensaje:'Bienvenido',
            id:NuevoUsuario._id,
            nombre:NuevoUsuario.nombre,
            token
        })
    }
}

UsuarioCtrl.login= async(req,res)=>{
    const{correo,contrasena}=req.body
    const Usuario = await Usuario.findOne({correo:correo})
    if(!Usuario){
        return res.json({
            mensaje:'correo incorrecto'
        })
    }
    const match = await bcrypt.compare(contrasena,Usuario.contrasena)
    if (match){
        const token = jwt.sign({_id:Usuario._id},'secreta')
        res.json({
            mensaje:'Bienvenido',
            id: Usuario._id,
            nombre:Usuario.nombre,
            token
        })
    }else{
        res.json({
            mensaje: 'contraseña incorrecta'
        })
    }
}

module.exports=UsuarioCtrl