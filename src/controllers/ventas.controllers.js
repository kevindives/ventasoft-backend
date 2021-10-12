const VentasCtrl = {}
const Venta = require ('../models/ventas.models')

// controladores get
//lista todas las ventas
VentasCtrl.verVentas = async(req,res)=>{
    const verVentas =await Venta.find({})

    res.json({verVentas})
}
//busca una venta por Id de la venta
VentasCtrl.ventaById = async(req,res)=>{
    const ventaId = req.params.ventaId

    Venta.findById(ventaId,(err, venta)=>{
        if (err) return res.json({message: 'Error al realizar la peticion' + err})
        if (!venta) return res.json({message:'La venta no existe'})

        res.json({venta})
    })
}
//busca una venta por Id del cliente
VentasCtrl.ventaByIdCliente = async(req,res)=>{
    const clienteId = req.params.clienteId
    const verVenta = await Venta.findOne({clienteId:{$regex:".*"+clienteId+".*"}})
    
    res.json(verVenta)
}
//busca una venta por nombre del cliente
VentasCtrl.ventaByCliente = async(req,res)=>{
    const nombres = req.params.nombre
    const verVenta =await Venta.findOne({nombreCliente:{$regex:".*"+nombres+".*"}})

    res.json(verVenta)
}

//controladores post 
VentasCtrl.crearVenta = async(req,res)=>{
    const {fecha,clienteId,nombreCliente,vendedorId,nombreVendedor,codigoProducto,cantidad,precioUni,totalPago} =req.body
    const nuevaVenta = new Venta ({
        fecha, clienteId, nombreCliente,vendedorId,nombreVendedor,codigoProducto, cantidad,precioUni,totalPago
    })
    await nuevaVenta.save()
    res.json({
        mensaje:'venta creada con exito'
    })
}

//controladores put
VentasCtrl.modificarVenta = async (req,res)=>{
    const ventaId = req.params.ventaId
    const update = req.body

    Venta.findByIdAndUpdate(ventaId,update,(ventaUpdated)=>{

        res.json({
            Usuario: ventaUpdated,
            mensaje: 'La venta ha sido modificado'
        })   
    })
}

//controladores delete
VentasCtrl.eliminarVenta =async(req, res)=>{
    const ventaId = req.params.ventaId

    Venta.findById(ventaId, (err, venta)=>{
        if (err) res.json({message: 'Error al borrar la venta'+ err})

        venta.remove(err=>{
            if (err) res.json({message: 'Error al borrar la venta'+ err})
            res.json({message: 'La venta ha sido eliminado'})
        })
    })
}

module.exports=VentasCtrl