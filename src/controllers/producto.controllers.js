const ProductoCtrl ={}
const Producto =require('../models/producto.models')
const jwt =require('jsonwebtoken')

ProductoCtrl.crearProducto=async(req, res)=>{
    const {nombre,cantidad,descripcion,color,precioUnitario}=res.body
    const NuevoProducto=new producto({
        nombre,cantidad,descripcion,color,precioUnitario
    })
    const nombreProducto = await Producto.findOne({nombre:nombre})
    if(nombreProducto){
        res.json({
            mensaje:'El producto ya existe'
        })
    }else{
        const token=jwt.sign({_id:NuevoProducto._id}, 'inventario')
        await NuevoProducto.save()
        res.json({
            mensaje: 'Nuevo producto agregado al inventario',
            id:NuevoProducto._id,
            nombre:NuevoProducto.nombre,
            token
        })
    }
}

module.export = productoCtrl