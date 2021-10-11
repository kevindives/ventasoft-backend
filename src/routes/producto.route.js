const {Router} = require('express')
const router = Router()
const ProductoCtrl =require('../controllers/producto.controllers')

router.post('/crear', ProductoCtrl.crearProducto)

module.exports = router
