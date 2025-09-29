import { useState, useEffect } from "react"
import { getproductos,getProductosPorCategoria} from "../../asycmocks"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"




const ItemListConteiner = () => {


 const[productos,setproductos]=useState ([])
 const {idcategoria}=useParams ()
 useEffect(()=>{
  
  const funcionproductos= idcategoria ? getProductosPorCategoria :getproductos;

  funcionproductos(idcategoria)

  .then( res=>setproductos(res))
  

 },[idcategoria])

  return (
    <>
    
     <h2>productos</h2>

     <ItemList productos = {productos} />
    
    
    </>
  )
}

export default ItemListConteiner