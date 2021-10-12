const {Router} = require('express')
const router= Router()
const UsuarioCtrl=require('../controllers/usuario.controllers')
//rutas get
router.get('/verusuarios',UsuarioCtrl.verUsuarios)
router.get('/vervendedores',UsuarioCtrl.verVendedores)

//rutas post
router.post('/crear',UsuarioCtrl.crearUsuario)
router.post('/login', UsuarioCtrl.login)

//rutas put
router.put('/modificar/:usuarioId',UsuarioCtrl.modificar)

//rutas delete
router.delete('/borrar/:usuarioId',UsuarioCtrl.borrar)

module.exports=router