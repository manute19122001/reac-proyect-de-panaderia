

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div>
      <h2>nombre:{nombre}</h2>
       <h3>precio:{precio}</h3>
        <h3>id:{id}</h3>  
        <img src={img} alt={nombre} />
   
    </div>
  )
}

export default ItemDetail
