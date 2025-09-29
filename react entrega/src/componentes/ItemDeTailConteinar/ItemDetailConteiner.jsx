import { getUnProducto , } from "../Asycmocks"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"





const ItemDetailConteiner = () => {

 const[producto,setproductos]=useState (null)
  
 useEffect (()=>{
 getUnProducto ()
  .then(respuesta => setproductos(respuesta))


 },[])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailConteiner

