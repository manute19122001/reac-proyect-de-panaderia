import "./Item.css";
import { Link, } from "react-router-dom";
const Item = ({id,nombre,precio,img}) => {
  return (
    <div className= "cardproducto">
   
       <img src={img} alt={nombre}  />
        <h3> nombre:{nombre} </h3>
        <h3>id:{id}</h3>
       <p>precio:{precio}</p>
      <Link to={`/item/${id}`}> <button>detalles</button></Link>
    </div>
  )
}

export default Item



