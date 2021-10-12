const {Router} = require('express')
const router= Router()
const VentasCtrl=require('../controllers/ventas.controllers')


// rutas get
router.get('/verventas', VentasCtrl.verVentas )
router.get('/verventas/:ventaId', VentasCtrl.ventaById)
// router.get('/verventas/:clienteId', VentasCtrl.ventaByIdCliente)
// router.get('/verventas/:nombre', VentasCtrl.ventaByCliente)
//rutas post
router.post('/crearventa', VentasCtrl.crearVenta)

//rutas put
router.put('/modificar/:ventaId',VentasCtrl.modificarVenta)

//rutas delete
router.delete('/borrar/:ventaId',VentasCtrl.eliminarVenta)


module.exports=router