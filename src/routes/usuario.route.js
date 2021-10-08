const {Router} = require('express')
const router= Router()
const UsuarioCtrl=require('../controllers/usuario.controllers')

router.post('/crear',UsuarioCtrl.crearUsuario)
router.post('/login', UsuarioCtrl.login)

module.exports=router