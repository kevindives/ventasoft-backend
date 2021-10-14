const {Router} = require('express')
const router = Router()
const ProductoCtrl =require('../controllers/producto.controllers')

router.post('/crear', ProductoCtrl.crearProducto)
router.get('/listarProducto', ProductoCtrl.listar)
router.delete('/eliminar/:id', ProductoCtrl.eliminar)
router.put('/actualizar/:id',ProductoCtrl.actualizar)


module.exports = router
