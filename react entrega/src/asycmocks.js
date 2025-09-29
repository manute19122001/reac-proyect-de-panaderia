const misProductos = [
    { id: 1, nombre: "tartas", precio: 12000, img: "../public/imagenes/tartas.jpg",idcat:"almacen" },
     { id: 2, nombre: "alfajorcitos", precio: 12000, img: "../public/imagenes/alfajorcitos de maizena.jpg",idcat:"almacen" },
      { id: 3, nombre: "bolitas", precio: 12000, img: "../public/imagenes/bolitas.jpg",idcat:"almacen" },
       { id: 4, nombre: "facturas", precio: 12000, img: "../public/imagenes/facturas.jpg",idcat:"almacen" },
        { id: 5, nombre: "galletas", precio: 12000, img: "../public/imagenes/galletas.jpg",idcat:"almacen" },
         { id: 6, nombre: "galletitas", precio: 12000, img: "../public/imagenes/galletitas.jpg" ,idcat:"almacen"},
          { id: 7, nombre: "hojaldre", precio: 12000, img: "../public/imagenes/hojaldre.jpg" ,idcat:"almacen"},
           { id: 1, nombre: "tortas", precio: 12000, img: "../public/tortas/1.jpg",idcat:"tortas" },
     { id: 2, nombre: "tortas", precio: 12000, img: "../public/tortas/2.jpg",idcat:"tortas" },
      { id: 3, nombre: "tortas", precio: 12000, img: "../public/tortas/3.jpg",idcat:"tortas" },
       { id: 4, nombre: "tortas", precio: 12000, img: "../public/tortas/4.jpg",idcat:"tortas" },
        { id: 5, nombre: "tortas", precio: 12000, img: "../public/tortas/5.jpg",idcat:"tortas" },
         { id: 6, nombre: "tortas", precio: 12000, img: "../public/tortas/6.jpg" ,idcat:"tortas"},
          { id: 7, nombre: "tortas", precio: 12000, img: "../public/tortas/7.jpg" ,idcat:"tortas"},

];



export const getproductos = () =>{
    return new Promise((resolve)=>{
        setTimeout (()=>{
            resolve (misProductos)
        },100)
    })


}

export const getUnProducto =(id)=>{
    return new Promise (resolve=>{
     setTimeout(()=>{
        const producto = misProductos.find (item=> item.id ===id)
        resolve(producto)

     },100)
     

    })

}



export const getProductosPorCategoria =(idcategoria)=>{
return new Promise (resolve=>{
setTimeout(()=>{
const productoscategoria =misproductos.filter(item=>item.idCat===idcategoria)
resolve(productoscategoria)


},100)

})
}

