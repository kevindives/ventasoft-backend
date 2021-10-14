const {Router} = require('express')
const router= Router()
const UsuarioCtrl=require('../controllers/usuario.controllers')
const Auth = require('../helper/auth')
//RUTAS GET
//ruta para ver todos los usuarios
router.get('/verusuarios',Auth.verificartoken,UsuarioCtrl.verUsuarios)
//ruta para ver todos los vendedores
router.get('/vervendedores',Auth.verificartoken,UsuarioCtrl.verVendedores)
//ruta para buscar por id
router.get('/vervendedores/:vendedorId',Auth.verificartoken,UsuarioCtrl.buscarById)
//ruta para buscar por nombre
router.get('/buscar/:nombres',Auth.verificartoken,UsuarioCtrl.buscarByName)


//rutas post
router.post('/crear',UsuarioCtrl.crearUsuario)
router.post('/login', UsuarioCtrl.login)

//rutas put
router.put('/modificar/:usuarioId',UsuarioCtrl.modificar)

//rutas delete
router.delete('/borrar/:usuarioId',UsuarioCtrl.borrar)

module.exports=router