const ProductoCtrl ={}
const Producto =require('../models/producto.models')
const jwt =require('jsonwebtoken')

ProductoCtrl.crearProducto=async(req, res)=>{
    const {nombre,cantidad,descripcion,color,precio}=res.body
    const NuevoProducto=new Producto({
        nombre,cantidad,descripcion,color,precio
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

ProductoCtrl.listar =async(seq, res)=>{
    const respuesta=await Producto.find()
    res.json(respuesta)
}


ProductoCtrl.eliminar=async(req, res)=>{
    const id=req.params.id
    await Producto.findByIdAndRemove({_id: id })
    res.json({
        mensaje: "producto eliminado"
    })
}

ProductoCtrl.actualizr=async(req, res)=>{
    const id =req.params.id
    await Producto.findByIdAndUpdate({_id:id},res.body)
    res.json({
        mensaje: "producto actualizado"
    })
}



module.export = ProductoCtrl