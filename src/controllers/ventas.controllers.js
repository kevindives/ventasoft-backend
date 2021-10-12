const VentasCtrl = {}
const Venta = require ('../models/ventas.models')

// controladores get
VentasCtrl.verVentas = async(req,res)=>{
    const verVentas =await Venta.find({})

    res.json({verVentas})
}

VentasCtrl.ventaById = async(req,res)=>{
    const ventaId = req.params.ventaId

    Venta.findById(ventaId,(err, venta)=>{
        if (err) return res.json({message: 'Error al realizar la peticion' + err})
        if (!venta) return res.json({message:'La venta no existe'})

        res.json({venta})
    })
}

// VentasCtrl.ventaByIdCliente = async(req,res)=>{
//     const clienteId = req.params.clienteId

//     Venta.findById(clienteId,(err, venta)=>{
//         if (err) return res.json({message: 'Error al realizar la peticion' + err})
//         if (!venta) return res.json({message:'la venta no existe'})

//         res.json({venta})
//     })
// }
// VentasCtrl.ventaByCliente = async(req,res)=>{
//     const nombre = req.params.nombre
//     nombre = String(nombre)
//     const verUsuario =await Usuario.find({"nombreCliente":nombre})

//     res.json({verUsuario})
// }

//controladores post 
VentasCtrl.crearVenta = async(req,res)=>{
    const {fecha,clienteId,nombreCliente,cantidad} =req.body
    const nuevaVenta = new Venta ({
        fecha, clienteId, nombreCliente, cantidad
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