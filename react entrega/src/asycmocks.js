const misproductos = [
    { id: 1, nombre: "tartas", precio: 12000, img: "../public/imagenes/tartas.jpg",idcat:"almacen" },
     { id: 2, nombre: "alfajorcitos", precio: 12000, img: "../public/imagenes/alfajorcitos de maizena.jpg",idcat:"almacen" },
      { id: 3, nombre: "bolitas", precio: 12000, img: "../public/imagenes/bolitas.jpg",idcat:"almacen" },
       { id: 4, nombre: "facturas", precio: 12000, img: "../public/imagenes/facturas.jpg",idcat:"almacen" },
        { id: 5, nombre: "galletas", precio: 12000, img: "../public/imagenes/galletas.jpg",idcat:"almacen" },
         { id: 6, nombre: "galletitas", precio: 12000, img: "../public/imagenes/galletitas.jpg" ,idcat:"almacen"},
          { id: 7, nombre: "hojaldre", precio: 12000, img: "../public/imagenes/hojaldre.jpg" ,idcat:"almacen"},
          

];



export const getproductos = () =>{
    return new Promise((resolve)=>{
        setTimeout (()=>{
            resolve (misproductos)
        },100)
    })


}

export const getunproducto =(id)=>{
    return new promise (resolve=>{
     setTimeout(()=>{
        const producto = misproductos.find(item=>item.id===id)
        resolve(producto)

     },100)
     

    })

}




export const productosporcategoria =(idcategoria)=>{
 return new promise (resolve=>{
    setTimeout(()=>{
  const productoscategoria =misproductos.filter(item=>item.idcat===idcategoria)
  resolve(productoscategoria)


    },100)

 })




}